import WishlistCard from '@/components/wishlist/WishlistCard'
import React from 'react'
import Link from 'next/link'

export default function Index() {
  return (
    <div className='py-20 text-black font-primary mx-8 xl:mx-44 font-thin'>
    <h1 className='text-center text-xl my-5 xl:text-5xl font-medium'>
        Wishlist
    </h1>   
    <div className='flex flex-col gap-5 xl:gap-12'>
        <WishlistCard />    
        <WishlistCard />    
    </div> 

    <div className='mt-8 flex justify-center'>
        <Link href="/payment-checkout" className='font-medium btn-pop text-white xl:text-2xl rounded-full bg-[#FF5A5F] px-10 py-2'>Buy</Link>
    </div>
    
</div>
  )
}
