import React from "react";

import Image from "next/image";
import FlashBenefitCard from "./flashBenefitCard";



function FlashBenefit() {
  return (
    <div className="md:mt-20 mt-24 md:py-[105px] py-[75px]">
        
      <div>
        <h2 className="md:text-[48px] text-[34px] font-[600] font-serif md:leading-[60px] leading-[46px] text-[#fff]" data-aos='fade-right'>Unlock the<br/> Benefits of Flash Fit</h2>
        <p className="md:text-[18px] md:block hidden text-[16px] text-[#fff] font-[400] font-sans mt-3" data-aos='fade-up'>Explore How Flash Fit's Unrivaled Expertise, Unmatched Convenience,<br/> and Unwavering Commitment to Quality Service Elevate Your Driving<br/> Experience to New Heights.</p>
        <p className="md:text-[18px] md:hidden block text-[16px] font-[400] text-[#fff] font-sans mt-3">Explore How Flash Fit's Unrivaled Expertise, Unmatched Convenience, and Unwavering Commitment to Quality Service Elevate Your Driving Experience to New Heights.</p>
      </div>  


     <div className="mt-10" data-aos='fade-up' data-aos-duration='1000'>

       <FlashBenefitCard/>
     </div>

    </div>
  );
}

export default FlashBenefit;
