import React from "react";
import ourAchievementArrowIcon from "../../../../../public/assets/home/ourAchievement/ourAchievementArrowIcon.svg";
// import wheelImg from "../../../../../public/assets/home/ourAchievement/wheelImg.svg";
import carRepairImg1 from "../../../../../public/assets/home/ourAchievement/carRepairImg1.png";
import carRepairImg2 from "../../../../../public/assets/home/ourAchievement/carRepairImg2.svg";

import wheelImgMobile from "../../../../../public/assets/home/ourAchievement/wheelImgMobile.svg";
import wheelImgMobile2 from "../../../../../public/assets/home/ourAchievement/wheelImgMobile2.svg";



import aboutUsArrow from "../../../../../public/assets/home/ourAchievement/aboutUsArrow.svg";

import Image from "next/image";
import Link from "next/link";

function OurAchievement() {
  return (
    



<div className="w-full h-auto flex flex-col gap-10 md:mt-36 mt-14 ">
  <div className="flex flex-col md:flex-row gap-10 w-full h-full md:max-h-[285px]">


    <div className="bg-[#2A317F] w-full flex justify-between md:rounded-[35px] rounded-[20px]" data-aos="fade-right">
      <div className="md:pl-0 pl-4 md:pb-0 pb-2">
        <h2 className="text-[#FFFFFF] md:pl-0  md:text-[47px] text-[32px] font-[600] md:leading-[56px] leading-[45px] md:mt-36 md:py-0 md:pt-0 pt-14 text-start  md:ml-10 font-serif">
          OUR <br /> ACHIEVEMENT
        </h2>
      </div>


      <div>
        <Image src={ourAchievementArrowIcon} alt="icon" className="" />
      </div>
    </div>
    <div className="bg-[#F5F5F7] w-full md:rounded-[35px] rounded-[20px]" data-aos="fade-left">
      <div className="p-8">
         <h2 className="md:text-[24px] text-[18px] font-serif font-[600]">Driven by a passion for cars and a dedication to quality</h2>
         <p className="md:text-[16px] text-[15px] font-[400] font-sans py-4">We strive to elevate the standard of vehicle maintenance and repair, ensuring that every customer who walks through our doors receives top-notch service and leaves with complete satisfaction. </p>
        <div >
         <Link href='/about' className="flex gap-3 items-center">
            <button className=" py-2 rounded-[7px] text-[16px] font-[600] text-[#2A317F] font-sans">About Us</button>
            <Image
              src={aboutUsArrow}
              alt=""
              className="w-[18px] h-[13px]"
            />
          </Link> 
        </div>
         
      </div>
       
    </div>

    
  </div>


  <div className="w-full h-full">
  <div className="flex flex-row md:gap-10 gap-5 w-full h-full">
    <div className="w-full md:w-full  h-auto" data-aos="fade-up-right" data-aos-duration="500">
      <Image src={carRepairImg1} alt="wheelImg" className="w-full h-full md:block hidden" style={{ maxHeight: "300px" }} />
      <Image src={wheelImgMobile} alt="wheelImg" className="w-full h-full  md:hidden block" style={{ maxHeight: "300px" }} />
    </div>


    <div className="bg-[#F5F5F7] w-full md:w-1/4 h-auto rounded-[38px]" data-aos="fade-up-left" data-aos-duration="1000">
      <Image src={carRepairImg2} alt="ourAchievementCar" className="w-full h-full md:block hidden md:rounded-[38px]" style={{objectFit: "cover", maxHeight: "300px", height: "100%"}}/>
      <Image src={wheelImgMobile2} alt="ourAchievementCar" className="w-full h-full  md:hidden block md:rounded-[38px]" style={{objectFit: "cover", maxHeight: "300px", height: "100%"}}/>
    </div>
  </div>
</div>

</div>

  );
}

export default OurAchievement;
