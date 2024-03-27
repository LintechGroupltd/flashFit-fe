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
      percentage: "98%",
      description: "Customer Satisfaction",
    },
    {
      id: 3,
      percentage: "98%",
      description: "Customer Satisfaction",
    },
  ];

  return (
    <div className="grid md:grid-cols-3 gap-[35px] w-full">
      {NumbersCardData.map((data) => (
        <div key={data.id} className="flex flex-col justify-center items-center h-[184px] bg-[#F5F5F7] rounded-[8px]  p-4">
          <div className="text-[60px] font-serif font-[400]  text-[#2D2D2D]">{data.percentage}</div>
          <div className="text-[16px] font-[500] font-sans text-[#2D2D2D] mt-[2px]">{data.description}</div>
        </div>
      ))}
    </div>
  );
}

export default FlashFitNumbersCard;
