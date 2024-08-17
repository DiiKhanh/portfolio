'use client';

import { useLocale } from 'next-intl';
import { useRouter } from 'next/navigation';
import { CiFlag1 } from 'react-icons/ci';
import React, { useState, useRef, useEffect } from 'react';

const LanguageSwitch: React.FC = () => {
  const locale = useLocale();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  function handleLocaleChange(newLocale: string): void {
    document.cookie = `NEXT_LOCALE=${newLocale}; path=/; max-age=31536000; SameSite=Lax`;
    router.refresh();
    setIsOpen(false);
  }

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropdownRef]);

  return (
    <div className="fixed bottom-0 left-0 mb-4 ml-4" ref={dropdownRef}>
      <button
        type="button"
        className="bg-white w-[3rem] h-[3rem] bg-opacity-80 backdrop-blur-[0.5rem] border border-white border-opacity-40 shadow-2xl rounded-full flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all dark:bg-gray-950"
        aria-label="Select Language"
        onClick={() => setIsOpen(!isOpen)}
      >
        <CiFlag1 className="w-5 h-5" />
      </button>

      {isOpen && (
        <div className="absolute left-0 bottom-12 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div className="py-1">
            <span className="block px-4 py-2 text-sm text-gray-700">Language</span>
            <div className="border-t border-gray-100"></div>
            <button
              className={`w-full text-left px-4 py-2 text-sm ${
                locale === 'en' ? 'bg-gray-100' : 'hover:bg-gray-200'
              }`}
              onClick={() => handleLocaleChange('en')}
            >
              English
            </button>
            <button
              className={`w-full text-left px-4 py-2 text-sm ${
                locale === 'vi' ? 'bg-gray-100' : 'hover:bg-gray-200'
              }`}
              onClick={() => handleLocaleChange('vi')}
            >
              Vietnam
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default LanguageSwitch;
