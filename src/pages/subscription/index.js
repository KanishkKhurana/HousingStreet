import React, { useState } from 'react'
import Image from 'next/image'
import BookedListing from "@/images/bookedPlaceholder.png"
import KeysListing from "@/images/keysListing.png"
import PlanCard from '@/components/subscription/PlanCard'
import {AiFillCheckCircle} from "react-icons/ai"
import FaqCard from "@/components/faq/FaqCard"

export default function Index() {
    const [propertyType, setPropertyType] = useState(1)
    const [sliderVal, setSliderVal] = useState(1000)
    return (
        <div className='py-20 text-black font-primary  font-thin'>
            <h1 className='text-center text-xl mt-5 xl:text-5xl  font-medium'>
                Subscriptions
            </h1>
            <div className='xl:mx-44'>
            <div className='grid grid-cols-2 xl:grid-cols-6 xl:place-items-center mx-8 gap-5 mt-3 pb-5 border-b shadow-b-md'>
                <div className={`text-center flex flex-col items-center justify-center border  rounded-xl w-full hover:border-[#FF5A5F]  p-3 hover:text-white hover:bg-[#FF5A5F] duration-300 hover:scale-105 ${propertyType === 1 ? "text-white bg-[#FF5A5F] border-[#FF5A5F]" : "border-black"}  `} onClick={() => (setPropertyType(1))}>
                    <Image src={KeysListing} alt="HousingStreet" className={` ${propertyType === 1 ? "invert-0" : "invert"} hover:invert-0  w-1/4`} />
                    <p className='mt-2'>Owner</p>
                </div>

                <div className={`text-center flex flex-col items-center justify-center border  rounded-xl w-full hover:border-[#FF5A5F]  p-3 hover:text-white hover:bg-[#FF5A5F] duration-300 hover:scale-105 ${propertyType === 2 ? "text-white bg-[#FF5A5F] border-[#FF5A5F]" : "border-black"}  `} onClick={() => (setPropertyType(2))}>
                    <Image src={BookedListing} alt="HousingStreet" className={` ${propertyType === 2 ? "invert" : ""}   w-1/4`} />
                    <p className='mt-2'>Renter</p>
                </div>

            </div>
            </div>

            <div className='my-5 mx-8 xl:mx-44'>
                <p className='text-sm xl:text-lg'>Monthly Rent To Be Charged (5000 to 300000)</p>
                <div className='flex gap-3 items-center'>

                    <input type='range' value={sliderVal} onChange={(e) => (setSliderVal(e.target.value))} min="5000" max="300000" step="1000" className='bg-[#F5F5F5] font-medium border-[0.25px] border-[#606060] accent-[#FF5A5F] w-full p-2 rounded-xl' />

                    <p className='px-3 border border-[#FF5A5F] w-fit rounded-full '>{sliderVal}</p>
                </div>
            </div>

            <div className='flex xl:mx-44'>
                <PlanCard />
                <PlanCard />
            </div>

            <div className='my-5 p-3 bg-[#FFF5F5] flex flex-col gap-3 xl:px-44 text-xs xl:text-base'>
                <div className='font-medium text-sm xl:text-xl flex'>
                    <h3 className='basis-2/4'>
                        Features
                    </h3>
                    <h3 className='basis-1/4'>
                        Maharaja
                    </h3>
                    <h3 className='basis-1/4'>
                        Standard
                    </h3>
                </div>
                <div className='flex'>
                    <p className='basis-2/4'>
                        Payment Type
                    </p>
                    <p className='basis-1/4 text-[#FF5A5F]'>
                        Advance
                    </p>
                    <p className='basis-1/4 text-[#FF5A5F]'>
                        Pay Later
                    </p>
                </div>
                <div className='flex'>
                    <p className='basis-2/4'>
                        Local Area Service Provider List
                    </p>
                    <p className='basis-1/4 text-emerald-500 text-lg '>
                        <AiFillCheckCircle className='ml-3' />
                    </p>
                    <p className='basis-1/4 text-emerald-500 text-lg'>
                    <AiFillCheckCircle className='ml-3' />

                    </p>
                </div>
                <div className='flex'>
                    <p className='basis-2/4'>
                        Rent Agreement
                    </p>
                    <p className='basis-1/4 text-[#FF5A5F] ml-3'>
                        Free
                    </p>
                    <p className='basis-1/4 text-[#FF5A5F] ml-3'>
                        Free
                    </p>
                </div>
            </div>

            <div className='my-5 xl:my-16 mx-5 xl:mx-44'>
                <h1 className='font-medium xl:text-5xl xl:mb-12'>FAQs</h1>
                <div className='flex flex-col gap-3 xl:gap-10'>
                    <FaqCard title="How do you ensure the move is seamless?" description="Local service provider lists are given to both renters and property owners. For the former, it is to ensure they don't have trouble locating a plumber, electrician, or any other handyman after moving in. For property owners, the list is for fixing up the property before showing it to prospective clients, or after renters have vacated it." />
                    <FaqCard title="How do you ensure the move is seamless?" description="Local service provider lists are given to both renters and property owners. For the former, it is to ensure they don't have trouble locating a plumber, electrician, or any other handyman after moving in. For property owners, the list is for fixing up the property before showing it to prospective clients, or after renters have vacated it." />
                </div>
            </div>
            <div className='mt-8 border-t py-5 flex justify-center'>
        <button className='font-medium btn-pop text-white rounded-full xl:text-2xl bg-[#FF5A5F] px-10 py-2'>Buy Subscription</button>
    </div>


        </div>
    )
}
