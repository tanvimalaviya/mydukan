import Stepper from "@/ui/Appflow";
import Deliverycard from "@/ui/delieverycard";
import Deliverytestinoimal from "@/ui/Deliverytestinoimal";
import FAQ from "@/ui/FAQQ";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="flex flex-col     ">
      {/* First Section */}
      <div className="flex flex-col md:flex-row items-center md:items-start mx-auto px-4 mt-24 gap-10 md:gap-16">
        {/* left section */}
        <div className="pt-10 md:pt-20 md:pr-10 space-y-4 text-center md:text-left">
          <h2 className="text-2xl sm:text-3xl md:text-[36px] leading-tight font-bold tracking-[-0.02em]">
            Delivery simplified!
          </h2>
          <p className="text-gray-700 text-sm sm:text-base md:text-lg max-w-md mx-auto md:mx-0">
            Ship and manage your orders hassle-free with Dukaan's own delivery
            platform.
          </p>
          <Link href="/contact">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-md mt-4 hover:bg-blue-700 transition">
              Get Started
            </button>
          </Link>
        </div>

        {/* right section */}
        <div className="flex justify-center md:justify-end w-full md:w-1/2">
          <Image
            src="/heroimage.webp"
            alt="delivery"
            height={500}
            width={500}
            className="w-full max-w-sm sm:max-w-md md:max-w-lg h-auto"
          />
        </div>
      </div>

      {/* Second Section */}
      <div className="bg-[var(--skyblue)] w-full pb-10  p-4 justify-center items-center ">
        <h2 className="text-[36px] leading-[42px] font-bold tracking-[-0.02em] text-center  mb-10 ">
          Why consider Dukaan Delivery over other shipping services?
        </h2>
        <Deliverycard />
      </div>
      {/* Third section */}
      <div className="  pt-4 mx-auto text-center  px-4 mt-12 space-y-3">
        <h2 className="text-[36px] leading-[42px] font-bold tracking-[-0.02em] ">
          How to get started with Dukaan Delivery
        </h2>
        <Stepper />
      </div>
      {/* Fourth Section */}
      <div className="  ">
        <Deliverytestinoimal />
      </div>
      {/* Fifth FAQ Section */}
      <div>
        <FAQ />
      </div>
      {/* Sixth Section */}
      <div className="bg-[#2a2a2a] mb-10 text-center px-4 py-10">
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl leading-tight font-bold tracking-[-0.02em] text-white">
            Easy delivery just a few clicks away!
          </h2>
          <p className="text-sm sm:text-base md:text-lg leading-relaxed text-white">
            Ship and manage your orders hassle-free with Dukaan's own delivery
            platform.
          </p>
          <Link href={"/contact"}>
            <button className="px-6 py-3 rounded-2xl bg-white text-black font-medium hover:bg-gray-200 transition">
              Get Started
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default page;
