import Image from "next/image";
import React from "react";
import { FaDiamond } from "react-icons/fa6";

const StartUp = () => {
  return (
    <div className="max-w-[1100px] mx-auto text-center mt-24 px-4">
      <h2 className="text-[36px] leading-[42px] font-bold tracking-[-0.02em] mb-16">
        Whether you’re a startup or an established business, here’s why Dukaan
        is your best choice
      </h2>

      {/* First Section */}
      <div className="flex flex-col md:flex-row items-center gap-6 mb-24">
        {/* left image div */}
        <Image src={"/startup1.svg"} alt="startup1" height={500} width={500} />

        {/* right text div */}
        <div className="pl-8">
          <h2 className="text-[30px] font-semibold text-left">Launch Fast</h2>
          <ul>
            <div>
              <li className="flex items-center gap-4 my-6 text-left ">
                <FaDiamond className="text-[var(--purple)]" />
                <p className="text-lg font-bold">
                  Fully responsive e-commerce website & mobile app.
                </p>
              </li>

              <li className="flex items-center gap-4 my-6 text-left">
                <FaDiamond className="text-[var(--purple)]" />
                <p className="text-lg font-bold">
                  Loads 6X faster than existing solutions.
                </p>
              </li>

              <li className="flex items-center gap-4 my-6 text-left">
                <FaDiamond className="text-[var(--purple)]" />
                <p className="text-lg font-bold">
                  Upload/import products and inventory in bulk.
                </p>
              </li>

              <li className="flex items-center gap-4 my-6 text-left">
                <FaDiamond className="text-[var(--purple)]" />
                <p className="text-lg font-bold">Integrate payment gateways.</p>
              </li>

              <li className="flex items-center gap-4 my-6 text-left">
                <FaDiamond className="text-[var(--purple)]" />
                <p className="text-lg font-bold">Easily customizable themes.</p>
              </li>
            </div>
          </ul>
        </div>
      </div>
      {/* Second Section */}
      <div className="flex space-y-6 md:space-y-0 flex-col md:flex-row items-center gap-10 mb-24">
        {/* left text div */}
        <div className="">
          <h2 className="text-[30px] font-semibold text-left">Scale Faster</h2>
          <ul>
            <div>
              <li className="flex items-center gap-4 my-6 text-left ">
                <FaDiamond className="text-[var(--blue)]" />
                <p className="text-lg font-bold">
                  Guaranteed 99.5% uptime for your store - We keep you open for
                  business.
                </p>
              </li>

              <li className="flex items-center gap-4 my-6 text-left">
                <FaDiamond className="text-[var(--blue)]" />
                <p className="text-lg font-bold">60+ third party plugins.</p>
              </li>

              <li className="flex items-center gap-4 my-6 text-left">
                <FaDiamond className="text-[var(--blue)]" />
                <p className="text-lg font-bold">
                  Marketing tools and discounts to drive repeat orders.
                </p>
              </li>

              <li className="flex items-center gap-4 my-6 text-left">
                <FaDiamond className="text-[var(--blue)]" />
                <p className="text-lg font-bold">
                  Add staff accounts, assign different roles.
                </p>
              </li>

              <li className="flex items-center gap-4 my-6 text-left">
                <FaDiamond className="text-[var(--blue)]" />
                <p className="text-lg font-bold">
                  Unlimited transactions, minimal transaction fees.
                </p>
              </li>
            </div>
          </ul>
        </div>
        {/* right image div  */}
        <Image src={"/startup2.svg"} alt="startup1" height={500} width={500} />
      </div>

        {/* Third Section */}
         <div className="flex flex-col md:flex-row items-center gap-6 mb-24">
        {/* left image div */}
        <Image src={"/startup3.svg"} alt="startup1" height={500} width={500} />

        {/* right text div */}
        <div className="pl-8">
          <h2 className="text-[30px] font-semibold text-left">Manage Better</h2>
          <ul>
            <div>
              <li className="flex items-center gap-4 my-6 text-left ">
                <FaDiamond className="text-[var(--gray)]" />
                <p className="text-lg font-bold">
                 Order tracking, invoicing and order reports.
                </p>
              </li>

              <li className="flex items-center gap-4 my-6 text-left">
                <FaDiamond className="text-[var(--gray)]" />
                <p className="text-lg font-bold">
                  Bulk edit product prices, variants, inventory.
                </p>
              </li>

              <li className="flex items-center gap-4 my-6 text-left">
                <FaDiamond className="text-[var(--gray)]" />
                <p className="text-lg font-bold">
                 Manage global deliveries.
                </p>
              </li>

              <li className="flex items-center gap-4 my-6 text-left">
                <FaDiamond className="text-[var(--gray)]" />
                <p className="text-lg font-bold">In-depth business analytics.</p>
              </li>

              <li className="flex items-center gap-4 my-6 text-left">
                <FaDiamond className="text-[var(--gray)]" />
                <p className="text-lg font-bold">Automate all tax calculations.</p>
              </li>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default StartUp;
