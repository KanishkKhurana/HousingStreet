import React from 'react'
import Link from 'next/link'
import {AiFillStar} from "react-icons/ai"

export default function Index() {
  return (
    <div className='py-20 text-black font-primary mx-8 font-thin'>
    <h1 className='text-center text-xl mt-5 font-medium'>
        Local Service Providers
    </h1>     
    <div className='mt-5 grid grid-cols-2 gap-3'>
        <div className='border-[0.25px] border-[#FF5A5F] p-3 rounded-xl bg-[#FFF5F5] '>
            <p className='text-xs'>Name</p>
            <h3 className='font-medium'>Akshay Gupta</h3>
            <p className='text-xs mt-2'>Phone</p>
            <h3 className='font-medium'>+91 8965896589</h3>
            <p className='text-xs mt-2'>Rating</p>
            <div className='flex gap-1'>
                <AiFillStar className='text-yellow-400 text-2xl' />
                <AiFillStar className='text-yellow-400 text-2xl' />
            </div>
        </div>

        <div className='border-[0.25px] border-[#FF5A5F] p-3 rounded-xl bg-[#FFF5F5] '>
            <p className='text-xs'>Name</p>
            <h3 className='font-medium'>Akshay Gupta</h3>
            <p className='text-xs mt-2'>Phone</p>
            <h3 className='font-medium'>+91 8965896589</h3>
            <p className='text-xs mt-2'>Rating</p>
            <div className='flex gap-1'>
                <AiFillStar className='text-yellow-400 text-2xl' />
                <AiFillStar className='text-yellow-400 text-2xl' />
            </div>
        </div>
    </div>   
    
  
    
    
    
    
    <div className='mt-8'>
        <Link href="/profile/local-service-providers/" className='font-medium btn-pop text-white rounded-full bg-[#FF5A5F] px-10 py-2'>Back to Search</Link>
    </div>
</div>
  )
}
