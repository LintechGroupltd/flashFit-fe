"use client";
import React from "react";
// import Footer from "@/components/layout/footer/Footer";
import Navbar from "@/components/layout/navbar/Navbar";
import HomeBanner from "./homeBanner/homeBanner";
import heroBgImg from "../../../../public/assets/home/bannerSection/HeroBackground.svg";
import SearchVehicle from "./homeBanner/searchVehicle";
import HomeServices from "./homeServices/homeServices";
import OurAchievement from "./ourAchievement/ourAchievement";
import FlashBenefit from "@/components/reuseable/flashBenefit/flashBenefit";
import VehicleStatics from "./vehicleStatics/vehicleStatics";
import CustomerReview from "@/components/reuseable/customerReview/customerReview";
import FaqSection from "@/components/reuseable/Faqs/Faqs";
import BookContact from "@/components/reuseable/BookContact/bookContact";

function HOME() {
  return (
    <div className="">
      <div className="relative">
        <div
          className="w-full bg-cover bg-center "
          style={{
            backgroundImage: `url(${heroBgImg.src})`,
          }}
        >
          <Navbar />
          <HomeBanner />
        </div>

        <div className="absolute px-[100px] w-full  h-[44] top-[650px] md:top-[620px] lg:top-[570px] xl:top-[610px] 2xl:top-[860px] 3xl:top-[790px]">
          <SearchVehicle />
        </div>
      </div>

      <div className="px-[100px]">
        <div className="mt-44 ">
          <HomeServices />
        </div>

        <div>
          <OurAchievement />
        </div>

        <div>
          <FlashBenefit />
        </div>
      </div>

      <div className="bg-[#F5F5F7] mt-20">
        <VehicleStatics/>
        <CustomerReview/>
      </div>
  
     <div>
       <FaqSection/>  
     </div>

     <div className="px-[100px]">
        <BookContact/>  
     </div>     

      {/* <Footer /> */}
    </div>
  );
}

export default HOME;
