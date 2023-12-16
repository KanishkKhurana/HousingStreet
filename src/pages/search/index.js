import React from "react";
import { FiSearch } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";
import { BiCurrentLocation } from "react-icons/bi";
import SearchResultCard from "@/components/search/SearchResultCard";


export default function Index() {
  return (
    <div className="z-20 text-black bg-white font-primary xl:mx-44">
      <h1 className="pt-28 text-center text-xl font-medium xl:text-5xl">Search</h1>
      <div className="flex bg-[#F8F8F8] px-3 mx-6 mt-5 items-center border rounded-xl border-black gap-5">
        <FiSearch className="text-lg" />
        <input
          type="text"
          placeholder="Enter Place Here"
          className="px-3 py-3 w-full rounded-xl font-primary text-black bg-transparent"
        />
        <RxCross2 className="text-lg" />
      </div>
      <div className="text-[#FF5A5F] mx-6 mt-2 flex gap-2 items-center">
        <BiCurrentLocation className="text-lg" />
        <button className="font-medium">Detect Location</button>
      </div>
      <div className="mx-6 mt-10">
            <h3 className="text-[#828282] font-medium mb-3">
                Search Results
            </h3>
            <div className="flex flex-col gap-8">                
                <SearchResultCard heading="Flat/Apartment (Non-Furnished)" place="Chattarpur, Delhi" type="Rent"/>
                <SearchResultCard heading="Flat/Apartment (Non-Furnished)" place="Chattarpur, Delhi" type="Rent"/>
            </div>
      </div>
    </div>
  );
}
