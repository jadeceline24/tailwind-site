import React from 'react'
import HeroImg from '../images/illustration-intro.svg'
const Hero = () => {
  return (
    <main className=' container flex flex-col md:flex-row-reverse mx-auto px-6 mt-10 items-center space-y-0 '>
        <div className="flex-1 flex md:justify-end">
            <img src={HeroImg} alt="" />
        </div>
        <div className=" flex-1 flex flex-col justify-center items-center text-center md:text-left md:items-start">
            <h1 className="text-4xl text-darkBlue font-bold max-w-md md:text-5xl sm:max-w-sm">
                Bring everyone together to build better products.
            </h1>
            <p className='max-w-sm  text-darkGrayBlue py-10'>Manage makes it simple for software teams to plan day-to-day 
  tasks while keeping the larger team goals in view.</p>
            <button className="btn shadow-lg shadow-brightRed/50">Get Started</button>
        </div>
        
    </main>
  )
}

export default Hero