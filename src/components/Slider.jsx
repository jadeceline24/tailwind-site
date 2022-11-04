import React, { useState } from 'react'
import {person} from '../assets/data'
import { Slide } from './useSlide'

const Slider = () => {
  const [current, setCurrent] = useState(0)
  const [isActive, setActive] = useState(false)
  const gotoSlide = (value) => {
    setCurrent(value)
    setActive(isActive)
  }
  return (
    <div className='sm:container sm:mx-auto flex flex-col justify-center sm:px-6 pb-10 md:pb-40'>
        <h2 className='text-3xl text-darkBlue font-bold py-20 max-w-md md:pt-10 mx-auto md:text-4xl'>What they’ve said</h2>
        
        <Slide />
        
        <div className='flex md:hidden '>
          <div className="flex flex-col space-y-5 justify-center items-center rounded-lg px-10 bg-veryLightGray">
          <img className='h-20 w-20 -mt-12 ' src={person[current].img} alt={person[current].name} />
              <h3 className='font-bold text-xl text-veryDarkBlue '>{person[current].name}</h3>
              <p className='text-darkGrayBlue max-w-sm pb-10 text-lg text-center '>{person[current].comment}</p>
          </div>
        
        </div>
        <div className="flex justify-center py-5 space-x-1 md:hidden ">
        
             <span className="circ md:hidden {isActive ? bg-white : bg-white}" onClick={() => gotoSlide(0)}>
            </span>
            <span className="circ md:hidden {isActive ? bg-brightRed : bg-white}" onClick={() => gotoSlide(1)}>
            </span>
            <span className="circ md:hidden " onClick={() => gotoSlide(2)}>
            </span>
            <span className="circ md:hidden " onClick={() => gotoSlide(3)}>
            </span>
            </div>

         
         
        <div className="flex justify-center">
          <button className="btn shadow-lg shadow-brightRed/50">Get Started</button>
        </div>
        
        
       
    </div>
  )
}

export default Slider