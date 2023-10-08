import Image from 'next/image'
import React from 'react'
import Placeholder from "@/images/placeholder3.png"
import Link from 'next/link'
import {AiOutlineEye}  from "react-icons/ai"
import {RiEditBoxLine}  from "react-icons/ri"


export default function PropertyCard(props) {
  return (
    <div className='flex items-center gap-5 bg-[#FFF5F5] p-3 shadow-lg hover:scale-105 duration-300 ease-in-out'>
        <div className=' basis-1/3'>
            <Image src={Placeholder} alt="HousingStreet" className='w-full h-full object-cover' />
        </div>
        <div className='flex flex-col gap-2 '>
            <div>
                <div className='flex justify-between'>
                <p  className='border border-black/40 text-black font-normal px-3 py-0.5 rounded-full w-fit mb-2 text-[8px]'>For Rent</p>
                <Link className='' href="my-properties/edit/1">            
                    <RiEditBoxLine />
                </Link> 
                </div>
                <h1 className='font-semibold text-[8px]'>Yumiko House</h1>
                <h3 className='text-[6px] w-3/4'>B-131, Block B, Dr Ambedkar Colony, 
Chhatarpur, New Delhi, Delhi 110074, India</h3>
            </div>
            <div className='text-[6px] flex items-center  gap-1'>    
            <AiOutlineEye className='text-sm' />            
                <p>2 Views </p>
                
            </div>
            <div className='flex flex-col gap-1'>
                <Link href="my-properties/rent-invoice" className='border   border-[#FF5A5F] text-[#FF5A5F] font-normal px-5 text-center py-0.5 rounded-full text-[8px] w-fit'>View Rent Invoice</Link>
            </div>
            
        </div>
    </div>
  )
}
