"use client";
import Image from "next/image";

const plugins = [
  "/plugin1.svg",
   "/plugin2.svg",
    "/plugin3.svg",
     "/plugin4.svg",
      "/plugin5.svg",
       "/plugin6.svg",
        "/plugin7.svg",
         "/plugin8.svg",
          "/plugin9.svg",
           "/plugin10.svg",
            "/plugin11.svg",
             "/plugin12.svg",
              "/plugin13.svg",
               "/plugin14.svg",

  
];

export default function Plugin() {
  return (
    <section className=" py-20 overflow-hidden">
      {/* Heading */}
      <div className="mx-auto text-center space-y-3 px-4">
        <h2 className="text-[36px] leading-[42px] font-bold tracking-[-0.02em]">
          Enhance your site's functionality with plugins
        </h2>
        <p className="font-semibold tracking-[-0.02em] text-[var(--gray)] max-w-2xl mx-auto text-[20px]">
          Choose from over 40+ plugins. Be it tracking analytics, managing
          shipments to building email lists. There's a plugin for everything.
        </p>
      </div>

      {/* Scrolling Icons */}
      <div className="mt-12 relative">
        <div className="flex gap-10 animate-scroll">
          {plugins.map((src, i) => (
            <div key={i} className="flex-shrink-0 w-20 h-20">
              <Image
                src={src}
                alt={`plugin-${i}`}
                width={80}
                height={80}
                className="object-contain"
              />
            </div>
          ))}
          {/* duplicate for infinite scroll */}
          {plugins.map((src, i) => (
            <div key={`dup-${i}`} className="flex-shrink-0 w-20 h-20">
              <Image
                src={src}
                alt={`plugin-${i}`}
                width={80}
                height={80}
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
