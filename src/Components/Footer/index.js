// import Image from "next/image";
// import React from "react";
// import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

// const Footer = () => {
//   return (
//     <footer className="bg-black text-white px-6 py-10">
//       {/* Top Section - Grid */}
//       <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-8 border-b border-gray-600 pb-6">
//         {/* Logo */}
//         <div className="flex items-start md:col-span-1">
//           <Image src="/footerlogo.svg" alt="Logo" width={100} height={100} />
//         </div>

//         {/* Company */}
//         <div>
//           <h3 className="font-semibold mb-3">Company</h3>
//           <ul className="space-y-2 text-gray-300">
//             <li>About</li>
//             <li>Privacy Policy</li>
//             <li>Terms & Conditions</li>
//             <li>Contact</li>
//             <li>FAQ</li>
//             <li>Blog</li>
//           </ul>
//         </div>

//         {/* Social Media */}
//         <div>
//           <h3 className="font-semibold mb-3">Follow Us</h3>
//           <ul className="flex space-x-4 text-gray-300">
//             <li>
//               <a href="#" className="hover:text-blue-500">
//                 <FaFacebookF />
//               </a>
//             </li>
//             <li>
//               <a href="#" className="hover:text-blue-400">
//                 <FaTwitter />
//               </a>
//             </li>
//             <li>
//               <a href="#" className="hover:text-blue-700">
//                 <FaLinkedinIn />
//               </a>
//             </li>
//           </ul>
//         </div>
//       </div>

//       {/* Bottom Section */}
//       <div className="flex flex-col md:flex-row justify-between items-center mt-6 text-gray-400 text-sm md:text-base">
//         <p>© 2025 Growthpond Technology Pvt Ltd. All rights reserved.</p>
//         <p>Made in India</p>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[var(--lightblack)] text-white px-6 md:px-12 py-12 relative">
      {/* Top Section */}
      <div className="flex justify-between items-center mb-10">
        <h2 className="text-2xl md:text-3xl font-bold">
          Share your idea today
        </h2>
        <Link href={"/contact"}>
          <button className="bg-[var(--iconbluecolor)] hover:bg-red-600 transition px-6 py-3 rounded-md font-semibold shadow-lg">
            Contact Us
          </button>
        </Link>
      </div>

      {/* Middle Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 border-t border-gray-600 pt-10">
        {/* Company Info */}
        <div>
          <div className="flex items-center mb-4">
            <Image src="/footerlogo.svg" alt="Logo" width={150} height={150} />
          </div>
          <p className="text-gray-300 text-sm leading-relaxed">
            Company that excels from designing to deployment. Connect, consult,
            and create the best.
          </p>
        </div>

        {/* Contact Info */}
        <div className="space-y-4">
          <div className="flex items-center space-x-3">
            <FaEnvelope className="text-[var(--iconbluecolor)]" />
            <span className="text-gray-300 text-sm">
              info@abc.com
            </span>
          </div>
          <div className="flex items-start space-x-3">
            <FaMapMarkerAlt className="text-[var(--iconbluecolor)] mt-1" />
            <span className="text-gray-300 text-sm">
             326 Arth Business Center , Ahmedabad
            </span>
          </div>
        </div>

        {/* Links */}
        <div>
          <h3 className="font-semibold text-xl mb-4">Links</h3>
          <ul className="space-y-2 text-gray-300 text-lg">
            <li className="hover:text-[var(--iconbluecolor)] cursor-pointer">
              <Link href={"/about"}>About Us</Link>
            </li>
            <li className="hover:text-[var(--iconbluecolor)] cursor-pointer">
              <Link href={"/contact"}>Contact Us</Link>
            </li>
            <li className="hover:text-[var(--iconbluecolor)] cursor-pointer">
              <Link href={"/faq"}>FAQ</Link>
            </li>
            <li className="hover:text-[var(--iconbluecolor)] cursor-pointer">
              <Link href={"/blog"}>Blog</Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-600 mt-10 pt-6 text-center text-gray-400 text-sm">
       © 2025 Growthpond Technology Pvt Ltd. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
