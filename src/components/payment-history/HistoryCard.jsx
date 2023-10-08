import Image from 'next/image'
import React from 'react'
import Placeholder from "@/images/placeholder3.png"
import Link from 'next/link'
import {AiOutlineEye}  from "react-icons/ai"
import {RiEditBoxLine}  from "react-icons/ri"


export default function PropertyCard(props) {
  return (
    <div className='flex items-center gap-5 bg-[#FFF5F5] p-3 shadow-lg hover:scale-105 duration-300 ease-in-out'>
       
        <div className='flex flex-col gap-2 '>
            <div>                
                <h1 className='font-semibold '>Yumiko House</h1>
                <h3 className='text-xs w-3/4'>B-131, Block B, Dr Ambedkar Colony, 
Chhatarpur, New Delhi, Delhi 110074, India</h3>
<button className='text-[#FF5A5F] text-xs  font-bold'>View Rent Slip</button>
            </div>            
            <div className='flex justify-between gap-1'>
                <h1 className='font-semibold'>₹36000</h1>
                <div className='flex flex-col gap-2'>
                <button  className='border bg-[#FF5A5F] btn-pop border-[#FF5A5F] text-white font-normal px-5 text-center h-fit py-1 rounded-full text-[8px] w-fit'>Payment Done</button>
                <button className='border btn-pop  border-[#FF5A5F] text-[#FF5A5F] font-normal px-5 text-center h-fit py-1 rounded-full text-[8px] w-fit'>Download Invoice</button>
                </div>
            </div>
            
        </div>
    </div>
  )
}
