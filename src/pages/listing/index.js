import React from 'react'
import {GrLocation} from "react-icons/gr"
import Image from 'next/image'
import HouseListing from "@/images/houseListing.png"
import KeysListing from "@/images/keysListing.png"
import Link from 'next/link'
import ListingCard from '@/components/listing/ListingCard'
import {VscSettings} from "react-icons/vsc"

export default function Index() {
  return (
    <div className='py-20 text-black font-primary mx-5'>
      <div className='bg-[#EEEEEE] w-fit rounded-md  px-5 py-1.5'>
      <select
            name="token"
            id="token"
            className="   bg-transparent py-1"                                  
          >
            <option value="usdt">Vasant Kunj</option>
            <option value="matic">Chattarpur</option>
          </select>
      </div>
      <div className='flex mt-3 gap-1'>
        <GrLocation />
        <p>Delhi, India</p>
      </div>
      <div className='grid grid-cols-3 gap-5 mt-3'>
        <div className='text-center flex flex-col items-center justify-center border border-black rounded-xl w-full hover:border-[#FF5A5F]  p-5 hover:text-white hover:bg-[#FF5A5F] duration-300 hover:scale-105  '>
            <Image src={KeysListing} alt="HousingStreet" className='hover:invert-0 invert w-10/12' />
            <p>Rent</p>
        </div>
        <div className='text-center flex flex-col items-center justify-center border border-black rounded-xl w-full hover:border-[#FF5A5F]  p-5 hover:text-white hover:bg-[#FF5A5F] duration-300 hover:scale-105  '>
            <Image src={HouseListing} alt="HousingStreet" className='hover:invert invert-0 w-10/12' />
            <p>Buy</p>
        </div>
      </div>
      <div className='mt-3 flex justify-between'>
        <h3 className='font-semibold text-lg'>
          Featured Properties
        </h3>
        <Link href="/" className='text-[#FF5A5F]'>
        View All
        </Link>
      </div>
      <div className='mt-3 grid grid-cols-2 gap-3'>
        <ListingCard place="Chattarpur, Delhi" title="Flat / Apartment (Non-Furnished)" bedrooms="2" bathroom="2" sqft="530" price="14,999" />
        <ListingCard place="Chattarpur, Delhi" title="Flat / Apartment (Non-Furnished)" bedrooms="2" bathroom="2" sqft="530" price="14,999" />
        <ListingCard place="Chattarpur, Delhi" title="Flat / Apartment (Non-Furnished)" bedrooms="2" bathroom="2" sqft="530" price="14,999" />
      </div>
      <div className='mt-5 flex justify-between'>
        <h3 className='font-semibold text-lg'>
          Search Results
        </h3>
        <button  className='text-[#FF5A5F] bg-[#EEEEEE] px-3 py-1 btn-pop rounded flex justify-center'>
        <VscSettings className='rotate-90 mt-0.5' />
        </button>
      </div>
      <div className='mt-3 grid grid-cols-2 gap-3'>
        <ListingCard place="Chattarpur, Delhi" title="Flat / Apartment (Non-Furnished)" bedrooms="2" bathroom="2" sqft="530" price="14,999" />
        <ListingCard place="Chattarpur, Delhi" title="Flat / Apartment (Non-Furnished)" bedrooms="2" bathroom="2" sqft="530" price="14,999" />
        <ListingCard place="Chattarpur, Delhi" title="Flat / Apartment (Non-Furnished)" bedrooms="2" bathroom="2" sqft="530" price="14,999" />
      </div>
    </div>
  )
}
