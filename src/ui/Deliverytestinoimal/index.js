"use client";
import { useState } from "react";
import { FaQuoteLeft } from "react-icons/fa";

const testimonials = [
  {
    id: 1,
    text: "When the lockdown happened, my restaurant business almost shut down. With Dukaan, I was able to get orders online. Now we are doing more business than ever!",
    author: "Atul Kulkarni",
    role: "Restaurant @ Kolkata",
  },
  {
    id: 2,
    text: "“I run an apparel boutique. With Dukaan, I am able to accept orders from anywhere in India. Business has gone up 64% after I switched to Dukaan.”",
    author: "Riya Mehta",
    role: "Boutique Owner @ Delhi",
  },
  {
    id: 3,
    text:"“I run an apparel boutique. With Dukaan, I am able to accept orders from anywhere in India. Business has gone up 64% after I switched to Dukaan.”",
    author: "Suresh Patel",
    role: "Electronics @ Ahmedabad",
  },
];

export default function Deliverytestinoimal() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">

    <div className="max-w-6xl bg-gray-200 w-full flex flex-col rounded-lg    text-left py-6">
      {/* Heading */}
      <h2 className="text-3xl font-bold mb-2 pl-6">
        “We love <span className="text-blue-600">Dukaan.</span>”
      </h2>
      <p className="text-gray-500 mb-10 pl-6">
        Okay, we wrote these testimonials on their behalf. But you get the idea.
      </p>

      {/* Quote */}
      <div className="p-6 ">
        <FaQuoteLeft className="text-blue-600 text-5xl mb-4 " />

        <p className="text-lg text-gray-800 font-medium">
          {testimonials[activeIndex].text}
        </p>

        <div className="mt-6">
          <h4 className="font-semibold">{testimonials[activeIndex].author}</h4>
          <p className="text-gray-500 text-sm">
            {testimonials[activeIndex].role}
          </p>
        </div>
      </div>

      {/* Dots */}
      <div className="flex justify-center mt-6 space-x-2">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => setActiveIndex(i)}
            className={`w-3 h-3 rounded-full ${
              i === activeIndex ? "bg-gray-800" : "bg-gray-300"
            }`}
          ></button>
        ))}
      </div>
    </div>
    </div>
  );
}
