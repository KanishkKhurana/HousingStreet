import React from 'react'
import {BsFillCheckCircleFill} from "react-icons/bs"

export default function Index() {
  return (
    <div className='py-20 text-black flex font-light items-center justify-center flex-col min-h-screen'>
        <BsFillCheckCircleFill className='text-emerald-600 text-8xl mb-5' />
        <p className='text-lg'>The Property is your now</p>
        <p className='text-sm'>Going back to home page</p>
    </div>
  )
}
