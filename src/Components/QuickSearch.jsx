import React from 'react'

export default function QuickSearch() {
  return (
    <div className='flex justify-center gap-6 flex-wrap py-20'>
        <div className="bg-white text-white shadow-md p-3">
            <div className="flex justify-center items-center p-2">
                <img className='h-[80px]' src="/breakfast-img.png" alt="breakfast" />
            </div>
            <h2 className='text-black md:font-medium text-center text-2xl py-4'>Breakfast</h2>
            <div className="">
                <button className='h-[45px] w-[130px] font-medium bg-yellow-500'>SEE MORE</button>
            </div>
        </div>
        <div className="bg-white text-white shadow-md p-3">
            <div className="flex justify-center items-center p-2">
                <img className='h-[80px]' src="delivery-img.png" alt="delivery-img" />
            </div>
            <h2 className='text-black md:font-medium text-center text-2xl py-4'>Delivery</h2>
            <div className="">
                <button className='h-[45px] w-[130px] font-medium bg-yellow-500'>SEE MORE</button>
            </div>
        </div>
        <div className="bg-white text-white shadow-md p-3">
            <div className="flex justify-center items-center p-2">
                <img className='h-[80px]' src="dinner-img.png" alt="Dinner" />
            </div>
            <h2 className='text-black md:font-medium text-center text-2xl py-4'>Dinner</h2>
            <div className="">
                <button className='h-[45px] w-[130px] font-medium bg-yellow-500'>SEE MORE</button>
            </div>
        </div>
        <div className="bg-white text-white shadow-md p-3">
            <div className="flex justify-center items-center p-2">
                <img className='h-[80px]' src="coffee-img.png" alt="coffee" />
            </div>
            <h2 className='text-black md:font-medium text-center text-2xl py-4'>Coffee</h2>
            <div className="">
                <button className='h-[45px] w-[130px] font-medium bg-yellow-500'>SEE MORE</button>
            </div>
        </div>
        <div className="bg-white text-white shadow-md p-3">
            <div className="flex justify-center items-center p-2">
                <img className='h-[80px]' src="alcohol-img.png" alt="alcohol-img" />
            </div>
            <h2 className='text-black md:font-medium text-center text-2xl py-4'>Alcohol</h2>
            <div className="">
                <button className='h-[45px] w-[130px] font-medium bg-yellow-500'>SEE MORE</button>
            </div>
        </div>
        <div className="bg-white text-white shadow-md p-3">
            <div className="flex justify-center items-center p-2">
                <img className='h-[80px]' src="diningtable-img.png" alt="diningtable-img" />
            </div>
            <h2 className='text-black md:font-medium text-center text-2xl py-4'>Diningtable</h2>
            <div className="">
                <button className='h-[45px] w-[130px] font-medium bg-yellow-500'>SEE MORE</button>
            </div>
        </div>
    </div>
  )
}
