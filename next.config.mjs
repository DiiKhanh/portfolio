/** @type {import('next').NextConfig} */

import withNextIntl from 'next-intl/plugin';

const nextIntlConfig = withNextIntl();

const nextConfig = {
  experimental: {
    serverActions: true
  }
};

export default nextIntlConfig(nextConfig);
