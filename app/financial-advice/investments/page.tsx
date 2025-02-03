'use client';
import React from 'react';
import Image from 'next/image';

const InvestmentsPage = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Investment Types</h1>
          <p className="text-xl text-blue-100 max-w-2xl">
            Explore various investment opportunities to diversify your portfolio and achieve your financial goals.
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Bonds Card */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="p-6">
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 rounded-full p-3 mr-4">
                  <Image src="/investment.svg" alt="Bonds" width={24} height={24} />
                </div>
                <h2 className="text-2xl font-semibold">Bonds</h2>
              </div>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                  Government Bonds
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                  Corporate Bonds
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                  High-Yield Bonds
                </li>
              </ul>
            </div>
          </div>

          {/* Real Estate Card */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="p-6">
              <div className="flex items-center mb-4">
                <div className="bg-green-100 rounded-full p-3 mr-4">
                  <Image src="/window.svg" alt="Real Estate" width={24} height={24} />
                </div>
                <h2 className="text-2xl font-semibold">Real Estate</h2>
              </div>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                  Rental Properties
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                  REITs
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                  Land Investment
                </li>
              </ul>
            </div>
          </div>

          {/* Private Equity Card */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="p-6">
              <div className="flex items-center mb-4">
                <div className="bg-purple-100 rounded-full p-3 mr-4">
                  <Image src="/analysis.svg" alt="Private Equity" width={24} height={24} />
                </div>
                <h2 className="text-2xl font-semibold">Private Equity</h2>
              </div>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                  Private Companies
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                  Venture Capital
                </li>
              </ul>
            </div>
          </div>

          {/* ETFs & Mutual Funds Card */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="p-6">
              <div className="flex items-center mb-4">
                <div className="bg-red-100 rounded-full p-3 mr-4">
                  <Image src="/stock-market.svg" alt="ETFs" width={24} height={24} />
                </div>
                <h2 className="text-2xl font-semibold">ETFs & Funds</h2>
              </div>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
                  Index Funds
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
                  Managed Funds
                </li>
              </ul>
            </div>
          </div>

          {/* Precious Metals Card */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="p-6">
              <div className="flex items-center mb-4">
                <div className="bg-yellow-100 rounded-full p-3 mr-4">
                  <Image src="/metals.svg" alt="Precious Metals" width={24} height={24} />
                </div>
                <h2 className="text-2xl font-semibold">Precious Metals</h2>
              </div>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></span>
                  Gold & Silver
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></span>
                  Collectibles
                </li>
              </ul>
            </div>
          </div>

          {/* Derivatives Card */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="p-6">
              <div className="flex items-center mb-4">
                <div className="bg-indigo-100 rounded-full p-3 mr-4">
                  <Image src="/tools.svg" alt="Derivatives" width={24} height={24} />
                </div>
                <h2 className="text-2xl font-semibold">Derivatives</h2>
              </div>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-indigo-500 rounded-full mr-2"></span>
                  Options
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-indigo-500 rounded-full mr-2"></span>
                  Futures
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-indigo-500 rounded-full mr-2"></span>
                  Swaps
                </li>
              </ul>
            </div>
          </div>

          {/* Alternative Investments Card */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="p-6">
              <div className="flex items-center mb-4">
                <div className="bg-orange-100 rounded-full p-3 mr-4">
                  <Image src="/risk.svg" alt="Alternative" width={24} height={24} />
                </div>
                <h2 className="text-2xl font-semibold">Alternative</h2>
              </div>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
                  Hedge Funds
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
                  SPACs
                </li>
              </ul>
            </div>
          </div>

          {/* Fixed Income Card */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="p-6">
              <div className="flex items-center mb-4">
                <div className="bg-teal-100 rounded-full p-3 mr-4">
                  <Image src="/security.svg" alt="Fixed Income" width={24} height={24} />
                </div>
                <h2 className="text-2xl font-semibold">Fixed Income</h2>
              </div>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-teal-500 rounded-full mr-2"></span>
                  CDs
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-teal-500 rounded-full mr-2"></span>
                  Money Markets
                </li>
              </ul>
            </div>
          </div>

          {/* P2P Lending Card */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="p-6">
              <div className="flex items-center mb-4">
                <div className="bg-pink-100 rounded-full p-3 mr-4">
                  <Image src="/file.svg" alt="P2P Lending" width={24} height={24} />
                </div>
                <h2 className="text-2xl font-semibold">P2P Lending</h2>
              </div>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-pink-500 rounded-full mr-2"></span>
                  Lending Platforms
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-pink-500 rounded-full mr-2"></span>
                  Crowdfunding
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvestmentsPage;
