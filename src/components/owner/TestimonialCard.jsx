import React from 'react'
import {AiFillStar} from "react-icons/ai"
import {BsFillPersonFill} from "react-icons/bs"

export default function TestimonialCard() {
  return (
    <div className='bg-[#FF5A5F] p-5 flex flex-col gap-5 rounded-xl'>
        <p className='text-white text-xs xl:text-2xl'>No hidden charges, honest advice and conditions about flats and areas.</p>
        <div className='flex gap-3 justify-center'>
            <div className='bg-white rounded-full p-1 w-fit h-fit '>
                <BsFillPersonFill className='text-black/20' />
            </div>
            <div >
                <h3 className='font-medium text-white xl:text-lg'>Jitesh Saini</h3>
                <AiFillStar className='text-yellow-400 ' />


            </div>
        </div>
    </div>
  )
}
