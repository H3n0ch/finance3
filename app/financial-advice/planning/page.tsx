import Image from 'next/image';
import Layout from '../../components/layout';

export default function PlanningPage() {
  const sections = [
    {
      title: 'Goal Setting',
      content: 'Define clear, measurable financial goals with specific timelines. Break down long-term objectives into actionable steps.',
      icon: '/tools.svg',
      features: [
        'SMART goals',
        'Timeline planning',
        'Progress tracking',
        'Milestone setting'
      ]
    },
    {
      title: 'Budgeting',
      content: 'Create and maintain a comprehensive budget that aligns with your financial goals and lifestyle needs.',
      icon: '/analysis.svg',
      features: [
        'Income tracking',
        'Expense categorization',
        'Savings allocation',
        'Budget monitoring'
      ]
    },
    {
      title: 'Risk Management',
      content: 'Protect your financial future with appropriate insurance coverage and emergency planning.',
      icon: '/security.svg',
      features: [
        'Emergency fund',
        'Insurance needs',
        'Risk assessment',
        'Contingency planning'
      ]
    }
  ];

  const strategies = [
    {
      title: 'Debt Management',
      description: 'Develop strategies to manage and reduce debt effectively',
      points: [
        'Debt prioritization',
        'Repayment strategies',
        'Interest management',
        'Credit score improvement'
      ]
    },
    {
      title: 'Savings Strategy',
      description: 'Build and optimize your savings for different financial goals',
      points: [
        'Emergency savings',
        'Goal-specific accounts',
        'High-yield options',
        'Automatic savings'
      ]
    },
    {
      title: 'Investment Planning',
      description: 'Create an investment strategy aligned with your goals',
      points: [
        'Risk assessment',
        'Asset allocation',
        'Portfolio diversification',
        'Regular rebalancing'
      ]
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <div className="relative">
        <div className="absolute inset-0">
          <Image
            src="/images/planning-hero.svg"
            alt="Financial Planning"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-indigo-900/80"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center text-white">
            <h1 className="text-4xl font-bold mb-6">
              Financial Planning Guide
            </h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Create a solid financial foundation with our comprehensive guide to budgeting, saving, and achieving your financial goals.
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
          <h2 className="text-3xl font-bold text-center mb-12 relative">Financial Strategies</h2>
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

        {/* Tools and Resources */}
        <div className="mt-12 bg-blue-50 rounded-lg p-8">
          <h2 className="text-2xl font-semibold mb-6">Planning Tools</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ul className="list-disc list-inside text-gray-600 space-y-3">
              <li>Budgeting worksheets and templates</li>
              <li>Debt payoff calculators</li>
              <li>Goal progress trackers</li>
              <li>Net worth calculator</li>
            </ul>
            <ul className="list-disc list-inside text-gray-600 space-y-3">
              <li>Cash flow analysis tools</li>
              <li>Investment return calculators</li>
              <li>Risk assessment questionnaires</li>
              <li>Financial planning checklists</li>
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  );
}
