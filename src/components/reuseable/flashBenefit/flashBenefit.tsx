import React from "react";

import Image from "next/image";
import FlashBenefitCard from "./flashBenefitCard";



function FlashBenefit() {
  return (
    <div className="md:mt-20 mt-24 py-[105px]">
        
      <div>
        <h2 className="md:text-[48px] text-[35px] font-[600] font-serif md:leading-[60px] leading-[50px] text-[#fff]">Unlock the<br/> Benefits of Flash Fit</h2>
        <p className="md:text-[18px] md:block hidden text-[16px] text-[#fff] font-[400] font-sans mt-3">Explore How Flash Fit's Unrivaled Expertise, Unmatched Convenience,<br/> and Unwavering Commitment to Quality Service Elevate Your Driving<br/> Experience to New Heights.</p>
        <p className="md:text-[18px] md:hidden block text-[16px] font-[400] text-[#fff] font-sans mt-3">Explore How Flash Fit's Unrivaled Expertise, Unmatched Convenience, and Unwavering Commitment to Quality Service Elevate Your Driving Experience to New Heights.</p>
      </div>  

     <div className="mt-10">
       <FlashBenefitCard/>
     </div>

    </div>
  );
}

export default FlashBenefit;
