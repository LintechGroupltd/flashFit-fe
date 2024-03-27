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
import CustomerReview from "@/components/reuseable/customerReview/customerReview";
import FaqSection from "@/components/reuseable/Faqs/Faqs";
import BookContact from "@/components/reuseable/BookContact/bookContact";
import Footer from "@/components/layout/footer/Footer";
import VehicleStatics from "@/components/reuseable/vehicleStatics/vehicleStatics";

function HOME() {
  return (
    <div className="">
      <div
        className="root_parent_wrapper bg-[#2A317F]"
      
      >
        <div className="root_child_wrapper">
          <Navbar />
          <HomeBanner />
        </div>
      </div>

      <div className="root_parent_wrapper " >
        <div className="root_child_wrapper">
          <div className="" data-aos='fade-up' data-aos-duration='1500'>
            <SearchVehicle />
          </div>

          <div className="">
            <HomeServices />
          </div>

          <div className="">
            <OurAchievement />
          </div>
        </div>
      </div>

      <div className="root_parent_wrapper bg-[#2A317F]">
        <div className="root_child_wrapper">
          <FlashBenefit />
        </div>
      </div>

      <div className="root_parent_wrapper bg-[#F5F5F7] pt-5 w-full">
        <div className="root_child_wrapper">
          <div className="">
            <VehicleStatics />
          </div>
          <CustomerReview />
        </div>
      </div>

      <div className="root_parent_wrapper  ">
        <div className="root_child_wrapper">
          <FaqSection />
        </div>
      </div>

      <div className="md:root_parent_wrapper   mt-24" data-aos='fade-up' date-aos-duration='1000'>
        <div className="md:block hidden root_child_wrapper">
          <BookContact />
        </div>
        <div className="md:hidden block ">
          <BookContact />
        </div>
      </div>

      <div className="root_parent_wrapper  mt-20 bg-[#F5F5F7]  ">
        <div className="root_child_wrapper">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default HOME;
