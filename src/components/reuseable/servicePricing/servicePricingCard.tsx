import React, { useState } from "react";
import Image from "next/image";
import { servicePricingData } from "./serviceData";

// Define an interface for the hoveredIcons state
interface HoveredIcons {
  [key: number]: boolean; 
}

function ServicePricingCard() {
  const [hoveredIcons, setHoveredIcons] = useState<HoveredIcons>({});

  const handleMouseEnter = (id: number) => {
    setHoveredIcons({ ...hoveredIcons, [id]: true });
  };

  const handleMouseLeave = (id: number) => {
    setHoveredIcons({ ...hoveredIcons, [id]: false });
  };

  return (
    <div className="grid md:grid-cols-3 gap-[24px]">
      {servicePricingData.map((service) => (
        <div
          key={service.id}
          className="p-[32px] rounded-lg bg-white shadow-md transition duration-300  group hover:bg-[#2A317F]"
          onMouseEnter={() => handleMouseEnter(service.id)}
          onMouseLeave={() => handleMouseLeave(service.id)}
        >
          <div className="flex items-center mb-4">
            <div>
              <h2 className="md:text-[20px] text-[18px] font-[600] font-sans text-[#F8AD39]">{service.servicingTitle}</h2>
              <p className="text-[#2D2D2D] md:text-[48px] text-[38px] font-[600] font-serif group-hover:text-white my-[5px]">{service.monthlyPrice}</p>
              <p className=" group-hover:text-white text-[16px] font-[400] font-sans text-[#505050]">{service.billedType}</p>
            </div>
          </div>
          <div className="flex flex-col mt-5">
            {service.nestedData.options.map((option, index) => (
              <div key={index} className="flex items-center py-2">
                <Image
                  src={hoveredIcons[service.id] ? service.nestedData.hoverIcon : service.nestedData.icon}
                  alt="Icon"
                  width={24}
                  height={24}
                  className="mr-2"
                />
                <p className="text-[#505050] group-hover:text-white text-[16px] font-[400] font-sans">{option}</p>
              </div>
            ))}
          </div>

          <div className="w-full mt-7">
           <button className="mt-4 bg-[#F8AD39] text-white text-[16px] font-[500] font-sans py-3  rounded-lg  w-full">
             Get started
           </button>
          </div>  
         
        </div>
      ))}
    </div>
  );
}

export default ServicePricingCard;
