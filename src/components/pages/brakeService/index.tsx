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
        subTitle="Keep your vehicle safe and responsive with our expert brake inspections and repairs."
        heroImg={heroImg}
      />

      

      <ServicePageDesc
        title="FlashFit's Diagnostic Expertise"
        desc1="Your safety on the road is paramount, and at FlashFit, we prioritize it with our meticulous brake service. Equipped with cutting-edge diagnostic tools and expertise, our skilled technicians thoroughly inspect every aspect of your braking system. From brake pad checks to rotor resurfacing and fluid flushes, we leave no detail overlooked in ensuring optimal brake performance."
        desc2="hen you choose Flash Fit for brake service, you're choosing peace of mind. Our commitment to excellence means you can trust us to deliver reliable, efficient care for your vehicle's brakes. Whether you're navigating city streets or embarking on a long journey, our brake mastery ensures you can stop safely whenever needed. Experience the FlashFit difference in braking performance today."
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
