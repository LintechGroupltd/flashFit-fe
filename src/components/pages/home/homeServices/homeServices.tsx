import React from "react";
import Image from "next/image";
import arrowRight from '../../../../../public/assets/home/HomeServices/arrow-right.svg'
import HomeServiceCard from "./homeServiceCard";


function HomeServices() {
  return (
    <div className="">
        <div className="flex justify-between items-center">
          <div>
             <h2 className="text-[48px] font-[600] leading-[55px] font-serif">Browse our set<br/> of services</h2> 
          </div>
      
           <div className="flex gap-3 border border-[#2A317F] px-7 py-3 rounded-[10px] mt-[65px]">
             <button className="text-[16px] font-sans text-[#2A317F] font-[500]">Browse All</button>
             <Image src={arrowRight} alt="arrow"/>
           </div>
        </div>

        <div>
          <HomeServiceCard/>
        </div>
        
    </div>
  );
}

export default HomeServices;
