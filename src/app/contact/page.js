import ContactFormSection from "@/ui/ContactForm";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Page = () => {
  return (
    <div>
      {/* Top Section */}
      <div className="bg-black relative">
        <div className="max-w-5xl mx-auto px-6 py-20 text-center md:text-left md:grid md:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight leading-snug">
              Get in <span className="text-orange-500">touch.</span>
            </h2>
            <p className="text-lg md:text-xl font-medium text-gray-300 max-w-xl mx-auto md:mx-0">
              Want to get in touch? We'd love to hear from you. Here's how you
              can reach us.
            </p>
          </div>

          {/* Right Image */}
          <div className="flex justify-center md:justify-end mt-10">
            <Image
              src="/contactus.webp"
              alt="contact image"
              height={400}
              width={400}
              className="object-contain"
            />
          </div>
        </div>
      </div>

      {/* Contact form section */}
      <div className="relative z-10 -mt-30 max-w-6xl mx-auto px-6 gap-6 pb-8">
        <ContactFormSection />
      </div>
      {/* help section */}
      {/* <div className="max-w-4xl flex justify-center  items-center flex-col mx-auto p-4  bg-[var(--pink)]">
        <h2 className="text-4xl font-bold text-center mb-2">Looking for platform related help?</h2>
        <p className="text-center text-gray-600  mb-8">
         Have any questions about our platform? Feel free to ask our Lina, and receive instant solutions.</p>
         <Link href={"/contact"}>
        <button className="border mx-auto p-4 rounded-2xl "> Get instant help</button>
        </Link>
      </div> */}
      {/* location section */}
      <div className="w-full bg-[var(--skyblue)] p-6 mt-4 ">
         <h2 className="text-4xl font-bold text-center mb-2">We are here to help you</h2>
        <p className="text-center text-gray-600  mb-8">
        Stuck anywhere? Reach out to us for support.</p>
        <div className="  max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-6 pb-16">
        {/* Card 1 */}
        <div className="bg-white rounded-2xl shadow-lg p-8 text-center space-y-4">
          <div className="flex justify-center">
            <Image
              src="/contact1.svg"
              alt="sales icon"
              width={50}
              height={50}
            />
          </div>
          <h3 className="text-xl font-semibold text-gray-900">Talk to Sales</h3>
          <p className="text-gray-600">
            Interested in our software? Just pick up the phone to chat with a
            member of our sales team.
          </p>
          <p className="font-semibold text-orange-600 text-lg">000800 050 3669</p>
          
        </div>

          {/* Card 2 */}
        <div className="bg-white rounded-2xl shadow-lg p-8 text-center space-y-4">
          <div className="flex justify-center">
            <Image
              src="/contact2.svg"
              alt="support icon"
              width={50}
              height={50}
            />
          </div>
          <h3 className="text-xl font-semibold text-gray-900">
            Contact Customer Support
          </h3>
          <p className="text-gray-600">
            Sometimes you need a little help from your friends. Or a support
            rep. Don’t worry… we’re here for you.
          </p>
          <a
            href="mailto:support@example.com"
            className="text-orange-600 font-medium hover:underline"
          >
            support@example.com
          </a>
        </div>
        </div>

      </div>
    </div>
  );
};

export default Page;


 

// 2 card Selection
      {/* Cards Section (Overlap) */}
      {/* <div className="relative z-10 -mt-12 max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-6 pb-16">
        {/* Card 1 */}
        {/* <div className="bg-white rounded-2xl shadow-lg p-8 text-center space-y-4">
          <div className="flex justify-center">
            <Image
              src="/contact1.svg"
              alt="sales icon"
              width={50}
              height={50}
            />
          </div>
          <h3 className="text-xl font-semibold text-gray-900">Talk to Sales</h3>
          <p className="text-gray-600">
            Interested in our software? Just pick up the phone to chat with a
            member of our sales team.
          </p>
          <p className="font-semibold text-orange-600 text-lg">000800 050 3669</p>
          
        </div> */}

        {/* Card 2 */}
        {/* <div className="bg-white rounded-2xl shadow-lg p-8 text-center space-y-4">
          <div className="flex justify-center">
            <Image
              src="/contact2.svg"
              alt="support icon"
              width={50}
              height={50}
            />
          </div>
          <h3 className="text-xl font-semibold text-gray-900">
            Contact Customer Support
          </h3>
          <p className="text-gray-600">
            Sometimes you need a little help from your friends. Or a support
            rep. Don’t worry… we’re here for you.
          </p>
          <a
            href="mailto:support@example.com"
            className="text-orange-600 font-medium hover:underline"
          >
            support@example.com
          </a>
        </div> */}
      {/* </div>  */}
