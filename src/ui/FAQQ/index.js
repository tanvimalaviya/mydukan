"use client";
import { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";

const FAQdata = [
  {
    question: "How can I start shipping with Dukaan Delivery?",
    answer:
      "Just press ship order, select dukaan delivery and start shipping your orders",
  },
  {
    question:
      "Why should I use Dukaan Delivery instead of direct courier companies?",
    answer:
      "Dukaan uses AI to automatically choose the most efficient courier partner based on cost, pickup success, TAT, and RTO rates. Dukaan has negotiated best rates with leading courier companies to save you the hassle of managing multiple providers.",
  },
  {
    question: "How does Dukaan Delivery work?",
    answer:
      "When you ship an order using Dukaan Delivery, Dukaan will show pickup & delivery time and shipping fee. After payment confirmation, shipment details and tracking ID are generated. Courier partner picks up package and delivers it within 3–5 days. Local deliveries may take as little as 2 hours.",
  },
  {
    question: "When will the order be picked up by the courier partner?",
    answer:
      "A pickup request is automatically created for the same day or next day by 11 AM, depending on when you ship the order using Dukaan Delivery.",
  },
  {
    question: "When will I get paid?",
    answer:
      "You will receive the order amount in your Dukaan account once the delivery is successfully completed.",
  },
  {
    question: "What are the fees/charges for Dukaan Delivery?",
    answer:
      "Dukaan Delivery charges vary depending on weight, distance, and courier partner. You can view the estimated fee before confirming a shipment.",
  },
  {
    question: "What happens when the order is lost in-transit?",
    answer:
      "You can raise a lost-in-transit request with Dukaan within one week of pickup. Valid claims are reimbursed up to INR 3000.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-6xl mx-auto py-12 px-4">
      <h2 className="text-3xl font-bold mb-8">FAQs</h2>

      <div className="space-y-4">
        {FAQdata.map((item, index) => (
          <div
            key={index}
            className="border border-gray-300 p-4 pb-4 cursor-pointer"
          >
            {/* Question */}
            <div
              className="flex justify-between items-center"
              onClick={() => toggleFAQ(index)}
            >
              <h3 className="text-lg font-medium">{item.question}</h3>
              {openIndex === index ? (
                <FiMinus className="text-xl" />
              ) : (
                <FiPlus className="text-xl" />
              )}
            </div>

            {/* Answer */}
            {openIndex === index && (
              <p className="mt-3 text-gray-600 text-sm leading-relaxed">
                {item.answer}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
