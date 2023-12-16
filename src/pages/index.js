/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import { Inter } from "next/font/google";
import ListingCard from "@/components/listing/ListingCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import OwnerHero from "@/images/owners.png";
import RentHero from "@/images/renters.png";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import TestimonialCard from "@/components/owner/TestimonialCard";
import ArticleCard from "@/components/home/ArticleCard";
import Footer from "@/components/home/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="py-20 xl:pb-1 text-black font-primary">
      <div className="bg-hero4Bg lg:bg-heroBg bg-no-repeat bg-center text-white min-h-[190px] xl:min-h-[600px] flex flex-col justify-center items-center gap-2">
        <h1 className="font-light text-center text-sm xl:text-2xl">
          A Street for <br />{" "}
          <span className="text-3xl xl:text-7xl  font-semibold ">
            Renting Home
          </span>
        </h1>
        <p className="text-sm font-thin">100% verified properties</p>
        <div className="my-8  flex-col justify-start w-full px-24 hidden xl:flex">
          <div className="flex justify-start"><button className="text-white font-medium bg-[#FF5A5F] rounded-t-xl px-12 ml-12 py-2 ">RENT</button></div>
          <div className="bg-white p-3 text-black rounded-xl px-5 gap-10 flex items-center w-full ">
            <div className="basis-4/12 flex flex-col gap-3">
              <div className="text-xl font-semibold">City</div>
              
                <div>
                  <select
                    name="token"
                    id="token"
                    className=" border-b border-[#FF5A5F] w-full bg-transparent py-1"                                  
                    >
                    <option value="usdt">Delhi</option>
                    <option value="matic">Noida</option>
                  </select>
                </div>            
              </div>
              <div className="basis-6/12 flex gap-3 flex-col">
                <div className="text-xl font-semibold">LOCALITY / SUB-LOCALITY</div>
                <div>
                  <input placeholder="Enter Locality here" className="border-b border-[#FF5A5F] w-full" />
                </div>
              </div>
              <div className="basis-2/12 flex justify-center">
                <button className="bg-[#FF5A5F] px-5 py-1 text-white font-medium rounded-full text-xl" >SEARCH</button>
              </div>
            </div>
        </div>
      </div>

      <div className="text-black my-5 mx-3 xl:mx-12 xl:py-12">
        <div>
          <p className="text-xs xl:text-lg font-thin">
            Handpicked properties by our team
          </p>
          <h1 className="font-secondary text-lg xl:text-5xl">
            Featured Properties
          </h1>
        </div>
        <div className="my-5">
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
            <SwiperSlide>
              <ListingCard
                place="Chattarpur, Delhi"
                title="Flat / Apartment (Non-Furnished)"
                bedrooms="2"
                bathroom="2"
                sqft="530"
                price="14,999"
              />
            </SwiperSlide>
            <SwiperSlide>
              <ListingCard
                place="Chattarpur, Delhi"
                title="Flat / Apartment (Non-Furnished)"
                bedrooms="2"
                bathroom="2"
                sqft="530"
                price="14,999"
              />
            </SwiperSlide>
            <SwiperSlide>
              <ListingCard
                place="Chattarpur, Delhi"
                title="Flat / Apartment (Non-Furnished)"
                bedrooms="2"
                bathroom="2"
                sqft="530"
                price="14,999"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <div className="bg-[#FF5A5F] p-5 xl:p-20 xl:my-10">
        <Swiper spaceBetween={25} slidesPerView={1}>
          <SwiperSlide>
            <p className="font-thin text-white text-xs xl:text-2xl ">
              Let's face it - property rental is a tricky affair, whether you
              are a property owner, or someone looking for accommodation.
              However, it doesn't have to be that way - at Housing Street, we
              make it all the simpler.
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <p className="font-thin text-white text-xs xl:text-2xl ">
              So regardless of whether you are a property owner or renter, feel
              free to get in touch with us right away - just drop off an email
              at support@housingstreet.com or give us a call at 18005475450 ,
              and we will work towards finding the best solution for you.
            </p>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="my-5 mx-5 xl:mx-16 xl:py-16">
        <h1 className="font-secondary text-lg xl:text-5xl">
          Find Properties in These Areas
        </h1>
        <div className="grid grid-cols-2 xl:grid-cols-2 gap-3 xl:gap-20 ">
          <div className="border flex flex-col gap-1 xl:text-4xl rounded-xl xl:min-h-[120px] border-black/20 p-3  hover:text-white hover:bg-[#FF5A5F] ">
            <h3>Delhi</h3>
            <p className="text-xs xl:text-2xl">20 Properties</p>
            <button className="btn-pop border w-fit hover:border-white border-black px-3  text-xs xl:text-2xl rounded-full">
              View All
            </button>
          </div>
          <div className="border flex flex-col gap-1 xl:text-4xl rounded-xl xl:min-h-[120px] border-black/20 p-3  hover:text-white hover:bg-[#FF5A5F] ">
            <h3>Delhi</h3>
            <p className="text-xs xl:text-2xl">20 Properties</p>
            <button className="btn-pop border w-fit hover:border-white border-black px-3  text-xs xl:text-2xl rounded-full">
              View All
            </button>
          </div>
          <div className="border flex flex-col gap-1 xl:text-4xl rounded-xl xl:min-h-[120px] border-black/20 p-3  hover:text-white hover:bg-[#FF5A5F] ">
            <h3>Delhi</h3>
            <p className="text-xs xl:text-2xl">20 Properties</p>
            <button className="btn-pop border w-fit hover:border-white border-black px-3  text-xs xl:text-2xl rounded-full">
              View All
            </button>
          </div>
        </div>
      </div>
      <div className="my-5 text-white bg-[#FF5A5F] p-5 xl:py-20">
        <div className="text-center">
          <h1 className="font-secondary text-lg xl:text-5xl">Why Choose Us</h1>
          <p className="font-light text-xs xl:text-base">
            We provide full service at every step
          </p>
        </div>
        <div className="py-5 flex flex-col lg:flex-row gap-16 lg:gap-5 xl:mx-16">
          <div className="flex flex-col gap-5">
            <div className="flex flex-col justify-center items-center">
              <Image
                src={OwnerHero}
                alt="HousingStreet"
                className="p-3 bg-white/50 rounded-t-3xl w-1/4 "
              />
              <p className="text-center text-black p-1 bg-white w-fit px-12 rounded-full font-light">
                For Owners
              </p>
            </div>
            <div className="text-center flex flex-col items-center  gap-2">
              <h1 className=" font-medium xl:text-3xl">Property let out made easy</h1>
              <p className="font-thin text-xs xl:w-1/2 xl:text-lg">
                Don't worry - our team will ensure your property is let out in
                30 days; you won't have to wait 3 months! If your property is
                prematurely vacated within 3 months, you don't have to pay
                commission again.
                <br />
                <br />
                You don't have to meet prospective clients, show them vacant
                properties, and then follow up - our team will take care of it.
              </p>
            </div>
            <div className=" flex items gap-2 w-full justify-end ">
              <Link
                href="owner"
                className="flex btn-pop text-sm font-medium  gap-2 items-center"
              >
                View More <FiArrowRight />
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <div className="flex flex-col justify-center items-center">
              <Image
                src={RentHero}
                alt="HousingStreet"
                className="p-3 bg-white/50 rounded-t-3xl w-1/4 "
              />
              <p className="text-center text-black p-1 bg-white w-fit px-12 rounded-full font-light">
                For Renters
              </p>
            </div>
            <div className="text-center flex flex-col items-center  gap-2">
              <h1 className=" font-medium xl:text-3xl">Housing Street owned branches</h1>
              <p className="font-thin text-xs xl:w-1/2 xl:text-lg">
                Our goal is to establish long-term rapport, so we have our own
                offices in or near your area - it lets us offer the very best
                service.
                <br />
                <br />
                Thus, renters don't have to visit multiple property owners to
                find a suitable property, while property owners are spared the
                hassle of following up with numerous property dealers to find
                proper renters.
              </p>
            </div>
            <div className=" flex items gap-2 w-full justify-end ">
              <Link
                href="owner"
                className="flex btn-pop text-sm font-medium  gap-2 items-center"
              >
                View More <FiArrowRight />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="flex flex-col items-center  xl:pt-12">
          <h1 className="font-secondary text-lg text-center xl:text-5xl">Testimonials</h1>
          <p className="font-light text-xs">
            What our Customers are Saying About us
          </p>
        </div>
        <div className="my-5 mx-3 xl:my-12">
          <Swiper spaceBetween={25} slidesPerView={1.5}
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
              slidesPerView: 3,
              spaceBetween: 50,
            },
            1280: {
              slidesPerView: 3.2,
              spaceBetween: 50,
            },
            1536: { 
              slidesPerView: 3.2,
              spaceBetween: 50, 
            },
          }}
          >
            <SwiperSlide>
              <TestimonialCard />
            </SwiperSlide>
            <SwiperSlide>
              <TestimonialCard />
            </SwiperSlide>
            <SwiperSlide>
              <TestimonialCard />
            </SwiperSlide>
            <SwiperSlide>
              <TestimonialCard />
            </SwiperSlide>
            <SwiperSlide>
              <TestimonialCard />
            </SwiperSlide>
            <SwiperSlide>
              <TestimonialCard />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <div className="my-5 xl:my-20">
        <h1 className="font-secondary text-lg xl:text-5xl text-center">Articles & Tips</h1>
        <div className="my-5 mx-3">
          <Swiper spaceBetween={25} slidesPerView={1.5}
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
              slidesPerView: 3, 
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
            <SwiperSlide>  
              <ArticleCard />
            </SwiperSlide>
            <SwiperSlide>
              <ArticleCard />
            </SwiperSlide>
            <SwiperSlide>
              <ArticleCard />
            </SwiperSlide>
            <SwiperSlide>
              <ArticleCard />
            </SwiperSlide>
            <SwiperSlide>
              <ArticleCard />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
