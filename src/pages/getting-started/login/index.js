import React from 'react'
import Link from 'next/link'
import {FcGoogle} from "react-icons/fc"


export default function Index() {
  return (
    <div className='bg-[#ff5a603d] text-black min-h-screen font-primary flex flex-col items-center py-10 xl:px-24'>
        <div className='text-center '>
            <h1 className='font-secondary text-3xl'>Welcome!</h1>
            <p className='text-sm font-light'>Login or Register to save your favourite property</p>
        </div>
        <div className='w-full px-10 mt-16'>
            <p className='font-bold text-sm pb-1'>Email / Phone</p>
            <input type='email' placeholder='jenny@gmail.com' className='px-3 py-3 w-full rounded-xl font-primary text-black bg-white/70' />
            <p className='font-bold text-sm pb-1 mt-8'>Password</p>
            <input type="password" placeholder='****' className='px-3 py-3 w-full rounded-xl font-primary text-black bg-white/70' />
            <div className='flex justify-end mt-1.5'>
                <Link href="/" className='text-xs text-right font-medium'>Forgot Password</Link>
            </div>
        </div>
        <div className='mt-16'>
                <button className='border py-2.5 border-black  px-16 rounded-xl btn-pop'>
                    Log In
                </button>

        </div>
        <div className='flex w-full font-light mt-8'>
            <div className='border-t-[0.25px] w-full mt-3 p-5 border-black' />
            <div className='px-5'><p>or</p></div>
            <div className='border-t-[0.25px] w-full mt-3 p-5 border-black' />            
        </div>
        <div>
            <button className=' text-5xl px-12 py-1.5 rounded-xl bg-white/30 btn-pop'>
                <FcGoogle className='' />
            </button>
            <p className='text-xs text-center mt-2 font-thin'>New Here? <Link href="register" className='font-bold'>Register</Link></p>
        </div>
    </div>
  )
}
