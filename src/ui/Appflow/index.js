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
      {/* Mobile/Tablet → Vertical Stepper */}
      <div className="flex flex-col space-y-8 lg:hidden">
        {steps.map((step, idx) => (
          <div key={idx} className="flex items-start space-x-4">
            {/* Circle */}
            <div
              className={`flex items-center justify-center w-10 h-10 rounded-full font-bold text-sm ${
                idx === steps.length - 1
                  ? "bg-pink-500 text-white shadow-lg"
                  : "bg-gray-100 text-black"
              }`}
            >
              {idx + 1}
            </div>

            {/* Text */}
            <p className="text-sm max-w-[200px]">{step}</p>
          </div>
        ))}
      </div>

      {/* Desktop → Horizontal Stepper with Arrows */}
      <div className="hidden lg:block overflow-x-auto">
        <div className="grid grid-cols-10 gap-12 relative ">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center text-center relative"
            >
              {/* Circle */}
              <div
                className={`flex items-center justify-center w-14 h-14 rounded-full font-bold text-lg ${
                  idx === steps.length - 1
                    ? "bg-pink-500 text-white shadow-lg"
                    : "bg-gray-100 text-black"
                }`}
              >
                {idx + 1}
              </div>

              {/* Text */}
              <p className="mt-3 text-sm max-w-[120px]">{step}</p>

              {/* Curved Arrow (except last step) */}
              {idx !== steps.length - 1 && (
                <svg
                  className="absolute top-4 -right-10 w-16 h-8 text-gray-400"
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
    </div>
  );
}
