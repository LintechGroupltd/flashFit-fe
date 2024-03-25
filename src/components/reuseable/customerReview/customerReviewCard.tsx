import React from "react";
import Image from "next/image";
import customerReviewImg1 from "../../../../public/assets/reuseableComponentImg/customerReview/customerReviewImg1.svg";
import rightArrow from "../../../../public/assets/reuseableComponentImg/customerReview/rightArrow.svg";
import leftArrow from "../../../../public/assets/reuseableComponentImg/customerReview/leftArrow.svg";

function CustomerReviewCard() {
  const [hoveredIndex, setHoveredIndex] = React.useState(null);

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
    <div className="w-full ">
      {customerReviewData.map((review) => (
        <div key={review.id} className="grid md:grid-cols-12  md:gap-2">

       {/* left image section  */}
          <div className="3xl:col-span-3 xl:col-span-5 lg:col-span-4  w-full h-full">
            <Image src={review.customerImg} alt="Customer" className="md:pr-[90px] w-full h-[420px]"/>
          </div>

 
      {/* right section */}
        <div className="3xl:col-span-9 xl:col-span-7 lg:col-span-8  2xl:mt-8">
         <div className="">
           
           {[...Array(5)].map((_, index) => (
             <span key={index} className="text-yellow-500 text-[30px]">&#9733;</span>
           ))}
         </div>
         <p className="mt-[5px] mb-2 md:text-[33px] text-[27px] font-sans italic font-[500]  md:leading-[45px] leading-[40px] text-[#101828]">{review.title}</p>
       
        <div className="py-3">
          <p className=" mb-2 text-[18px] font-[500] font-sans text-[#101828] ">{review.customerName}</p>
          <p className=" mb-2 text-[#505050] font-sans text-[16px]">{review.designation}</p>
        </div>     
        
         <div className="flex gap-4">
          <div className="bg-[#D7D7D7] hover:bg-[#F8AD39] w-[55px] h-[55px] rounded-full">
            <Image src={review.leftArrow} alt="Left Arrow"  className="md:w-[24px] w-[50px] md:h-[55px] h-[24px]  mx-auto"/>
          </div> 
          
           <Image src={review.rightArrow} alt="Right Arrow"  className="md:w-[55px] w-[50px] md:h-[55px] h-[50px]"/>
         </div>
         </div>    
          
        </div>
      ))}
    </div>
  );
}

export default CustomerReviewCard;
