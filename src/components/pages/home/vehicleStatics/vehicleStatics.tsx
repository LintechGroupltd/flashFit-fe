import React from "react";
import vehicleStaticsImg1 from "../../../../../public/assets/home/vehicleStatics/vehicleStaticsImg-1.svg";
import vehicleStaticsImg2 from "../../../../../public/assets/home/vehicleStatics/vehicleStaticsImg-2.svg";
import Image from "next/image";

function VehicleStatics() {
  return (
    <div className="px-[100px]">
      <div className="grid grid-cols-3 gap-5 py-[100px] ">
        {/* 1st section  */}
        <div className="bg-[#F8AD39] text-center flex flex-col justify-between h-full rounded-[40px]">
          <div>
           <h2 className="font-serif text-[85px] font-[600] text-[#fff] pt-3">
             1000+
           </h2>
           <p className="mt-4 font-sans text-[23px] font-[400] text-[#fff]">
            Vehicles Serviced
            <br /> Annually
          </p>
          </div>

          <div className=" mb-7">
            <p className="font-sans text-[26px] font-[400] text-[#fff] ">
              Revolutionising Car Care Experiences.
            </p>
          </div>
        </div>

        {/* 2nd section  */}
        <div className="grid gap-5 ">
          <div className="bg-[#fff] px-7 py-3 rounded-[40px]">
            <h2 className="font-serif text-[92px] font-[400]">43%</h2>
            <p className="text-[18px] font-sans font-[400] ">Increase in Customer<br/> Satisfaction</p>
          </div>
          <div className="w-full">
            <Image src={vehicleStaticsImg1} alt="carWheel" className="w-full"/>
          </div>
        </div>

        {/* 3rd section   */}
        <div className="h-full">
          <div className="h-full">  
            <Image src={vehicleStaticsImg2} alt="carWheel" className="h-full"/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VehicleStatics;
