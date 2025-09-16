import React from "react";
import Clientreview from "@/ui/Clientreview";
import Image from "next/image";
import Link from "next/link";

const themepagedata = [
  {
    title: "Fully Responsive",
    desc: "Incredibly fast storefronts. Don't take our word for it, start selling online and see it for yourself!",
    img: "/themepage1.svg",
  },
  {
    title: "Highly Customizable",
    desc: "Customizing your theme according to your branding could not be as easy as it is on Dukaan.",
    img: "/themepage2.svg",
  },
  {
    title: "Quick checkouts",
    desc: "Offer your customers a seamless shopping experience in addition to quick checkouts.",
    img: "/themepage3.svg",
  },
];

const videodata = [
  {
    src: "https://www.youtube.com/embed/6MsM6S53lLQ",
    title: "Easy Store Setup",
    desc: "Create your store in minutes with our drag-and-drop editor.",
    type: "youtube",
  },
  {
    src: "https://www.youtube.com/embed/6MsM6S53lLQ",
    title: "Smooth Shopping Experience",
    desc: "Enhance customer engagement with fluid checkout and navigation.",
    type: "youtube",
  },
];


const Page = () => {
  return (
    <div>
      {/* Black Section */}
      <div className="relative bg-black pt-40 pb-32 text-center px-4">
        <h2 className="text-[36px] leading-[42px] font-bold tracking-[-0.02em] text-white">
          Dukaan Themes
        </h2>
        <p className="font-semibold tracking-[-0.02em] text-[20px] text-gray-300 max-w-2xl mx-auto mt-4">
          Discover themes from our curated collection & start with the one
          perfect for your business.
        </p>

        {/* Curve Shape (SVG) */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
          <svg
            className="relative block w-full h-[50px]"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            viewBox="0 0 1200 120"
          >
            <path
              d="M321.39 56.44C184.48 65.95 86.31 92.59 0 120h1200V0c-86.31 27.41-184.48 54.05-321.39 63.56-137.55 9.6-277.39-5.26-401.06-18.68C553.19 31.54 453.68 47.22 321.39 56.44z"
              className="fill-white"
            ></path>
          </svg>
        </div>
      </div>

      {/* Cards Section */}
      <div className="relative -mt-20 max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {themepagedata.map((item, idx) => (
          <div
            key={idx}
            className="bg-white p-6 rounded-2xl shadow-md text-center"
          >
            <img
              src={item.img}
              alt={item.title}
              className="mx-auto mb-4 h-10"
            />
            <h3 className="text-xl font-semibold">{item.title}</h3>
            <p className="text-gray-600 mt-2">{item.desc}</p>
          </div>
        ))}
      </div>

      {/* Video Section */}
      <div className="max-w-6xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-8">
        {videodata.map((video, idx) => (
          <div
            key={idx}
            className="bg-white rounded-2xl shadow-md overflow-hidden"
          >
            <div className="w-full h-64">
              {video.type === "youtube" ? (
                <iframe
                  className="w-full h-full"
                  src={video.src}
                  title={video.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              ) : (
                <video
                  src={video.src}
                  controls
                  className="w-full h-full object-cover"
                />
              )}
            </div>

            {/* Text */}
            <div className="p-6 text-left">
              <h3 className="text-xl font-semibold">{video.title}</h3>
              <p className="text-gray-600 mt-2">{video.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Cient review Section */}
      <div className="max-w-6xl mx-auto px-6  text-center">
        <h2 className="text-[36px] leading-[42px] font-bold tracking-[-0.02em] ">What Our Client Say</h2>
        <Clientreview/>
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
                    <button className='bg-black text-white pl-4 pr-4 pt-3 pb-3 rounded-2xl'>Get Started</button>
                    </Link>
              </div>
                </div>
        
          </section>
    </div>
  );
};

export default Page;
