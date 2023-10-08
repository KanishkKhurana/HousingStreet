import Image from 'next/image'
import React from 'react'
import Placeholder from "@/images/placeholder3.png"
import Link from 'next/link'
import {AiOutlineEye}  from "react-icons/ai"
import {RiEditBoxLine}  from "react-icons/ri"


export default function PlanCard(props) {
  return (
    <div className={`flex ${props.available ? "bg-[#FFF5F5]": "bg-[#F2F2F2]"} items-center gap-5  p-3 shadow-lg hover:scale-105 duration-300 ease-in-out`}>
       
        <div className='flex flex-col gap-2 w-full'>
            <div>                
                <h1 className='font-semibold '>RAJA</h1>
                <h3 className='text-xs'>24 Feb 2022 | 02:44:51 am</h3>
<button className='text-[#FF5A5F] text-xs  font-bold'>View Details</button>
            </div>            
            <div className='flex justify-between gap-1 w-full '>
                <div>
                <h1 className='font-semibold'>₹3,600</h1>
                <p className='text-xs '>(Paid)</p>
                </div>
                <div className='flex flex-col gap-2'>
                <button  className={`border ${props.available ? "bg-[#FF5A5F] border-[#FF5A5F] " : "bg-[#7A7A7A] border-[#7A7A7A]"}  btn-pop  text-white  font-normal px-5 text-center h-fit py-1 rounded-full text-[8px] w-fit`}>Payment {props.available? "available" : "used"}</button>
                <button className='border btn-pop  border-[#FF5A5F] text-[#FF5A5F] font-normal px-5 text-center h-fit py-1 rounded-full text-[8px] w-fit'>Download Invoice</button>
                </div>
            </div>
            
        </div>
    </div>
  )
}
