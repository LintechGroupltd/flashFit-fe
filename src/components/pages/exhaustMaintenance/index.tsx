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
  { id: 1, item: "Early Issue Detection" },
  { id: 1, item: "Accurate Repairs" },
  { id: 1, item: "Transparent Communication" },
  { id: 1, item: "Confidence in Vehicle Performance" },
];

const ExhaustMaintenance = () => {
  return (
    <div className="font-serif relative">
      <ServicesTopSection
        title="Exhaust Maintenance"
        subTitle="Discover Our Passion for Precision, Commitment to Quality, and Dedication to Your Vehicle's Performance"
        heroImg={heroImg}
      />

      <ServicePageDesc
        title="FlashFit's Exhaust Maintenance"
        desc1="At FlashFit, we recognize the importance of a well-maintained exhaust system for both your vehicle's performance and environmental impact. Our exhaust maintenance service is designed to ensure efficient emissions control and promote cleaner air for everyone. With skilled technicians and state-of-the-art equipment, we meticulously inspect and repair your exhaust system to keep it functioning optimally."
        desc2="Our thorough inspections and expert repairs ensure that your vehicle meets emissions standards and operates efficiently. Drive with confidence knowing that your exhaust system is in the best hands with FlashFit. Experience the difference in air quality and vehicle performance with our exhaust maintenance service today."
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
