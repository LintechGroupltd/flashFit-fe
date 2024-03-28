import React from "react";
import ServicePricingCard from "./servicePricingCard";

function ServicePricing() {
  return (
    <div className="md:mt-24 mt-14">
       <div>
          <h2 className="md:text-[48px] text-[34px] font-[600] font-serif md:leading-[65px] ">Simple.<br/> Transparent Pricing</h2>
          <p className="text-[18px] font-sans font-[400] my-4">Quality Service, Affordable Rates: Ensuring Your Vehicle's Performance<br/> Without Breaking the Bank</p>
       </div>
       <div className="mt-10">
         <ServicePricingCard/>
       </div>
    </div>
  )
 
}

export default ServicePricing;
