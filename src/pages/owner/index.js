/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Link from "next/link";
import Us1 from "@/images/us1.png"
import Us2 from "@/images/us2.png"
import Us3 from "@/images/us3.png"
import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import Work1 from "@/images/work1.png"
import Work2 from "@/images/work2.png"
import Work3 from "@/images/work3.png"
import Work4 from "@/images/work4.png"


// Import Swiper styles
import 'swiper/css';
import TestimonialCard from "@/components/owner/TestimonialCard";

export default function Index() {
  return (
    <div className=" py-20 text-black font-primary font-thin ">
      <div className="bg-ownerBg min-h-[20rem] py-10 px-3 xl:px-20">
        <div>
          <h1 className="text-2xl xl:text-5xl font-semibold text-white mb-4 xl:text-center">
            Rent Out Your Residential Property in 30 Days
          </h1>
          <div className="text-xs xl:text-lg bg-[#FFF5F5] flex p-2 xl:mx-64 rounded-xl justify-start pl-5 gap-2 items-center">
            <h3 className="text-lg xl:text-3xl font-normal">1</h3>
            <p>Nothing to pay in Advance : When You Earn We Earn</p>
          </div>
          <div className="text-xs xl:text-lg bg-[#FFF5F5] flex p-2 xl:mx-64 rounded-xl justify-start pl-5 gap-2 items-center mt-2">
            <h3 className="text-lg xl:text-3xl font-normal">2</h3>
            <p>You'll be involved only during payment transfers</p>
          </div>
          <div className="text-xs xl:text-lg bg-[#FFF5F5] flex p-2 xl:mx-64 rounded-xl justify-start pl-5 gap-2 items-center mt-2">
            <h3 className="text-lg xl:text-3xl font-normal">3</h3>
            <p>
              Leave the property management tasks to us, we'll handle everything
              from property photos to tenant visits, ensuring a hassle-free
              experience for you
            </p>
          </div>
          <div className="text-xs xl:text-lg bg-[#FFF5F5] flex p-2 xl:mx-64 rounded-xl justify-start pl-5 gap-2 items-center mt-2">
            <h3 className="text-lg xl:text-3xl font-normal">4</h3>
            <p>Zero Risk, Pay Only on Success</p>
          </div>
        </div>
      </div>
      <div className="">
        <div className="py-8 px-5 text-xs xl:mx-64 ">
          <div className="text-xs xl:text-xl bg-[#FFF5F5] py-5 px-3 xl:px-8 rounded-xl shadow-md drop-shadow-lg"> 
            <div className="mb-5">
              <p className="">Name</p>
              <input
                type="text"
                placeholder="Name"
                className="bg-[#F5F5F5] font-medium border-[0.25px] border-[#606060] w-full p-2 rounded-xl"
              />
            </div>
            <div className="mb-5">
              <p className="">Phone</p>
              <input
                type="number"
                placeholder="+91 8956785968"
                className="bg-[#F5F5F5] font-medium border-[0.25px] border-[#606060] w-full p-2 rounded-xl"
              />
            </div>
            <div className="text-[10px] xl:text-base font-thin flex items-center gap-1">
              <input
                type="checkbox"
                id="microwave"
                name="microwave"
                value="microwave"
              />
              <p>
                By signing in, I agree to the <span>Terms & Conditions</span>
              </p>
            </div>
            <div className="mt-8">
              <button className="font-medium btn-pop text-white rounded-full bg-[#FF5A5F] px-10 py-2">
                Connect
              </button>
            </div>
            <p className="my-5">Already have an account? <Link href="/getting-started" className="text-[#FF5A5F] font-medium">Log In</Link></p>
            <div className="p-[0.5px] mb-5 bg-black/30 w-full" />
            <p className="my-5">Need help in listing property? <span className="text-[#FF5A5F] font-medium">Call Now - 18005475450</span></p>
          </div>
        </div>
        <div>
        <h1 className='text-center text-xl mb-5 xl:text-5xl xl:mt-5 font-medium'>
        Why Choose Us
    </h1> 
    <div className="flex xl:justify-center gap-12 xl:gap-24 mx-5 mb-5">
        <div className="flex flex-col gap-3 items-center text-center text-xs xl:text-lg">
            <Image src={Us1} alt="HousingStreet" className="w-" />
            <p>Hassle Free Letting</p>
        </div>
        <div className="flex flex-col gap-3 items-center text-center text-xs xl:text-lg">
            <Image src={Us2} alt="HousingStreet" className="w-" />
            <p>Cost Effective & Transparent</p>
        </div>
        <div className="flex flex-col gap-3 items-center text-center text-xs xl:text-lg">
            <Image src={Us3} alt="HousingStreet" className="w-" />
            <p>Swift & Guaranteed Results</p>
        </div>
    </div>
    <h1 className='text-center text-xl xl:text-5xl my-5 xl:my-12 font-medium'>
        Testimonials
    </h1> 
    <div className="mb-8">
    <Swiper
      spaceBetween={25}
      slidesPerView={1.5}
      breakpoints={{
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 5,
          spaceBetween: 50,
        },
        1280: {
          slidesPerView: 3,
          spaceBetween: 50,
        },
        1536: {
          slidesPerView: 3,
          spaceBetween: 50,
        },
      }}
      
    >
      <SwiperSlide><TestimonialCard/></SwiperSlide>
      <SwiperSlide><TestimonialCard/></SwiperSlide>
      <SwiperSlide><TestimonialCard/></SwiperSlide>
      <SwiperSlide><TestimonialCard/></SwiperSlide>
    
   
    </Swiper>
    </div>
    <h1 className='text-center text-xl my-5 xl:mt-12 xl:text-5xl font-medium'>
        How It Works
    </h1> 
    <div>
        <div className="xl:mx-28 xl:my-10">
            <div className="flex gap-3 mx-3 my-5 items-center  ">
                <div className="basis-1/3">
                    <Image src={Work1} alt="HousingStreet" />
                </div>
                <div className="basis-2/3">
                    <h3 className="text-sm xl:text-3xl font-medium">Register or call our Toll-Free number</h3>
                    <p className="text-xs xl:text-lg ">To get started, simply register on our website or give us a call on our toll-free number, 18005475450. Our team is always ready to assist you. We understand your needs as a property owner and are dedicated to providing a hassle-free experience throughout the process.</p>
                </div>
            </div>
            <div className="flex gap-3 mx-3 my-5 items-center">
                <div className="basis-1/3">
                    <Image src={Work2} alt="HousingStreet" />
                </div>
                <div className="basis-2/3">
                    <h3 className="text-sm xl:text-3xl font-medium">Assigned Relationship Manager (RM)</h3>
                    <p className="text-xs xl:text-lg ">Once you register or call us, we will assign a dedicated Relationship Manager (RM) to you. Your RM will be your main point of contact and will guide you through the entire process. They will reach out to you within 4 hours to schedule a property visit and discuss the necessary details</p>
                </div>
            </div>
            <div className="flex gap-3 mx-3 my-5 items-center">
                <div className="basis-1/3">
                    <Image src={Work3} alt="HousingStreet" />
                </div>
                <div className="basis-2/3">
                    <h3 className="text-sm xl:text-3xl font-medium">Let HousingStreet take care of everything</h3>
                    <p className="text-xs xl:text-lg ">Sit back and relax while our expert team takes care of all the work involved in letting out your property. From clicking professional property photos and creating live listings on our website to handling tenant inquiries and property visits, we handle it all. Our team will manage tenant follow-ups, conduct thorough tenant verifications, and even assist in drafting the rent agreement. We strive to make the process as seamless as possible, so you can focus on other important matters in your life.</p>
                </div>
            </div>
            <div className="flex gap-3 mx-3 my-5 items-center">
                <div className="basis-1/3">
                    <Image src={Work4} alt="HousingStreet" />
                </div>
                <div className="basis-2/3">
                    <h3 className="text-sm xl:text-3xl font-medium">Receive Payments with peace of mind</h3>
                    <p className="text-xs xl:text-lg ">At HousingStreet.com, we value your time and money. Unlike other platforms or traditional methods, we don't require any advance payments for property listing. You only pay us when your property gets successfully let out. Our service fee is a mere 15 days' rent, making it cost-effective and convenient for you. We take care of the entire payment process and ensure that the funds are securely transferred to your account. You can trust us to handle the financial aspects while you enjoy the benefits of a hassle-free property letting experience.</p>
                </div>
            </div>
        </div>
    </div>
        </div>
      </div>
      <div className="my-5 bg-[#FF5A5F] text-white p-5 flex flex-col gap-3 xl:p-12 xl:text-center">
        <h3 className="text-lg xl:text-5xl font-medium">A One-stop destination for all 
the Property Renting Needs</h3>
<p className="text-xs xl:text-xl">Have a property and want to rent it out? Looking for a house apartment to rent in a decent neighborhood with necessary amenities? Just leave it to us and we will arrange it for you! We prioritize your requirements and find the best solutions.</p>
      </div>
      <div className="my-8 xl:mb-0 flex justify-evenly">
              <Link href="/faqs" className="font-medium btn-pop  rounded-full text-[#FF5A5F] border-[#FF5A5F] border px-10 py-2">
                FAQs
              </Link>
              <Link href="/getting-started" className="font-medium btn-pop text-white rounded-full bg-[#FF5A5F] px-10 py-2">
                Register Now
              </Link>
            </div>
    </div>
  );
}
