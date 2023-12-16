import Image from "next/image";
import React from "react";
import Placeholder from "@/images/placeholder3.png";
import Link from "next/link";
import { AiOutlineHeart } from "react-icons/ai";
import { RiDeleteBin3Line } from "react-icons/ri";

export default function WishlistCard(props) {
  return (
    <Link href="/payment-checkout">
    <div className="flex items-center gap-5 bg-[#F5F5F5] p-3 shadow-lg hover:scale-105 duration-300 ease-in-out h-full">
      <div className=" basis-1/3">
        <Image
          src={Placeholder}
          alt="HousingStreet"
          className="w-full h-full xl:rounded-xl xl:max-h-[250px] object-cover"
          />
      </div>
      <div className="flex flex-col gap-5 xl:gap-10 justify-between basis-2/3">
        <div>
          <h3 className="text-xs xl:text-lg">Chattarpur, Delhi</h3>
          <h1 className="font-semibold  xl:text-3xl">Yumiko House</h1>
          <p className="border border-[#FF5A5F] text-[#FF5A5F] w-fit  font-normal px-3 rounded-full text-[6px] xl:text-lg">
            For Rent
          </p>
        </div>
        <div className="flex  gap-1 justify-between w-full">
          <div className="flex  gap-1 items-center ">
            <h3 className="font-secondary text-sm xl:text-3xl ">₹ {" " + 14000}</h3>
            <p className="font-thin text-[10px] xl:text-base">/ month</p>
          </div>
          <div>
            <RiDeleteBin3Line className="xl:text-3xl"/>
          </div>
          
        </div>
      </div>
    </div>
          </Link>
  );
}
