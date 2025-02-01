/* eslint-disable no-unused-vars */
import React from 'react'
import { CiSearch } from "react-icons/ci";
import { GrFavorite } from "react-icons/gr";
import { LuShoppingCart } from "react-icons/lu";




const Navbar = () => {
  return (
    <section className='flex'>
      <nav className=' bg-white overflow-hidden py-6 font-medium px-8 lg:px-20 w-full'>
        <div className='flex w-full justify-between items-center'>
        <div className='left flex font-bold  '>
            <img className='' src="https://furniro-tural.vercel.app/assets/icon-06dc8808.svg" alt="" />
        </div>

        <div className='hidden lg:flex gap-10 xl:gap20 font-bold'>
            <ul className='flex gap-5'>
                <li>Home</li>
                <li>Shop</li>
                <li>Blog</li>
                <li>Contact</li>
            </ul>
        </div>
        <div className='right hidden lg:flex gap-10'>
        <CiSearch />
        <GrFavorite />
        <LuShoppingCart />
        <button className='lg:hidden'>
          <img className='' src="https://furniro-tural.vercel.app/assets/burger-menu-98e8e7e9.svg" alt="" />
        </button>
        </div>
      </div>
    </nav>
  </section>
  )
}

export default Navbar