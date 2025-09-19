import Image from "next/image";
import React from "react";
const fouthdata = [
  {
    icon: "/fourth1.svg",
    title: "99.9% Uptime",
    desc: "Experience uninterrupted uptime with our cutting-edge technology.",
  },
  {
    icon: "/fourth2.svg",
    title: "99.9% Uptime",
    desc: "Reflect your brand's uniqueness with a custom tailored storefront design",
  },
  {
    icon: "/fourth3.svg",
    title: "99.9% Uptime",
    desc: "Effortlessly streamline your business operations with essential tool integration.",
  },
  {
    icon: "/fourth4.svg",
    title: "99.9% Uptime",
    desc: "We have 13 edge locations within the USA for almost ZERO latency.",
  },
  {
    icon: "/fourth5.svg",
    title: "99.9% Uptime",
    desc: "Control shipping by choosing your own preferred shipping partner",
  },
  {
    icon: "/fourth6.svg",
    title: "99.9% Uptime",
    desc: "Boost customer trust with seamless returns & exchanges on our platform.",
  },
];

const EnterpriseForth = () => {
  return (
    <div className="bg-[var(--lightblack)] p-10">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white text-center mb-3">
        Take your business to new heights with Dukaan
      </h1>
      <div>
          <div className=" py-12 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {fouthdata.map((item, i) => (
          <div
            key={i}
            className="bg-black/40 border border-gray-800 rounded-xl p-8 text-center hover:scale-105 transition-transform flex items-center justify-center flex-col"
          >
            <Image src={item.icon} alt="image" height={70} width={70} />
            <h2 className="text-2xl md:text-2xl font-bold text-white mb-2">
              {item.title}
            </h2>
            <p className="text-gray-300 text-sm md:text-base">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
        </div>
    </div>
  );
};

export default EnterpriseForth;
