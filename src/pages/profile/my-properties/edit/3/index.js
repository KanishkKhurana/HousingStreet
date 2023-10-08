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
          <p className="p-1 bg-[#D9D9D9] rounded-full w-fit px-2.5 text-black text-xs">
            4
          </p>
        </div>
      </div>

      <div className="mb-5 flex justify-between gap-10 w-full">
        <div className="basis-1/2">
          <p className="text-sm">Facing</p>
          <select className="bg-[#EEEEEE] w-full rounded-md flex  px-2 py-1.5 ">
            <option value="East">East</option>
            <option value="West">West</option>
            <option value="North">North</option>
            <option value="South">South</option>
          </select>
        </div>
        <div className="basis-1/2">
          <p className="text-sm">Year Built</p>
          <select className="bg-[#EEEEEE] w-full rounded-md flex  px-2 py-1.5 ">
            <option value="1990">1990</option>
            <option value="1991">1991</option>
            <option value="1992">1992</option>
            <option value="1993">1993</option>
            <option value="1994">1994</option>
            <option value="1995">1995</option>
            <option value="1996">1996</option>
            <option value="1997">1997</option>
            <option value="1998">1998</option>
            <option value="1999">1999</option>
            <option value="2000">2000</option>
            <option value="2001">2001</option>
            <option value="2002">2002</option>
            <option value="2003">2003</option>
            <option value="2004">2004</option>
            <option value="2005">2005</option>
            <option value="2006">2006</option>
            <option value="2007">2007</option>
            <option value="2008">2008</option>
            <option value="2009">2009</option>
            <option value="2010">2010</option>
            <option value="2011">2011</option>
            <option value="2012">2012</option>
            <option value="2013">2013</option>
            <option value="2014">2014</option>
            <option value="2015">2015</option>
            <option value="2016">2016</option>
            <option value="2017">2017</option>
            <option value="2018">2018</option>
            <option value="2019">2019</option>
            <option value="2020">2020</option>
            <option value="2021">2021</option>
            <option value="2022">2022</option>
            <option value="2023">2023</option>
          </select>
        </div>
      </div>

      <p className="text-sm">Furnished</p>
      <div className="mb-5 flex justify-start  gap-5 w-full">
        <button className="bg-[#F5F5F5] border [0.25px] [#606060] w-fit p-2 rounded-xl">
          {" "}
          Furnished
        </button>
        <button className="bg-[#F5F5F5]  [0.25px] [#606060] w-fit p-2 rounded-xl">
          {" "}
          Non-Furnished
        </button>
      </div>
      <div className="mb-5 grid grid-cols-3 font-[#9A9A9A] gap-1">
        <div className="text-[10px] font-thin  flex items-center gap-1">
          <input type="checkbox" id="1" name="1" value="1" />
          <p>Air Conditioning</p>
        </div>
        <div className="text-[10px] font-thin  flex items-center gap-1">
          <input type="checkbox" id="1" name="1" value="1" />
          <p>Barbeque</p>
        </div>
        <div className="text-[10px] font-thin  flex items-center gap-1">
          <input type="checkbox" id="1" name="1" value="1" />
          <p>Dryer</p>
        </div>
        <div className="text-[10px] font-thin flex items-center gap-1">
          <input type="checkbox" id="gym" name="gym" value="gym" />
          <p>Gym</p>
        </div>

        <div className="text-[10px] font-thin flex items-center gap-1">
          <input type="checkbox" id="laundry" name="laundry" value="laundry" />
          <p>Laundry</p>
        </div>

        <div className="text-[10px] font-thin flex items-center gap-1">
          <input type="checkbox" id="lawn" name="lawn" value="lawn" />
          <p>Lawn</p>
        </div>

        <div className="text-[10px] font-thin flex items-center gap-1">
          <input
            type="checkbox"
            id="microwave"
            name="microwave"
            value="microwave"
          />
          <p>Microwave</p>
        </div>

        <div className="text-[10px] font-thin flex items-center gap-1">
          <input type="checkbox" id="shower" name="shower" value="shower" />
          <p>Shower</p>
        </div>

        <div className="text-[10px] font-thin flex items-center gap-1">
          <input
            type="checkbox"
            id="refrigerator"
            name="refrigerator"
            value="refrigerator"
          />
          <p>Refrigerator</p>
        </div>

        <div className="text-[10px] font-thin flex items-center gap-1">
          <input
            type="checkbox"
            id="swimming-pool"
            name="swimming-pool"
            value="swimming-pool"
          />
          <p>Swimming Pool</p>
        </div>

        <div className="text-[10px] font-thin flex items-center gap-1">
          <input type="checkbox" id="sauna" name="sauna" value="sauna" />
          <p>Sauna</p>
        </div>

        <div className="text-[10px] font-thin flex items-center gap-1">
          <input
            type="checkbox"
            id="tv-cable"
            name="tv-cable"
            value="tv-cable"
          />
          <p>TV Cable</p>
        </div>

        <div className="text-[10px] font-thin flex items-center gap-1">
          <input
            type="checkbox"
            id="curtains"
            name="curtains"
            value="curtains"
          />
          <p>Curtains</p>
        </div>

        <div className="text-[10px] font-thin flex items-center gap-1">
          <input
            type="checkbox"
            id="washing-machine"
            name="washing-machine"
            value="washing-machine"
          />
          <p>Washing Machine</p>
        </div>

        <div className="text-[10px] font-thin flex items-center gap-1">
          <input type="checkbox" id="washer" name="washer" value="washer" />
          <p>Washer</p>
        </div>

        <div className="text-[10px] font-thin flex items-center gap-1">
          <input type="checkbox" id="sofa" name="sofa" value="sofa" />
          <p>Sofa</p>
        </div>

        <div className="text-[10px] font-thin flex items-center gap-1">
          <input type="checkbox" id="tv" name="tv" value="tv" />
          <p>TV</p>
        </div>

        <div className="text-[10px] font-thin flex items-center gap-1">
          <input type="checkbox" id="iron" name="iron" value="iron" />
          <p>Iron</p>
        </div>
      </div>

      <p className="text-sm">Reserved Parking</p>
      <div className="mb-5 grid grid-cols-4  gap-5 w-full">
        <button className="bg-[#F5F5F5] border [0.25px] [#606060] w-full p-2 rounded-xl">
          {" "}
          Yes
        </button>
        <button className="bg-[#F5F5F5]  [0.25px] [#606060] w-full p-2 rounded-xl">
          {" "}
          No
        </button>
      </div>

      <div className="mb-5 flex justify-between gap-10 w-full">
        <div className="basis-1/2 ">
          <p className="text-sm">Available On</p>
          <input
            type="date"
            id="availableon"
            name="availableon"
            className="bg-[#F5F5F5]  [0.25px] [#606060] w-full p-2 rounded-xl"
            placeholder="2/2/2002"
          />
        </div>
        <div className="basis-1/2">
          <p className="text-sm">Preferred Tenant</p>
          <select className="bg-[#EEEEEE] w-full rounded-md flex  px-2 py-1.5 ">
            <option value="Family">Family</option>
            <option value="Students">Students</option>
          </select>
        </div>
      </div>

      <div className="flex justify-between w-full gap-10">
        <div className="basis-1/2">
          <p className="text-sm">Agreement</p>
          <div className="mb-5 flex   gap-1 w-full">
            <button className="bg-[#F5F5F5] border [0.25px] [#606060] w-full p-2 rounded-xl">
              {" "}
              Lease
            </button>
            <button className="bg-[#F5F5F5]  [0.25px] [#606060] w-full p-2 rounded-xl">
              {" "}
              Other
            </button>
          </div>
        </div>
        <div className="basis-1/2">
          <p className="text-sm">Notice Time</p>
          <select className="bg-[#EEEEEE] w-full rounded-md flex  px-2 py-1.5 ">
            <option value="1 Month">1 Month</option>
            <option value="2 Month">2 Month</option>            
          </select>
        </div>
      </div>

    
      <p className="text-sm">Duration of Agreement</p>
          <div className="mb-5 flex   gap-1 w-full">
            <button className="bg-[#F5F5F5] border [0.25px] [#606060] w-full p-2 rounded-xl">
              {" "}
              1 Year
            </button>
            <button className="bg-[#F5F5F5]  [0.25px] [#606060] w-full p-2 rounded-xl">
              {" "}
              3 Years
            </button>
            <button className="bg-[#F5F5F5]  [0.25px] [#606060] w-full p-2 rounded-xl">
              {" "}
              Custom
            </button>
          </div>
            

      <div className="my-8">
        <Link
          href="4"
          className="font-medium btn-pop text-white rounded-full bg-[#FF5A5F] px-10 py-2"
        >
          Next
        </Link>
      </div>
    </div>
  );
}
