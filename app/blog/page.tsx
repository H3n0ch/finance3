"use client";
import Image from "next/image";
import { useLanguage } from "../i18n/LanguageContext";

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  icon: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Understanding Market Trends",
    excerpt: "A deep dive into current market trends and what they mean for investors.",
    date: "2024-02-03",
    icon: "/analysis.svg"
  },
  {
    id: 2,
    title: "Cryptocurrency Investment Guide",
    excerpt: "Essential tips for navigating the cryptocurrency market safely.",
    date: "2024-02-02",
    icon: "/crypto.svg"
  },
  {
    id: 3,
    title: "Stock Market Basics",
    excerpt: "Learn the fundamentals of stock market investing for beginners.",
    date: "2024-02-01",
    icon: "/stock-market.svg"
  }
];

export default function Blog() {
  useLanguage();

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 w-full max-w-4xl">
        <h1 className="text-3xl font-bold text-center sm:text-left mb-8">Financial Blog</h1>
        
        <div className="grid gap-6">
          {blogPosts.map((post) => (
            <article 
              key={post.id}
              className="p-6 rounded-lg border border-black/[.08] dark:border-white/[.145] hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] transition-colors"
            >
              <div className="flex items-start gap-4">
                <Image
                  src={post.icon}
                  alt=""
                  width={24}
                  height={24}
                  className="mt-1"
                />
                <div className="flex-1">
                  <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
                  <p className="text-gray-600 dark:text-gray-300 mb-3">{post.excerpt}</p>
                  <div className="flex justify-between items-center">
                    <time className="text-sm text-gray-500 font-[family-name:var(--font-geist-mono)]">
                      {new Date(post.date).toLocaleDateString()}
                    </time>
                    <button className="text-sm text-blue-600 dark:text-blue-400 hover:underline">
                      Read more →
                    </button>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </main>

      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="#latest"
        >
          <Image
            aria-hidden
            src="/clock.svg"
            alt="Clock icon"
            width={16}
            height={16}
          />
          Latest Posts
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="#categories"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Categories
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="#archive"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Archive
        </a>
      </footer>
    </div>
  );
}
