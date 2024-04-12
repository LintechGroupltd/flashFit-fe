"use client";
import BookContact from "@/components/reuseable/BookContact/bookContact";
import FaqSection from "@/components/reuseable/Faqs/Faqs";
import CustomerReview from "@/components/reuseable/customerReview/customerReview";
import ServiceBenefits from "@/components/reuseable/serviceBenefits";
import ServicePageDesc from "@/components/reuseable/servicePageDescription";
import ServicesTopSection from "@/components/reuseable/servicesTopSection";
import heroImg from "../../../../public/assets/services/images/wheelsHeroImg.webp";
import wheelMobileImg from "../../../../public/assets/services/AllServiceMobileImg/wheelMobileImg.webp";

import img1 from "../../../../public/assets/services/images/wheelsImg1.webp";
import img2 from "../../../../public/assets/services/images/wheelsImg2.webp";

import React from "react";

export const benefits = [
  { id: 1, item: "Extended Tire Life" },
  { id: 2, item: "Improved Handling" },
  { id: 3, item: "Better Fuel Efficiency" },
  { id: 4, item: "Enhanced Safety" },
  { id: 5, item: "Comfortable Ride" },
];

const WheelsAlignments = () => {
  return (
    <div className="relative">

    {/* for desktop   */}
     <div className="md:block hidden"> 
      <ServicesTopSection
        title="Wheels Alignments"
        subTitle="Enhance stability and tire longevity with precision wheel alignment services for smoother handling and improved fuel efficiency."
        heroImg={heroImg}
      />
    </div>  
    {/* for Mobile   */}
    <div className="md:hidden block bg-[#2A317F] h-[445px]"> 
      <ServicesTopSection
        title="Wheels Alignments"
        subTitle="Enhance stability and tire longevity with precision wheel alignment services for smoother handling and improved fuel efficiency."
        heroImg={wheelMobileImg}
      />
    </div>  


    <div className="md:mt-0 mt-56">
      <ServicePageDesc
        title="Overview"
        desc1="At Flash Fit, we understand the importance of proper wheel alignment in ensuring a smooth and safe driving experience. Our wheel alignment services go beyond just straightening your wheels – we meticulously adjust your vehicle's suspension angles to manufacturer specifications, ensuring optimal handling, stability, and tire wear.   "
        desc2="With state-of-the-art equipment and expert technicians, we guarantee precise alignment that enhances performance and extends the lifespan of your tires. Trust Flash Fit to align your wheels with precision, providing you with a smoother, more efficient drive every time you hit the road. Schedule your alignment service today and experience the difference at Flash Fit.  "
      />
    </div>  

      <ServiceBenefits
        img1={img1}
        img2={img2}
        figure={"10x"}
        title="Wheel Alignment Precision"
        desc1="Your advanced alignment equipment ensures 10 times the accuracy, providing precise adjustments for optimal handling and tire wear."
       
       
        title2="Extended Tire Lifespan"
        desc2="Experience 10 times the longevity for your tires with precise alignment, reducing uneven wear and tear for prolonged durability."
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

export default WheelsAlignments;
