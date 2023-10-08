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
            <p className="p-1 bg-[#D9D9D9] rounded-full w-fit px-2.5 text-black text-xs">
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
        <p className="text-sm">Name</p>
        <input
          type="text"
          placeholder="Name"
          className="bg-[#F5F5F5] font-medium [0.25px] [#606060] w-full p-2 rounded-xl"
        />
      </div>

      <div className="mb-5">
        <p className="text-sm">Type</p>
        <input
          type="text"
          placeholder="Flat"
          className="bg-[#F5F5F5] font-medium [0.25px] [#606060] w-full p-2 rounded-xl"
        />
      </div>
      <div className="mb-5">
        <p className="text-sm">Area (sq. ft.)</p>
        <input
          type="number"
          placeholder="+2"
          className="bg-[#F5F5F5] font-medium [0.25px] [#606060] w-full p-2 rounded-xl"
        />
      </div>
      <div className="mb-5 grid grid-cols-4">
        <div>
          <p className="text-sm">BHK</p>
          <select className="bg-[#EEEEEE] w-fit rounded-md flex  px-2 py-1.5 ">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select>
        </div>
        <div>
          <p className="text-sm">Bedroom</p>
          <select className="bg-[#EEEEEE] w-fit rounded-md flex  px-2 py-1.5 ">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select>
        </div>
        <div>
          <p className="text-sm">Balcony</p>
          <select className="bg-[#EEEEEE] w-fit rounded-md flex  px-2 py-1.5 ">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select>
        </div>
        <div>
          <p className="text-sm">Bathroom</p>
          <select className="bg-[#EEEEEE] w-fit rounded-md flex  px-2 py-1.5 ">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select>
        </div>
      </div>
      <div className="mb-5">
        <p className="text-sm">Description</p>
        <textarea
          type="text"
          placeholder="Please describe the property here here..."
          className="bg-[#F5F5F5] font-medium [0.25px] [#606060] w-full p-2 rounded-xl"
        />
      </div>

      <div className="my-8">
        <Link href="2" className="font-medium btn-pop text-white rounded-full bg-[#FF5A5F] px-10 py-2">
          Next
        </Link>
      </div>
    </div>
  );
}
