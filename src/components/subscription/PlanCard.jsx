import React from 'react'
import {BsFillCheckCircleFill} from "react-icons/bs"

export default function PlanCard() {
  return (
    <div className='relative p-5 font-primary drop-shadow-xl hover:scale-105 duration-300 ease-in-out'>
        <div className='bg-[#FF5A5F] w-fit px-5 py-1 rounded-xl drop-shadow-xl shadow-md absolute left-10 top-1'>
            <p className='text-white'>Popular</p>
        </div>
        <div className='flex flex-col gap-5 border rounded-xl border-black py-10 p-5 bg-[#FFF5F5]'>
            
        <div>
            <h1 className='font-primary text-black font-medium'>Maha Bachat</h1>
        </div>
        <div className='font-secondary'>
            <p className='text-sm'><strike>₹ 5,000</strike></p>
            <h3 className='text-xl'>₹ 3,333</h3>
            <p className='font-primary text-xs'><strike>15 days rent</strike> <br /> 0 Days Rent</p>
        </div>
        
        </div>
    </div>
  )
}
