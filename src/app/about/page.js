import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaLinkedin, FaTwitter } from "react-icons/fa";

const Leadershipdata = [
  { img: "/team1.jpg", name: "Suumit Shah", desc: "Founder & CEO" },
  { img: "/team1.jpg", name: "Subhash Choudhary", desc: "Co-founder & CTO" },
  { img: "/team1.jpg", name: "Piyush Shah", desc: "Head of SEO" },
  { img: "/team1.jpg", name: "Leo", desc: "Chief Entertainment Officer" },
];

const page = () => {
  return (
    <div>
      {/* Top Section */}
      <div className="bg-black mx-auto text-center mt-20 flex items-center flex-col py-16 px-4 space-y-6">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[36px] text-white max-w-3xl leading-snug font-bold tracking-[-0.02em]">
          We are in the business of building entrepreneurs.
        </h2>
        <p className="font-medium max-w-4xl tracking-[-0.02em] text-[16px] sm:text-[18px] md:text-[20px] text-[var(--gray)]">
          We are a team of dark horses who believe that technology will ignite
          the next industrial revolution. Our mission is to reshape the digital
          retail landscape by defining the future of commerce.
        </p>
      </div>

      {/* Leadership Section */}
      <div className="px-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-[-0.02em] mt-10 text-center">
          Our Leadership
        </h2>
        <div className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {Leadershipdata.map((data, id) => (
            <div
              key={id}
              className="bg-white shadow-lg rounded-lg overflow-hidden"
            >
              <Image
                src={data.img}
                alt={data.name}
                height={400}
                width={400}
                className="w-full h-auto object-cover"
              />
              <div className="p-4 text-center sm:text-left">
                <h3 className="text-lg md:text-xl font-bold">{data.name}</h3>
                <p className="text-sm md:text-base text-gray-600">
                  {data.desc}
                </p>
                <div className="flex gap-3 pt-3 justify-center sm:justify-start text-blue-600">
                  <FaLinkedin />
                  <FaTwitter />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Backed By Section */}
      <div className="px-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl mt-10 text-center font-bold tracking-[-0.02em]">
          We are backed by
        </h2>
        <div className="flex flex-wrap justify-center gap-6 p-6">
          <Image
            src={"/about1.svg"}
            alt="about1"
            height={200}
            width={200}
            className="h-20 sm:h-24 w-auto"
          />
          <Image
            src={"/about2.svg"}
            alt="about2"
            height={200}
            width={200}
            className="h-20 sm:h-24 w-auto"
          />
          <Image
            src={"/about3.svg"}
            alt="about3"
            height={200}
            width={200}
            className="h-20 sm:h-24 w-auto"
          />
        </div>
        <h3 className="text-center font-bold text-xl sm:text-2xl">
          and the founders of
        </h3>
        <div className="flex flex-wrap gap-6 p-6 justify-center">
          {[
            "/about4.svg",
            "/about5.svg",
            "/about6.svg",
            "/about7.svg",
            "/about8.svg",
            "/about9.svg",
          ].map((img, i) => (
            <Image
              key={i}
              src={img}
              alt="about"
              height={150}
              width={150}
              className="h-16 sm:h-20 w-auto"
            />
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <section
        style={{
          backgroundImage: "url('/contactimagefoehero.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="mx-auto max-w-6xl px-4 mt-12 space-y-6 py-10 mb-20 rounded-2xl"
      >
        <div className="flex flex-col space-y-6 pb-6 text-center sm:text-left">
          <div className="space-y-4  p-6 rounded-2xl max-w-2xl mx-auto sm:mx-0">
            <Image src={"/logosmall.svg"} alt="logo" width={70} height={70} />
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">
              Do you want to sell on our Marketplace?
            </h1>
            <p className="text-gray-700 text-sm sm:text-base">
              Unlock new earning opportunity by selling your plugins & themes on
              our marketplace.
            </p>
            <Link href={"/contact"}>
              <button className="bg-black text-white px-6 py-3 rounded-2xl">
                Get Started
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
