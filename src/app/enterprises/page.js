import EnterpriseForth from "@/ui/EnterpriseFourthsection";
import EnterpriseThirdSection from "@/ui/Enterprisethirdsection";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const enterprisecarddata = [
  {
    icon: "/enterpriseicon1.svg",
    title: "Lighting Speed",
    desc: "Experience your storefront loading 100% faster than Shopify!",
  },
  {
    icon: "/icon2.svg",
    title: "Headless Commerce",
    desc: "Unleash power of headless commerce with full flexibility unlike Shopify.",
  },
  {
    icon: "/icon3.svg",
    title: "Lighting Speed",
    desc: "Build a limitless marketplace, beyond Shopify’s restrictions.",
  },
];

const page = () => {
  return (
    <div>
      {/* Top Section */}
      <div className="bg-black text-white mt-20 px-4 py-6 flex flex-col items-center text-center gap-6">
        {/* Heading */}
        <h2 className="text-[24px] sm:text-[28px] md:text-[32px] lg:text-4xl font-medium max-w-3xl">
          Unlock your brand's online potential with our
        </h2>

        {/* Main Title */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[48px] font-bold leading-snug max-w-4xl">
          Enterprise Ecommerce Solutions
        </h1>

        {/* Paragraph */}
        <p className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] leading-[22px] sm:leading-[28px] md:leading-[30px] max-w-3xl font-medium">
          Unleash your brand's true power with our tailored enterprise ecommerce
          solutions, driving growth and maximizing revenue.
        </p>

        {/* Button */}
        <Link href="/contact">
          <button className="bg-white text-black px-6 py-3 rounded-2xl mt-4 text-sm sm:text-base font-medium hover:bg-gray-200 transition">
            Contact Us
          </button>
        </Link>

        {/* Image */}
        <div className="w-full flex justify-center mt-6">
          <Image
            src="/enterprise.svg"
            alt="enterprise image"
            width={600}
            height={600}
            className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg h-auto object-contain"
          />
        </div>
        <p className="uppercase text-white pt-10 text-center">
          Trusted by 2000+ brands worldwide
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10 place-items-center mt-8">
          <Image
            src={"/brandlist1.svg"}
            alt="brand name"
            height={200}
            width={200}
          />
          <Image
            src={"/brandlist2.svg"}
            alt="brand name"
            height={200}
            width={200}
          />
          <Image
            src={"/brandlist3.svg"}
            alt="brand name"
            height={150}
            width={150}
          />
          <Image
            src={"/brandlist4.svg"}
            alt="brand name"
            height={150}
            width={150}
          />
          <Image
            src={"/brandlist5.svg"}
            alt="brand name"
            height={200}
            width={200}
          />
          <Image
            src={"/brandlist1.svg"}
            alt="brand name"
            height={200}
            width={200}
          />
          <Image
            src={"/brandlist2.svg"}
            alt="brand name"
            height={200}
            width={200}
          />
          <Image
            src={"/brandlist3.svg"}
            alt="brand name"
            height={150}
            width={150}
          />
        </div>
      </div>

      {/* second section */}
      <div className="bg-[var(--lightblack)] py-12 px-6">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white text-center mb-10">
          Why are we the ultimate choice for your business?
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {enterprisecarddata.map((item, i) => (
            <div
              key={i}
              className="bg-black/40 border border-gray-700 rounded-2xl p-6 flex flex-col items-center text-center hover:scale-105 transition-transform"
            >
              {/* Icon */}
              <Image
                src={item.icon}
                alt={item.title}
                width={80}
                height={80}
                className="mb-4"
              />
              {/* Title */}
              <h3 className="text-xl font-semibold text-white mb-2">
                {item.title}
              </h3>
              {/* Description */}
              <p className="text-gray-300 text-sm sm:text-base">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
      {/* Third section */}
      <div>
        <EnterpriseThirdSection/>
      </div>
      {/* Fourth section */}
      <EnterpriseForth/>
    </div>
  );
};

export default page;
