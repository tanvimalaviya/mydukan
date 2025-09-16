"use client";
import React from "react";

const steps = [
  "Select pickup time & delivery partner",
  "Add product weight",
  "Pay & request for delivery",
  "Order confirmation",
  "Packaging",
  "Pickup scheduled",
  "In transit",
  "Out for delivery",
  "Delivered",
  "Feedback & support",
];

export default function Stepper() {
  return (
    <div className="w-full py-10 px-4">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-10 gap-12 relative">
        {steps.map((step, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center text-center relative"
          >
            {/* Circle */}
            <div
              className={`flex items-center justify-center w-14 h-14 rounded-full font-bold text-lg ${
                idx === 9
                  ? "bg-pink-500 text-white shadow-lg"
                  : "bg-gray-100 text-black"
              }`}
            >
              {idx + 1}
            </div>

            {/* Text */}
            <p className="mt-3 text-sm max-w-[100px]">{step}</p>

            {/* Curved Arrow (except last step) */}
            {idx !== steps.length - 1 && (
              <svg
                className="hidden lg:block absolute top-4 right-[-50px] w-16 h-8 text-gray-400"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 100 50"
              >
                

                <path
                  d="M0 25 Q50 0, 100 25"
                  stroke="currentColor"
                  fill="transparent"
                />
                <path
                  d="M95 20 L100 25 L95 30"
                  stroke="currentColor"
                  fill="none"
                />
              </svg>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}