import React from 'react'

export default function Collection() {
  return (
    <div className='py-10 md:max-w-[90%] max-w-[100%] mx-auto p-2'>
        <div className="pb-8">
            <h2 className='text-center font-semibold text-4xl'>Collections Food In city</h2>
            <div className="max-w-[80px] rounded-md mx-auto mt-4 p-1 bg-slate-800 relative">
                <div className="w-2 h-2 bg-yellow-500 rounded-full move"></div>
            </div>
        </div>
        <div className="flex justify-around gap-5 flex-wrap">
            <div className="md:w-[32%] shadow-md p-3 rounded-md bg-white">
                <div className="">
                    <div className="">
                        <img src="blog-img1.png" alt="blog-img1" />
                    </div>
                    <div className="pt-4">
                        <h2 className='text-3xl font-medium pb-4'>This Week going</h2>
                        <p>Long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed</p>
                        <button className='px-6 py-2 bg-yellow-500 text-white mt-5 rounded-sm'>Read More</button>
                    </div>
                </div>
            </div>
            <div className="md:w-[32%] shadow-md p-3 rounded-md bg-white">
                <div className="">
                    <div className="">
                        <img src="blog-img2.png" alt="blog-img1" />
                    </div>
                    <div className="pt-4">
                        <h2 className='text-3xl font-medium pb-4'>Just Delivery Food</h2>
                        <p>Long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed</p>
                        <button className='px-6 py-2 bg-yellow-500 text-white mt-5 rounded-sm'>Read More</button>
                    </div>
                </div>
            </div>
            <div className="md:w-[32%] shadow-md p-3 rounded-md bg-white">
                <div className="">
                    <div className="">
                        <img src="blog-img3.png" alt="blog-img1" />
                    </div>
                    <div className="pt-4">
                        <h2 className='text-3xl font-medium pb-4'>Newly Opened Cafe</h2>
                        <p>Long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed</p>
                        <button className='px-6 py-2 bg-yellow-500 text-white mt-5 rounded-sm'>Read More</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
