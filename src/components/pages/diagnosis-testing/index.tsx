"use client";

import BookContact from "@/components/reuseable/BookContact/bookContact";
import FaqSection from "@/components/reuseable/Faqs/Faqs";
import CustomerReview from "@/components/reuseable/customerReview/customerReview";
import ServiceBenefits from "@/components/reuseable/serviceBenefits";
import ServicePageDesc from "@/components/reuseable/servicePageDescription";
import ServicesTopSection from "@/components/reuseable/servicesTopSection";
import img1 from "../../../../public/assets/services/images/dgImg1.webp";
import img2 from "../../../../public/assets/services/images/dgImg2.webp";
import heroImg from "../../../../public/assets/services/images/exhaustHeroImg.png";
// import dgIcon1 from ""
import React from "react";
import ServiceSolution from "@/components/reuseable/serviceSolution";
import SolutionListIcon from "@/components/svg/SolutionListIcon";
import DgIcon1 from "@/components/svg/dgIcon1";
import DgIcon2 from "@/components/svg/DgIcon2";
import DgIcon3 from "@/components/svg/DgIcon3";
import DgIcon4 from "@/components/svg/DgIcon4";

export const benefits = [
  { id: 1,item: "Early Issue Detection" },
  { id: 1, item: "Accurate Repairs" },
  { id: 1, item: "Transparent Communication" },
  { id: 1, item: "Confidence in Vehicle Performance" },
];

export const solutions = [
  {
    id: 1,
    icon:<DgIcon1 />, 
    tag: "Engine Performance",
    item: "We analyze engine parameters such as fuel delivery, ignition timing, and exhaust emissions to ensure optimal performance and efficiency.",
  },
  {
    id: 2,
    icon:<DgIcon2 />, 
    tag: "Budget Tyres",
    item: "Our diagnostic tests assess transmission fluid levels, shift points, and overall operation to detect any signs of wear or malfunction. ",
  },
  {
    id: 3,
    icon:<DgIcon3 />, 
    tag: "Braking System",
    item: "We inspect brake pads, rotors, calipers, and hydraulic components to ensure your brakes are operating correctly and safely.",
  },
  {
    id: 4,
    icon:<DgIcon4 />, 
    tag: "Suspension and Steering",
    item: "Our tests evaluate suspension components, including shocks, struts, and control arms, as well as steering responsiveness and alignment.",
  },
];


const DiagnosisTesting = () => {
  return (
    <div className="font-serif relative">
      <ServicesTopSection
        title="Diagnostics Testing"
        subTitle="Detect and address issues early with our advanced diagnostic tools and experienced technicians, ensuring your vehicle stays in top condition. "
        heroImg={"/assets/services/images/dgHeroImg.webp"}
      />

      <ServicePageDesc
        title="FlashFit's Diagnostic Expertise"
        desc1="At FlashFit, our diagnostic testing goes beyond the surface, delving deep into your vehicle's systems to uncover any issues and provide accurate solutions. Using state-of-the-art equipment and advanced techniques, our skilled technicians meticulously analyze your car's performance, identifying potential problems before they escalate."

        desc2="When you entrust your vehicle to FlashFit for diagnostic services, you're gaining access to a team dedicated to uncovering the root cause of any issues. Our commitment to excellence means you can trust us to provide accurate diagnoses and reliable solutions, keeping you informed every step of the way. "
      />

      

      <ServiceSolution
        title="Key Components and Systems We Inspect"
        desc="Explore How Flash Fit's Unrivaled Expertise, Unmatched Convenience, and Unwavering Commitment to Quality Service Elevate Your Driving Experience to New Heights."
        data={solutions}
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

export default DiagnosisTesting;
