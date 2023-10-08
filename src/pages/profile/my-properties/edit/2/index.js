import Link from "next/link";
import React from "react";

export default function Index() {
  return (
    <div className="py-20 text-black font-primary mx-8 font-thin">
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
        <p className="p-1 bg-[#D9D9D9] rounded-full w-fit px-2.5 text-black text-xs">
                3
            </p>
        </div>
        <div className=" p-1 border-t mt-3 w-full border-[#9A9A9A]" />

        <div>
        <p className="p-1 bg-[#D9D9D9] rounded-full w-fit px-2.5 text-black text-xs">
                4
            </p>
        </div>
      </div>

      <div className="mb-5">
        <p className="text-sm">Address</p>
        <input
          type="text"
          placeholder="Vasant Kunj"
          className="bg-[#F5F5F5] font-medium [0.25px] [#606060] w-full p-2 rounded-xl"
        />
      </div>

      <div className="mb-5">
        <p className="text-sm">Area</p>
        <input
          type="text"
          placeholder="Near Mall"
          className="bg-[#F5F5F5] font-medium [0.25px] [#606060] w-full p-2 rounded-xl"
        />
      </div>
      <div className="mb-5">
        <p className="text-sm">City</p>
        <input
          type="text"
          placeholder="Delhi"
          className="bg-[#F5F5F5] font-medium [0.25px] [#606060] w-full p-2 rounded-xl"
        />
      </div>
      <div className="mb-5">
        <p className="text-sm">State</p>
        <input
          type="text"
          placeholder="Delhi"
          className="bg-[#F5F5F5] font-medium [0.25px] [#606060] w-full p-2 rounded-xl"
        />
      </div>
      
      <div className="mb-5">
        <p className="text-sm">Locate on Map</p>
        <textarea
          type="text"
          placeholder=""
          className="bg-[#F5F5F5] font-medium [0.25px] [#606060] w-full p-2 rounded-xl"
        />
      </div>

      <div className="my-8">
        <Link href="3" className="font-medium btn-pop text-white rounded-full bg-[#FF5A5F] px-10 py-2">
          Next
        </Link>
      </div>
    </div>
  );
}
