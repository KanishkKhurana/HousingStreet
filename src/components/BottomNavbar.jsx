import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import HomeNavbar from "@/images/homeNavbar.png"
import SearchNavbar from "@/images/searchNavbar.png"
import ListingNavbar from "@/images/listingNavbar.png"
import WishlistNavbar from "@/images/wishlistNavbar.png"
import ProfileNavbar from "@/images/profileNavbar.png"
import {AiOutlineHome} from "react-icons/ai"
import {AiOutlineSearch} from "react-icons/ai"
import {CiViewList} from "react-icons/ci"
import {AiOutlineHeart} from "react-icons/ai"
import {BsPerson} from "react-icons/bs"




export default function BottomNavbar() {
  return (
    <div className='bg-[#FF5A5F] pb-6 pt-3 px-5 text-white font-primary rounded-t-xl xl:hidden  text-[0.5rem] font-light flex gap-5 justify-between  w-full '>
        <div className=''>
            <Link href="/" className='flex flex-col items-center justify-center'>
                <AiOutlineHome  className='text-2xl'/>
                <p className='mt-1 text-center'>Home</p>
            </Link>
        </div>
        <div className=''>
            <Link href="/search" className='flex flex-col items-center justify-center'>
                <AiOutlineSearch className='text-2xl'/>
                <p className='mt-1 text-center'>Search</p>
            </Link>
        </div>
        <div className=''>
            <Link href="/listing" className='flex flex-col items-center justify-center'>
            <CiViewList className='text-2xl'/>

                <p className='mt-1 text-center'>Listing</p>
            </Link>
        </div>
        <div className=''>
            <Link href="/wishlist" className='flex flex-col items-center justify-center'>
            <AiOutlineHeart className='text-2xl'/>

                <p className='mt-1 text-center'>Wishlist</p>
            </Link>
        </div>
        <div className=''>
            <Link href="/profile" className='flex flex-col items-center justify-center'>
            <BsPerson className='text-2xl'/>

                <p className='mt-1 text-center'>Profile</p>
            </Link>
        </div>
    </div>
  )
}
