import Image from "next/image";
import Link from "next/link";
import React from "react";

const TipsandTricks = () => {
  return (
    <div className=" mx-auto px-4 mt-12 space-y-2 pt-10">
      {/* Heading */}
      <h2 className="text-[36px] leading-[42px] font-bold tracking-[-0.02em]  text-center">
        Grow your online store.
      </h2>

      {/* Paragraph */}
      <p className="text-[36px] leading-[42px] font-bold tracking-[-0.02em] text-center">
        Learn the tips and tricks from experts.
      </p>
      {/* Card section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8 max-w-6xl  mx-auto">
        {/* First card */}
        <div>
          <Image
            src={"/blog.jpg"}
            alt="check"
            width={1000}
            height={1000}
            className="mx-auto h-50 "
          />
          <h3 className="text-[24px] leading-[28px] font-bold tracking-[-0.02em] text-left mt-4">
            Guides
          </h3>
          <p className="font-semibold tracking-[-0.02em] text-[var(--gray)] max-w-2xl mx-auto text-[20px] text-left mt-2">
            10 AI Content Creation Tools for Businesses
          </p>
        </div>
        {/* Second card */}
        <div>
          <Image
            src={"/blog2.jpg"}
            alt="check"
            width={1000}
            height={1000}
            className="mx-auto h-50"
          />
          <h3 className="text-[24px] leading-[28px] font-bold tracking-[-0.02em] text-left mt-4">
            Press
          </h3>
          <p className="font-semibold tracking-[-0.02em] text-[var(--gray)] max-w-2xl mx-auto text-[20px] text-left mt-2">
            Dukaan Dimensions 2022 – A Retrospective on the Growth Enabled by
            Dukaan
          </p>
        </div>
        {/* Third card */}
        <div>
          <Image
            src={"/blog.jpg"}
            alt="check"
            width={1000}
            height={1000}
            className="w-full h-50 "
          />
          <h3 className="text-[24px] leading-[28px] font-bold tracking-[-0.02em] text-left mt-4">
            Press
          </h3>
          <p className="font-semibold tracking-[-0.02em] text-[var(--gray)] max-w-2xl mx-auto text-[20px] text-left mt-2">
            Dukaan Dimensions 2022 – A Retrospective on the Growth Enabled by
            Dukaan
          </p>
        </div>
      </div>
      {/* button */}
      <div className="flex justify-center">
        <Link href={"/blog"}>
          <button className=" font-semibold px-6 py-3 rounded-full mt-8 border border-black mb-4 transition">
            View all
          </button>
        </Link>
      </div>
    </div>
  );
};

export default TipsandTricks;
