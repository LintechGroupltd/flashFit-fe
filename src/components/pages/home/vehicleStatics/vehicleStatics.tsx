import React from "react";
import vehicleStaticsImg1 from "../../../../../public/assets/home/vehicleStatics/vehicleStaticsImg-1.svg";
import vehicleStaticsImg2 from "../../../../../public/assets/home/vehicleStatics/vehicleStaticsImg-2.svg";
import Image from "next/image";

function VehicleStatics() {
  return (
    // <div className="">
    //   <div className="grid md:grid-cols-3 gap-[35px] py-[100px]">
      
    //     <div className="bg-[#2A317F] text-center flex flex-col justify-between h-full rounded-[40px]" data-aos='fade-right'>
    //       <div>
    //        <h2 className="font-serif md:text-[84px] text-[50px] font-[600] text-[#fff] pt-3">
    //          1000+
    //        </h2>
    //        <p className="md:mt-4 mt-1 font-sans md:text-[23px] text-[18px] font-[400] text-[#fff]">
    //          Vehicles Serviced
    //         <br /> Annually
    //       </p>
    //       </div>

    //       <div className=" mb-7">
    //         <p className="font-sans md:text-[26px] text-[20px] md:px-0 px-3 font-[400] text-[#fff] md:mt-0 mt-3">
    //           Revolutionising Car Care Experiences.
    //         </p>
    //       </div>
    //     </div>

      
    //     <div className="grid gap-[32px] ">
    //       <div className="bg-[#fff] px-7 md:py-3 py-14 md:text-start text-center  rounded-[40px] " data-aos='fade-down'>
    //         <h2 className="font-serif md:text-[92px] text-[50px] font-[400]">43%</h2>
    //         <p className="text-[18px] font-sans font-[400] ">Increase in Customer<br/> Satisfaction</p>
    //       </div>

    //       <div className="w-full" data-aos='fade-up' data-aos-duration='1000'>
    //         <Image src={vehicleStaticsImg1} alt="carWheel" className="w-full"/>
    //       </div>
    //     </div>

 
    //     <div className="h-full" data-aos='fade-left' data-aos-duration='1500'>
    //       <div className="h-full">  
    //         <Image src={vehicleStaticsImg2} alt="carWheel" className="h-full"/>
    //       </div>
    //     </div>
    //   </div>
    // </div>


    

<div className="w-full h-auto py-28">
  <div className="flex justify-between gap-10 h-full">
    {/* 1st section */}
    <div className="bg-[#2A317F] text-center flex flex-col justify-between w-full rounded-[40px]" data-aos='fade-right'>
      <div>
        <h2 className="font-serif md:text-[84px] text-[50px] font-[600] text-[#fff] pt-3">
          1000+
        </h2>
        <p className="md:mt-4 mt-1 font-sans md:text-[23px] text-[18px] font-[400] text-[#fff]">
          Vehicles Serviced
          <br /> Annually
        </p>
      </div>
      <div className="mb-7">
        <p className="font-sans md:text-[26px] text-[20px] md:px-0 px-3 font-[400] text-[#fff] md:mt-0 mt-3">
          Revolutionising Car Care Experiences.
        </p>
      </div>
    </div>
    {/* 2nd section */}
    <div className="flex flex-col gap-10 w-full">
      <div className="bg-[#fff] px-7 md:py-3 py-14 md:text-start text-center rounded-[40px] " data-aos='fade-down'>
        <h2 className="font-serif md:text-[92px] text-[50px] font-[400]">43%</h2>
        <p className="text-[18px] font-sans font-[400] ">Increase in Customer<br/> Satisfaction</p>
      </div>
      <div className="flex-grow" data-aos='fade-up' data-aos-duration='1000'>
        <Image src={vehicleStaticsImg1} alt="carWheel" className="w-full h-full object-cover  rounded-[40px]"/>
      </div>
    </div>
    {/* 3rd section */}
    <div className="flex flex-col w-full ">
      <div className="flex-grow " data-aos='fade-left' data-aos-duration='1500'>
        <Image src={vehicleStaticsImg2} alt="carWheel" className="w-full h-full object-cover  rounded-[40px]"/>
      </div>
    </div>
  </div>
</div>

  );
}

export default VehicleStatics;
