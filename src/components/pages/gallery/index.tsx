"use client";
import React from "react";
import Navbar from "@/components/layout/navbar/Navbar";
import Footer from "@/components/layout/footer/Footer";

import FlashBenefit from "@/components/reuseable/flashBenefit/flashBenefit";
import VehicleStatics from "@/components/reuseable/vehicleStatics/vehicleStatics";
import CustomerReview from "@/components/reuseable/customerReview/customerReview";
import FaqSection from "@/components/reuseable/Faqs/Faqs";
import BookContact from "@/components/reuseable/BookContact/bookContact";
import GalleryBanner from "./galleryBanner/galleryBanner";
import GalleryImageCard from "./gallerySection/galleryImageCard";




function GALLERY() {
  return (
    <div className="">
      <div
        className=""
      
      >
       <div className="root_parent_wrapper bg-[#2A317F]">
         <div className="root_child_wrapper ">
          <Navbar />
          <GalleryBanner/>
        </div>
        </div> 
      
      </div>
      
      <div className="root_parent_wrapper mt-28  ">
        <div className="root_child_wrapper">
          <GalleryImageCard/>
        </div>
      </div>

    

      <div className="md:root_parent_wrapper mb-24  mt-24" data-aos='fade-up' date-aos-duration='1000'>
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

export default GALLERY;
