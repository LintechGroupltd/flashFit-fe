"use client";
import React from "react";
import Footer from "@/components/layout/footer/Footer";
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
      <div
        className="root_parent_wrapper bg-[#2A317F]"
        style={{
          backgroundImage: `url(${heroBgImg.src})`,
        }}>
        <div className="root_child_wrapper">
          <Navbar />
          <HomeBanner />
        </div>
      </div>

      <div className="root_parent_wrapper">
        <div className="root_child_wrapper">
          <SearchVehicle />

          <div className="mt-20">
            <HomeServices />
          </div>

          <div className="mt-20">
            <OurAchievement />
          </div>

          <div className="mt-20">
            <FlashBenefit />
          </div>
        </div>
      </div>

      <div className="root_parent_wrapper bg-[#F5F5F7] mt-20">
        <div className="root_child_wrapper">
          <div className="mt-20">
            <VehicleStatics />
          </div>
          <CustomerReview />
        </div>
      </div>

      <div className="root_parent_wrapper  mt-20">
        <div className="root_child_wrapper">
          <FaqSection />

          <BookContact />
        </div>
      </div>

      {/* <Footer /> */}
    </div>
  );
}

export default HOME;
