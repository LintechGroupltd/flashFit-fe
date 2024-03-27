import React from "react";
import Image from "next/image";
import aboutPositioningBannerImg from '../../../../../public/assets/about/aboutBannerPositioningImg.png'

function WhoWeAre() {
  return (
    <div className="md:mt-44 mt-20">
    
    <div className="md:flex  gap-10 w-full">
     <div className="md:w-1/2">
       <h2 className="md:text-[48px] text-[34px] font-serif font-[600] leading-[50px]">Who we are</h2>
     </div>
     <div className="w-full">
       <p className="md:text-start font-archivo text-justify md:text-[23px] text-[20px] font-[400] mt-3">At FlashFit, our mission is to revolutionize the automotive industry by providing unparalleled car care services infused with passion,
         precision, and a commitment to excellence. We strive to elevate the standard of vehicle maintenance and repair, ensuring that every customer 
         who walks through our doors receives top-notch service and leaves with complete satisfaction. Our vision is to be the leading authority in 
         automotive care, trusted by drivers for our expertise, reliability, and dedication to customer service.<br/><br/>
         Driven by a passion for cars and a dedication to quality, our team at Flash Fit works tirelessly to uphold our values 
         of integrity, transparency, and professionalism in everything we do. With a focus on continuous improvement and innovation, 
         we are committed to staying at the forefront of industry advancements, providing our customers with the best possible care 
         for their vehicles. 
        </p>
     </div>
    </div>
    

    
    </div>
  );
}

export default WhoWeAre;
