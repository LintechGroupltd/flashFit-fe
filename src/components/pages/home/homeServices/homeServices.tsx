import React from "react";
import Image from "next/image";
import arrowRight from '../../../../../public/assets/home/HomeServices/arrow-right.svg'
import HomeServiceCard from "./homeServiceCard";


function HomeServices() {
  return (
    <div className="md:mt-10 mt-2">
        <div className="md:flex justify-between items-center">
          <div>
             <h2 className="md:text-[48px] text-[36px] font-[600] md:leading-[55px] leading-[45px] font-serif">Browse our set<br/> of services</h2> 
          </div>
      
           <div className="flex justify-center gap-3 border  border-[#2A317F] px-7 py-3 rounded-[10px] md:mt-[65px] mt-5">
             <button className="text-[16px] font-sans text-[#2A317F] font-[500] ">Browse All</button>
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
