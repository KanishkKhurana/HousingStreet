/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import { BiCurrentLocation } from "react-icons/bi";
import {LiaToiletSolid} from "react-icons/lia"
import {SlSizeFullscreen} from "react-icons/sl"
import {AiOutlineHeart} from "react-icons/ai"
import {BiBed} from "react-icons/bi"
import Image from 'next/image';
import Park from "@/images/park.png"
import Parking from "@/images/parking.png"


export default function Description(props) {
  return (
    <div className='px-5 xl:px-20 py-8 border-b border-black/50 shadow-md'>
        <div className='flex justify-between'>
            <h3 className='font-bold xl:text-xl text-[#FF5A5F]'>2BHK</h3>
            <p className='border rounded-full px-5 py-1 xl:text-base text-xs border-black'>For Rent</p>
        </div>
        <div>
            <h1 className='font-bold text-lg xl:text-3xl mt-2'>Flat / Apartment (Non-Furnished)</h1>
            <div className=" mt-1 flex gap-2 font-thin items-center text-sm xl:text-base">
            <BiCurrentLocation className="" />
            <button className="">Chattarpur, Delhi</button>
            </div>
        </div>
        <div className='flex justify-evenly text-[0.75rem] xl:text-lg gap-3 my-5 xl:justify-start xl:gap-20'>
            <div className='flex font-thin  w-fit bg-white py-2 px-3  items-center gap-2 justify-center '>
                <BiBed />
                <p>{"2"+ " "}Bedroom </p>
            </div>
            <div className='flex font-thin  w-fit bg-white py-1 px-2  items-center gap-2 justify-center'>
                <LiaToiletSolid />
                <p>{"2"+ " "}Bathroom </p>
            </div>
            <div className='flex font-thin  w-fit bg-white py-1 px-2  items-center gap-2 justify-center'>
                <SlSizeFullscreen />
                <p>{"200"+ " "}sq. ft. </p>
            </div>
        </div>
        <div className='text-sm xl:text-xl font-thin mt-3'>
            <p>Explore this spacious 2BHK gem nestled in Shanti Kunj, Vasant Kunj, Delhi. With meticulous design, modern amenities, and an enviable location, this opportunity promises a comfortable and convenient lifestyle. Don't wait - secure your chance to own this remarkable apartment today.</p>
            <button className='border my-3 w-fit text-[#FF5A5F] rounded-full px-5 py-1 xl:text-base text-xs btn-pop border-[#FF5A5F]'>Add To Compare</button>


        </div>

        <h3 className='font-semibold mt-2 xl:text-2xl'>Amentites</h3>
        <div className='grid grid-cols-4  mt-3 font-thin text-sm xl:text-xl'>

            <div className="flex flex-col justify-center items-center text-center ">
                <Image src={Parking} alt="HousingStreet" />
                <p>Reserved Parking</p>
            </div>
            <div>
                <Image src={Park} alt="HousingStreet" />
                <p>Park</p>
            </div>

        </div>
        
        <h1 className='mt-8 font-semibold xl:text-2xl'>Details</h1>
        <div className='flex justify-between gap-3 text-xs xl:text-xl mt-2 font-thin xl:justify-start xl:gap-20'>
            <div className=''>
                <h6>Available from</h6>
                <p className='font-semibold text-[#FF5A5F]'>11 Apr 2023</p>
            </div>
            <div className=''>
                <h6>Property Size</h6>
                <p className='font-semibold text-[#FF5A5F]'>543 sq. ft.</p>
            </div>
            <div className=''>
                <h6>Built Year</h6>
                <p className='font-semibold text-[#FF5A5F]'>2009</p>
            </div>
            <div className=''>
                <h6>Total Floors</h6>
                <p className='font-semibold text-[#FF5A5F]'>4</p>
            </div>
            
        </div>

        <h1 className='mt-8 font-semibold xl:text-2xl'>Other Details</h1>
        <div>
            <ul className='font-thin list-disc ml-5 mt-2 text-sm xl:text-xl'>
                <li>Security Deposit- <span className='font-medium'>1 Month</span></li>
                <li>Maintenance Monthly- <span className='font-medium'>Rs 1000</span></li>
                <li>Electricity & Water Bill- <span className='font-medium'>Separate</span></li>
                <li>Agreement Type- <span className='font-medium'>Custom</span></li>
            </ul>
        </div>

        <div className='mt-8 font-semibold xl:text-2xl'>
            <h1>Location</h1>
            <div className='p-12 w-full bg-slate-400/20 rounded-xl' />
        </div>

        <p className='font-semibold mt-8 text-xs xl:text-2xl'>Price</p>
        <div className='flex justify-between items-center'>
            <div className='flex  gap-1 items-center '>
                <h3 className='font-secondary text-xl xl:text-4xl'>₹ {"14,999"}</h3>
                <p className='font-thin text-[10px] xl:text-base'>/ month</p>
            </div>
            <div>
            <button className='border my-3 w-fit text-[#FF5A5F] rounded-xl px-8 py-1 xl: text-xl btn-pop font-medium border-[#FF5A5F]'>Book Now</button>
            </div>
        </div>

    </div>
  )
}
