import React from 'react'

export default function FeatureSidebar() {
  return (
    <div className='bg-[#FFF5F5] min-h-full p-3 xl:pl-44 pb-6 font-primary font-light rounded-tr-xl drop-shadow-lg'>
        <div>
            <h1 className='font-medium xl:text-3xl'>Features</h1>
        </div>
        <div className='mt-3 flex flex-col  gap-5'>

            <div>
                <p className='text-xs xl:text-lg'>Property Number</p>
            </div>
            <div>
                <p className='text-xs xl:text-lg'>Monthly Rent</p>
            </div>
            <div>
                <p className='text-xs xl:text-lg'>Security Deposit</p>
            </div>
            <div>
                <p className='text-xs xl:text-lg'>Maintenance Charges</p>
            </div>
            <div>
                <p className='text-xs xl:text-lg'>Type</p>
            </div>
        </div>
    </div>
  )
}
