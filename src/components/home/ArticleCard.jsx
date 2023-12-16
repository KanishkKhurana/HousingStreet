import Link from 'next/link'
import React from 'react'
import {FiArrowRight} from "react-icons/fi"


export default function ArticleCard() {
  return (
    <Link href="/" className='font-primary'>
    <div className='flex gap-3'>
        <div className='basis-2/5'>
            <div className='p-3 bg-slate-400/40 rounded-xl h-32 xl:h-44 border border-[#FF5A5F]' />
        </div>
        <div className='basis-3/5 flex justify-between flex-col'>
            <div>
            <p className='text-[0.6rem] xl:text-lg font-medium text-slate-500/75'>Real Estate</p>
            <h3 className='text-sm font-medium xl:text-2xl'>5 Things to remember before renting out</h3>
            </div>
            <div className=' flex items gap-2 w-full text-[#FF5A5F] '>
              <Link href="owner" className='flex btn-pop text-sm font-medium  gap-2 items-center' >View More <FiArrowRight/></Link>
            </div>
        </div>
    </div>
    </Link>
  )
}
