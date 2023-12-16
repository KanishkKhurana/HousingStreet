import Image from 'next/image'
import React from 'react'
import Placeholder from "@/images/placeholder3.png"
import Link from 'next/link'


export default function PropertyCard(props) {
  return (
    <div className='flex items-center xl:gap-12 gap-5 bg-[#FFF5F5] p-3 rounded-xl shadow-lg hover:scale-105 duration-300 ease-in-out'>
        <div className=' basis-1/3'>
            <Image src={Placeholder} alt="HousingStreet" className='w-full h-full xl:max-h-[300px] rounded-xl object-cover' />
        </div>
        <div className='flex flex-col gap-2 xl:gap-8'>
            <div>
                <h3 className='text-[6px] xl:text-lg'>Chattarpur, Delhi</h3>
                <h1 className='font-semibold text-[8px] xl:text-3xl'>Yumiko House</h1>
            </div>
            <div className='text-[6px] xl:text-xl'>
                <p>Amount Paid - ₹ 4545 </p>
                <p>Order ID - OR441664545829 </p>
                <button className='text-[#FF5A5F] text-[8px] xl:text-lg  font-bold'>More Details</button>
            </div>
            <div className='flex flex-col gap-1'>
                <Link href="my-properties/purchase-invoice" className='border xl:text-center xl:text-lg border-[#FF5A5F] text-[#FF5A5F] font-normal px-5 py-0.5 rounded-full text-[8px]'>View Purchase Invoice</Link>
                <Link href="my-properties/book-invoice" className='border xl:text-lg  border-[#FF5A5F] text-[#FF5A5F] font-normal px-5 text-center py-0.5 rounded-full text-[8px]'>View Book Invoice</Link>
            </div>
            
        </div>
    </div>
  )
}
