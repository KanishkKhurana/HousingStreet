import React from 'react'
import FaqCard from '@/components/faq/FaqCard'

export default function Index() {
  return (
    <div className='py-20 text-black font-primary'>
        <h1 className='text-center text-xl xl:text-5xl mt-5 font-medium'>
        FAQs
    </h1> 
    <div className='flex flex-col gap-5 xl:gap-12 mx-5 my-5 xl:my-12 xl:mx-24'>
        <FaqCard />
        <FaqCard />
        <FaqCard />
    </div>
    </div>
  )
}
