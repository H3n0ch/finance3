"use client";
import Link from 'next/link';
import Image from 'next/image';
import Layout from './components/layout';
import { useLanguage } from './i18n/LanguageContext';
import Testimonials from './components/Testimonials';
import FeaturedArticles from './components/FeaturedArticles';
import ExpertAdvisors from './components/ExpertAdvisors';

export default function FinancialAdvice() {
  const { t } = useLanguage();
  const topics = [
    {
      title: t('stocks'),
      description: t('stockMarketGuide'),
      image: '/stock-market.svg',
      link: '/financial-advice/stocks',
      features: [t('marketAnalysis'), t('tradingTools'), t('resources')]
    },
    {
      title: t('forex'),
      description: t('forexTrading'),
      image: '/forex.svg',
      link: '/financial-advice/forex',
      features: [t('marketAnalysis'), t('tradingTools'), t('resources')]
    },
    {
      title: t('commodities'),
      description: t('commoditiesMarket'),
      image: '/commodities.svg',
      link: '/financial-advice/commodities',
      features: [t('marketAnalysis'), t('tradingTools'), t('resources')]
    },
    {
      title: t('crypto'),
      description: t('cryptocurrency'),
      image: '/crypto.svg',
      link: '/financial-advice/crypto',
      features: [t('marketAnalysis'), t('tradingTools'), t('resources')]
    },
    {
      title: 'Retirement',
      description: 'Plan for a secure and comfortable retirement',
      image: '/images/retirement-hero.svg',
      link: '/financial-advice/retirement',
      features: ['Goal Setting', 'Investment Strategy', 'Estate Planning']
    },
    {
      title: 'Planning',
      description: 'Create a solid financial foundation',
      image: '/images/planning-hero.svg',
      link: '/financial-advice/planning',
      features: ['Budgeting', 'Debt Management', 'Risk Management']
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <div className="relative">
        <div className="absolute inset-0">
          <Image
            src="/images/main-hero.svg"
            alt="Financial Markets Overview"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-indigo-900/80"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-6">
              {t('learningCenter')}
            </h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              {t('aboutText')}
            </p>
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors">
              {t('getStarted')}
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Topics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {topics.map((topic) => (
            <Link 
              href={topic.link} 
              key={topic.title}
              className="transform transition duration-500 hover:scale-105"
            >
              <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
                <div className="p-6">
                  <div className="w-16 h-16 mx-auto mb-4">
                    <Image
                      src={topic.image}
                      alt={topic.title}
                      width={64}
                      height={64}
                      className="text-blue-600"
                    />
                  </div>
                  <h2 className="text-2xl font-semibold text-center text-gray-900 mb-3">
                    {topic.title}
                  </h2>
                  <p className="text-gray-600 text-center mb-4">
                    {topic.description}
                  </p>
                  <div className="space-y-2">
                    {topic.features.map((feature) => (
                      <div key={feature} className="flex items-center text-gray-500">
                        <svg className="w-4 h-4 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Expert Advisors Section */}
        <ExpertAdvisors />

        {/* Featured Articles Section */}
        <FeaturedArticles />

        {/* Testimonials Section */}
        <Testimonials />

        {/* Why Choose Us Section */}
        <div className="mt-20 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-12">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Why Choose FinanceGuide
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Expert Analysis</h3>
              <p className="text-gray-600">
                Get insights from our team of experienced financial analysts and market experts.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Comprehensive Tools</h3>
              <p className="text-gray-600">
                Access a wide range of financial tools and calculators to support your investment decisions.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Real-Time Updates</h3>
              <p className="text-gray-600">
                Stay informed with real-time market data and breaking financial news.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
