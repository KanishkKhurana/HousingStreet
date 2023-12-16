import FeatureSidebar from '@/components/compare-properties/FeatureSidebar'
import PropertyCard from '@/components/compare-properties/PropertyCard'
import PropertySidebar from '@/components/compare-properties/PropertySidebar'
import React from 'react'

export default function Index() {
  return (
    <div className='py-20 pb-16 text-black text-light font-primary'>
        <h1 className='text-center text-xl xl:text-5xl mt-5 font-medium'>
        Compare Properties
        </h1> 

        <div className='grid mx-5 mt-5 grid-cols-2 xl:grid-cols-4 justify-items-center gap-3 xl:px-44'>
            <PropertyCard />
            <PropertyCard />
            <PropertyCard />
            <PropertyCard />
        </div>

        <div className='flex mt-8 gap-3 '>
            <div className='basis-1/2'>
                <FeatureSidebar />
            </div>
            <div className='basis-1/2'>
                <PropertySidebar />
            </div>
        </div>
    </div>
  )
}
