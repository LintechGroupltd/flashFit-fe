import React, { useState } from "react";
import Image from "next/image";
import customerReviewImg1 from "../../../../public/assets/reuseableComponentImg/customerReview/customerReviewImg1.svg";
import customerReviewImg2 from "../../../../public/assets/reuseableComponentImg/customerReview/customerReviewImg2.svg";
import customerReviewImg3 from "../../../../public/assets/reuseableComponentImg/customerReview/customerReviewImg3.svg";
import customerReviewImg4 from "../../../../public/assets/reuseableComponentImg/customerReview/customerReviewImg4.svg";
import rightArrow from "../../../../public/assets/reuseableComponentImg/customerReview/ReviewRightWhiteArrow.svg";
import leftArrow from "../../../../public/assets/reuseableComponentImg/customerReview/ReviewLeftWhiteArrow.svg";

function CustomerReviewCard() {
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);

  const customerReviewData = [
    {
      id: 1,
      customerImg: customerReviewImg1,
      review: "",
      title:
        "1.Flash Fit exceeded my expectations with their exceptional service. From the moment I walked in, I felt confident in their expertise and attention to detail.",
      customerName: "—Jason Mikel",
      designation: "Head of Floral Design",
    },
    {
      id: 2,
      customerImg: customerReviewImg2,
      review: "",
      title:
        "2.Flash Fit exceeded my expectations with their exceptional service. From the moment I walked in, I felt confident in their expertise and attention to detail.",
      customerName: "—Jason Mikel",
      designation: "Head of Floral Design",
    },
    {
      id: 3,
      customerImg: customerReviewImg3,
      review: "",
      title:
        "3.Flash Fit exceeded my expectations with their exceptional service. From the moment I walked in, I felt confident in their expertise and attention to detail.",
      customerName: "—Jason Mikel",
      designation: "Head of Floral Design",
    },
    {
      id: 4,
      customerImg: customerReviewImg4,
      review: "",
      title:
        "4.Flash Fit exceeded my expectations with their exceptional service. From the moment I walked in, I felt confident in their expertise and attention to detail.",
      customerName: "—Jason Mikel",
      designation: "Head of Floral Design",
    },
  ];

  const handleNextReview = () => {
    setCurrentReviewIndex((prevIndex) =>
      prevIndex === customerReviewData.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePreviousReview = () => {
    setCurrentReviewIndex((prevIndex) =>
      prevIndex === 0 ? customerReviewData.length - 1 : prevIndex - 1
    );
  };

  const currentReview = customerReviewData[currentReviewIndex];

  return (
    <div className="w-full">
      {/* Display Current Review */}
      <div className="md:flex gap-[50px]">
        {/* left image section  */}
        <div className="mt-3  w-full h-full">
          <Image src={currentReview.customerImg} alt="Customer" className="w-full h-full" />
        </div>

        {/* right section */}
        <div className="md:mt-0 mt-3">
          <div className="">
            {[...Array(5)].map((_, index) => (
              <span key={index} className="text-[#FEC84B] text-[30px]">
                &#9733;
              </span>
            ))}
          </div>
          <p className="mt-[5px] mb-2 md:text-[33px] text-[24px] font-sans italic font-[500]  md:leading-[45px] leading-[40px] text-[#101828]">
            {currentReview.title}
          </p>

          <div className="py-2">
            <p className=" mb-2 text-[18px] font-[500] font-sans text-[#101828] ">
              {currentReview.customerName}
            </p>
            <p className=" mb-2 text-[#505050] font-sans text-[16px]">
              {currentReview.designation}
            </p>
          </div>

          <div className="flex gap-4">
            <button onClick={handlePreviousReview} className=" w-[52px] ">
              <div className=" bg-[#F8AD39] hover:bg-[#F0970E] md:w-[54px] md:h-[54px]   rounded-full">
                <Image src={leftArrow} alt="Left Arrow" className="md:w-[24px]  md:h-[55px] py-[14px] md:mt-0 mt-[14px] mx-auto" />
              </div>
            </button>
            <button onClick={handleNextReview} className="w-[52px] ">
              <div className="bg-[#F8AD39] hover:bg-[#F0970E]  md:w-[54px] md:h-[54px]  rounded-full">
                <Image src={rightArrow} alt="Right Arrow" className="md:w-[24px]  md:h-[55px] py-[14px] md:mt-0 mt-[14px] mx-auto" />
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomerReviewCard;
