// eslint-disable-next-line no-unused-vars
import React from 'react'
import Navbar from '../component/Navbar'
import Hero from '../component/Hero'
import Room from '../component/Room'
import Ourproduct from '../component/Ourproduct'
import Footer from '../component/Footer'

const Home = () => {
  return (
    <div>
       <Navbar/>
       <Hero/>
       <Room/> 
       <Ourproduct/>
       <Footer/>
    </div>
  )
}

export default Home