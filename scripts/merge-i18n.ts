import { existsSync, mkdirSync, readdirSync, readFileSync, statSync, writeFileSync } from 'fs';
import { join } from 'path';

class ScriptError extends Error {
  constructor(message: unknown) {
    super(`\x1b[31m❌ [Error Processing i18n]: ${message}\x1b[0m`);
    this.name = this.constructor.name;
    Error.captureStackTrace(this, this.constructor);
  }
}

// eslint-disable-next-line no-console
console.time('\x1b[32m[i18n Processing]:\x1b[0m Finished processing i18n in');

const locales = ['en', 'es'] as const;

const messages: Record<string, Record<string, unknown>> = locales.reduce(
  (acc: Record<string, Record<string, unknown>>, locale: string) => {
    acc[locale] = {};
    return acc;
  },
  {}
);

locales.forEach((locale: string) => {
  const dirPath = `./src/messages`;
  const filePath = join(dirPath, `${locale}.json`);

  if (!existsSync(dirPath)) {
    mkdirSync(dirPath, { recursive: true });
  }

  if (!existsSync(filePath)) {
    writeFileSync(filePath, JSON.stringify(messages[locale] ?? {}), { flag: 'wx' });
  }
});

const processDirectory = (directory: string): void => {
  readdirSync(directory).forEach((file: string) => {
    const absolute = join(directory, file);
    if (statSync(absolute).isDirectory()) {
      if (file === 'i18n') {
        locales.forEach((locale: string) => {
          const filePath = join(absolute, `${locale}.json`);
          if (existsSync(filePath)) {
            const content = JSON.parse(readFileSync(filePath, 'utf8')) as Record<string, unknown>;
            const keys = Object.keys(content);

            if (keys.length !== 1) {
              throw new ScriptError(
                `Expected one top-level key in ${filePath}, but found ${keys.length}`
              );
            }

            const key = keys[0];
            if (key === undefined) {
              throw new ScriptError(`No key found in ${filePath}`);
            }

            const value = content[key];
            if (value === undefined) {
              throw new ScriptError(`No value found for key ${key} in ${filePath}`);
            }

            const messagesAtLocale = messages[locale];
            if (messagesAtLocale === undefined) {
              throw new ScriptError(`No messages found for locale ${locale}`);
            }

            if (messagesAtLocale[key] !== undefined) {
              throw new ScriptError(`Duplicate key ${key} found in ${filePath}`);
            }

            messagesAtLocale[key] = value;
          }
        });
      } else {
        processDirectory(absolute);
      }
    }
  });
};

processDirectory('./src');

locales.forEach((locale: string) => {
  if (messages[locale] !== undefined) {
    writeFileSync(`./src/messages/${locale}.json`, JSON.stringify(messages[locale]));
    // eslint-disable-next-line no-console
    console.log(`\x1b[32m[i18n Processing]:\x1b[0m Successfully processed locale - ${locale}`);
  }
});

// eslint-disable-next-line no-console
console.timeEnd('\x1b[32m[i18n Processing]:\x1b[0m Finished processing i18n in');