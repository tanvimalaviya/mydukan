"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import Image from "next/image";

const testimonials = [
  {
    name: "John Deo",
    image: "/team1.jpg",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit...",
  },
  {
    name: "Jane Deo",
    image: "/team1.jpg",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit...",
  },
  {
    name: "Alex Deo",
    image: "/team1.jpg",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit...",
  },
  {
    name: "Maya Deo",
    image: "/team1.jpg",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit...",
  },
  {
    name: "Chris Deo",
    image: "/team1.jpg",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit...",
  },
  {
    name: "Emma Deo",
    image: "/team1.jpg",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit...",
  },
];

export default function TestimonialSlider() {
  return (
    <div className="max-w-6xl mx-auto py-10">
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{ clickable: true }}
        modules={[Pagination]}
        className="mySwiper pb-12" // extra padding niche dots mate
      >
        {testimonials.map((item, i) => (
          <SwiperSlide key={i}>
            <div className="p-6 shadow-lg rounded-lg bg-[var(--pink)] text-left">
              <Image
                src={item.image}
                alt={item.name}
                width={80}
                height={80}
                className="rounded-full mx-auto mb-4"
              />
              <p className="text-gray-600 mb-4">{item.text}</p>
              <h3 className="font-bold text-lg">{item.name}</h3>
              <div className="text-yellow-400">★★★★★</div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* ✅ Pagination dots niche show karava */}
      <style jsx global>{`
        .swiper-pagination {
          position: relative !important;
          margin-top: 20px;
        }
      `}</style>
    </div>
  );
}
