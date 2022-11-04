import React, { useState } from 'react'
import Logo from '../images/logo.svg'
import close from '../images/icon-close.svg'
import hamburger from '../images/icon-hamburger.svg'
const Navbar = () => {
  const [toggle, setToggle] = useState(false)
  
  return (
    <>
    <nav className="container relative mx-auto p-6 font-medium z-10">
      <div className="flex justify-between items-center">
      <div className="pt-2 cursor-pointer">
        <img src={Logo} alt="logo" />
       </div>
       {/* Menu */}
       <div className="hidden md:block">
        <ul className='flex space-x-5 '>
          <li><a href="" className='hover:text-darkGrayBlue '>Pricing</a></li>
          <li><a href=""  className='hover:text-darkGrayBlue'>Product</a></li>
          <li><a href=""  className='hover:text-darkGrayBlue'>About Us</a></li>
          <li><a href=""  className='hover:text-darkGrayBlue'>Careers</a></li>
          <li><a href=""  className='hover:text-darkGrayBlue'>Community</a></li>
        </ul>
        </div>
        {/* Button */}
        <button className='hidden md:block btn shadow-lg shadow-brightRed/50'>Get Started</button>

        <button className='md:hidden ' onClick={()=>setToggle(!toggle)}><img className='' src={toggle ? close : hamburger} alt="" />
        </button>
        {toggle && 
        
        <div className='flex flex-col absolute item-center bg-white py-8 mt-10 font-bold text-center md:hidden w-auto self-center left-6 right-6 top-10 drop-shadow-md '>
          <ul className='flex flex-col space-y-5'>
            <li><a href="" className='hover:text-darkGrayBlue '>Pricing</a></li>
            <li><a href=""  className='hover:text-darkGrayBlue'>Product</a></li>
            <li><a href=""  className='hover:text-darkGrayBlue'>About Us</a></li>
            <li><a href=""  className='hover:text-darkGrayBlue'>Careers</a></li>
            <li><a href=""  className='hover:text-darkGrayBlue'>Community</a></li>
          </ul>
          
        </div>}
        
      </div>
       
    </nav>
    </>
  )
  
  
  
  
}

export default Navbar