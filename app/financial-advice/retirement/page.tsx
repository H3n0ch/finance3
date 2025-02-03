"use client";

import Image from 'next/image';
import Layout from '../../components/layout';
import { useLanguage } from '../../i18n/LanguageContext';

export default function RetirementPage() {
  const { t } = useLanguage();
  const sections = [
    {
      title: 'Retirement Planning',
      content: 'Start planning early to ensure a comfortable retirement. Consider your lifestyle goals, expected expenses, and potential income sources.',
      icon: '/education.svg',
      features: [
        'Set retirement goals',
        'Calculate needed savings',
        'Understand timelines',
        'Plan income streams'
      ]
    },
    {
      title: 'Investment Strategy',
      content: 'Build a diversified portfolio that balances growth potential with risk management as you approach retirement.',
      icon: '/investment.svg',
      features: [
        'Asset allocation',
        'Risk management',
        'Regular rebalancing',
        'Tax efficiency'
      ]
    },
    {
      title: 'Social Security',
      content: 'Understand how Social Security benefits work and how to maximize your benefits through careful planning.',
      icon: '/security.svg',
      features: [
        'Benefit calculation',
        'Claiming strategies',
        'Spousal benefits',
        'Tax considerations'
      ]
    }
  ];

  const strategies = [
    {
      title: '401(k) & IRA Planning',
      description: 'Maximize retirement account contributions and benefits',
      points: [
        'Employer matching',
        'Contribution limits',
        'Investment options',
        'Required distributions'
      ]
    },
    {
      title: 'Income Planning',
      description: 'Create reliable income streams for retirement',
      points: [
        'Pension options',
        'Annuity strategies',
        'Withdrawal rates',
        'Tax-efficient withdrawals'
      ]
    },
    {
      title: 'Estate Planning',
      description: 'Ensure your assets are protected and distributed according to your wishes',
      points: [
        'Beneficiary designations',
        'Trust considerations',
        'Tax planning',
        'Legacy goals'
      ]
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <div className="relative">
        <div className="absolute inset-0">
          <Image
            src="/images/retirement-hero.svg"
            alt="Retirement Planning"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-indigo-900/80"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center text-white">
            <h1 className="text-4xl font-bold mb-6">
              Retirement Planning Guide
            </h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Plan for a secure and comfortable retirement with our comprehensive guide to retirement planning and investment strategies.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
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
              <p className="text-gray-600 mb-4">{section.content}</p>
              <ul className="space-y-2">
                {section.features.map((feature) => (
                  <li key={feature} className="flex items-center text-gray-600">
                    <svg className="w-4 h-4 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Strategies */}
        <div className="bg-gray-50 rounded-xl p-8 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <Image
              src="/images/trading-pattern.svg"
              alt="Trading Analysis"
              fill
              className="object-cover"
            />
          </div>
          <h2 className="text-3xl font-bold text-center mb-12 relative">Retirement Strategies</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
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

        {/* Additional Resources */}
        <div className="mt-12 bg-blue-50 rounded-lg p-8">
          <h2 className="text-2xl font-semibold mb-6">Additional Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ul className="list-disc list-inside text-gray-600 space-y-3">
              <li>Retirement calculators and tools</li>
              <li>Social Security benefit estimators</li>
              <li>Healthcare cost planning</li>
              <li>Long-term care insurance guides</li>
            </ul>
            <ul className="list-disc list-inside text-gray-600 space-y-3">
              <li>Estate planning resources</li>
              <li>Tax planning strategies</li>
              <li>Required Minimum Distribution calculators</li>
              <li>Medicare enrollment guides</li>
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  );
}
