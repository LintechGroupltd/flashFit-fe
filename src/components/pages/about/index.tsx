"use client";
import React from "react";
import Navbar from "@/components/layout/navbar/Navbar";
import Footer from "@/components/layout/footer/Footer";
import AboutBanner from "./aboutBanner/aboutBanner";
import FlashFitNumbers from "./flashFitNumbers/flashFitNumbers";
import WhoWeAre from "./whoWeAre/whoWeAre";
import FlashBenefit from "@/components/reuseable/flashBenefit/flashBenefit";
import VehicleStatics from "@/components/reuseable/vehicleStatics/vehicleStatics";
import CustomerReview from "@/components/reuseable/customerReview/customerReview";
import FaqSection from "@/components/reuseable/Faqs/Faqs";
import BookContact from "@/components/reuseable/BookContact/bookContact";
import ServicesTopSection from "@/components/reuseable/servicesTopSection";

import aboutPositioningBannerImg from "../../../../public/assets/about/aboutBannerPositioningImg.svg";
import AboutBannerImageForMobile from "../../../../public/assets/about/AboutBannerImageForMobile.svg";

function ABOUT() {
  return (
    <div className="">
      <div className="md:h-[1000px]">
        <div className="root_parent_wrapper bg-[#2A317F]">
          <div className="root_child_wrapper ">
            <Navbar />
            <AboutBanner />
          </div>
        </div>
      </div>

  
      {/* <div className="font-serif relative md:block hidden">
        <ServicesTopSection 
          title="About FlashFit"
          subTitle="Where Automotive Passion Meets Precision:
        Unveiling the Heart Behind Flash Fit's Drive for
        Excellence."
          heroImg={aboutPositioningBannerImg}
        />
      </div>

 
      <div className="font-serif relative md:hidden block">
        <ServicesTopSection 
          title="About FlashFit"
          subTitle="Where Automotive Passion Meets Precision:
        Unveiling the Heart Behind Flash Fit's Drive for
        Excellence."
          heroImg={AboutBannerImageForMobile}
        />
      </div> */}


      <div className="root_parent_wrapper">
        <div className="root_child_wrapper">
          <FlashFitNumbers />
        </div>
      </div>

      <div className="root_parent_wrapper">
        <div className="root_child_wrapper">
          <WhoWeAre />
        </div>
      </div>

      <div className="root_parent_wrapper bg-[#2A317F] mt-24">
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

      <div
        className="md:root_parent_wrapper mb-24  mt-24"
        data-aos="fade-up"
        date-aos-duration="1000">
        <div className="md:block hidden root_child_wrapper">
          <BookContact />
        </div>
        <div className="md:hidden block ">
          <BookContact />
        </div>
      </div>

      {/* <div className="root_parent_wrapper  mt-20 bg-[#F5F5F7]  ">
        <div className="root_child_wrapper">
          <Footer />
        </div>
      </div> */}
    </div>
  );
}

export default ABOUT;
