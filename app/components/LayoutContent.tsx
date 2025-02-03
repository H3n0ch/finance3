'use client';

import Link from 'next/link';
import { useLanguage } from '../i18n/LanguageContext';
import LanguageSelector from './LanguageSelector';

export default function LayoutContent({ children }: { children: React.ReactNode }) {
  const { t } = useLanguage();
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white shadow-lg">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link href="/" className="text-xl font-bold">
                FinanceGuide
              </Link>
              <div className="hidden md:block ml-10">
                <div className="flex items-center space-x-4">
                  <Link href="/financial-advice/stocks" className="hover:bg-blue-700 px-3 py-2 rounded-md">
                    {t('stocks')}
                  </Link>
                  <Link href="/financial-advice/forex" className="hover:bg-blue-700 px-3 py-2 rounded-md">
                    {t('forex')}
                  </Link>
                  <Link href="/financial-advice/commodities" className="hover:bg-blue-700 px-3 py-2 rounded-md">
                    {t('commodities')}
                  </Link>
                  <Link href="/financial-advice/crypto" className="hover:bg-blue-700 px-3 py-2 rounded-md">
                    {t('crypto')}
                  </Link>
                  <Link href="/financial-advice/retirement" className="hover:bg-blue-700 px-3 py-2 rounded-md">
                    Retirement
                  </Link>
                  <Link href="/financial-advice/planning" className="hover:bg-blue-700 px-3 py-2 rounded-md">
                    Planning
                  </Link>
                </div>
              </div>
            </div>
            <div className="flex items-center">
              <LanguageSelector />
              <button className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-md ml-4">
                {t('getStarted')}
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Main content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">{t('aboutUs')}</h3>
              <p className="text-gray-400">
                {t('aboutText')}
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">{t('quickLinks')}</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/financial-advice/stocks" className="text-gray-400 hover:text-white">
                    {t('stockMarketGuide')}
                  </Link>
                </li>
                <li>
                  <Link href="/financial-advice/forex" className="text-gray-400 hover:text-white">
                    {t('forexTrading')}
                  </Link>
                </li>
                <li>
                  <Link href="/financial-advice/commodities" className="text-gray-400 hover:text-white">
                    {t('commoditiesMarket')}
                  </Link>
                </li>
                <li>
                  <Link href="/financial-advice/crypto" className="text-gray-400 hover:text-white">
                    {t('cryptocurrency')}
                  </Link>
                </li>
                <li>
                  <Link href="/financial-advice/retirement" className="text-gray-400 hover:text-white">
                    Retirement Planning
                  </Link>
                </li>
                <li>
                  <Link href="/financial-advice/planning" className="text-gray-400 hover:text-white">
                    Financial Planning
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">{t('resources')}</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">{t('marketNews')}</a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">{t('learningCenter')}</a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">{t('marketAnalysis')}</a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">{t('tradingTools')}</a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">{t('contact')}</h3>
              <ul className="space-y-2">
                <li className="text-gray-400">Email: info@financeguide.com</li>
                <li className="text-gray-400">Phone: (555) 123-4567</li>
                <li className="text-gray-400">Address: 123 Finance Street</li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>&copy; 2025 FinanceGuide. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
