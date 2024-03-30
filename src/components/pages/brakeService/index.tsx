"use client";
import BookContact from "@/components/reuseable/BookContact/bookContact";
import FaqSection from "@/components/reuseable/Faqs/Faqs";
import CustomerReview from "@/components/reuseable/customerReview/customerReview";
import ServiceBenefits from "@/components/reuseable/serviceBenefits";
import ServicePageDesc from "@/components/reuseable/servicePageDescription";
import ServicesTopSection from "@/components/reuseable/servicesTopSection";
import heroImg from "../../../../public/assets/services/images/brakeHeroImg.webp";
import img1 from "../../../../public/assets/services/images/brakeImg1.webp";
import img2 from "../../../../public/assets/services/images/brakeImg2.webp";

import React from "react";

export const benefits = [
  { id: 1, item: "Enhanced Safety" },
  { id: 1, item: "Preventive Maintenance" },
  { id: 1, item: "Extended Brake Life" },
  { id: 1, item: "Optimized Performance" },
];

const BrakeService = () => {
  return (
    <div className="font-serif relative">
      <ServicesTopSection
        title="Brake Service"
        subTitle="Discover Our Passion for Precision, Commitment to Quality, and Dedication to Your Vehicle's Performance"
        heroImg={heroImg}
      />

      <ServicePageDesc
        title="FlashFit's Diagnostic Expertise"
        desc1="Diagnostic testing is the cornerstone of our approach at Flash Fit. We understand that identifying and addressing automotive issues early is crucial to maintaining vehicle performance and safety. That's why we invest in state-of-the-art diagnostic equipment and employ skilled technicians who are trained to interpret diagnostic data accurately."
        desc2="Using state-of-the-art equipment and meticulous attention to detail, we accurately assess your vehicle's condition and help you stay compliant with legal requirements. Trust Flash Fit for reliable MOT testing that goes above and beyond to ensure your vehicle is roadworthy and ready for the journey ahead. Drive with confidence knowing your vehicle is in expert hands at Flash Fit."
      />

      <ServiceBenefits
        img1={img1}
        img2={img2}
        figure={"10x"}
        title="Expert Repairs"
        desc1="With skilled technicians and advanced techniques, we deliver 10 times the precision in brake repairs, ensuring optimal stopping power."
        title2="Performance Optimization"
        desc2="Experience 10 times the confidence in your vehicle's braking performance, with adjustments made to enhance responsiveness and control."
        data={benefits}
      />

      {/* review code and remove outter wrapper */}
      <div className="root_parent_wrapper bg-[#F5F5F7] pt-5 w-full">
        <div className="root_child_wrapper">
          <CustomerReview />
        </div>
      </div>

      <div className="root_parent_wrapper  ">
        <div className="root_child_wrapper">
          <FaqSection />
        </div>
      </div>

      <div
        className="md:root_parent_wrapper   py-24"
        data-aos="fade-up"
        date-aos-duration="1000"
      >
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

export default BrakeService;
