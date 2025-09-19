import Image from "next/image";
import React from "react";
import { FaDiamond } from "react-icons/fa6";

const StartUp = () => {
  return (
    <div className="max-w-[1100px] mx-auto text-center mt-16 md:mt-24 px-4">
      <h2 className="text-2xl sm:text-3xl md:text-[36px] leading-snug font-bold tracking-[-0.02em] mb-10 md:mb-16">
        Whether you’re a startup or an established business, here’s why Dukaan
        is your best choice
      </h2>

      {/* First Section */}
      <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10 mb-16 md:mb-24">
        {/* left image div */}
        <div className="w-full md:w-1/2 flex justify-center">
          <Image
            src={"/startup1.svg"}
            alt="startup1"
            height={500}
            width={500}
            className="w-full max-w-sm md:max-w-md h-auto"
          />
        </div>

        {/* right text div */}
        <div className="w-full md:w-1/2 md:pl-8">
          <h2 className="text-2xl md:text-[30px] font-semibold text-left">
            Launch Fast
          </h2>
          <ul>
            {[
              "Fully responsive e-commerce website & mobile app.",
              "Loads 6X faster than existing solutions.",
              "Upload/import products and inventory in bulk.",
              "Integrate payment gateways.",
              "Easily customizable themes.",
            ].map((item, i) => (
              <li
                key={i}
                className="flex items-start gap-3 my-4 md:my-6 text-left"
              >
                <FaDiamond className="text-[var(--purple)] shrink-0 mt-1" />
                <p className="text-base md:text-lg font-bold">{item}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Second Section */}
      <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10 mb-16 md:mb-24">
        {/* left text div */}
        <div className="w-full md:w-1/2">
          <h2 className="text-2xl md:text-[30px] font-semibold text-left">
            Scale Faster
          </h2>
          <ul>
            {[
              "Guaranteed 99.5% uptime for your store - We keep you open for business.",
              "60+ third party plugins.",
              "Marketing tools and discounts to drive repeat orders.",
              "Add staff accounts, assign different roles.",
              "Unlimited transactions, minimal transaction fees.",
            ].map((item, i) => (
              <li
                key={i}
                className="flex items-start gap-3 my-4 md:my-6 text-left"
              >
                <FaDiamond className="text-[var(--blue)] shrink-0 mt-1" />
                <p className="text-base md:text-lg font-bold">{item}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* right image div */}
        <div className="w-full md:w-1/2 flex justify-center">
          <Image
            src={"/startup2.svg"}
            alt="startup2"
            height={500}
            width={500}
            className="w-full max-w-sm md:max-w-md h-auto"
          />
        </div>
      </div>

      {/* Third Section */}
      <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10 mb-16 md:mb-24">
        {/* left image div */}
        <div className="w-full md:w-1/2 flex justify-center">
          <Image
            src={"/startup3.svg"}
            alt="startup3"
            height={500}
            width={500}
            className="w-full max-w-sm md:max-w-md h-auto"
          />
        </div>

        {/* right text div */}
        <div className="w-full md:w-1/2 md:pl-8">
          <h2 className="text-2xl md:text-[30px] font-semibold text-left">
            Manage Better
          </h2>
          <ul>
            {[
              "Order tracking, invoicing and order reports.",
              "Bulk edit product prices, variants, inventory.",
              "Manage global deliveries.",
              "In-depth business analytics.",
              "Automate all tax calculations.",
            ].map((item, i) => (
              <li
                key={i}
                className="flex items-start gap-3 my-4 md:my-6 text-left"
              >
                <FaDiamond className="text-[var(--gray)] shrink-0 mt-1" />
                <p className="text-base md:text-lg font-bold">{item}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default StartUp;
