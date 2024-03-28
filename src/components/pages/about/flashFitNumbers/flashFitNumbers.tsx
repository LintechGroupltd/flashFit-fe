import React from "react";
import Image from "next/image";
import FlashFitNumbersCard from "./flashFitNumbersCard";


function FlashFitNumbers() {
  return (
    <div className="2xl:mt-56 3xl:mt-[200px] 4xl:mt-[400px] xl:mt-20 lg:mt-10 mt-[270px]">
       <div className="text-center">
         <h2 className="md:text-[48px] text-[34px] leading-[40px] font-[600] font-serif">FlashFit by the Numbers</h2>
         <p className="md:text-[18px] text-[16px] mt-5 font-[400] font-sans text-[#2D2D2D] hidden md:block">Discover the Impact and Excellence Behind Flash Fit's Numerical<br/> Achievements.</p>
         <p className="text-[16px] mt-5 font-[400] font-sans text-[#2D2D2D] md:hidden block">Discover the Impact and Excellence Behind Flash Fit's Numerical Achievements.</p>
       </div>

     
     <div className="mt-10">
        <FlashFitNumbersCard/>
     </div>


    </div>
  );
}

export default FlashFitNumbers;
