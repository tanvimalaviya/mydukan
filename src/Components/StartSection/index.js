import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const StartSection = () => {
  return (
    <div>
      <section style={{backgroundImage: "url('/contactimagefoehero.webp')", backgroundSize: 'cover', backgroundPosition: 'center'}} className="mx-auto max-w-7xl px-4 mt-12 ml-20 mr-20 space-y-6 pt-10  mb-20 rounded-3xl">
      <div className='flex flex-col space-y-6 pb-10 '>
        
      
        <div className="text-left space-y-4 p-8">
            <Image src={"/logosmall.svg"} alt="logo" width={70} height={70} />
            <h1 className="text-4xl font-bold ">Start Selling online</h1>
            <p>
                Take your business online with Dukaan. Get your free online store in 30 seconds.
            </p>
            <Link href={"/contact"} className="text-white">
            <button className='bg-black text-white pl-4 pr-4 pt-3 pb-3 rounded-2xl'>Get Started</button>
            </Link>
      </div>
        </div>

      </section>
    </div>
  )
}

export default StartSection
