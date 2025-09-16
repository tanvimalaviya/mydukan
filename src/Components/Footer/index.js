import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className="bg-black text-white p-10 ">
      {/* Grid Columns */}
      <div className="grid grid-cols-2 text-xl md:grid-cols-7 gap-6 border-b border-gray-500 pb-6">
        {/* Logo */}
        <div className="mb-6">
          <Image src={"/footerlogo.svg"} alt="logo" width={100} height={100} />
        </div>
        {/* first column */}
        <div>
          <ul className="space-y-2">
            <li>Business tools</li>
            <li>Dukan for PC</li>
            <li>Dukan Delivery</li>
            <li>Dukaan Plugins</li>
            <li>Dukan themes</li>
            <li>Dukan Enterprise</li>
          </ul>
        </div>

        {/* second column */}
        <div>
          <ul className="space-y-2">
            <li>Awards '22</li>
            <li>Help center</li>
            <li>Blog</li>
            <li>Banned items</li>
          </ul>
        </div>

        {/* third column */}
        <div>
          <ul className="space-y-2">
            <li>About</li>
            <li>Privacy</li>
            <li>Terms</li>
            <li>Contact</li>
            <li>FAQ's</li>
          </ul>
        </div>

        {/* fourth column */}
        <div>
          <ul className="space-y-2">
            <li>Jobs</li>
            <li>Branding</li>
            <li>Press Inquiry</li>
            <li>Bug Bounty</li>
          </ul>
        </div>

        {/* fifth column */}
        <div>
          <ul className="space-y-2">
            <li>Facebook</li>
            <li>Twitter</li>
            <li>LinkedIn</li>
          </ul>
        </div>

        {/* sixth column (example extra section) */}
        <div>
          <ul className="space-y-2">
            <li>Careers</li>
            <li>Support</li>
            <li>Community</li>
            <li>Resources</li>
          </ul>
        </div>
       
      </div>
       <div className="flex flex-row justify-between mt-6 text-sm md:text-base">
        <p>Growthpond Technology Pvt Ltd. All rights reserved, 2025.</p>
        <p>Made in india</p>
        </div>
    </div>
  );
};

export default Footer;
