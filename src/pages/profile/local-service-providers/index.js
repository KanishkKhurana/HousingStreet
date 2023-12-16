import Link from 'next/link'
import React from 'react'
import {AiOutlineDown} from "react-icons/ai"

export default function Index() {
  return (
    <div className='py-20 text-black font-primary mx-8 xl:mx-44 font-thin'>
    <h1 className='text-center text-xl xl:text-5xl mt-5 font-medium'>
        Local Service Providers
    </h1>        
    <div className='mt-5'>
        <p className='text-sm xl:text-lg'>Select City</p>
        <div className='bg-[#EEEEEE] flex items-center w-full rounded-md  px-5 py-1.5'>
      <select
            name="token"
            id="token"
            className=" font-normal w-full appearance-none  bg-transparent py-1"                                  
          >
            <option value="Vasant Kunj">Vasant Kunj</option>
            <option value="Chattarpur">Chattarpur</option>
          </select>
          <AiOutlineDown />
      </div>
    </div>
    <div className='mt-5'>
        <p className='text-sm xl:text-lg'>Locality</p>
        <div className='bg-[#EEEEEE] flex items-center w-full rounded-md  px-5 py-1.5'>
      <select
            name="token"
            id="token"
            className=" font-normal w-full appearance-none  bg-transparent py-1"                                  
          >
            <option value="Vasant Kunj">Vasant Kunj</option>
            <option value="Chattarpur">Chattarpur</option>
          </select>
          <AiOutlineDown />
      </div>
    </div>
    <div className='mt-5'>
        <p className='text-sm xl:text-lg'>Sub-Locality</p>
        <div className='bg-[#EEEEEE] flex items-center w-full rounded-md  px-5 py-1.5'>
      <select
            name="token"
            id="token"
            className=" font-normal w-full appearance-none  bg-transparent py-1"                                  
          >
            <option value="Vasant Kunj">Vasant Kunj</option>
            <option value="Chattarpur">Chattarpur</option>
          </select>
          <AiOutlineDown />
      </div>
    </div>
    <div className='mt-5'>
        <p className='text-sm xl:text-lg'>Services</p>
        <div className='bg-[#EEEEEE] flex items-center w-full rounded-md  px-5 py-1.5'>
      <select
            name="token"
            id="token"
            className="  text-[#FF5A5F] font-bold w-full appearance-none  bg-transparent py-1"                                  
          >
            <option value="Electrician">Electrician</option>
            <option value="Maid">Maid</option>
            <option value="Plumber">Plumber</option>
          </select>
          <AiOutlineDown />
      </div>
    </div>
  
    
    
    
    
    <div className='mt-8'>
        <Link href="local-service-providers/list" className='font-medium btn-pop text-white xl:text-2xl rounded-full bg-[#FF5A5F] px-10 py-2'>Search</Link>
    </div>
</div>
  )
}
