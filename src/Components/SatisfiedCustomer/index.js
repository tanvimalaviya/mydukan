"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { FaQuoteLeft } from "react-icons/fa6";

const data = [
  {
    id: 1,
    icon: "/brandlist1.svg",
    title: "“Ecommerce tech for amazing experience!”",
    desc: "Dukaan has greatly enhanced our customers’ shopping experience. We now offer a faster & more streamlined checkout, user-friendly interfaces and advanced features.",
    Authorname: "Sudeep Bansal",
    AuthorDesignation: "VP of Growth, Wow Skin Science",
    authorImg: "/testi.webp",
  },
  {
    id: 2,
    icon: "/brandlist2.svg",
    title: "“Substantial rise in our business metrics!”",
    desc: "Within 10 days of going live, we’ve seen a 27% increase in traffic, 25% CAC improvement, and a 52% daily revenue growth.",
    Authorname: "Sambuddha Bhattacharya",
    AuthorDesignation: "Founder & CEO, Lemonade",
    authorImg: "/testi.webp",
  },
  {
    id: 3,
    icon: "/brandlist3.svg",
    title: "“A true game changer!”",
    desc: "It’s been a really smooth experience with Dukaan. It seemed the smoothest for our selling experience compared to others.",
    Authorname: "Vishu Tyagi & Pratyush Raj",
    AuthorDesignation: "Owner, Emo Bois of India",
    authorImg: "/testi.webp",
  },
  {
    id: 4,
    icon: "/brandlist1.svg",
    title: "“Boosted our sales instantly!”",
    desc: "In the first month itself we saw instant 40% growth in conversions. Dukaan is simply the best platform for scaling fast.",
    Authorname: "Ankit Sharma",
    AuthorDesignation: "Founder, Govo",
    authorImg: "/testi.webp",
  },
];

export default function SatisfiedCustomer() {
  const [current, setCurrent] = useState(0);
  const totalPages = Math.ceil(data.length / 2);

  // Auto-slide every 5s
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % totalPages);
    }, 10000);

    return () => clearInterval(timer);
  }, [totalPages]);

  return (
    <section className="relative  mx-auto text-center px-4 space-y-3">
      {/* Decorative background image */}
     

      {/* Header */}
      <FaQuoteLeft className="h-20 w-20 mx-auto " />
      <h2 className="text-[36px] leading-[42px] font-bold tracking-[-0.02em]">
        Hear from our satisfied customers
      </h2>
      <p className="font-semibold tracking-[-0.02em] text-[var(--gray)] text-[20px]">
        From beginners to enterprise brands, everyone loves Dukaan!
      </p>

      {/* Cards Section */}
      <div className="relative max-w-6xl mx-auto mt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 transition-all duration-500">
          {data.slice(current * 2, current * 2 + 2).map((item) => (
            <div
              key={item.id}
              className="bg-white shadow-md rounded-xl p-8 text-left"
            >
              <Image
                src={item.icon}
                alt="logo"
                width={60}
                height={60}
                className="mb-4"
              />
              <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
              <p className="text-gray-600 mb-6">{item.desc}</p>

              <div className="flex items-center gap-3 mt-4">
                <Image
                  src={item.authorImg}
                  alt={item.Authorname}
                  width={50}
                  height={50}
                  className="rounded-full"
                />
                <div>
                  <p className="font-bold">{item.Authorname}</p>
                  <p className="text-sm text-gray-500">
                    {item.AuthorDesignation}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center mt-8 space-x-2">
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-3 h-3 rounded-full transition ${
                current === index ? "bg-gray-800 scale-110" : "bg-gray-300"
              }`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
}
