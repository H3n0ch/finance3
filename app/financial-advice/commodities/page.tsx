"use client";

import Image from 'next/image';
import Layout from '../../components/layout';

export default function CommoditiesPage() {
  const commodityTypes = [
    {
      title: 'Precious Metals',
      examples: 'Gold, Silver, Platinum',
      description: 'Traditional safe-haven assets that often perform well during economic uncertainty.',
      icon: '/metals.svg',
      features: [
        'Hedge against inflation',
        'Store of value',
        'Industrial applications',
        'Portfolio diversification'
      ]
    },
    {
      title: 'Energy',
      examples: 'Oil, Natural Gas, Coal',
      description: 'Essential resources driving global industrial activity and transportation.',
      icon: '/energy.svg',
      features: [
        'High market liquidity',
        'Geopolitical influence',
        'Seasonal patterns',
        'Supply-demand dynamics'
      ]
    },
    {
      title: 'Agricultural',
      examples: 'Wheat, Corn, Soybeans',
      description: 'Food and fiber commodities affected by weather, population growth, and dietary trends.',
      icon: '/agriculture.svg',
      features: [
        'Weather dependency',
        'Population growth impact',
        'Seasonal cycles',
        'Global demand trends'
      ]
    }
  ];

  const investmentMethods = [
    {
      title: 'Futures Contracts',
      description: 'Direct commodity trading through standardized contracts',
      points: [
        'High leverage potential',
        'Requires significant capital',
        'Physical delivery possible',
        'Complex trading mechanics'
      ]
    },
    {
      title: 'ETFs & ETNs',
      description: 'Exchange-traded funds and notes tracking commodity prices',
      points: [
        'Easy market access',
        'Lower capital requirement',
        'High liquidity',
        'No physical delivery'
      ]
    },
    {
      title: 'Stocks',
      description: 'Investing in commodity-focused companies',
      points: [
        'Indirect exposure',
        'Company-specific risks',
        'Dividend potential',
        'Easier to understand'
      ]
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <div className="relative">
        <div className="absolute inset-0">
          <Image
            src="/images/commodities-hero.svg"
            alt="Commodities Trading"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-indigo-900/80"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center text-white">
            <h1 className="text-4xl font-bold mb-6">
              Commodity Trading Guide
            </h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Discover how to invest in physical commodities and understand the factors that drive their prices.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Introduction */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-semibold mb-4">Introduction to Commodities</h2>
          <p className="text-gray-600 mb-6">
            Commodity trading involves buying and selling raw materials that are used to create products. These markets are influenced by global supply and demand, weather conditions, geopolitical events, and economic factors.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-yellow-50 rounded-lg p-4">
              <h3 className="font-semibold mb-2">Price Discovery</h3>
              <p className="text-sm text-gray-600">Global markets determine fair prices through trading</p>
            </div>
            <div className="bg-green-50 rounded-lg p-4">
              <h3 className="font-semibold mb-2">Risk Management</h3>
              <p className="text-sm text-gray-600">Hedging tools for producers and consumers</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-4">
              <h3 className="font-semibold mb-2">Investment Vehicle</h3>
              <p className="text-sm text-gray-600">Alternative asset class for portfolio diversification</p>
            </div>
          </div>
        </div>

        {/* Commodity Types */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {commodityTypes.map((type) => (
            <div key={type.title} className="bg-white rounded-lg shadow-lg p-6">
              <div className="w-12 h-12 mb-4">
                <Image
                  src={type.icon}
                  alt={type.title}
                  width={48}
                  height={48}
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">{type.title}</h3>
              <p className="text-gray-500 mb-2">{type.examples}</p>
              <p className="text-gray-600 mb-4">{type.description}</p>
              <ul className="space-y-2">
                {type.features.map((feature) => (
                  <li key={feature} className="flex items-center text-gray-600">
                    <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Investment Methods */}
        <div className="bg-gray-50 rounded-xl p-8 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <Image
              src="/images/trading-pattern.svg"
              alt="Trading Analysis"
              fill
              className="object-cover"
            />
          </div>
          <h2 className="text-3xl font-bold text-center mb-12 relative">Ways to Invest</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {investmentMethods.map((method) => (
              <div key={method.title} className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-semibold mb-3">{method.title}</h3>
                <p className="text-gray-600 mb-4">{method.description}</p>
                <ul className="space-y-2">
                  {method.points.map((point) => (
                    <li key={point} className="flex items-center text-gray-600">
                      <svg className="w-4 h-4 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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

        {/* Market Factors */}
        <div className="mt-12 bg-orange-50 rounded-lg p-8">
          <h2 className="text-2xl font-semibold mb-6">Key Market Factors</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ul className="list-disc list-inside text-gray-600 space-y-3">
              <li>Supply and demand dynamics</li>
              <li>Weather patterns and natural disasters</li>
              <li>Political events and regulations</li>
              <li>Global economic conditions</li>
            </ul>
            <ul className="list-disc list-inside text-gray-600 space-y-3">
              <li>Currency exchange rates</li>
              <li>Transportation and storage costs</li>
              <li>Technological advancements</li>
              <li>Environmental regulations</li>
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  );
}
