import { FaApple, FaGooglePlay } from "react-icons/fa6";

// components/HeroSection.js
export default function HeroSection() {
  return (
    <section className="w-full pt-32 bg-gradient-to-br from-blue-50 to-pink-50">
      <div className="max-w-7xl h-[80vh] mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
        
        {/* Left side text */}
        <div className="max-w-xl">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            Your Global Commerce Partner, Engineered for <span className="text-blue-600">Peak Performance</span>
          </h1>
          <p className="mt-4 text-gray-600 text-lg">
            Launch your eye-catching online store with ease, attract and convert more customers than ever before.
          </p>
          <div className="mt-6 flex items-center space-x-4">
            <button className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700">Get started</button>
            
          </div>
          <div className="flex space-x-2 pt-4  items-center">
                <p>Also Available on</p>
             <FaApple className="h-8" />
             <FaGooglePlay className="h-8" />
            </div>
        </div>

        {/* Right side image */}
        <div className="mt-10 md:mt-0">
          <img src="/heroimage.webp" alt="UI Mockup" className="w-full max-w-lg h-auto  "/>
        </div>
      </div>
    </section>
  );
}