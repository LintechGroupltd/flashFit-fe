"use client";

import BookContact from "@/components/reuseable/BookContact/bookContact";
import FaqSection from "@/components/reuseable/Faqs/Faqs";
import CustomerReview from "@/components/reuseable/customerReview/customerReview";
import ServiceBenefits from "@/components/reuseable/serviceBenefits";
import ServicePageDesc from "@/components/reuseable/servicePageDescription";
import ServicesTopSection from "@/components/reuseable/servicesTopSection";
import img1 from "../../../../public/assets/services/images/servicingImg1.webp";
import img2 from "../../../../public/assets/services/images/servicigImg2.webp";
import heroImg from "../../../../public/assets/services/images/exhaustHeroImg.png";
import React from "react";
import ServicePricing from "@/components/reuseable/servicePricing/servicePricing";


export const benefits = [
  { id: 1, item: "Extends vehicle's lifespan" },
  { id: 2, item: "Ensures optimal performance" },
  { id: 3, item: "Improve Vehicle resale value" },
  { id: 4, item: "Keeps your warranty intact" },
  { id: 5, item: "Promotes smooth driving" },

];

const Servicing = () => {
  return (
    <div className="font-serif relative">
      <ServicesTopSection
        title="Service"
        subTitle="Maintain peak performance and reliability with our comprehensive servicing packages tailored to your vehicle's needs."
        heroImg={"/assets/services/images/servicingHeroImg.webp"}
      />

      <ServicePageDesc
        title="Extensive Servicing at Flash Fit"
        desc1="At Flash Fit, we service all makes and models with cutting-edge equipment. Our focus on quality extends to competitive pricing. Regular servicing is essential for safety and reliability. Trust Flash Fit for comprehensive maintenance that keeps your car in top condition. Regular servicing is not just a recommendation; it's a necessity to avoid mechanical problems and ensure your vehicle's safety on the road."
        desc2="At Flash Fit, we prioritize transparency and customer satisfaction. We always seek authorization before beginning any additional work during your car service, and our team is available to assist with all inquiries, estimates, and advice for your vehicle repair needs."
      />

      <ServiceBenefits
        img1={img1}
        img2={img2}
        figure={"10x"}
        title="Wheel Alignment Precision"
        desc1="Our servicing packages offer 10 times the coverage, addressing all aspects of vehicle maintenance for optimal performance."

        title2="Skilled Technicians"
        desc2="With our experienced technicians, you receive 10 times the expertise in servicing your vehicle, ensuring quality care and attention to detail."
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
           <ServicePricing/>
        </div>
      </div>
  

      <div className="root_parent_wrapper mt-24">
        <div className="root_child_wrapper">
          <FaqSection />
        </div>
      </div>

 

      <div
        className="md:root_parent_wrapper   py-20"
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

export default Servicing;
