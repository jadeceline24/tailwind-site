
import React from 'react'

export const ContentBox = ({num, title, text}) => {
  return (
    <div className='mx-auto pl-6 pt-10 md:pl-0'>

        <div className="bg-veryPaleRed md:bg-transparent py-3 relative z-20">

          <span className=" before:absolute before:bg-white before:h-12 before:w-5 before:top-0 before:left-0 before:-z-10 bg-brightRed font-bold  text-white text-md rounded-full px-7 py-3">{num}</span>


        <span className='text-darkBlue  md:bg-transparent font-bold pl-5'>{title}</span>
        </div>
        <p className='text-darkGrayBlue md:pl-24 pt-2 md:pt-0'>{text}</p>
        </div>
  )
}
