import React, { useState } from "react";
import Image from "next/image";
import arrowRight from '../../../../../public/assets/home/HomeServices/arrow-right.svg'
import BrowseAllHoverArrowIcon from '../../../../../public/assets/home/HomeServices/BrowseAllHoverArrowIcon.svg'
import HomeServiceCard from "./homeServiceCard";

function HomeServices() {
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(!isHovered);
  };

  return (
    <div className="md:mt-10 mt-2">
      <div className="md:flex justify-between items-center">
        <div>
          <h2 className="md:text-[48px] text-[36px] font-[600] md:leading-[55px] leading-[45px] font-serif">
            Browse our set<br/> of services
          </h2>
        </div>
      
        <div
          className={`flex justify-center gap-3 border border-[#2A317F] px-7 py-3 rounded-[10px] md:mt-[65px] text-[#2A317F] hover:text-[#fff] mt-5 ${isHovered ? 'bg-[#2A317F]' : ''}`}
          onMouseEnter={handleHover}
          onMouseLeave={handleHover}
        >
          <button className="text-[16px] font-sans  hover:text-[#fff] font-[500]">Browse All</button>
          {isHovered ? (
            <Image src={BrowseAllHoverArrowIcon} alt="arrow" />
          ) : (
            <Image src={arrowRight} alt="arrow" />
          )}
        </div>
      </div>

      <div>
        <HomeServiceCard/>
      </div>
        
    </div>
  );
}

export default HomeServices;
