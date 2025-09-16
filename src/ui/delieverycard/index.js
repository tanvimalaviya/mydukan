import Image from 'next/image'
import React from 'react'

const deliverycarddata = [
    {
    img: "/delievery1.svg",
    title: "20K+ Pin codes",
    desc: "Pan india coverage with multiple partners.",
    },
    {
    img: "/delievery2.svg",
    title: "Best rates",
    desc: "Lowest delivery charges in the market.",
    },
     {
    img: "/delievery3.svg",
    title: "Ease of use",
    desc: "Ship multiple orders quickly.",
    },
     {
    img: "/delievery4.svg",
    title: "Reduced RTO",
    desc: "Automated order and NDR verification.",
    },
]


const Deliverycard = () => {
  return (
    <div>
          <section className="">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 text-left gap-8">
          {deliverycarddata.map((item, index) => (
            <div
              key={index}
              className="bg-white shadow-md  p-6 flex flex-col  text-left hover:shadow-lg transition"
            >
            <Image src={item.img} alt={item.title} width={64} height={64} className=""/>
              
              <h3 className="text-lg font-semibold mt-4 text-left">{item.title}</h3>
              <p className="text-gray-600 mt-2 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
      
    </div>
  )
}

export default Deliverycard
