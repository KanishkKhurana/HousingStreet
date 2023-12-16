import React from "react";
import Link from "next/link"

export default function Index() {
  return (
    <div className="py-20 text-black font-primary mx-8 xl:mx-44 font-thin">
      <h1 className="text-center text-xl mt-5 xl:text-5xl font-medium">Checkout</h1>

      <div className="my-5">
        <p className="text-sm xl:text-xl">Debit / Credit Card</p>
        <div className="grid grid-cols-2 gap-3 mt-3">
          <button className="bg-[#F5F5F5] font-light text-sm  border-[#606060] w-full p-2 rounded-xl">
            Debit Card
          </button>
          <button className="bg-[#F5F5F5] font-light text-sm  border-[#606060] w-full p-2 rounded-xl">
            Credit Card
          </button>
        </div>
      </div>

      <div className="mb-5">
        <p className="text-sm xl:text-xl">Card Number </p>
        <input
          type="number"
          placeholder="0189467896558"
          className="bg-[#F5F5F5] font-medium  w-full p-2 rounded-xl"
        />
      </div>

      <div className="mb-5 flex gap-5">
        <div>
          <p className="xl:text-xl">Expiry Date </p>
          <div className="bg-[#EEEEEE] w-fit rounded-md flex  px-2 py-1.5 ">
            <select name="token" id="token" className="   bg-transparent py-1">
              <option value="Jan">JAN</option>
              <option value="Feb">FEB</option>
              <option value="Mar">MAR</option>
              <option value="Apr">APR</option>
              <option value="May">MAY</option>
              <option value="Jun">JUN</option>
              <option value="Jul">JUL</option>
              <option value="Aug">AUG</option>
              <option value="Sep">SEP</option>
              <option value="Oct">OCT</option>
              <option value="Nov">NOV</option>
              <option value="Dec">DEC</option>
            </select>
            <select name="token" id="token" className="   bg-transparent py-1">
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
        <div>
        <p className="xl:text-xl">CVV </p>
        <input
          type="number"
          placeholder="123"
          className="bg-[#F5F5F5] font-medium  w-full p-2 rounded-xl"
        />
        </div>
      </div>

      <div className="mb-5">
        <p className="text-sm xl:text-xl">Name</p>
        <input
          type="text"
          placeholder="Jenny Streets"
          className="bg-[#F5F5F5] font-medium  w-full p-2 rounded-xl"
        />
      </div>

      <div className="mt-8 flex justify-between">
        <button className="font-medium btn-pop text-white rounded-full bg-[#9f9f9f] px-10 py-2">
          Cancel
        </button>
        <Link href="success" className="font-medium btn-pop text-white rounded-full bg-[#FF5A5F] px-10 py-2">
          Buy Now
        </Link>
      </div>
    </div>
  );
}
