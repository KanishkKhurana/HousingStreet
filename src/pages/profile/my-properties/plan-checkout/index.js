import PlanCard from '@/components/my-properties/PlanCard'
import React from 'react'
import Link from 'next/link'

export default function Index() {
  return (
    <div className='py-20 text-black font-primary font-thin'>
        <h1 className='text-center text-xl mt-5 font-medium'>
        Choose Your Plan
        </h1>   
        <div className='flex justify-center mt-5'>
            <PlanCard />
        </div>
        <div className='mt-5 flex justify-center'>
        <button className='font-medium btn-pop text-white rounded-full bg-[#FF5A5F] px-10 py-2'>Select Plan</button>
        </div>
        <div className='px-8 '>
            <h1 className='text-center text-xl mt-10 font-medium'>
                Checkout
            </h1>

            <div className='mt-5 flex justify-center gap-8'>

                <div className='flex flex-col gap-5 border p-5 rounded-xl shadow-xl'>
                    <h3 className='font-medium '>Property Details</h3>
                    <div className='text-xs'>
                        <p className='text-[#FF5A5F] font-normal'>$bhk for trail test</p>
                        <p>234/sq.ft.</p>
                    </div>
                    <h3 className='font-secondary text-xl'>₹ 8000</h3>
                </div>  
                <div className='flex flex-col gap-5 border p-5 rounded-xl shadow-xl'>
                    <h3 className='font-medium '>Property Details</h3>
                    <div className='text-xs'>
                        <p className='text-[#FF5A5F] font-normal'>$bhk for trail test</p>
                        <p>234/sq.ft.</p>
                    </div>
                    <h3 className='font-secondary text-xl'>₹ 8000</h3>
                </div>  

            </div>  

            <h1 className='text-center text-xl mt-10 font-medium'>
                Payment Percentage
            </h1>

            <div className='mt-3 flex justify-between '>
                <div className='flex items-center gap-1'>
                    <input type='radio' id="1" />
                    <label for="1" >Rent Property</label>
                </div>
                <div className='flex items-center gap-1'>
                    <input type='radio' id="1" />
                    <label for="1" >Book Property</label>
                </div>

            </div>  


            <h1 className='text-center border-b pb-1 border-black/30 text-xl mt-10 font-medium'>
                Payment to Owner (A)
            </h1>
            <div className='px-5 mt-5 flex flex-col gap-3'>
                <div className='flex justify-between text-sm'>
                    <p className='font-light'>1 Month Rent:</p>
                    <p className='flex font-bold'>₹ 8000</p>                
                </div>
                <div className='flex justify-between text-sm'>
                    <p className='font-light'>Security Deposit (1 month):</p>
                    <p className='flex font-bold'>₹ 8000</p>                
                </div>
                <div className='flex justify-between text-sm'>
                    <p className='font-light'>Maintenance Charge (1 month)</p>
                    <p className='flex font-bold'>₹ 500</p>                
                </div>
            </div>
            <div className='w-full mt-3 p-[0.5px] bg-black/30' />
            <div className='px-5 mt-3 flex flex-col gap-3'>
                <div className='flex justify-between text-sm'>
                    <p className='font-normal'>Total(A):</p>
                    <p className='flex font-bold'>₹ 16500</p>                
                </div>                
            </div>
            <div className='w-full mt-3 p-[0.5px] bg-black/30' />

            <h1 className='text-center border-b pb-1 border-black/30 text-xl mt-10 font-medium'>
                Payment to HousingStreet (B)
            </h1>
            <div className='px-5 mt-5 flex flex-col gap-3'>
                <div className='flex justify-between text-sm'>
                    <p className='font-light'>Plan Price:</p>
                    <p className='flex font-bold'>₹ 0</p>                
                </div>
                <div className='flex justify-between text-sm'>
                    <p className='font-light'>Rent Agreement:</p>
                    <p className='flex font-bold'>₹ 400</p>                
                </div>                
            </div>
            <div className='w-full mt-3 p-[0.5px] bg-black/30' />
            <div className='px-5 mt-3 flex flex-col gap-3'>
                <div className='flex justify-between text-sm'>
                    <p className='font-normal'>Taxable Amount:</p>
                    <p className='flex font-bold'>₹ 400</p>                
                </div>                
            </div>
            <div className='w-full mt-3 p-[0.5px] bg-black/30' />            
            <div className='px-5 mt-5 flex flex-col gap-3'>
                <div className='flex justify-between text-sm'>
                    <p className='font-light'>SGST@9%:</p>
                    <p className='flex font-bold'>₹ 36</p>                
                </div>
                <div className='flex justify-between text-sm'>
                    <p className='font-light'>SGST@9%:</p>
                    <p className='flex font-bold'>₹ 36</p>                
                </div>                
            </div>
            <div className='w-full mt-3 p-[0.5px] bg-black/30' />
            <div className='px-5 mt-3 flex flex-col gap-3'>
                <div className='flex justify-between text-sm'>
                    <p className='font-normal'>Total (B):</p>
                    <p className='flex font-bold'>₹ 472</p>                
                </div>                
            </div>
            <div className='w-full my-3 p-[0.5px] bg-black/30' />  
            <div className='flex justify-between  text-lg'>
                    <p className='font-medium text-[#FF5A5F] '>Payable Amount (A+B):</p>
                    <p className='flex font-bold '>₹ 16972</p>                
                </div>  

           
        </div>
        <div className='flex justify-center py-8'>

                <Link href="/payment-checkout" className='font-medium btn-pop text-white rounded-full bg-[#FF5A5F] px-10 py-2'>Proceed to Checkout</Link>
        </div>
    </div>
  )
}
