import React from 'react'
import Contact from './Contact'

export default function Testimonials() {
  return (
    <div className='bgImg bgImg2 md:p-20 p-3 mt-20'>
        <div className="pb-8">
            <h2 className='text-center font-semibold text-4xl text-white'>Customers Says</h2>
            <div className="max-w-[80px] rounded-md mx-auto mt-4 p-1 bg-slate-100 relative">
                <div className="w-2 h-2 bg-yellow-500 rounded-full move"></div>
            </div>
        </div>
        <div className="flex md:flex-nowrap flex-wrap gap-5 text-white">
            <div className="">
                <h2 className='text-3xl font-medium pb-3'>Den Mark</h2>
                <div className="border-2 border-yellow-500 p-2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum nobis delectus quisquam, porro totam voluptatibus dolorem et voluptas. Voluptatibus quas aspernatur natus, amet ad magnam dignissimos doloribus tempora consequuntur. Ea.
                </div>
            </div>
            <div className="">
                <h2 className='text-3xl font-medium pb-3'>Loliy Mark</h2>
                <div className="border-2 border-yellow-500 p-2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum nobis delectus quisquam, porro totam voluptatibus dolorem et voluptas. Voluptatibus quas aspernatur natus, amet ad magnam dignissimos doloribus tempora consequuntur. Ea.
                </div>
            </div>
            <div className="">
                <h2 className='text-3xl font-medium pb-3'>Jonshon Mark</h2>
                <div className="border-2 border-yellow-500 p-2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum nobis delectus quisquam, porro totam voluptatibus dolorem et voluptas. Voluptatibus quas aspernatur natus, amet ad magnam dignissimos doloribus tempora consequuntur. Ea.
                </div>
            </div>
        </div>
        <Contact/>
    </div>
  )
}
