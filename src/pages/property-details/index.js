import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import PropertyDetailsPlaceholder from "@/images/propertyDetailsPlaceholder.png"
import Description from '@/components/property-details/Description'
import ListingCard from '@/components/listing/ListingCard'

export default function Index() {
  return (
    <div className='py-20 text-black  font-primary '>
        <div className='bg-[#FFF5F5] '>
            <div className='flex justify-center w-full object-cover '>
                <Image src={PropertyDetailsPlaceholder} alt="HousingStreet"className='' />
            </div>
            <Description />
        </div>
        <div className='mt-8 flex justify-between px-5 xl:px-20 bg-white'>
        <h3 className='font-semibold text-lg xl:text-3xl'>
          Featured Properties
        </h3>
        <Link href="/" className='text-[#FF5A5F]'>
        View All
        </Link>
      </div>
      <div className='mt-3 grid grid-cols-2 xl:grid-cols-3 gap-3 xl:gap-5 px-5 xl:px-20 bg-white'>
        <ListingCard place="Chattarpur, Delhi" title="Flat / Apartment (Non-Furnished)" bedrooms="2" bathroom="2" sqft="530" price="14,999" />
        <ListingCard place="Chattarpur, Delhi" title="Flat / Apartment (Non-Furnished)" bedrooms="2" bathroom="2" sqft="530" price="14,999" />
        <ListingCard place="Chattarpur, Delhi" title="Flat / Apartment (Non-Furnished)" bedrooms="2" bathroom="2" sqft="530" price="14,999" />
        <ListingCard place="Chattarpur, Delhi" title="Flat / Apartment (Non-Furnished)" bedrooms="2" bathroom="2" sqft="530" price="14,999" />
      </div>
    </div>
  )
}
