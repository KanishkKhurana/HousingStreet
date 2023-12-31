import React from 'react'
import Image from 'next/image'
import Placeholder from "@/images/placeholder4.png"
import {AiOutlineHeart} from "react-icons/ai"

export default function PropertyCard() {
  return (
    <div className='bg-[#FFF5F5] p-2 rounded-xl drop-shadow-xl xl:p-5 hover:scale-105 duration-300 ease-in-out focus:border focus:border-black relative'>
        <div className='flex justify-center w-full'>
            <Image src={Placeholder} alt="HousingStreet"  className='rounded-xl w-full '/>
        </div>
        <div className='my-2'>

            
                <h1 className='text-sm xl:text-2xl font-medium'>Flat / Apartment</h1>
                <p className='text-[0.75rem] xl:text-base font-thin'>Chattarpur, Delhi</p>
            
        
        </div>
            <div className='bg-white/40 w-fit p-1 absolute top-3 right-3 xl:right-6 xl:top-6 rounded-full focus:bg-white focus:text-red-400'>
                <AiOutlineHeart />
            </div>
    </div>
  )
}
