/* eslint-disable no-unused-vars */
import React from 'react'



const Hero = () => {
  return (
      <div className="hero-bg w-full flex justify-end items-center lg:py-[250px] h-[85vh] px-8 lg:px-20">
      <div className="lg:w-1/2 p-10 rounded-lg text-dark-text bg-[#FFF3E3]">
      <p className="font-semibold text-sm lg:text-base letter tracking-[3px] pb-2 pt-6">New Arrival</p>
      <h1 className="font-bold text-3xl lg:text-6xl text-ochre pb-4">Discover Our  New Collection</h1>
      <p className="lg:text-lg font-medium pb-8 lg:pb-12">Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Ut elit tellus, luctus nec ullamcorper mattis.
      </p>
        <button className="font-bold uppercase bg-[#b88e2f] border border-[#b88e2f] hover:bg-transparent 
        hover:text-[#b88e2f] duration-300 py-3 px-8 lg:px-16 lg:py-5 text-white">
          Buy now
        </button>
        </div>
        </div>
 
  )
}

export default Hero