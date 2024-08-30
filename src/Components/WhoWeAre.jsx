import React from 'react'

export default function WhoWeAre() {
  return (
    <div>
        <div className='flex justify-around flex-wrap px-3 gap-6 md:my-20 md:max-w-[80%] mx-auto'>
            <div className="md:w-[45%] w-full">
                <div className=" text-center md:hidden block">
                    <h1 className='md:text-4xl text-3xl font-semibold'>Who We Are</h1>
                    <div className="max-w-[80px] rounded-md mx-auto mt-4 p-1 bg-slate-800 relative">
                        <div className="w-2 h-2 bg-yellow-500 rounded-full move"></div>
                    </div>
                </div>
                <div className="mt-6">
                    <img className='' src="bg.jpg" alt="restaurant" />
                </div>
            </div>
            <div className="md:w-[45%] w-full">
                <div className=" text-center hidden md:block">
                    <h1 className='md:text-4xl text-3xl font-semibold'>Who We Are</h1>
                    <div className="max-w-[80px] rounded-md mx-auto mt-4 p-1 bg-slate-800 relative">
                        <div className="w-2 h-2 bg-yellow-500 rounded-full move"></div>
                    </div>
                </div>
                <div className="text-center md:pt-6">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, provident, deserunt eaque reiciendis error dolorum perspiciatis, officia non eos veniam impedit nostrum animi est. Facere porro similique ipsa minus fuga!</p>
                    <p className='py-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, provident, deserunt eaque reiciendis error dolorum perspiciatis, officia non eos veniam impedit nostrum animi est. Facere porro similique ipsa minus fuga!</p>
                </div>
            </div>
        </div>
    </div>
  )
}
