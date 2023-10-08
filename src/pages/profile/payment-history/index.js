import React from 'react'
import HistoryCard from "@/components/payment-history/HistoryCard"

export default function Index() {
  return (
    <div className='py-20 text-black font-primary mx-8 font-thin'>
    <h1 className='text-center text-xl mt-5 font-medium'>
        Payment History
    </h1>    
    <div className='mt-5 flex flex-col gap-5'>
        <HistoryCard />
    </div>
    
</div>
  )
}
