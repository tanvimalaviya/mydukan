import BrandSlider from '@/Components/BrandSlider'
import EcommerceSimplified from '@/Components/EcommerceSimplified'
import Enterprise from '@/Components/Enterprise'
import Footer from '@/Components/Footer'
import HeroSection from '@/Components/Herosection'
import Navbar from '@/Components/Navbar'
import Plugin from '@/Components/Plugin'
import SatisfiedCustomer from '@/Components/SatisfiedCustomer'
import StartSection from '@/Components/StartSection'
import StartUp from '@/Components/StartupSection'
import TipsandTricks from '@/Components/TipsandTricks'
import React from 'react'

const Page = () => {
  return (
    <div>
      <Navbar/>
      <HeroSection/>
      <BrandSlider/>
      <StartUp/>
      <EcommerceSimplified/>
      <Plugin/>
      <SatisfiedCustomer/>
      <Enterprise/>
      <TipsandTricks/>
      <StartSection/>
      <Footer/>
    </div>
  )
}

export default Page
