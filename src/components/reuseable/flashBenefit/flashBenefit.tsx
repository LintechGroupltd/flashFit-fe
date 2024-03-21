import React from "react";

import Image from "next/image";
import FlashBenefitCard from "./flashBenefitCard";



function FlashBenefit() {
  return (
    <div className="px-[100px] mt-32 ">
        
      <div>
        <h2 className="text-[48px] leading-[60px] text-[#000]">Unlock the<br/> Benefits of Flash Fit</h2>
        <p className="text-[18px] font-sans mt-3">Explore How Flash Fit's Unrivaled Expertise, Unmatched Convenience,<br/> and Unwavering Commitment to Quality Service Elevate Your Driving<br/> Experience to New Heights.</p>
      </div>  

     <div className="mt-10">
       <FlashBenefitCard/>
     </div>

    </div>
  );
}

export default FlashBenefit;
