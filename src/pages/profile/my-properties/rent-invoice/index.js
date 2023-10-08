import Image from 'next/image'
import React from 'react'
import Invoice from "@/images/invoicePlaceholder.png"

export default function Index() {
  return (
    <div className='py-20 text-black font-primary mx-8 font-thin'>
    <h1 className='text-center text-xl mt-5 font-medium'>
        Rent Invoice
    </h1>    
    
    <div className='flex flex-col justify-center mt-5'>
    <button className='border   border-[#FF5A5F] text-[#FF5A5F] font-normal px-5 text-center py-1 rounded-full text-xs mb-5'>Download Rent Invoice</button>
        <Image src={Invoice} alt="HousingStreet" />
    </div>
    </div>
  )
}