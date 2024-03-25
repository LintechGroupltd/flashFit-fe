import React from "react";
import Image from "next/image";
import serviceCardLogo from "../../../../../public/assets/home/HomeServices/serviceCardLogo.svg";
import serviceCardArrow from "../../../../../public/assets/home/HomeServices/serviceCardArrowSign.svg";
import CustomerReviewCard from "./customerReviewCard";

function CustomerReview() {
 

  return (
    <div className="md:my-14 pb-20 w-full pt-7">
      <h2 className="md:text-[46px] text-[35px] font-serif font-[600] md:leading-[63px] leading-[50px]">Hear What our<br/> Customers has to Say</h2>
       <div className="md:mt-6 mt-4">
          <CustomerReviewCard/>
       </div>
    </div>
  );
}

export default CustomerReview;
