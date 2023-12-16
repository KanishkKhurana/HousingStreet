import React from 'react'
import UPI from "@/images/upi.png"
import Bank from "@/images/bank.png"
import Card from "@/images/card.png"
import Image from 'next/image'
import Link from 'next/link'

export default function Index() {
  return (
    <div className='py-20 text-black font-primary mx-8 xl:mx-44 font-thin'>
    <h1 className='text-center text-xl xl:text-5xl mt-5 font-medium'>
        Checkout
    </h1>    
    
    <div className='bg-[#F5F5F5] font-light text-sm xl:text-xl border-[0.25px] border-[#606060] w-full p-2 rounded-xl flex justify-between mt-5'>               
        <button className=''>
            Debit / Credit Card
        </button>
        <Image src={Card} alt="HousingStreet" />
    </div>
    <div className='bg-[#F5F5F5] font-light text-sm xl:text-xl  border-[#606060] w-full p-2 rounded-xl flex justify-between mt-5'>               
        <button className=''>
            Internet Banking
        </button>
        <Image src={Bank} alt="HousingStreet" />
    </div>
    <div className='bg-[#F5F5F5] font-light text-sm xl:text-xl  border-[#606060] w-full p-2 rounded-xl flex justify-between mt-5 py-3'>               
        <button className=''>
            UPI
        </button>
        <Image src={UPI} alt="HousingStreet" />
    </div>
     
    
    <div className='mt-20 flex justify-center'>
        <Link href="payment-checkout/buy-now" className='font-medium btn-pop xl:text-2xl text-white rounded-full bg-[#FF5A5F] px-10 py-2'>Buy</Link>
    </div>
</div>
  )
}
