import React from 'react'

export default function GetApp() {
  return (
    <div className='my-10 bg-white px-3 py-10 flex justify-center gap-5 items-center flex-wrap mx-auto'>
        <div className="md:w-[45%]">
            <h2 className='md:text-6xl text-4xl text-center text-yellow-500 font-semibold'>
                Get The
                <span className="text-black"><br /> MJ's_Food App</span>
            </h2>
            <div className="max-w-[80px] rounded-md mx-auto mt-4 p-1 bg-slate-800 relative">
                <div className="w-2 h-2 bg-yellow-500 rounded-full move"></div>
            </div>
            <p className="pt-6 text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam veritatis qui unde voluptates molestiae. Minus blanditiis ab vero laborum vitae iste. Cumque, obcaecati quas? Saepe officiis minus tempore quam illo?</p>
            <div className="mt-6 flex justify-center items-center gap-4">
                <div className="">
                    <img src="icon-1.png" alt="" />
                </div>
                <div className="">
                    <img src="icon-1.png" alt="" />
                </div>
            </div>
            <div className="mt-6 flex justify-center">
                <button className='px-7 py-3 font-medium bg-black text-white'>Download Now</button>
            </div>
        </div>
        <div className="md:w-[45%] w-[97%]">
            <div className="max-w-[350px] p-2">
                <img className='max-w-[100%]' src="mobile.png" alt="mobile" />
            </div>
        </div>
    </div>
  )
}
