"use client";
import React from "react";
import img1 from "../../../../public/assets/services/images/manfixcar.jpg.png";
import img2 from "../../../../public/assets/services/images/motHeroImg.png";
import ServicesTopSection from "@/components/reuseable/servicesTopSection";
import ServicePageDesc from "@/components/reuseable/servicePageDescription";
import ServiceBenefits from "@/components/reuseable/serviceBenefits";
import CustomerReview from "@/components/reuseable/customerReview/customerReview";
import FaqSection from "@/components/reuseable/Faqs/Faqs";
import BookContact from "@/components/reuseable/BookContact/bookContact";
import ServiceSolution from "@/components/reuseable/serviceSolution";

export const benefits = [
  { id: 1, item: "Early Issue Detection" },
  { id: 2, item: "Accurate Repairs" },
  { id: 3, item: "Transparent Communication" },
  { id: 4, item: "Confidence in Vehicle Performance" },
];

const TyreServicing = () => {
  return (
    <div className="font-serif relative">
      <ServicesTopSection
        title="Tyres"
        subTitle="Discover Our Passion for Precision, Commitment to Quality, and Dedication to Your Vehicle's Performance"
        //   heroImg={heroImg}
        showSearchVehicle={true}

      />

      <ServicePageDesc
        title="Overview"
        desc1="At Flash Fit, we service all makes and models with cutting-edge equipment. Our focus on quality extends to competitive pricing. Regular servicing is essential for safety and reliability. Trust Flash Fit for comprehensive maintenance that keeps your car in top condition. Regular servicing is not just a recommendation; it's a necessity to avoid mechanical problems and ensure your vehicle's safety on the road.    "
        desc2="at Flash Fit, we prioritize transparency and customer satisfaction. We always seek authorization before beginning any additional work during your car service, and our team is available to assist with all inquiries, estimates, and advice for your vehicle repair needs."
      />

      <ServiceSolution />

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

export default TyreServicing;
