"use client";

import Image from 'next/image';
import Link from 'next/link';

export default function FeaturedArticles() {
  const articles = [
    {
      title: "Market Trends 2025",
      author: "Dr. James Wilson",
      role: "Chief Market Strategist",
      image: "https://placehold.co/800x400/4299e1/ffffff/png?text=Market+Trends",
      authorImage: "https://placehold.co/150x150/4299e1/ffffff/png?text=JW",
      preview: "Analysis of emerging market trends and investment opportunities in the coming year.",
      readTime: "5 min read",
      category: "Market Analysis"
    },
    {
      title: "Retirement Planning Essentials",
      author: "Maria Garcia",
      role: "Retirement Planning Expert",
      image: "https://placehold.co/800x400/48bb78/ffffff/png?text=Retirement+Planning",
      authorImage: "https://placehold.co/150x150/48bb78/ffffff/png?text=MG",
      preview: "Key strategies for building a secure retirement portfolio at any age.",
      readTime: "7 min read",
      category: "Retirement"
    },
    {
      title: "Digital Asset Investment Guide",
      author: "Alex Thompson",
      role: "Cryptocurrency Analyst",
      image: "https://placehold.co/800x400/ed64a6/ffffff/png?text=Digital+Assets",
      authorImage: "https://placehold.co/150x150/ed64a6/ffffff/png?text=AT",
      preview: "Understanding the role of digital assets in modern investment portfolios.",
      readTime: "6 min read",
      category: "Cryptocurrency"
    }
  ];

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Expert Insights
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((article) => (
            <div key={article.title} className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="relative h-48">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 relative mr-4">
                    <Image
                      src={article.authorImage}
                      alt={article.author}
                      width={48}
                      height={48}
                      className="rounded-full object-cover"
                      unoptimized
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{article.author}</h3>
                    <p className="text-sm text-gray-600">{article.role}</p>
                  </div>
                </div>
                <h4 className="text-xl font-semibold mb-2">{article.title}</h4>
                <p className="text-gray-600 mb-4">{article.preview}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-blue-600">{article.category}</span>
                  <span className="text-sm text-gray-500">{article.readTime}</span>
                </div>
                <Link 
                  href="#" 
                  className="mt-4 inline-block text-blue-600 hover:text-blue-800 font-semibold"
                >
                  Read More →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
