import React from "react";
import Image from "next/image";
import arrowRight from '../../../../../public/assets/home/HomeServices/arrow-right.svg'
import HomeServiceCard from "./homeServiceCard";


function HomeServices() {
  return (
    <div className="">
        <div className="flex justify-between items-center">
          <div>
             <h2 className="text-[48px] leading-[55px] font-sans">Browse our set<br/> of services</h2> 
          </div>
      
           <div className="flex gap-3 border border-[#2A317F] px-6 py-3 rounded-[10px] mt-10">
             <button className="text-[16px] text-[#2A317F]">Browse All</button>
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
