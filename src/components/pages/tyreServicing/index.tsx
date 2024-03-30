"use client";
import React from "react";
import img1 from "../../../../public/assets/services/images/tyreImg1.webp";
import img2 from "../../../../public/assets/services/images/tyreImg2.webp";
import ServicesTopSection from "@/components/reuseable/servicesTopSection";
import ServicePageDesc from "@/components/reuseable/servicePageDescription";
import ServiceBenefits from "@/components/reuseable/serviceBenefits";
import CustomerReview from "@/components/reuseable/customerReview/customerReview";
import FaqSection from "@/components/reuseable/Faqs/Faqs";
import BookContact from "@/components/reuseable/BookContact/bookContact";
import ServiceSolution from "@/components/reuseable/serviceSolution";
import SearchVehicle from "../home/homeBanner/searchVehicle";


export const benefits = [
  { id: 1, item: "Early Issue Detection" },
  { id: 2, item: "Accurate Repairs" },
  { id: 3, item: "Transparent Communication" },
  { id: 4, item: "Confidence in Vehicle Performance" },
];

export const solutions = [
  {
    id: 1,
    tag: " New Tyres from Major Brands ",
    item: "Warning lights are indicators on the dashboard of a vehicle that alert the driver of a potential problem or malfunction. They can range from simple reminders, such as low fuel or seat belt not fastened, to critical warnings, such as engine overheating or brake failure.",
  },
  {
    id: 2,
    tag: "Budget Tyres",
    item: "We understand that not everyone needs premium tyres, which is why we offer budget-friendly options without compromising on quality. Our budget tyres provide reliable performance and longevity at an affordable price point ",
  },
  {
    id: 3,
    tag: "Puncture Repairs",
    item: "Dealing with a flat tyre can be frustrating, but our expert technicians are here to help. We offer prompt and efficient puncture repairs using industry-leading techniques to ensure a lasting solution and get you back on the road safely.",
  },
  {
    id: 4,
    tag: "Wheel Balancing",
    item: "Even minor imbalances in your wheels can lead to vibrations and premature tyre wear. Our precision wheel balancing services use advanced equipment to identify and correct any imbalances, resulting in a smoother, more comfortable ride and extended tyre life. ",
  },
];

const TyreServicing = () => {
  return (
    <div className="font-serif relative">

     <div className="md:bg-[#fff] md:h-[0%] h-[460px] bg-[#2A317F]">
      <ServicesTopSection
        title="Tyres"
        subTitle="Drive confidently with Flash Fit's tire services. From inspections to repairs, we ensure optimal tire condition for safety and performance. "
        showSearchVehicle={true}
      />
      <div className="root_parent_wrapper ">
        <div className="root_child_wrapper md:mt-0 mt-44 md:translate-y-[-0%] translate-y-[-35%]">
          <SearchVehicle />
        </div>
      </div>
      </div> 
     
     <div className="md:mt-0  mt-[260px]">
     <ServicePageDesc
        title="FlashFit's Tyre Care"
        desc1="At FlashFit, we understand the pivotal role tyres play in your driving experience. That's why we offer comprehensive tyre care services designed to keep you rolling smoothly and safely on the road. From tyre inspections to puncture repairs and replacements, our expert technicians ensure your tyres are in optimal condition for enhanced grip, stability, and fuel efficiency."
        desc2="Our tyre care services encompass thorough inspections to detect signs of wear or damage, providing recommendations for necessary repairs or replacements. Whether you encounter a puncture or require routine maintenance, trust FlashFit to keep your tyres road-ready for every journey. Drive with peace of mind, knowing that your tyres are in expert hands with Flash Fit's tyre excellence."
      />

   

      <ServiceBenefits
        img1={img1}
        img2={img2}
        figure={"10x"}
        title="Advanced Equipment"
        desc1=" Our cutting-edge diagnostic tools provide 10 times the accuracy
              in identifying vehicle issues, ensuring comprehensive
              assessment."
        title2=" Expert Analysis"
        desc2=" With our skilled technicians, you receive 10 times the expertise
              in interpreting diagnostic results, leading to precise
              recommendations for repairs."
        data={benefits}
      />


<ServiceSolution
        title="Our Comprehensive Solution for a Smooth Ride"
        desc=" Explore How Flash Fit's Unrivaled Expertise, Unmatched Convenience, and Unwavering Commitment to Quality Service Elevate Your Driving Experience to New Heights."
        data={solutions}
      />




      {/* review code and remove outter wrapper */}
      <div className="root_parent_wrapper bg-[#F5F5F7] pt-5 w-full">
        <div className="root_child_wrapper">
          <CustomerReview />
        </div>
      </div>

      <div className="root_parent_wrapper">
        <div className="root_child_wrapper">
          <FaqSection />
        </div>
      </div>

      <div
        className="md:root_parent_wrapper   py-24"
        data-aos="fade-up"
        date-aos-duration="1000">
        <div className="md:block hidden root_child_wrapper">
          <BookContact />
        </div>
        <div className="md:hidden block ">
          <BookContact />
        </div>
      </div>
    </div>
  );
};

export default TyreServicing;
