"use client";

import Image from 'next/image';
import Layout from '../../components/layout';

export default function CryptoPage() {
  const sections = [
    {
      title: 'Blockchain Basics',
      content: 'Understanding blockchain technology is fundamental to cryptocurrency investment. It\'s the underlying technology that enables secure, decentralized transactions.',
      icon: '/blockchain.svg',
      features: [
        'Decentralized ledger',
        'Immutable records',
        'Transparent transactions',
        'Cryptographic security'
      ]
    },
    {
      title: 'Investment Options',
      content: 'From direct cryptocurrency purchases to crypto ETFs and mining operations, there are various ways to gain exposure to this asset class.',
      icon: '/investment.svg',
      features: [
        'Direct ownership',
        'ETFs and futures',
        'Mining operations',
        'DeFi platforms'
      ]
    },
    {
      title: 'Security',
      content: 'Protecting your digital assets is crucial. Use hardware wallets, enable two-factor authentication, and keep private keys secure.',
      icon: '/security.svg',
      features: [
        'Hardware wallets',
        'Two-factor authentication',
        'Private key management',
        'Cold storage'
      ]
    }
  ];

  const cryptoTypes = [
    {
      title: 'Bitcoin (BTC)',
      description: 'The first and most well-known cryptocurrency',
      characteristics: [
        'Store of value',
        'Limited supply (21 million)',
        'High market capitalization',
        'Global recognition'
      ]
    },
    {
      title: 'Ethereum (ETH)',
      description: 'Platform for decentralized applications and smart contracts',
      characteristics: [
        'Smart contracts',
        'DeFi ecosystem',
        'NFT capabilities',
        'Proof of Stake'
      ]
    },
    {
      title: 'Altcoins',
      description: 'Alternative cryptocurrencies with unique features',
      characteristics: [
        'Diverse use cases',
        'Different consensus mechanisms',
        'Varying market caps',
        'Innovative technologies'
      ]
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-purple-50 to-indigo-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              Cryptocurrency Investment Guide
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Navigate the world of digital currencies with our comprehensive guide to cryptocurrency investing.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Introduction */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-semibold mb-4">Understanding Cryptocurrency</h2>
          <p className="text-gray-600 mb-6">
            Cryptocurrency represents a revolutionary form of digital money based on blockchain technology. This market operates 24/7 globally and offers unique opportunities and risks for investors.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-purple-50 rounded-lg p-4">
              <h3 className="font-semibold mb-2">Digital Assets</h3>
              <p className="text-sm text-gray-600">Secure, borderless digital currency</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-4">
              <h3 className="font-semibold mb-2">24/7 Market</h3>
              <p className="text-sm text-gray-600">Always-on global trading</p>
            </div>
            <div className="bg-indigo-50 rounded-lg p-4">
              <h3 className="font-semibold mb-2">Innovation</h3>
              <p className="text-sm text-gray-600">Revolutionary financial technology</p>
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
              <p className="text-gray-600 mb-4">{section.content}</p>
              <ul className="space-y-2">
                {section.features.map((feature) => (
                  <li key={feature} className="flex items-center text-gray-600">
                    <svg className="w-4 h-4 mr-2 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Cryptocurrency Types */}
        <div className="bg-gray-50 rounded-xl p-8">
          <h2 className="text-3xl font-bold text-center mb-12">Major Cryptocurrencies</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {cryptoTypes.map((type) => (
              <div key={type.title} className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-semibold mb-3">{type.title}</h3>
                <p className="text-gray-600 mb-4">{type.description}</p>
                <ul className="space-y-2">
                  {type.characteristics.map((characteristic) => (
                    <li key={characteristic} className="flex items-center text-gray-600">
                      <svg className="w-4 h-4 mr-2 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
        <div className="mt-12 bg-purple-50 rounded-lg p-8">
          <h2 className="text-2xl font-semibold mb-6">Risk Management</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ul className="list-disc list-inside text-gray-600 space-y-3">
              <li>Start with small investments</li>
              <li>Research thoroughly before investing</li>
              <li>Use secure wallets and exchanges</li>
              <li>Maintain strong passwords</li>
            </ul>
            <ul className="list-disc list-inside text-gray-600 space-y-3">
              <li>Enable two-factor authentication</li>
              <li>Keep private keys offline</li>
              <li>Diversify your portfolio</li>
              <li>Stay informed about regulations</li>
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  );
}
