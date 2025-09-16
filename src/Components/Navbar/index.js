"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaAngleDown } from "react-icons/fa6";

export default function Navbar() {
  const [isProductsOpen, setProductsOpen] = useState(false);
  const [isCompanyOpen, setCompanyOpen] = useState(false);
  const [isResourceOpen, setResourceOpen] = useState(false);

  return (
    <nav className="w-full bg-white shadow-sm fixed top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between relative">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <Image src="/logo.svg" alt="dukaan logo" height={100} width={150} />
          {/* <span className="text-3xl font-semibold text-black">
              dukaan<sup className="text-xs align-super">®</sup>
            </span> */}
        </div>

        {/* Navigation */}
        <div className="hidden md:flex space-x-10 text-xl text-gray-700 items-center">
          {/* Products Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setProductsOpen(true)}
            onMouseLeave={() => setProductsOpen(false)}
          >
            <button className="flex items-center gap-1 hover:text-blue-600">
              Products <FaAngleDown className="h-4 w-4" />
            </button>

            {isProductsOpen && (
              <div className="absolute top-full left-0 mt-3 w-[700px] bg-white shadow-xl border rounded-lg grid grid-cols-2 gap-4 p-6 z-50">
                {/* Item 1 */}
                <Link href="/themes">
                <div className="flex gap-4 hover:bg-gray-100 p-3 rounded-lg cursor-pointer">
                  <img src="/themes.svg" alt="theme" className="w-8 h-8" />
                  <div>
                    <p className="font-semibold">Dukaan themes</p>
                    <p className="text-sm text-gray-500">
                      Discover themes from our curated collection & start with
                      the one perfect for your business.
                    </p>
                  </div>

                </div>
                </Link>
                {/* Item 2 */}
                <Link href="/delievery">
                <div className="flex gap-4 hover:bg-gray-100 p-3 rounded-lg cursor-pointer">
                  <img src="/truck.svg" alt="delivery" className="w-8 h-8" />
                  <div>
                    <p className="font-semibold">Dukaan delivery</p>
                    <p className="text-sm text-gray-500">
                      Your pan-India hassle-free shipping partner.
                    </p>{" "}
                  </div>
                </div>
                </Link>

                {/* Item 3 */}
                {/* <div className="flex gap-4 hover:bg-gray-100 p-3 rounded-lg cursor-pointer">
                  <img src="/arrow.svg" alt="plugins" className="w-8 h-8" />
                  <div>
                    <p className="font-semibold">Dukaan plugins</p>
                    <p className="text-sm text-gray-500">
                      Add extra functionality, features, and customization with
                      the help of plugins.
                    </p>
                  </div>
                </div> */}

                {/* Item 4 */}
                {/* <div className="flex gap-4 hover:bg-gray-100 p-3 rounded-lg cursor-pointer">
                  <img src="/tools.svg" alt="tools" className="w-8 h-8" />
                  <div>
                    <p className="font-semibold">Business tools</p>
                    <p className="text-sm text-gray-500">
                      Free tools to help take your business to the next level.
                    </p>
                  </div>
                </div> */}
              </div>
            )}
          </div>

          {/* Company Dropdown - Full Width */}
          <div
            className="relative"
            onMouseEnter={() => setCompanyOpen(true)}
            onMouseLeave={() => setCompanyOpen(false)}
          >
            <button className="flex items-center gap-1 hover:text-blue-600">
              Company <FaAngleDown className="h-4 w-4" />
            </button>

            {isCompanyOpen && (
              <div className="absolute top-full left-0 mt-3 w-[700px] bg-white shadow-xl border rounded-lg grid grid-cols-2 gap-4 p-6 z-50">
                {/* Careers */}
                <Link href={"/career"}>
                <div className="flex gap-4 hover:bg-gray-100 p-3 rounded-lg cursor-pointer">
                  <img src="/career.svg" alt="Careers" className="h-8 w-8" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Careers</h4>
                    <p className="text-sm text-gray-500">
                      Join the team and be a part of the rocketship.
                    </p>
                  </div>
                </div>
                </Link>

                {/* About */}
                <Link href={"/about"}>
                <div className="flex items-start gap-4 hover:bg-gray-100 p-4 rounded cursor-pointer">
                  <img src="/informaion.svg" alt="About" className="h-8 w-8" />
                  <div>
                    <h4 className="font-semibold text-gray-900">About</h4>
                    <p className="text-sm text-gray-500">
                      The who, what, and why of Dukaan.
                    </p>
                  </div>
                </div>
                </Link>
              </div>
            )}
          </div>

          {/* Resources & Pricing */}
          <div
            className="relative"
            onMouseEnter={() => setResourceOpen(true)}
            onMouseLeave={() => setResourceOpen(false)}
          >
            <button className="flex items-center gap-1 hover:text-blue-600">
              Resources <FaAngleDown className="h-4 w-4" />
            </button>

            {isResourceOpen && (
              <div className="absolute top-full left-0 mt-3 w-[700px] bg-white shadow-xl border rounded-lg grid grid-cols-2 gap-4 p-6 z-50">
                {/* Item 1 */}
                <div className="flex gap-4 hover:bg-gray-100 p-3 rounded-lg cursor-pointer">
                  <img src="/blog.svg" alt="theme" className="w-8 h-8" />
                  <div>
                    <p className="font-semibold">Blog</p>
                    <p className="text-sm text-gray-500">
                      Get useful tips on how to start & grow your online
                      business.
                    </p>
                  </div>
                </div>
                {/* Item 2 */}
                <div className="flex gap-4 hover:bg-gray-100 p-3 rounded-lg cursor-pointer">
                  <img
                    src="/community.svg"
                    alt="delivery"
                    className="w-8 h-8"
                  />
                  <div>
                    <p className="font-semibold">Community</p>
                    <p className="text-sm text-gray-500">
                      Become a part of our exclusive Dukan VIP Facebook group.
                    </p>{" "}
                  </div>
                </div>

                {/* Item 3 */}
                {/* <div className="flex gap-4 hover:bg-gray-100 p-3 rounded-lg cursor-pointer">
                    <img
                      src="/icons/plugins.svg"
                      alt="plugins"
                      className="w-8 h-8"
                    />
                    <div>
                      <p className="font-semibold">Videos</p>
                      <p className="text-sm text-gray-500">
                        Add extra functionality, features, and customization with
                        the help of plugins.
                      </p>
                    </div>
                  </div> */}

                {/* Item 4 */}
                <div className="flex gap-4 hover:bg-gray-100 p-3 rounded-lg cursor-pointer">
                  <img src="/helpcenter.svg" alt="tools" className="w-8 h-8" />
                  <div>
                    <p className="font-semibold">Help Center</p>
                    <p className="text-sm text-gray-500">
                      Free tools to help take your business to the next level.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>

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
