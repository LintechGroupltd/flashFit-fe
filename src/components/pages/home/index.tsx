"use client";
import React from "react";
import Footer from "@/components/layout/footer/Footer";
import Navbar from "@/components/layout/navbar/Navbar";
import HomeBanner from "./homeBanner/homeBanner";
import heroBgImg from '../../../../public/assets/home/bannerSection/HeroBackground.svg'
import SearchVehicle from "./homeBanner/searchVehicle";
import HomeServices from "./homeServices/homeServices";
import OurAchievement from "./ourAchievement/ourAchievement";
import FlashBenefit from "@/components/reuseable/flashBenefit/flashBenefit";

function HOME() {
  return (
    <div className="w-full">
      <div className="relative">

      <div    className="w-full bg-cover bg-center "
      style={{
        backgroundImage: `url(${heroBgImg.src})`,
      }}>
       <Navbar />
       <HomeBanner/>

      </div>
      <div className="absolute w-full  h-[44] px-[100px] top-[650px] md:top-[700px] xl:top-[660px] 2xl:top-[860px] 3xl:top-[860px]">
         <SearchVehicle/>
      </div>  
      </div>
    
      <div className="mt-44 px-[100px]">
        <HomeServices/>
      </div>

     <div>
       <OurAchievement/>
     </div>

     <div>
       <FlashBenefit/>
     </div>

      {/* <Footer /> */}
    </div>
  );
}

export default HOME;
