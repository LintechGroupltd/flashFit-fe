import React from "react";
import ourAchievementArrowIcon from "../../../../../public/assets/home/ourAchievement/ourAchievementArrowIcon.svg";
// import wheelImg from "../../../../../public/assets/home/ourAchievement/wheelImg.svg";
import wheelImg from "../../../../../public/assets/home/ourAchievement/wheelImg1.png";
import wheelImgMobile from "../../../../../public/assets/home/ourAchievement/wheelImgMobile.png";

import wheelImg2 from "../../../../../public/assets/home/ourAchievement/wheel2Img.svg";

import ourAchievementSmallTyreImg from "../../../../../public/assets/home/ourAchievement/ourAchievementSmallTyreImg.svg";

import Image from "next/image";
import Link from "next/link";

function OurAchievement() {
  return (
    



<div className="w-full h-auto flex flex-col gap-10 md:mt-36 mt-24">
  <div className="flex flex-col md:flex-row gap-10 w-full h-full md:max-h-[290px]">


    <div className="bg-[#2A317F] w-full md:flex justify-between rounded-[35px] " data-aos="fade-right">
      <div className="">
        <h2 className="text-[#FFFFFF]  md:text-[47px] text-[32px] font-[600] leading-[56px] md:mt-36 md:py-0 py-10 md:text-start text-center md:ml-10 font-serif">
          OUR <br /> ACHIEVEMENT
        </h2>
      </div>


      <div>
        <Image src={ourAchievementArrowIcon} alt="icon" className="md:block hidden" />
      </div>
    </div>
    <div className="bg-[#F5F5F7] w-full rounded-[38px]" data-aos="fade-left">
      <div className="p-8">
         <h2 className="md:text-[24px] text-[18px] font-serif font-[600]">Driven by a passion for cars and a dedication to quality</h2>
         <p className="md:text-[16px] text-[15px] font-[400] font-sans py-4">We strive to elevate the standard of vehicle maintenance and repair, ensuring that every customer who walks through our doors receives top-notch service and leaves with complete satisfaction. </p>
          <Link href='/about'>
            <button className="bg-[#F8AD39] px-6 py-2 rounded-[7px] text-[16px] font-[500] text-[#fff] font-sans">About Us</button>
          </Link> 
      </div>
       
    </div>

    
  </div>






  <div className="w-full h-full">
  <div className="flex  flex-row md:gap-10 gap-5 w-full h-full">
    <div className="w-full md:w-full h-auto" data-aos="fade-up-right" data-aos-duration="500">
      <Image src={wheelImg} alt="wheelImg" className="w-full h-full md:block hidden" style={{ maxHeight: "300px" }} />
      <Image src={wheelImgMobile} alt="wheelImg" className="w-full h-full md:hidden block" style={{ maxHeight: "300px" }} />
    </div>


    <div className="bg-[#F5F5F7] w-full md:w-1/4 h-auto rounded-[38px]" data-aos="fade-up-left" data-aos-duration="1000">
      <Image src={wheelImg2} alt="ourAchievementCar" className="w-full h-full md:rounded-[38px]" style={{objectFit: "cover", maxHeight: "300px", height: "100%"}}/>
    </div>
  </div>
</div>

</div>

  );
}

export default OurAchievement;
