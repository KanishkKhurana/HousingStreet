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
            <h1 className='font-secondary text-[#FF5A5F] text-2xl'>Maha Bachat</h1>
        </div>
        <div className='font-secondary'>
            <p className='text-lg'><strike>₹ 5,000</strike></p>
            <h3 className='text-5xl'>₹ 0</h3>
            <p className='font-primary text-lg'><strike>15 days rent</strike> 0 Days Rent</p>
        </div>
        <div className='w-full p-[0.5px] bg-black/30' />
        <div className='text-sm flex flex-col gap-3'>
            <div className='flex items-center gap-2'>
                <BsFillCheckCircleFill className='text-emerald-600' />
                <p>Local Area Service Provider List Access</p>
            </div>
            <div className='flex items-center gap-2'>
                <BsFillCheckCircleFill className='text-emerald-600' />
                <p>Personal Relationship Officer</p>
            </div>
            <div className='flex items-center gap-2'>
                <BsFillCheckCircleFill className='text-emerald-600' />
                <p>Rent Agreement - ₹400</p>
            </div>
        </div>
        </div>
    </div>
  )
}
