import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaLinkedin, FaTwitter } from "react-icons/fa";
const Leadershipdata = [
  {
    img: "/team1.jpg",
    name: "Suumit Shah",
    desc: "Founder & CEO",
  },
  {
    img: "/team1.jpg",
    name: "Subhash Choudhary",
    desc: "Co-founder & CTO",
  },
  {
    img: "/team1.jpg",
    name: "Piyush Shah",
    desc: "Head of SEO",
  },
  {
    img: "/team1.jpg",
    name: "Leo",
    desc: "Chief Entertainment Officer",
  },
];

const page = () => {
  return (
    <div>
      <div className="bg-black mx-auto text-center flex items-center flex-col  py-20 px-4  space-y-3">
        <h2 className="text-[36px] text-white max-w-lg mt-20 leading-[42px] font-bold tracking-[-0.02em] ">
          We are in the business of building entrepreneurs.
        </h2>
        <p className="font-semibold max-w-4xl tracking-[-0.02em] text-[var(--gray)] text-[20px]">
          We are a team of dark horses who believe that technology will ignite
          the next industrial revolution. Our mission is to reshape the digital
          retail landscape by defining the future of commerce.
        </p>
      </div>

      <div>
        <h2 className="text-[36px]   mt-10  text-center font-bold tracking-[-0.02em]">
          Our Leadership
        </h2>
        <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
          {Leadershipdata.map((data, id) => (
            <div key={id} className="bg-white shadow-xl ">
              <Image
                src={data.img}
                alt="image"
                height={400}
                width={400}
              ></Image>
              <div className="p-4">
                <h3 className="text-xl font-bold">{data.name}</h3>
                <p className="">{data.desc}</p>
                <div className="flex gap-3 pt-3">
                  <FaLinkedin />
                  <FaTwitter />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-[36px]   mt-10  text-center font-bold tracking-[-0.02em]">
          We are backed by
        </h2>
        <div className="flex gap-8 justify-center p-6">
          <Image src={"/about1.svg"} alt="about1" height={300} width={300} />
          <Image src={"/about2.svg"} alt="about1" height={300} width={300} />
          <Image src={"/about3.svg"} alt="about1" height={300} width={300} />
        </div>
        <h3 className="text-center font-bold text-2xl">and the founders of</h3>
        <div className="flex gap-6 p-6 justify-center">
          <Image src={"/about4.svg"} alt="about1" height={200} width={200} />
          <Image src={"/about5.svg"} alt="about1" height={200} width={200} />
          <Image src={"/about6.svg"} alt="about1" height={200} width={200} />
          <Image src={"/about7.svg"} alt="about1" height={200} width={200} />
          <Image src={"/about8.svg"} alt="about1" height={200} width={200} />
          <Image src={"/about9.svg"} alt="about1" height={200} width={200} />
        </div>
      </div>

      <section style={{backgroundImage: "url('/contactimagefoehero.webp')", backgroundSize: 'cover', backgroundPosition: 'center'}} className="mx-auto max-w-7xl px-4 mt-12 ml-20 mr-20 space-y-6 pt-10  mb-20 rounded-3xl">
              <div className='flex flex-col space-y-6 pb-10 '>
                
              
                <div className="text-left space-y-4 p-8">
                    <Image src={"/logosmall.svg"} alt="logo" width={70} height={70} />
                    <h1 className="text-4xl font-bold max-w-2xl">Do you want to sell on our Marketplace?</h1>
                    <p className="text-gray-700 max-w-2xl">
                        Unlock new earning opportunity by selling your plugins & themes on our marketplace.
                    </p>
                    <Link href={"/contact"} className="text-white">
                    <button className='bg-black text-white pl-6 pr-6 pt-3 pb-3 rounded-2xl'>Get Started</button>
                    </Link>
              </div>
                </div>
        
          </section>
    </div>
  );
};

export default page;
