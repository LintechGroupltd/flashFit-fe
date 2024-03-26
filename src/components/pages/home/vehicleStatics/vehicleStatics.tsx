import React from "react";
import vehicleStaticsImg1 from "../../../../../public/assets/home/vehicleStatics/vehicleStaticsImg-1.svg";
import wheelImgMobile from '../../../../../public/assets/home/ourAchievement/wheelImgMobile.png'
import wheelImg2 from '../../../../../public/assets/home/ourAchievement/wheel2Img.svg'



import vehicleStaticsImg2 from "../../../../../public/assets/home/vehicleStatics/vehicleStaticsImg-2.svg";
import Image from "next/image";

function VehicleStatics() {
  return (
    
<div className="w-full h-auto md:py-28 py-14">
  <div className="md:flex justify-between gap-10 h-full">
    {/* 1st section */}
    <div className="bg-[#2A317F] text-center md:py-0 py-6 flex flex-col justify-between w-full rounded-[40px]" data-aos='fade-right'>
      <div>
        <h2 className="font-serif md:text-[84px] py-5 text-[50px] font-[600] text-[#fff] md:pt-3 ">
          1000+
        </h2>
        <p className="md:mt-4  md:py-0 py-8 font-sans md:text-[23px] text-[18px] font-[400] text-[#fff]">
          Vehicles Serviced
          <br /> Annually
        </p>
      </div>
      <div className="md:mb-7">
        <p className="font-sans md:text-[26px] text-[20px] md:px-0 px-3 font-[400] text-[#fff] md:mt-0 mt-6">
          Revolutionising Car Care Experiences.
        </p>
      </div>
    </div>

    {/* 2nd section */}

    <div className="md:flex flex-col gap-10 w-full md:mt-0 mt-[32px]">
      <div className="bg-[#fff] px-7 md:py-3 py-6  md:text-start text-center rounded-[40px] " data-aos='fade-down'>
        <h2 className="font-serif md:text-[92px] text-[48px] font-[600]">43%</h2>
        <p className="text-[18px] font-sans font-[400] md:mt-0 mt-10">Increase in Customer<br/> Satisfaction</p>
      </div>
      <div className="flex-grow md:block hidden" data-aos='fade-up' data-aos-duration='1000'>
        <Image src={vehicleStaticsImg1} alt="carWheel" className="w-full h-full object-cover  rounded-[40px]"/>
      </div>
    </div>
    {/* 3rd section */}
    <div className="lg:flex flex-col w-full md:block hidden">
      <div className="flex-grow " data-aos='fade-left' data-aos-duration='1500'>
        <Image src={vehicleStaticsImg2} alt="carWheel" className="w-full h-full object-cover  rounded-[40px]"/>
      </div>
    </div>


<div className="w-full h-full md:hidden block mt-8">
  <div className="flex  flex-row md:gap-10 gap-5 w-full h-full">
    <div className="w-full md:w-full h-auto" data-aos="fade-up-right" data-aos-duration="500">
      
      <Image src={wheelImgMobile} alt="wheelImg" className="w-full h-full md:hidden block" style={{ maxHeight: "300px" }} />
    </div>


    <div className="bg-[#F5F5F7] w-full md:w-1/4 h-auto rounded-[38px]" data-aos="fade-up-left" data-aos-duration="1000">
      <Image src={wheelImg2} alt="ourAchievementCar" className="w-full h-full md:rounded-[38px]" style={{objectFit: "cover", maxHeight: "300px", height: "100%"}}/>
    </div>
  </div>
</div>




  </div>
</div>

  );
}

export default VehicleStatics;
