import React from 'react'
import Image from 'next/image'
import ListingPlaceholder from "@/images/listingPlaceholder.png"
import {BiBed} from "react-icons/bi"
import {LiaToiletSolid} from "react-icons/lia"
import {SlSizeFullscreen} from "react-icons/sl"
import {AiOutlineHeart} from "react-icons/ai"
import Link from 'next/link'

export default function ListingCard(props) {
  return (
    <Link href="property-details">
    <div className='bg-[#F5F5F5] p-3 rounded-xl font-primary hover:scale-105 duration-300 ease-in-out'>
        <div className='flex justify-start '>
            <Image src={ListingPlaceholder} alt="HousingStreet" className='w-full' />
        </div>
        <div className='font-thin text-xs xl:text-base mt-3'>
            <h3>{props.place}</h3>
        </div>
        <div className='font-bold text-xl mb-1'>
            <h1>{props.title}</h1>
        </div>
        <div className='flex flex-col xl:grid xl:grid-cols-2 xl:gap-5 xl:text-lg gap-1 mt-3'>
            <div className='flex font-thin xl:text-lg text-xs w-fit bg-white py-1 px-2  items-center gap-2 justify-center'>
                <BiBed />
                <p>{props.bedrooms+ " "}Bedroom </p>
            </div>
            <div className='flex font-thin xl:text-lg text-xs w-fit bg-white py-1 px-2  items-center gap-2 justify-center'>
                <LiaToiletSolid />
                <p>{props.bathroom+ " "}Bathroom </p>
            </div>
            <div className='flex font-thin xl:text-lg text-xs w-fit bg-white py-1 px-2  items-center gap-2 justify-center'>
                <SlSizeFullscreen />
                <p>{props.sqft+ " "}sq. ft. </p>
            </div>
        </div>
        <div className='flex mt-3 xl:mt-6 justify-between items-center'>
            <div className='flex  gap-1 items-center '>
                <h3 className='font-secondary text-lg xl:text-4xl'>₹ {" "+props.price}</h3>
                <p className='font-thin text-[10px] xl:text-base'>/ month</p>
            </div>
            <div>
                <AiOutlineHeart className='text-lg xl:text-2xl' />
            </div>
        </div>
    </div>
    </Link>
  )
}
