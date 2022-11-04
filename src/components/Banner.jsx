import React from 'react'

const Banner = () => {
  return (
    <div className="bg-brightRed banner">
    <div className=' container mx-auto px-6 flex flex-col justify-between space-y-5 items-center py-20 md:py-8 md:flex-row md:pt-5 md:space-x-5 md:space-y-0' >

      <h2 className=" font-medium max-w-xl md:max-w-md p-6 text-5xl md:text-4xl text-center md:text-left text-white">
        Simplify how your team works today.
      </h2>
      <div>
        <button className='btn bg-white text-brightRed hover:bg-veryPaleRed hover:opacity-100 '>Get Started</button>
      </div>
    </div>
    </div>
  )
}

export default Banner