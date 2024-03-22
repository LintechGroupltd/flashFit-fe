import React from "react";
import Image from "next/image";
import serviceCardLogo from "../../../../../public/assets/home/HomeServices/serviceCardLogo.svg";
import serviceCardArrow from "../../../../../public/assets/home/HomeServices/serviceCardArrowSign.svg";
import CustomerReviewCard from "./customerReviewCard";

function CustomerReview() {
 

  return (
    <div className="my-14 pb-20 w-full">
       <div>
          <CustomerReviewCard/>
       </div>
    </div>
  );
}

export default CustomerReview;
