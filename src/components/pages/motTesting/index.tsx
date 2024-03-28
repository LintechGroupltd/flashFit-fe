"use client";
import BookContact from "@/components/reuseable/BookContact/bookContact";
import FaqSection from "@/components/reuseable/Faqs/Faqs";
import CustomerReview from "@/components/reuseable/customerReview/customerReview";
import ServiceBenefits from "@/components/reuseable/serviceBenefits";
import ServicePageDesc from "@/components/reuseable/servicePageDescription";
import ServicesTopSection from "@/components/reuseable/servicesTopSection";
import heroImg from "../../../../public/assets/services/images/motHeroImg.png";
import img1 from "../../../../public/assets/services/images/manfixcar.jpg.png";
import img2 from "../../../../public/assets/services/images/motHeroImg.png";
import React from "react";

export const benefits = [
  { id: 1, item: "Early Issue Detection" },
  { id: 2, item: "Accurate Repairs" },
  { id: 3, item: "Transparent Communication" },
  { id: 4, item: "Confidence in Vehicle Performance" },
];

const MotTesting = () => {
  return (
    <div className="font-serif relative">
      <ServicesTopSection
        title="MOT Testing"
        subTitle="Discover Our Passion for Precision, Commitment to Quality, and Dedication to Your Vehicle's Performance"
        heroImg={heroImg}
      />

      <ServicePageDesc
        title=" Road-Ready MOT Testing at FlashFit"
        desc1="At Flash Fit, we prioritize your safety on the road. Our MOT
                testing services are designed to ensure your vehicle meets
                regulatory standards, providing you with peace of mind every
                time you drive. Our certified technicians conduct thorough
                inspections of essential components, including lights, brakes,
                exhaust emissions, and more."
        desc2="  Using state-of-the-art equipment and meticulous attention to
        detail, we accurately assess your vehicle's condition and help
        you stay compliant with legal requirements. Trust Flash Fit for
        reliable MOT testing that goes above and beyond to ensure your
        vehicle is roadworthy and ready for the journey ahead. Drive
        with confidence knowing your vehicle is in expert hands at Flash
        Fit."
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

export default MotTesting;
