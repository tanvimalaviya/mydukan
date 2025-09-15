import Image from "next/image";
import Link from "next/link";
import React from "react";

const Enterprise = () => {
  return (
    <div className="bg-black mx-auto px-4 mt-12 space-y-6 pt-10">
      {/* Heading */}
      <h2 className="text-[36px] leading-[42px] font-bold tracking-[-0.02em] text-white text-center">
        Scale your business with Dukaan Enterprise
      </h2>

      {/* Paragraph */}
      <p className="font-semibold tracking-[-0.02em] text-[var(--gray)] max-w-2xl mx-auto text-[20px] text-center">
        Unlock your brand’s online potential on Dukaan’s lightning fast
        infrastructure with custom built features.
      </p>

      {/* List */}
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8 mr-15 max-w-4xl mx-auto text-left">
        <li className="flex items-center">
          <Image src={"/check.png"} alt="check" width={20} height={20} className="mr-2" />
          <span className="text-[var(--gray)] text-[18px] font-semibold">99.5% Uptime</span>
        </li>
        <li className="flex items-center">
          <Image src={"/check.png"} alt="check" width={20} height={20} className="mr-2" />
          <span className="text-[var(--gray)] text-[18px] font-semibold">Returns & Exchange</span>
        </li>
        <li className="flex items-center">
          <Image src={"/check.png"} alt="check" width={20} height={20} className="mr-2" />
          <span className="text-[var(--gray)] text-[18px] font-semibold">Custom Plugins & Integrations</span>
        </li>
        <li className="flex items-center">
          <Image src={"/check.png"} alt="check" width={20} height={20} className="mr-2" />
          <span className="text-[var(--gray)] text-[18px] font-semibold">Under 1ms Latency</span>
        </li>
        <li className="flex items-center">
          <Image src={"/check.png"} alt="check" width={20} height={20} className="mr-2" />
          <span className="text-[var(--gray)] text-[18px] font-semibold">Controlled Shipping</span>
        </li>
        <li className="flex items-center">
          <Image src={"/check.png"} alt="check" width={20} height={20} className="mr-2" />
          <span className="text-[var(--gray)] text-[18px] font-semibold">Personalised Storefront Design</span>
        </li>
      </ul>

      {/* Button */}
      <div className="text-center">
        <Link href={"/enterprises"}>
        <button className="bg-[var(--primary)] text-white font-semibold px-6 py-3 rounded-full mt-8 hover:bg-[var(--primary-dark)] border border-white mb-4 transition">
          Learn More
        </button>
        </Link>
      </div>
    </div>
  );
};

export default Enterprise;
