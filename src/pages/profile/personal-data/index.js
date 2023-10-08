import React from 'react'

export default function Index() {
  return (
    <div className='py-20 text-black font-primary mx-8 font-thin'>
        <h1 className='text-center text-xl mt-5 font-medium'>
            Personal Data
        </h1>
        <div className='flex justify-center my-8'>
            <div className="w-20 h-20 bg-slate-300/50 rounded-xl" />
        </div>
        <div className='mb-5'>
            <p className='text-sm'>Your Name</p>
            <input type='text' placeholder="Name" className='bg-[#F5F5F5] font-medium border-[0.25px] border-[#606060] w-full p-2 rounded-xl' />
        </div>
        <div className='mb-5'>
            <p className='text-sm'>Date of Birth</p>
            <input type='text' placeholder="20/12/20" className='bg-[#F5F5F5] font-medium border-[0.25px] border-[#606060] w-full p-2 rounded-xl' />
        </div>
        <div className='mb-5'>
            <p className='text-sm'>Email</p>
            <input type='email' placeholder="jenny@gmai.com" className='bg-[#F5F5F5] font-medium border-[0.25px] border-[#606060] w-full p-2 rounded-xl' />
        </div>
        <div className='mb-5'>
            <p className='text-sm'>Phone</p>
            <input type='number' placeholder="+91 9910056556" className='bg-[#F5F5F5] font-medium border-[0.25px] border-[#606060] w-full p-2 rounded-xl' />
        </div>
        <div>
         <p className='text-sm'>Gender</p>
         <div className='flex justify-between gap-5 text-sm'>
            <button className='bg-[#F5F5F5] w-full py-2 border-[0.25px] border-[#606060] rounded-xl btn-pop '>Man</button>
            <button className='bg-[#] w-full py-2 border-[0.25px] border-[#606060] rounded-xl btn-pop '>Female</button>
            <button className='bg-[#] w-full py-2 border-[0.25px] border-[#606060] rounded-xl btn-pop '>Others</button>
         </div>
        </div>
        <div className='mt-8'>
            <button className='font-medium btn-pop text-white rounded-full bg-[#FF5A5F] px-5 py-2'>Save Changes</button>
        </div>
    </div>
  )
}
