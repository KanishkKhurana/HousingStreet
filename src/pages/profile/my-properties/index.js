import React, {useState} from 'react'
import Image from 'next/image'
import BookedListing from "@/images/bookedPlaceholder.png"
import KeysListing from "@/images/keysListing.png"
import ListedListing from "@/images/listedPlaceholder.png"
import PurchasedPropertyCard from '@/components/my-properties/PurchasedPropertyCard'
import BookedPropertyCard from '@/components/my-properties/BookedPropertyCard'
import ListedPropertyCard from '@/components/my-properties/ListedPropertyCard'

export default function Index() {
    const [propertyType, setPropertyType] = useState(1)
  return (
    <div className='py-20 text-black font-primary mx-8 font-thin'>
    <h1 className='text-center text-xl xl:text-5xl mt-5 font-medium'>
        My Properties
    </h1>    
    <div className='grid grid-cols-3 xl:grid-cols-10 gap-5 xl:mx-44 mt-3 pb-5 border-b shadow-b-md'>
        <div className={`text-center flex flex-col items-center justify-center border  rounded-xl w-full hover:border-[#FF5A5F]  p-5 hover:text-white hover:bg-[#FF5A5F] duration-300 hover:scale-105 ${propertyType === 1 ? "text-white bg-[#FF5A5F] border-[#FF5A5F]" : "border-black"}  `} onClick={()=>(setPropertyType(1))}>
            <Image src={KeysListing} alt="HousingStreet" className={` ${propertyType === 1 ? "invert-0" : "invert"} hover:invert-0  w-10/12`} />
            <p className='mt-2'>Purchased</p>
        </div>

        <div className={`text-center flex flex-col items-center justify-center border  rounded-xl w-full hover:border-[#FF5A5F]  p-5 hover:text-white hover:bg-[#FF5A5F] duration-300 hover:scale-105 ${propertyType === 2 ? "text-white bg-[#FF5A5F] border-[#FF5A5F]" : "border-black"}  `} onClick={()=>(setPropertyType(2))}>
            <Image src={BookedListing} alt="HousingStreet" className={` ${propertyType === 2 ? "invert" : ""}   w-10/12`} />
            <p className='mt-2'>Booked</p>
        </div>

        <div className={`text-center flex flex-col items-center justify-center border  rounded-xl w-full hover:border-[#FF5A5F]  p-5 hover:text-white hover:bg-[#FF5A5F] duration-300 hover:scale-105 ${propertyType === 3 ? "text-white bg-[#FF5A5F] border-[#FF5A5F]" : "border-black"}  `} onClick={()=>(setPropertyType(3))}>
            <Image src={ListedListing} alt="HousingStreet" className={` ${propertyType === 3 ? "invert" : ""}   w-10/12`} />
            <p className='mt-2'>Listed</p>
        </div>
      </div>

      <div className='xl:mx-44 '>
        {propertyType === 1 ? (
            <div className='mt-5 flex flex-col gap-5'>
        <PurchasedPropertyCard />
        <PurchasedPropertyCard />
            </div>
        ) : propertyType === 2 ? (
<div className='mt-5 flex flex-col gap-5'>
        <BookedPropertyCard />
        <BookedPropertyCard />
            </div>
        ) : propertyType === 3 ? (
<div className='mt-5 flex flex-col gap-5'>
        <ListedPropertyCard />
        <ListedPropertyCard />
            </div>
        ) : ""}
      </div>
    
</div>
  )
}
