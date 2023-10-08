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
    <div className='text-black bg-white w-full border-b shadow-md  flex justify-center items-center pt-7 pb-5 px-3 relative'>
        <button className='bg-[#EEEEEE] w-fit h-fit p-2 rounded-xl absolute left-3 btn-pop' onClick={() => router.back()}>
            <AiOutlineLeft className='text-lg ' />
        </button>
        <div>
            <Image src={LogoMobile} alt="HousingStreet" className='' />
        </div>
        <div className='flex gap-2 absolute right-3'>
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
