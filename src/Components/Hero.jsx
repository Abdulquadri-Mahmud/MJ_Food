import React from 'react'
import { FaBowlFood } from 'react-icons/fa6'
import { IoFastFoodOutline } from 'react-icons/io5'

export default function Hero() {
  return (
    <div className='h-[90vh] bgImg md:p-10 py-6 px-4'>
      <div className="h-full md:w-[60%] md:mx-auto flex justify-center items-center">
        <div className="text-white md:text-center">
          <h1 className='md:text-7xl text-4xl'>Delicious & Mouth Watering Test</h1>
          <p className='pt-6 md:text-xl'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta alias porro, illum est blanditiis laudantium ipsam ullam voluptatibus beatae tempora eius voluptatem, expedita inventore illo rem dolorum ab fugiat dolor.</p>
          <div className="mt-6 flex justify-center">
            <button className='w-[120px] h-[45px] bg-yellow-500'>Our Menu</button>
            <button className='w-[120px] h-[45px] bg-slate-800'>Order Now</button>
            <button className='w-[120px] h-[45px] bg-white text-black'>About Us</button>
          </div>
        </div>
      </div>
    </div>
  )
}
