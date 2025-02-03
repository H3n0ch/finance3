"use client";

import { useState } from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import Image from 'next/image';

const languages = [
  { code: 'en', name: 'English', flag: '/flags/en.svg' },
  { code: 'de', name: 'Deutsch', flag: '/flags/de.svg' },
  { code: 'fr', name: 'Français', flag: '/flags/fr.svg' },
  { code: 'nl', name: 'Nederlands', flag: '/flags/nl.svg' },
];

export default function LanguageSelector() {
  const [isOpen, setIsOpen] = useState(false);
  const { language, setLanguage } = useLanguage();

  const currentLanguage = languages.find(lang => lang.code === language);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 bg-blue-500 hover:bg-blue-600 px-3 py-2 rounded-md"
      >
        <Image
          src={currentLanguage?.flag || '/flags/en.svg'}
          alt={currentLanguage?.name || 'English'}
          width={20}
          height={15}
          className="rounded-sm"
        />
        <span className="hidden md:inline">{currentLanguage?.name}</span>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 py-2 w-48 bg-white rounded-md shadow-lg z-50">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => {
                setLanguage(lang.code as 'en' | 'de' | 'fr' | 'nl');
                setIsOpen(false);
              }}
              className="flex items-center space-x-2 w-full px-4 py-2 text-left hover:bg-gray-100"
            >
              <Image
                src={lang.flag}
                alt={lang.name}
                width={20}
                height={15}
                className="rounded-sm"
              />
              <span>{lang.name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
