import React from 'react'

export default function FeatureSidebar() {
  return (
    <div className='bg-[#FFF5F5] min-h-full p-3 pb-6 font-primary font-light rounded-tr-xl drop-shadow-lg'>
        <div>
            <h1 className='font-medium'>Features</h1>
        </div>
        <div className='mt-3 flex flex-col  gap-5'>

            <div>
                <p className='text-xs'>Property Number</p>
            </div>
            <div>
                <p className='text-xs'>Monthly Rent</p>
            </div>
            <div>
                <p className='text-xs'>Security Deposit</p>
            </div>
            <div>
                <p className='text-xs'>Maintenance Charges</p>
            </div>
            <div>
                <p className='text-xs'>Type</p>
            </div>
        </div>
    </div>
  )
}
