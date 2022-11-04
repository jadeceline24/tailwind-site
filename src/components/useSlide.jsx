import React from 'react'
import {person} from '../assets/data'
export const Slide = () => {
  return (
    <div className='md:h-2/4 md:w-full md:overflow-hidden md:mx-0 md:mb-10'>
        <div className='slide flex flex-nowrap space-x-5 md:h-full md:w-[2000px] '>
          
          {person.map((data, key) => (
          <div className="w-full mt-12">
          <div className=" flex flex-col space-y-5 justify-center items-center rounded-lg px-5 bg-veryLightGray ">   
           <img key={key} className='h-20 w-20 -mt-12 ' src={data.img} alt={data.name} />
              <h3 className='font-bold text-xl text-veryDarkBlue'>{data.name}</h3>
              <p className='text-darkGrayBlue max-w-sm pb-10 text-lg text-center'>{data.comment}</p>
          
              </div>
              </div>
          )
          )}
         
        </div>
    </div>
  )
}
