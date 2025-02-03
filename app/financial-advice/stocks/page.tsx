"use client";
import Link from 'next/link';
import Image from 'next/image';
import Layout from '../../components/layout';
import { useLanguage } from '../../i18n/LanguageContext';

export default function StocksPage() {
  const { t } = useLanguage();
  const sections = [
    {
      title: t('getStarted'),
      content: t('aboutText'),
      icon: '/education.svg'
    },
    {
      title: t('marketAnalysis'),
      content: t('aboutText'),
      icon: '/analysis.svg'
    },
    {
      title: t('tradingTools'),
      content: t('aboutText'),
      icon: '/risk.svg'
    }
  ];

  const strategies = [
    {
      title: 'Value Investing',
      description: 'Focus on undervalued stocks with strong fundamentals',
      points: [
        'Analyze Price-to-Earnings (P/E) ratios',
        'Study company balance sheets',
        'Look for competitive advantages',
        'Consider dividend history'
      ]
    },
    {
      title: 'Growth Investing',
      description: 'Target companies with high growth potential',
      points: [
        'Evaluate revenue growth rates',
        'Assess market opportunities',
        'Monitor industry trends',
        'Consider management quality'
      ]
    },
    {
      title: 'Dividend Investing',
      description: 'Build a portfolio of dividend-paying stocks',
      points: [
        'Check dividend yield',
        'Review payout ratios',
        'Analyze dividend growth',
        'Consider company stability'
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
              {t('stockMarketGuide')}
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
          <h2 className="text-2xl font-semibold mb-4">{t('stocks')}</h2>
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

        {/* Key Concepts */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {sections.map((section) => (
            <div key={section.title} className="bg-white rounded-lg shadow-lg p-6">
              <div className="w-12 h-12 mb-4">
                <Image
                  src={section.icon}
                  alt={section.title}
                  width={48}
                  height={48}
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">{section.title}</h3>
              <p className="text-gray-600">{section.content}</p>
            </div>
          ))}
        </div>

        {/* Investment Strategies */}
        <div className="bg-gray-50 rounded-xl p-8">
          <h2 className="text-3xl font-bold text-center mb-12">{t('tradingTools')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {strategies.map((strategy) => (
              <div key={strategy.title} className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-semibold mb-3">{strategy.title}</h3>
                <p className="text-gray-600 mb-4">{strategy.description}</p>
                <ul className="space-y-2">
                  {strategy.points.map((point) => (
                    <li key={point} className="flex items-center text-gray-600">
                      <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Pro Tips */}
        <div className="mt-12 bg-blue-50 rounded-lg p-8">
          <h2 className="text-2xl font-semibold mb-6">{t('marketAnalysis')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ul className="list-disc list-inside text-gray-600 space-y-3">
              <li>Start with a solid understanding of market fundamentals</li>
              <li>Invest in companies you understand</li>
              <li>Keep a long-term perspective</li>
              <li>Regularly review and rebalance your portfolio</li>
            </ul>
            <ul className="list-disc list-inside text-gray-600 space-y-3">
              <li>Stay informed about market news and company developments</li>
              <li>Don't try to time the market</li>
              <li>Reinvest dividends for compound growth</li>
              <li>Consider tax implications of your investments</li>
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  );
}
