import React from "react";


const stats = [
  {
    value: "268%",
    desc: "More checkout conversions than Shopify",
  },
  {
    value: "470%",
    desc: "Better site loading performance than Shopify",
  },
  {
    value: "79%",
    desc: "Shopify sellers doubled their revenues after switching to Dukaan",
  },
];

const EnterpriseThirdSection = () => {
  return (
    <div className="bg-black p-10">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white text-center mb-3">
        The Fastest Lane to Enterprise Growth
      </h1>
      <p className="text-[14px]  text-white text-center lg:text-[20px] leading-[22px] max-w-2xl mx-auto font-medium">
        Dukaan's lightning-fast performance can help you accelerate your
        enterprise growth, leaving other platforms in the dust.
      </p>
      <div>
      {/* left side */}
      <div className=" py-12 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((item, i) => (
          <div
            key={i}
            className="bg-black/40 border border-gray-800 rounded-xl p-8 text-center hover:scale-105 transition-transform"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">
              {item.value}
            </h2>
            <p className="text-gray-300 text-sm md:text-base">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>


      </div>
    </div>
  );
};

export default EnterpriseThirdSection;
