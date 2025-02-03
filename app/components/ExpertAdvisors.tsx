"use client";

import Image from 'next/image';

export default function ExpertAdvisors() {
  const advisors = [
    {
      name: "Jennifer Parker, CFA",
      role: "Senior Investment Strategist",
      image: "https://placehold.co/400x600/4299e1/ffffff/png?text=Jennifer+P",
      specialties: ["Portfolio Management", "Risk Assessment", "Market Analysis"],
      experience: "15+ years experience",
      description: "Specializing in developing comprehensive investment strategies for high-net-worth individuals."
    },
    {
      name: "David Kim, CFP®",
      role: "Retirement Planning Specialist",
      image: "https://placehold.co/400x600/48bb78/ffffff/png?text=David+K",
      specialties: ["Retirement Planning", "Estate Planning", "Tax Strategy"],
      experience: "12+ years experience",
      description: "Expert in creating personalized retirement plans and wealth preservation strategies."
    },
    {
      name: "Rachel Foster, MBA",
      role: "Digital Assets Consultant",
      image: "https://placehold.co/400x600/ed64a6/ffffff/png?text=Rachel+F",
      specialties: ["Cryptocurrency", "Blockchain Technology", "Digital Investment"],
      experience: "8+ years experience",
      description: "Guiding clients through the evolving landscape of digital asset investments."
    },
    {
      name: "Marcus Thompson, PhD",
      role: "Global Markets Director",
      image: "https://placehold.co/400x600/9f7aea/ffffff/png?text=Marcus+T",
      specialties: ["International Markets", "Forex Trading", "Economic Analysis"],
      experience: "20+ years experience",
      description: "Providing insights on global market trends and international investment opportunities."
    }
  ];

  return (
    <section className="bg-gradient-to-r from-blue-50 to-indigo-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
          Meet Our Expert Advisors
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          Our team of experienced financial advisors is here to help you achieve your financial goals with personalized guidance and expertise.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {advisors.map((advisor) => (
            <div key={advisor.name} className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="relative h-64">
                <Image
                  src={advisor.image}
                  alt={advisor.name}
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-1">{advisor.name}</h3>
                <p className="text-blue-600 font-medium mb-2">{advisor.role}</p>
                <p className="text-gray-600 text-sm mb-4">{advisor.description}</p>
                <div className="space-y-2">
                  {advisor.specialties.map((specialty) => (
                    <div key={specialty} className="flex items-center text-sm text-gray-600">
                      <svg className="w-4 h-4 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      {specialty}
                    </div>
                  ))}
                </div>
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <span className="text-sm text-gray-500">{advisor.experience}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors">
            Schedule a Consultation
          </button>
        </div>
      </div>
    </section>
  );
}
