import React from 'react'
import Image from 'next/image'
import Placeholder1 from "@/images/placeholder1.png"
import {FcGoogle} from "react-icons/fc"
import Link from 'next/link'

export default function index() {
  return (
    <div className='bg-[#ff5a603d] text-black min-h-screen font-primary flex flex-col items-center py-10'>
        <div>
            <Image src={Placeholder1} alt="get started with housingstreet" />
        </div>
        <div className='my-5'>
            <h1 className='font-secondary text-xs text-center'>
                A Street for <br /> <span className='text-2xl'>Renting Home</span>
            </h1>
        </div>
        <div className='flex gap-5 font-thin mb-10 text-sm'>
            <div>
                <Link href="getting-started/login" className='border py-2.5 border-black  px-9 rounded-xl btn-pop'>
                    Log In
                </Link>
            </div>
            <div>
                <Link href="getting-started/register" className='border py-2.5 border-black text-white bg-black px-9 rounded-xl btn-pop'>
                    Register
                </Link>
            </div>
        </div>
        <div className='flex w-full font-light'>
            <div className='border-t-[0.25px] w-full mt-3 p-5 border-black' />
            <div className='px-5'><p>or</p></div>
            <div className='border-t-[0.25px] w-full mt-3 p-5 border-black' />            
        </div>
        <div>
            <button className=' text-5xl px-12 py-1.5 rounded-xl bg-white/30 btn-pop'>
                <FcGoogle className='' />
            </button>
        </div>
    </div>
  )
}
