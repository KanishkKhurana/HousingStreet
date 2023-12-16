import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {AiOutlineLeft} from "react-icons/ai"
import {AiOutlineHeart} from "react-icons/ai"
import {PiBellSimpleRingingBold} from "react-icons/pi"
import LogoMobile from "@/images/logoMobile.png"
import { useRouter } from 'next/router'


export default function Topbar() {
    const router = useRouter()

  return (
    <div className='text-black bg-white w-full border-b shadow-md  flex justify-center xl:justify-around items-center pt-7 pb-5 px-3 relative'>
        <button className='bg-[#EEEEEE] w-fit h-fit p-2 rounded-xl xl:hidden absolute left-3 btn-pop' onClick={() => router.back()}>
            <AiOutlineLeft className='text-lg ' />
        </button>
        <div className='xl:'>
            <Image src={LogoMobile} alt="HousingStreet" className='' />
        </div>
        <div className='xl:flex gap-16 hidden'>
            <Link href="/" className={`hover:text-[#FF5A5F] `}> Home </Link>
            <Link href="listing" className={`hover:text-[#FF5A5F] `}> Listings </Link>
            <Link href="listing" className={`hover:text-[#FF5A5F] `}> Plans </Link>
            <Link href="listing" className={`hover:text-[#FF5A5F] `}> Contact </Link>
            <Link href="listing" className={`hover:text-[#FF5A5F] `}> Owners </Link>
            <Link href="listing" className={`hover:text-[#FF5A5F] `}> Login / Register </Link>
        </div>
        <div className='flex gap-2 xl:hidden absolute right-3'>
            <div className='bg-[#EEEEEE] w-fit h-fit p-2 rounded-xl btn-pop
btn-pop'>
                <AiOutlineHeart className='text-lg ' />
            </div>
            <div className='bg-[#EEEEEE] w-fit h-fit p-2 rounded-xl btn-pop
btn-pop'>
                <PiBellSimpleRingingBold className='text-lg ' />
            </div>
        </div>
    </div>
  )
}
