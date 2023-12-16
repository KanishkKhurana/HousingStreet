import React from 'react'

export default function Index() {
  return (
    <div className='py-20 text-black font-primary mx-8 xl:mx-44 font-thin'>
    <h1 className='text-center text-xl xl:text-5xl mt-5 font-medium'>
        Contact Us
    </h1>    
    <div className='my-5'>
        <h3 className='text-lg font-medium xl:text-2xl'>Details</h3>
        <div className='text-[0.7rem] xl:text-base flex justify-between'>
            <p>
            H. No B-165, Ambedkar Colony, <br/>
            Gali No 1,Chhatarpur, <br/>
            New Delhi - 110074 <br/>
            </p>
            <p>
                18005475450 <br/>
                support@housingstreet.com
            </p>
        </div>
    </div>
    <div className='mb-5'>
        <p className='text-sm xl:text-xl'>Name</p>
        <input type='text' placeholder="Name" className='bg-[#F5F5F5] font-medium border-[0.25px] border-[#606060] w-full p-2 rounded-xl' />
    </div>
  
    <div className='mb-5'>
        <p className='text-sm xl:text-xl'>Email</p>
        <input type='email' placeholder="jenny@gmai.com" className='bg-[#F5F5F5] font-medium border-[0.25px] border-[#606060] w-full p-2 rounded-xl' />
    </div>
    <div className='mb-5'>
        <p className='text-sm xl:text-xl'>Phone</p>
        <input type='number' placeholder="+91 9910056556" className='bg-[#F5F5F5] font-medium border-[0.25px] border-[#606060] w-full p-2 rounded-xl' />
    </div>
    <div className='mb-5'>
        <p className='text-sm xl:text-xl'>Subject</p>
        <input type='text' placeholder="Property Listing" className='bg-[#F5F5F5] font-medium border-[0.25px] border-[#606060] w-full p-2 rounded-xl' />
    </div>
    <div className='mb-5'>
        <p className='text-sm xl:text-xl'>Message</p>
        <textarea type='text' placeholder="Please explain how we can help here..." className='bg-[#F5F5F5] font-medium border-[0.25px] border-[#606060] w-full p-2 rounded-xl' />
    </div>
    
    <div className='mt-8'>
        <button className='font-medium btn-pop text-white rounded-full bg-[#FF5A5F] px-10 xl:text-xl py-2'>Submit</button>
    </div>
</div>
  )
}
