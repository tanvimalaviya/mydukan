"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { FaAngleDown } from "react-icons/fa6";

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState(null);
  const dropdownRef = useRef(null);

  // Outside click close
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpenMenu(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Toggle menu
  const toggleMenu = (menu) => {
    setOpenMenu((prev) => (prev === menu ? null : menu));
  };

  return (
    <nav className="w-full bg-white shadow-sm fixed top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between relative">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <Image src="/logo.svg" alt="dukaan logo" height={100} width={150} />
        </div>

        {/* Navigation */}
        <div
          className="hidden md:flex space-x-10 text-xl text-gray-700 items-center"
          ref={dropdownRef}
        >
          {/* Dropdowns */}
          {[
            {
              label: "Products",
              key: "products",
              items: [
                {
                  href: "/themes",
                  icon: "/themes.svg",
                  title: "Dukaan themes",
                  desc: "Discover themes from our curated collection.",
                },
                {
                  href: "/delievery",
                  icon: "/truck.svg",
                  title: "Dukaan delivery",
                  desc: "Your pan-India hassle-free shipping partner.",
                },
              ],
            },
            {
              label: "Company",
              key: "company",
              items: [
                {
                  href: "/career",
                  icon: "/career.svg",
                  title: "Careers",
                  desc: "Join the team and be a part of the rocketship.",
                },
                {
                  href: "/about",
                  icon: "/informaion.svg",
                  title: "About",
                  desc: "The who, what, and why of Dukaan.",
                },
              ],
            },
            {
              label: "Resources",
              key: "resources",
              items: [
                {
                  href: "/blog",
                  icon: "/blog.svg",
                  title: "Blog",
                  desc: "Get useful tips on how to start & grow your business.",
                },
                {
                  href: "/contact",
                  icon: "/helpcenter.svg",
                  title: "Help Center",
                  desc: "Free tools to help your business grow.",
                },
              ],
            },
          ].map((menu) => (
            <div key={menu.key} className="relative">
              <button
                className="flex items-center gap-1 hover:text-blue-600"
                onClick={() => toggleMenu(menu.key)}
              >
                {menu.label} <FaAngleDown className="h-4 w-4 text-center " />
              </button>

              {openMenu === menu.key && (
                <div className="absolute top-full left-0 mt-3 w-[700px] bg-white shadow-xl border rounded-lg grid grid-cols-2 gap-4 p-6 z-50">
                  {menu.items.map((item, idx) => (
                    <Link
                      key={idx}
                      href={item.href}
                      onClick={() => setOpenMenu(null)} // ✅ Item click → close
                    >
                      <div className="flex gap-4 hover:bg-gray-100 p-3 rounded-lg cursor-pointer">
                        <img
                          src={item.icon}
                          alt={item.title}
                          className="w-8 h-8"
                        />
                        <div>
                          <p className="font-semibold">{item.title}</p>
                          <p className="text-sm text-gray-500">{item.desc}</p>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}

          <a href="#" className="hover:text-blue-600">
            Pricing
          </a>
        </div>

        {/* Buttons */}
        <div className="flex items-center space-x-6 text-xl">
          <button className="text-gray-700 hover:text-blue-600">Sign in</button>
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            Start free
          </button>
        </div>
      </div>
    </nav>
  );
}
