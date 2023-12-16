import Link from 'next/link'
import React from 'react'
import {CiUser} from "react-icons/ci"
import {AiOutlineRight} from "react-icons/ai"
import {BsPersonCheck} from "react-icons/bs"
import {BsHouses} from "react-icons/bs"
import {BsGear} from "react-icons/bs"
import {GoHistory} from "react-icons/go"
import {LiaBalanceScaleRightSolid} from "react-icons/lia"
import {LuHelpingHand} from "react-icons/lu"
import {FaQuestion} from "react-icons/fa6"
import {MdOutlinePrivacyTip} from "react-icons/md"
import {GrContact} from "react-icons/gr"


export default function Index() {
  return (
    <div className='py-20 pb-16 text-black font-primary'>
        <div className='flex items-center gap-5 justify-center my-5'>
            <div className="p-5 w-20 bg-slate-300/80 rounded-xl h-20 xl:h-44 xl:w-44" />
            <div>
                <h1 className='font-bold text-lg xl:text-3xl'>Jenny Streets</h1>
                <p className='font-thin text-sm xl:text-lg'>jenny@gmail.com</p>
            </div>
        </div>
        <div className='bg-[#FFF5F5] h-full pb-16 px-5 py-8 xl:px-44 flex flex-col gap-8'>
            <Link href="profile/personal-data" className='flex justify-between items-center btn-pop'>
                <div className='flex gap-2 items-center font-medium'>
                    <CiUser className='text-4xl' />
                    Personal Data
                </div>
                <div className='bg-[#EEEEEE] p-3 rounded-full'>
                    <AiOutlineRight />
                </div>
            </Link>

            <Link href="profile/my-plans" className='flex justify-between items-center btn-pop'>
                <div className='flex gap-2 items-center font-medium'>
                    <BsPersonCheck className='text-4xl' />
                    My Plans
                </div>
                <div className='bg-[#EEEEEE] p-3 rounded-full'>
                    <AiOutlineRight />
                </div>
            </Link>

            <Link href="profile/my-properties" className='flex justify-between items-center btn-pop'>
                <div className='flex gap-2 items-center font-medium'>
                    <BsHouses className='text-4xl' />
                    My Properties
                </div>
                <div className='bg-[#EEEEEE] p-3 rounded-full'>
                    <AiOutlineRight />
                </div>
            </Link>

            <Link href="profile/payment-history" className='flex justify-between items-center btn-pop'>
                <div className='flex gap-2 items-center font-medium'>
                    <GoHistory className='text-4xl' />
                    Payment History
                </div>
                <div className='bg-[#EEEEEE] p-3 rounded-full'>
                    <AiOutlineRight />
                </div>
            </Link>

            <Link href="profile/compare-properties" className='flex justify-between items-center btn-pop'>
                <div className='flex gap-2 items-center font-medium'>
                    <LiaBalanceScaleRightSolid className='text-4xl' />
                    Compare Properties
                </div>
                <div className='bg-[#EEEEEE] p-3 rounded-full'>
                    <AiOutlineRight />
                </div>
            </Link>

            <Link href="profile/local-service-providers" className='flex justify-between items-center btn-pop'>
                <div className='flex gap-2 items-center font-medium'>
                    <LuHelpingHand className='text-4xl' />
                    Local Service Providers
                </div>
                <div className='bg-[#EEEEEE] p-3 rounded-full'>
                    <AiOutlineRight />
                </div>
            </Link>

            {/* <Link href="profile/settings" className='flex justify-between items-center btn-pop'>
                <div className='flex gap-2 items-center font-medium'>
                    <BsGear className='text-4xl' />
                    Settings
                </div>
                <div className='bg-[#EEEEEE] p-3 rounded-full'>
                    <AiOutlineRight />
                </div>
            </Link> */}

            <Link href="/faqs" className='flex justify-between items-center btn-pop'>
                <div className='flex gap-2 items-center font-medium'>
                    <FaQuestion className='text-4xl' />
                    FAQs
                </div>
                <div className='bg-[#EEEEEE] p-3 rounded-full'>
                    <AiOutlineRight />
                </div>
            </Link>

            <Link href="profile" className='flex justify-between items-center btn-pop'>
                <div className='flex gap-2 items-center font-medium'>
                    <MdOutlinePrivacyTip className='text-4xl' />
                    Privacy Policy
                </div>
                <div className='bg-[#EEEEEE] p-3 rounded-full'>
                    <AiOutlineRight />
                </div>
            </Link>

            <Link href="profile/contact-us" className='flex justify-between items-center btn-pop'>
                <div className='flex gap-2 items-center font-medium'>
                    <GrContact className='text-4xl' />
                    Contact Us
                </div>
                <div className='bg-[#EEEEEE] p-3 rounded-full'>
                    <AiOutlineRight />
                </div>
            </Link>

        </div>
    </div>
  )
}
