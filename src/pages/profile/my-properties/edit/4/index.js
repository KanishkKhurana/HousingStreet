import Link from "next/link";
import React from "react";

export default function Index() {
  return (
    <div className="py-20 text-black font-primary mx-8 font-thin text-sm">
      <h1 className="text-center text-xl mt-5 font-medium">Edit</h1>

      <div className="my-5  flex justify-between">
        <div>
          <p className="p-1 bg-[#FF5A5F] rounded-full w-fit px-2.5 text-white text-xs">
            1
          </p>
        </div>
        <div className=" p-1 border-t mt-3 w-full border-[#9A9A9A]" />
        <div>
          <p className="p-1 bg-[#FF5A5F] rounded-full w-fit px-2.5 text-white text-xs">
            2
          </p>
        </div>
        <div className=" p-1 border-t mt-3 w-full border-[#9A9A9A]" />

        <div>
          <p className="p-1 bg-[#FF5A5F] rounded-full w-fit px-2.5 text-white text-xs">
            3
          </p>
        </div>
        <div className=" p-1 border-t mt-3 w-full border-[#9A9A9A]" />

        <div>
        <p className="p-1 bg-[#FF5A5F] rounded-full w-fit px-2.5 text-white text-xs">
            4
          </p>
        </div>
      </div>

      <div className="mb-5 flex justify-between gap-10 w-full">
        <div className="basis-1/2">
          <p className="text-sm">Security Deposit</p>
          <select className="bg-[#EEEEEE] w-full rounded-md flex  px-2 py-1.5 ">
            <option value="1 Month">1 Month</option>
            <option value="2 Month">2 Month</option>  
          </select>
        </div>
        <div className="basis-1/2">
          <p className="text-sm">Rent</p>
          <input
          type="text"
          placeholder="1000"
          className="bg-[#F5F5F5] font-medium [0.25px] [#606060] w-full p-2 rounded-xl"
        />
        </div>
      </div>

      <p className="text-sm">Electricity and Water</p>
      <div className="mb-5 flex justify-start  gap-5 w-full">
        <button className="bg-[#F5F5F5] border [0.25px] [#606060] w-fit p-2 rounded-xl">
          {" "}
          Included
        </button>
        <button className="bg-[#F5F5F5]  [0.25px] [#606060] w-fit p-2 rounded-xl">
          {" "}
          Separate
        </button>
      </div>
      

      <p className="text-sm">Maintenance Charge (Monthly)</p>
      <div className="mb-5 grid grid-cols-4  gap-5 w-full">
      <input
          type="text"
          placeholder="1000"
          className="bg-[#F5F5F5] font-medium [0.25px] [#606060] w-full p-2 rounded-xl"
        />
      </div>

      

    
        <p className="text-sm">Upload Images</p>
          <div className="mb-5 flex   gap-1 w-full">
            <button className="bg-[#F5F5F5] border [0.25px] [#606060] w-fit p-2 rounded-xl">
              {" "}
              Browse
            </button>
            
          </div>

          

            

      <div className="my-8">
        <Link
          href="/profile/my-properties"
          className="font-medium btn-pop text-white rounded-full bg-[#FF5A5F] px-10 py-2"
        >
          Done
        </Link>
      </div>
    </div>
  );
}
