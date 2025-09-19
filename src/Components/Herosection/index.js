import Link from "next/link";
import { FaApple, FaGooglePlay } from "react-icons/fa6";

export default function HeroSection() {
  return (
    <section className="w-full pt-20 md:pt-32 bg-gradient-to-br from-blue-50 to-pink-50">
      <div className="max-w-7xl min-h-[70vh] mx-auto px-6 flex flex-col-reverse md:flex-row items-center justify-between gap-10">
        {/* Left side text */}
        <div className="w-full md:w-1/2 max-w-xl text-center md:text-left">
          <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 leading-snug md:leading-tight">
            Your Global Commerce Partner, Engineered for{" "}
            <span className="text-[var(--iconbluecolor)]">
              Peak Performance
            </span>
          </h1>
          <p className="mt-4 text-gray-600 text-base md:text-lg">
            Launch your eye-catching online store with ease, attract and convert
            more customers than ever before.
          </p>

          <div className="mt-6 flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
            <Link href={"/contact"}>
              <button
                className="bg-[var(--iconbluecolor)] text-white px-6 py-3 rounded 
                hover:text-[var(--iconbluecolor)] hover:bg-[var(--white)] 
                transition-all duration-300 ease-in-out shadow-md hover:shadow-xl w-full sm:w-auto"
              >
                Get started
              </button>
            </Link>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center gap-2 pt-6 justify-center md:justify-start">
            <p className="text-gray-700 text-sm md:text-base">
              Also Available on
            </p>
            <div className="flex items-center gap-3 justify-center sm:justify-start text-2xl ">
              <FaApple />
              <FaGooglePlay />
            </div>
          </div>
        </div>

        {/* Right side image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src="/heroimage.webp"
            alt="UI Mockup"
            className="w-full max-w-sm sm:max-w-md md:max-w-lg h-auto"
          />
        </div>
      </div>
    </section>
  );
}
