import React from "react";
import Image from "next/image";
import customerReviewImg1 from "../../../../public/assets/reuseableComponentImg/customerReview/customerReviewImg1.svg";
import rightArrow from "../../../../public/assets/reuseableComponentImg/customerReview/ReviewRightWhiteArrow.svg";
import leftArrow from "../../../../public/assets/reuseableComponentImg/customerReview/ReviewLeftWhiteArrow.svg";

function CustomerReviewCard() {
  const [hoveredIndex, setHoveredIndex] = React.useState(null);

  const customerReviewData = [
    {
      id: 1,
      customerImg: customerReviewImg1,
      review: "",
      title:
        "Flash Fit exceeded my expectations with their exceptional service. From the moment I walked in, I felt confident in their expertise and attention to detail.",
      customerName: "—Jason Mikel",
      designation: "Head of Floral Design",
      rightArrow: rightArrow,
      leftArrow: leftArrow,
    },
  ];

  return (
    <div className="w-full ">
      {customerReviewData.map((review) => (
        <div key={review.id} className="md:flex  gap-[50px]">
          {/* left image section  */}
          <div className="mt-3  w-full h-full">
            <Image
              src={review.customerImg}
              alt="Customer"
              className="w-full h-full"
            />
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
              {review.title}
            </p>

            <div className="py-2">
              <p className=" mb-2 text-[18px] font-[500] font-sans text-[#101828] ">
                {review.customerName}
              </p>
              <p className=" mb-2 text-[#505050] font-sans text-[16px]">
                {review.designation}
              </p>
            </div>

            <div className="flex gap-4">
            <button>
              <div className=" bg-[#F8AD39] hover:bg-[#F0970E] w-[54px] h-[54px] rounded-full">
                <Image
                  src={review.leftArrow}
                  alt="Left Arrow"
                  className="md:w-[24px] w-[50px] md:h-[55px] h-[24px] md:mt-0 mt-[14px] mx-auto"
                />
              </div>
           </button>       
 
              <button>
              <div className="bg-[#F8AD39] hover:bg-[#F0970E]  w-[54px] h-[54px] rounded-full">   
               <Image
                src={review.rightArrow}
                alt="Right Arrow"
                className="md:w-[24px] w-[50px] md:h-[55px] h-[24px] md:mt-0 mt-[14px] mx-auto"
              />
              </div>  
              </button>     
            
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CustomerReviewCard;
