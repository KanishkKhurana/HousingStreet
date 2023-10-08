import React from 'react'
import SearchPlaceholder from "@/images/searchPlaceholder.png"
import Image from 'next/image'

export default function SearchResultCard(props) {
  return (
    <div className='flex items-center font-primary gap-3'>
        <div>
            <Image src={SearchPlaceholder} alt="HousingStreet" />
        </div>
        <div>
            <div>
                <h1 className='font-semibold'>
                    {props.heading || "Flat/Apartment (Non-Furnished)"}
                </h1>
            </div>
            <div className='text-sm flex gap-5 '>
                <p className='text-[#828282]'>{props.place || "Chattarpur, Delhi"}</p>
                <p className='text-[#FF5A5F]'>{props.type || "Rent"}</p>
            </div>
        </div>
    </div>
  )
}
