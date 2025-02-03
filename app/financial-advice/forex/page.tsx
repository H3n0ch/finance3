"use client";

import Link from 'next/link';
import Image from 'next/image';
import Layout from '../../components/layout';
import { useLanguage } from '../../i18n/LanguageContext';

export default function ForexPage() {
  const { t } = useLanguage();
  const keyPoints = [
    {
      title: 'Currency Pairs',
      content: 'Understanding major, minor, and exotic currency pairs is crucial for forex trading. Each pair has unique characteristics and trading patterns.',
      icon: '/currency.svg'
    },
    {
      title: 'Market Hours',
      content: 'The forex market operates 24 hours a day, five days a week, with different sessions (Asian, European, and American) offering varying opportunities.',
      icon: '/clock.svg'
    },
    {
      title: 'Technical Tools',
      content: 'Utilize charts, indicators, and analysis tools to identify trends and potential entry/exit points in the market.',
      icon: '/tools.svg'
    }
  ];

  const tradingStyles = [
    {
      title: 'Day Trading',
      description: 'Open and close positions within a single day',
      characteristics: [
        'Multiple trades per day',
        'Short-term price movements',
        'Quick decision making',
        'Requires active monitoring'
      ]
    },
    {
      title: 'Swing Trading',
      description: 'Hold positions for several days to weeks',
      characteristics: [
        'Fewer trades, higher potential profit per trade',
        'Focus on medium-term trends',
        'More time for analysis',
        'Less time-intensive monitoring'
      ]
    },
    {
      title: 'Position Trading',
      description: 'Long-term trading approach',
      characteristics: [
        'Hold positions for weeks to months',
        'Focus on fundamental factors',
        'Lower trading frequency',
        'Requires patience and discipline'
      ]
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              {t('forexTrading')}
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              {t('aboutText')}
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Introduction */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-semibold mb-4">{t('forex')}</h2>
          <p className="text-gray-600 mb-6">
            {t('aboutText')}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-blue-50 rounded-lg p-4">
              <h3 className="font-semibold mb-2">{t('marketAnalysis')}</h3>
              <p className="text-sm text-gray-600">{t('aboutText')}</p>
            </div>
            <div className="bg-green-50 rounded-lg p-4">
              <h3 className="font-semibold mb-2">{t('tradingTools')}</h3>
              <p className="text-sm text-gray-600">{t('aboutText')}</p>
            </div>
            <div className="bg-purple-50 rounded-lg p-4">
              <h3 className="font-semibold mb-2">{t('resources')}</h3>
              <p className="text-sm text-gray-600">{t('aboutText')}</p>
            </div>
          </div>
        </div>

        {/* Key Points */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {keyPoints.map((point) => (
            <div key={point.title} className="bg-white rounded-lg shadow-lg p-6">
              <div className="w-12 h-12 mb-4">
                <Image
                  src={point.icon}
                  alt={point.title}
                  width={48}
                  height={48}
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">{point.title}</h3>
              <p className="text-gray-600">{point.content}</p>
            </div>
          ))}
        </div>

        {/* Trading Styles */}
        <div className="bg-gray-50 rounded-xl p-8">
          <h2 className="text-3xl font-bold text-center mb-12">{t('tradingTools')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {tradingStyles.map((style) => (
              <div key={style.title} className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-semibold mb-3">{style.title}</h3>
                <p className="text-gray-600 mb-4">{style.description}</p>
                <ul className="space-y-2">
                  {style.characteristics.map((characteristic) => (
                    <li key={characteristic} className="flex items-center text-gray-600">
                      <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      {characteristic}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Risk Management */}
        <div className="mt-12 bg-blue-50 rounded-lg p-8">
          <h2 className="text-2xl font-semibold mb-6">{t('marketAnalysis')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ul className="list-disc list-inside text-gray-600 space-y-3">
              <li>Use stop-loss orders to limit potential losses</li>
              <li>Never risk more than 1-2% of your account on a single trade</li>
              <li>Understand leverage and its risks</li>
              <li>Keep detailed trading records and analyze performance</li>
            </ul>
            <ul className="list-disc list-inside text-gray-600 space-y-3">
              <li>Practice proper position sizing</li>
              <li>Develop and stick to a trading plan</li>
              <li>Monitor economic calendars for major events</li>
              <li>Always use a demo account before trading real money</li>
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  );
}
