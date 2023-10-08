import React from 'react'
import Link from 'next/link'
import {FcGoogle} from "react-icons/fc"


export default function index() {
  return (
    <div className='bg-[#ff5a603d] text-black min-h-screen font-primary flex flex-col items-center py-10'>
        <div className='text-center '>
            <h1 className='font-secondary text-3xl'>Get Started!</h1>
            <p className='text-sm font-light'>Sign In or Register to save your favourite property</p>
        </div>
        <div className='w-full px-10 mt-12'>
            <p className='font-bold text-sm pb-1'>Name</p>
            <input type='text' placeholder='Jenny ' className='px-3 py-3 w-full rounded-xl font-primary text-black bg-white/70' />
            <p className='font-bold text-sm pb-1 mt-8'>Email / Phone</p>
            <input type='email' placeholder='jenny@gmail.com' className='px-3 py-3 w-full rounded-xl font-primary text-black bg-white/70' />
            <p className='font-bold text-sm pb-1 mt-8'>Password</p>
            <input type="password" placeholder='****' className='px-3 py-3 w-full rounded-xl font-primary text-black bg-white/70' />
            <div className="flex items-center justify-start gap-2 mt-2">
        <input
          type="checkbox"
          className="text-center text-black accent-black bg-black"
          name="security-guidelines"
          id="security-guidelines"
        />
        <p className='text-[0.7rem] text-center font-thin'>By signing in, I agree to the <Link href="/" className='font-bold'>Terms & Conditions</Link></p>
      </div>
            
        </div>
        <div className='mt-12'>
                <button className='border py-2.5 border-black text-white bg-black font-light px-16 rounded-xl btn-pop'>
                    Register
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
            <p className='text-xs text-center mt-2 font-thin'>Already a User? <Link href="login" className='font-bold'>Log In</Link></p>
        </div>
    </div>
  )
}
