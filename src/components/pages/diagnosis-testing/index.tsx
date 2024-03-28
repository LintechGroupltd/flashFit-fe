"use client";

import BookContact from "@/components/reuseable/BookContact/bookContact";
import FaqSection from "@/components/reuseable/Faqs/Faqs";
import CustomerReview from "@/components/reuseable/customerReview/customerReview";
import ServiceBenefits from "@/components/reuseable/serviceBenefits";
import ServicePageDesc from "@/components/reuseable/servicePageDescription";
import ServicesTopSection from "@/components/reuseable/servicesTopSection";
import img1 from "../../../../public/assets/services/images/manfixcar.jpg.png";
import img2 from "../../../../public/assets/services/images/manCheckingCar.png";
import heroImg from "../../../../public/assets/services/images/exhaustHeroImg.png";
import React from "react";

export const benefits = [
  { id: 1, item: "Early Issue Detection" },
  { id: 1, item: "Accurate Repairs" },
  { id: 1, item: "Transparent Communication" },
  { id: 1, item: "Confidence in Vehicle Performance" },
];

const DiagnosisTesting = () => {
  return (
    <div className="font-serif relative">
      <ServicesTopSection
        title="Diagnostics Testing"
        subTitle="Discover Our Passion for Precision, Commitment to Quality, and Dedication to Your Vehicle's Performance"
        heroImg={"/assets/services/servicing.jpg"}
      />

      <ServicePageDesc
        title="FlashFit's Diagnostic Expertise"
        desc1="Diagnostic testing is the cornerstone of our approach at Flash Fit. We understand that identifying and addressing automotive issues early is crucial to maintaining vehicle performance and safety. That's why we invest in state-of-the-art diagnostic equipment and employ skilled technicians who are trained to interpret diagnostic data accurately.."
        desc2="Our diagnostic testing process involves a thorough examination of your vehicle's systems and components, including the engine, transmission, brakes, suspension, and electrical systems. Using advanced scanning tools and diagnostic software, we can pinpoint potential issues with precision, saving you time and money in the long run."
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

export default DiagnosisTesting;
