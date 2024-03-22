import React from "react";
import Image from "next/image";
import customerReviewImg1 from "../../../../public/assets/reuseableComponentImg/customerReview/customerReviewImg1.svg";
import rightArrow from "../../../../public/assets/reuseableComponentImg/customerReview/rightArrow.svg";
import leftArrow from "../../../../public/assets/reuseableComponentImg/customerReview/leftArrow.svg";

function CustomerReviewCard() {
  const customerReviewData = [
    {
      id: 1,
      customerImg: customerReviewImg1,
      review: '',
      title: "Flash Fit exceeded my expectations with their exceptional service. From the moment I walked in, I felt confident in their expertise and attention to detail.",
      customerName: '—Jason Mikel',
      designation: 'Head of Floral Design',
      rightArrow: rightArrow,
      leftArrow: leftArrow,
    },
  ];

  return (
    <div className="w-full px-[100px]">
      {customerReviewData.map((review) => (
        <div key={review.id} className="flex justify-between gap-10">
          <div className=" w-full h-full">
            <Image src={review.customerImg} alt="Customer" className="w-full h-full"/>
          </div>


         <div className="">
         <div className="">
           
           {[...Array(5)].map((_, index) => (
             <span key={index} className="text-yellow-500 text-[30px]">&#9733;</span>
           ))}
         </div>
         <p className=" mb-2 text-[36px] font-sans italic font-[500] mt-2 leading-[48px] text-[#101828]">{review.title}</p>
       
        <div className="py-3">
          <p className=" mb-2 text-[18px] font-[500] font-sans text-[#101828] mt-3">{review.customerName}</p>
          <p className=" mb-2 text-[#505050] font-sans text-[16px]">{review.designation}</p>
        </div>     
        
         <div className="flex gap-4">
           <Image src={review.leftArrow} alt="Left Arrow" />
           <Image src={review.rightArrow} alt="Right Arrow" />
         </div>
         </div>    
          
        </div>
      ))}
    </div>
  );
}

export default CustomerReviewCard;
