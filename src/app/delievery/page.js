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
      <div className="flex flex-row mx-auto  px-4 mt-24 space-y-3">
        {/* left section */}
        <div className="pt-20 pr-10 space-y-3">
          <h2 className="text-[36px] leading-[42px] font-bold tracking-[-0.02em] ">
            Delivery simplified!
          </h2>
          <p>
            Ship and manage your orders hassle-free with Dukaan's own delivery
            platform.
          </p>
          <Link href="/contact">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-md mt-4">
              Get Started
            </button>
          </Link>
        </div>
        {/* right section */}
        <div>
          <Image
            src="/heroimage.webp"
            alt="delivery"
            height={500}
            width={500}
            className="w-full h-auto"
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
      <div className="bg-blue-900 mb-10  ">
        <div className="ml-13 space-y-4 p-4">
        <h2 className="text-[36px] leading-[42px] font-bold tracking-[-0.02em] text-left text-white mx-auto   ">
          Easy delivery just a few clicks away!
        </h2>
        <p className="leading-[28px] text-white">
          Ship and manage your orders hassle-free with Dukaan's own delivery
          platform.
        </p>
        <Link href={"/contact"}>
          <button className="pl-4 pr-4 pt-3 pb-3 rounded-2xl mb-4 bg-white text-blue-600">
            Get Started
          </button>
        </Link>
        </div>
      </div>
    </div>
  );
};

export default page;
