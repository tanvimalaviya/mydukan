"use client";
import Image from "next/image";

const logos = [
  "/brandlist1.svg",
  "/brandlist2.svg",
  "/brandlist3.svg",
  "/brandlist4.svg",
  "/brandlist5.svg",
];

export default function BrandSlider() {
  return (
    <div className="w-full overflow-hidden bg-[#1A171D] py-6  relative">
      <div className="flex w-max animate-scroll gap-16 hover:[animation-play-state:paused]">
        {/* Duplicate logos array for infinite effect */}
        {[...logos, ...logos].map((logo, index) => (
          <div key={index} className="flex items-center">
            <Image
              src={logo}
              alt="brand"
              width={120}
              height={60}
              className="opacity-70 hover:opacity-100 transition"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
