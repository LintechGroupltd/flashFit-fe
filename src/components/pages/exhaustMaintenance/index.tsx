"use client";

import BookContact from "@/components/reuseable/BookContact/bookContact";
import FaqSection from "@/components/reuseable/Faqs/Faqs";
import CustomerReview from "@/components/reuseable/customerReview/customerReview";
import ServiceBenefits from "@/components/reuseable/serviceBenefits";
import ServicePageDesc from "@/components/reuseable/servicePageDescription";
import ServicesTopSection from "@/components/reuseable/servicesTopSection";
import img1 from "../../../../public/assets/services/images/exImg1.webp";
import img2 from "../../../../public/assets/services/images/exImg2.webp"
import heroImg from "../../../../public/assets/services/images/exhaustHeroImg.webp";
import React from "react";

export const benefits = [
  { id: 1, item: "Emissions Control" },
  { id: 2, item: "Extended Vehicle Lifespan" },
  { id: 3, item: "Reduced Maintenance Costs" },
  { id: 4, item: "Safety Assurance" },
];

const ExhaustMaintenance = () => {
  return (
    <div className="font-serif relative">
      <ServicesTopSection
        title="Exhaust Maintenance"
        subTitle="Ensure optimal engine performance and emissions control with our exhaust system inspections and repairs."
        heroImg={heroImg}
      />



      <ServicePageDesc
        title="FlashFit's Diagnostic Expertise"
        desc1="At FlashFit, we recognize the importance of a well-maintained exhaust system for both your vehicle's performance and environmental impact. Our exhaust maintenance service is designed to ensure efficient emissions control and promote cleaner air for everyone. With skilled technicians and state-of-the-art equipment, we meticulously inspect and repair your exhaust system to keep it functioning optimally.   "
        desc2="Our thorough inspections and expert repairs ensure that your vehicle meets emissions standards and operates efficiently. Drive with confidence knowing that your exhaust system is in the best hands with FlashFit. Experience the difference in air quality and vehicle performance with our exhaust maintenance service today."
      />


      <ServiceBenefits
        img1={img1}
        img2={img2}
        figure={"10x"}
        title=" Comprehensive Inspections"
        desc1="Our comprehensive inspections ensure thorough detection of exhaust system issues, ensuring optimal performance and emissions control."

        title2="Engine Performance Optimization "
        desc2="A well-maintained exhaust system boosts engine efficiency, improving fuel economy and vehicle operation."
        data={benefits}
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

export default ExhaustMaintenance;
