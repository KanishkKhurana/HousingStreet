import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import LogoMobile from "@/images/logoMobile.png"
import {BiLogoFacebook} from "react-icons/bi"
import {BiLogoInstagram} from "react-icons/bi"
import {FiArrowRight} from "react-icons/fi"


function RegisterCard(){

    return(
        <div className='bg-[#FF787C] rounded-xl mt-5 p-5 xl:p-10 flex text-white flex-col xl:flex-row gap-5'>
            <div className='xl:basis-2/3 xl:flex xl:flex-col xl:gap-5'>
                <h1 className='font-secondary text-lg xl:text-5xl'>A One-stop destination for all the Property Renting Needs</h1>
                <p className='text-xs xl:text-xl'>Have a property and want to rent it out? Looking for a house apartment to rent in a decent neighborhood with necessary amenities? Just leave it to us and we will arrange it for you! We prioritize your requirements and find the best solutions.</p>
            </div>
            <div className='xl:basis-1/3 flex items-center justify-center'>
                <Link href="getting-started" className='border p-3 text-sm xl:text-2xl xl:px-5 rounded-full border-white'> Register Now</Link>
            </div>

        </div>
    )
}

export default function Footer() {
  return (
    <div className='font-primary'>
        <div className='m-5 mt-10 xl:mx-16'><RegisterCard/></div>
        <div className='bg-[#FF5A5F] p-10 flex-col flex xl:flex-row gap-5 text-white justify-between'>
            <div className='flex flex-col gap-3 xl:basis-1/3'>
                <Image src={LogoMobile} alt="HousingStreet" className='bg-blend-multiply' />
                <p className='text-white font-light text-xs xl:text-base'>Housing Street is a platform that connects people willing to rent and let out properties. Our team will go above and beyond to search for the ideal property or find a suitable renter, while providing end-to-end support. We arrange visits to properties, handle calls from prospective renters, prepare the rental agreement, and much more. Rest assured all listings are 100% verified!</p>
                <div className='flex gap-2 xl:text-3xl text-white my-3'>
                    <BiLogoFacebook />
                    <BiLogoInstagram />
                </div>
            </div>
            <div className='flex flex-col xl:flex-row gap-5 xl:basis-1/3 w-full'>
                <div className='flex flex-col  xl:basis-1/2'>
                    <h6 className='font-medium text-white mb-1.5 xl:text-2xl'>Quick Links</h6>
                    <Link className='text-xs xl:text-lg xl:mb-5' href="">FAQs </Link>
                    <Link className='text-xs xl:text-lg' href="">Privacy Policy </Link>
                </div>
                <div className='flex flex-col xl:basis-1/2 '>
                    <h6 className='font-medium text-white mb-1.5 xl:text-2xl'>Contact Us</h6>
                    <div className='flex flex-col gap-1.5 xl:gap-5'>
                        <Link className='text-xs xl:text-lg' href="">support@housingstreet.com </Link>
                        <Link className='text-xs xl:text-lg' href="">H. No B-165, Ambedkar Colony,Gali No 1, Chhatarpur,New Delhi - 110074 </Link>
                        <Link className='text-xs xl:text-lg' href="">18005475450</Link>                        
                        <div className=' flex items gap-2 w-full  '>
              <Link href="profile/contact-us" className='flex btn-pop text-sm font-medium xl:text-lg  gap-2 items-center' >Contact Us <FiArrowRight/></Link>
            </div>
                    </div>
                </div>                
            </div>
        </div>
        <div>
            <p className='text-center text-xs xl:text-base mx-5 py-3'>All Rights Reserved. © Copyright 2023 Housingstreet Marketing & Consulting Private Limited.(v2.5.0)</p>
        </div>
    </div>
  )
}
