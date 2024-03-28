import React from "react";
import Image from "next/image";
import customerReviewImg1 from "../../../../public/assets/reuseableComponentImg/customerReview/customerReviewImg1.png";
import rightArrow from "../../../../public/assets/reuseableComponentImg/customerReview/rightArrow.svg";
import leftArrow from "../../../../public/assets/reuseableComponentImg/customerReview/leftArrow.svg";

function FlashFitNumbersCard() {
  const NumbersCardData = [
    {
      id: 1,
      percentage: "98%",
      description: "Customer Satisfaction",
    },
    {
      id: 2,
      percentage: "2,000+",
      description: "Vehicles Serviced Annually",
    },
    {
      id: 3,
      percentage: "99%",
      description: "MOT Test Pass Rate",
    },
  ];

  return (
    <div className="grid md:grid-cols-3 md:gap-[35px] gap-[30px] w-full">
      {NumbersCardData.map((data) => (
        <div key={data.id} className="flex flex-col justify-center items-center h-[184px] bg-[#F5F5F7] rounded-[8px]  p-4">
          <div className="md:text-[60px] text-[48px] font-serif font-[400]  text-[#2D2D2D]">{data.percentage}</div>
          <div className="text-[16px] font-[600] font-sans text-[#2D2D2D] mt-[2px]">{data.description}</div>
        </div>
      ))}
    </div>
  );
}

export default FlashFitNumbersCard;
