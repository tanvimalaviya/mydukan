import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaArrowRight, FaUserCheck } from "react-icons/fa";
import { MdStarRate } from "react-icons/md";
import { RiTeamFill } from "react-icons/ri";
import { TbFileReport } from "react-icons/tb";

const carddata = [
  {
    icon: <RiTeamFill className="text-4xl text-blue-600" />,
    title: "Our Partners",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
  },
  {
    icon: <TbFileReport className="text-4xl text-blue-600" />,
    title: "Portal Job",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
  },
  {
    icon: <RiTeamFill className="text-4xl text-blue-600" />,
    title: "Careers Coaching",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
  },
];

const Page = () => {
  return (
    <div>
      {/* First Hero Section */}
      <div
        className="relative flex items-center justify-center px-6 mt-22 py-20 bg-cover bg-center"
        style={{ backgroundImage: "url('/instagramfooter1.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/50 md:bg-gradient-to-r md:from-black/70 md:via-black/50 md:to-transparent"></div>

        <div className="relative z-10 w-full md:w-1/2 max-w-xl text-white">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            LET&apos;S START CAREERS HERE
          </h1>
          <p className="mt-4 text-lg text-gray-200">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>

          <div className="mt-6">
            <Link href={"/contact"}>
              <button className="flex items-center gap-2 bg-blue-600 text-white px-5 py-3 rounded-full hover:bg-blue-700 transition">
                <span>Learn More</span>
                <FaArrowRight />
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Second Section */}
      <section
        style={{
          backgroundImage: "url('/bgcareer.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="mx-auto max-w-7xl px-4 py-12 mb-20 "
      >
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-10">
          {/* Left Text */}
          <div className="space-y-3 text-center md:text-left">
            <h2 className="font-bold text-2xl sm:text-3xl lg:text-4xl ">
              Our Partners
            </h2>
            <p className="max-w-sm mx-auto md:mx-0 text-sm sm:text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus luctus.
            </p>
          </div>

          {/* Right Logos */}
          <div className="flex flex-wrap md:flex-nowrap gap-6 justify-center md:justify-end">
            <Image
              src={"/brandlist1.svg"}
              alt="career"
              height={100}
              width={100}
              className="h-16 sm:h-15 w-auto object-contain"
            />
            <Image
              src={"/brandlist2.svg"}
              alt="career"
              height={100}
              width={100}
              className="h-16 sm:h-15 w-auto object-contain"
            />
            <Image
              src={"/brandlist3.svg"}
              alt="career"
              height={100}
              width={100}
              className="h-16 sm:h-15 w-auto object-contain"
            />
          </div>
        </div>
      </section>

      {/* Third Section - Cards */}
      <section className="max-w-7xl mx-auto px-4 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {carddata.map((card, i) => (
            <div
              key={i}
              className="bg-white shadow-lg rounded-2xl p-8 flex flex-col items-start space-y-4 hover:shadow-xl transition"
            >
              <div className="p-3 bg-blue-100 rounded-full">{card.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800">
                {card.title}
              </h3>
              <p className="text-gray-600 text-sm">{card.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Fourth Section */}
      <section
        style={{
          backgroundImage: "url('/bgcareer.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="mx-auto max-w-7xl px-4 py-12 mb-20 flex flex-col lg:flex-row gap-10 rounded-2xl"
      >
        {/* Left Section */}
        <div className="p-4 space-y-4 flex-1">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl max-w-2xl font-bold ">
            More Opportunities For Everyone
          </h2>
          <p className="text-sm sm:text-base max-w-2xl leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>
          <Link href={"/contact"}>
            <button className="bg-blue-600 px-6 py-3 rounded-xl text-white font-medium hover:bg-blue-700 transition">
              Contact Now
            </button>
          </Link>
        </div>

        {/* Right Section */}
        <div className="flex flex-col gap-6 flex-1">
          {/* First item */}
          <div className="flex items-start gap-4 p-4 bg-white shadow-md rounded-lg">
            <div className="bg-black text-blue-500 p-3 rounded-full flex items-center justify-center text-xl">
              <RiTeamFill />
            </div>
            <div>
              <h2 className="text-lg font-semibold text-gray-800">
                Free Coaching
              </h2>
              <p className="text-gray-600 text-sm mt-1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus.
              </p>
            </div>
          </div>

          {/* Second item */}
          <div className="flex items-start gap-4 p-4 bg-white shadow-md rounded-lg">
            <div className="bg-black text-blue-500 p-3 rounded-full flex items-center justify-center text-xl">
              <MdStarRate />
            </div>
            <div>
              <h2 className="text-lg font-semibold text-gray-800">
                Comprehensive Ratings
              </h2>
              <p className="text-gray-600 text-sm mt-1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus.
              </p>
            </div>
          </div>

          {/* Third item */}
          <div className="flex items-start gap-4 p-4 bg-white shadow-md rounded-lg">
            <div className="bg-black text-blue-500 p-3 rounded-full flex items-center justify-center text-xl">
              <FaUserCheck />
            </div>
            <div>
              <h2 className="text-lg font-semibold text-gray-800">
                By Real Employees
              </h2>
              <p className="text-gray-600 text-sm mt-1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Page;
