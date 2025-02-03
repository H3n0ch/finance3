"use client";

import Image from 'next/image';

export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Small Business Owner",
      image: "https://placehold.co/150x150/4299e1/ffffff/png?text=SJ",
      quote: "The investment guidance helped me secure my business's financial future. The retirement planning tools were especially valuable."
    },
    {
      name: "Michael Chen",
      role: "Tech Professional",
      image: "https://placehold.co/150x150/48bb78/ffffff/png?text=MC",
      quote: "The cryptocurrency insights were spot-on. I appreciate the balanced approach to risk management and portfolio diversification."
    },
    {
      name: "Emily Rodriguez",
      role: "Early Career Investor",
      image: "https://placehold.co/150x150/ed64a6/ffffff/png?text=ER",
      quote: "As a new investor, the educational resources and step-by-step guides made complex topics easy to understand."
    }
  ];

  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          What Our Members Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.name} className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center mb-4">
                <div className="w-16 h-16 relative mr-4">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={64}
                    height={64}
                    className="rounded-full object-cover"
                    unoptimized
                  />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{testimonial.name}</h3>
                  <p className="text-gray-600">{testimonial.role}</p>
                </div>
              </div>
              <blockquote className="text-gray-600 italic">"{testimonial.quote}"</blockquote>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
