'use client'

import { useState } from 'react'
import { useTranslation } from '@/hooks/useTranslation'
import { locales, localeNames, Locale } from '@/lib/i18n'
import { FiGlobe, FiChevronDown } from 'react-icons/fi'

export default function LanguageSwitcher() {
  const { locale, changeLocale } = useTranslation()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors text-gray-700"
      >
        <FiGlobe className="text-lg" />
        <span className="text-sm font-medium">{localeNames[locale]}</span>
        <FiChevronDown className={`text-sm transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-10"
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute top-full right-0 mt-2 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-20 min-w-[150px]">
            {locales.map((loc) => (
              <button
                key={loc}
                onClick={() => {
                  changeLocale(loc)
                  setIsOpen(false)
                }}
                className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-50 transition-colors ${
                  locale === loc ? 'bg-green-50 text-[#16a34a] font-medium' : 'text-gray-700'
                }`}
              >
                {localeNames[loc]}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  )
}

