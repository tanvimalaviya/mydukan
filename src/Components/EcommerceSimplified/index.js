"use client";
import React from 'react'
import { FaRocket, FaUsers, FaMobileAlt, FaChartLine } from "react-icons/fa";
import { MdWarehouse, MdShoppingCartCheckout } from "react-icons/md";



const features = [
  {
    icon: <FaRocket className="text-4xl text-yellow-500" />,
    title: "Site Speed",
    desc: "Incredibly fast storefronts. Don't take our word for it, start selling online and see it for yourself!",
  },
  {
    icon: <MdWarehouse className="text-4xl text-blue-500" />,
    title: "Multi-Warehouse",
    desc: "One store, multiple locations. Ship products from multiple warehouses across India.",
  },
  {
    icon: <MdShoppingCartCheckout className="text-4xl text-green-500" />,
    title: "Optimised Checkouts",
    desc: "Offer a seamless shopping experience optimised for checkouts and reduce abandonment rates.",
  },
  {
    icon: <FaUsers className="text-4xl text-teal-500" />,
    title: "Staff Accounts",
    desc: "Add employees, colleagues and teammates to help you grow your business while managing access.",
  },
  {
    icon: <FaMobileAlt className="text-4xl text-orange-500" />,
    title: "Android App",
    desc: "The world is mobile. It's time your store is too. Get more loyal customers with your mobile app.",
  },
  {
    icon: <FaChartLine className="text-4xl text-indigo-500" />,
    title: "Advanced Analytics",
    desc: "All the information about your sales, traffic, regions and products, just a single click away.",
  },
];

const EcommerceSimplified = () => {
  return (
    <div className='bg-[var(--pink)] mx-auto text-center py-20 px-4 mt-24 space-y-3'>
         <h2 className="text-[36px] leading-[42px] font-bold tracking-[-0.02em] ">
       E-commerce Simplified, Success Amplified
      </h2>
      <p className='font-semibold tracking-[-0.02em] text-[var(--gray)] text-[20px]'>Empowering your online business growth with all the essential tools.</p>

      {/* Card Section */}

       <section className=" py-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((item, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-xl p-6 flex flex-col items-center text-center hover:shadow-lg transition"
            >
              {item.icon}
              <h3 className="text-lg font-semibold mt-4">{item.title}</h3>
              <p className="text-gray-600 mt-2 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
      
    </div>
  )
}

export default EcommerceSimplified
