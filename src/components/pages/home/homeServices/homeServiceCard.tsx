import React, { useState } from "react";
import Image from "next/image";
import serviceCardLogo from "../../../../../public/assets/home/HomeServices/serviceCardLogo.svg";
import serviceCardYellowBgLogo from "../../../../../public/assets/home/HomeServices/serviceCardYellowBgLogo.svg";
import serviceCardArrow from "../../../../../public/assets/home/HomeServices/serviceCardArrowSign.svg";
import hoverWhiteBgArrowIcon from "../../../../../public/assets/home/HomeServices/hoverWhiteBgArrowIcon.svg";


import MOT_Blue_Bg from '../../../../../public/assets/services/OurServicesCardIcon/MOT_Blue_Bg.svg'
import MOT_Yellow_Bg from '../../../../../public/assets/services/OurServicesCardIcon/MOT_Yellow_Bg.svg'

import Service_Blue_Bg from '../../../../../public/assets/services/OurServicesCardIcon/Service_Blue_Bg.svg'
import Service_Yellow_Bg from '../../../../../public/assets/services/OurServicesCardIcon/Service_Yellow_Bg.svg'

import Brakes_Blue_Bg from '../../../../../public/assets/services/OurServicesCardIcon/Brakes_Blue_Bg.svg'
import Brakes_Yellow_Bg from '../../../../../public/assets/services/OurServicesCardIcon/Brakes_Yellow_Bg.svg'

import Exhaust_Blue_Bg from '../../../../../public/assets/services/OurServicesCardIcon/Exhaust_Blue_Bg.svg'
import Exhaust_Yellow_Bg from '../../../../../public/assets/services/OurServicesCardIcon/Exhaust_Yellow_Bg.svg'


function HomeServiceCard() {
  const [hoveredIndex, setHoveredIndex] = React.useState<number | null>(null);
  // const [hoveredIndex, setHoveredIndex] = React.useState(null);

  const homeServiceData = [
    {
      id: 1,
      title: "MOT Testing",
      description:
        "MOT Testing: Ensure your vehicle meets safety and environmental standards with Flash Fits comprehensive MOT testing services. Our accredited testers rigorously inspect key components, including brakes, and emissions, to ensure compliance with legal requirements.",
      logo: MOT_Blue_Bg,
      arrowIcon: serviceCardArrow,
      hoverLogo:MOT_Yellow_Bg,
      hoverArrowIcon:hoverWhiteBgArrowIcon,
    },
    {
      id: 2,
      title: "Service",
      description:
        "Service: Ensure your vehicle meets safety and environmental standards with Flash Fits comprehensive MOT testing services. Our accredited testers rigorously inspect key components, including brakes, and emissions, to ensure compliance with legal requirements.",
      logo: Service_Blue_Bg,
      arrowIcon: serviceCardArrow,
      hoverLogo:Service_Yellow_Bg,
      hoverArrowIcon:hoverWhiteBgArrowIcon
    },
    {
      id: 3,
      title: "Brake",
      description:
        "Brake: Ensure your vehicle meets safety and environmental standards with Flash Fits comprehensive MOT testing services. Our accredited testers rigorously inspect key components, including brakes, and emissions, to ensure compliance with legal requirements.",
      logo: Brakes_Blue_Bg,
      arrowIcon: serviceCardArrow,
      hoverLogo:Brakes_Yellow_Bg,
      hoverArrowIcon:hoverWhiteBgArrowIcon
    },
    {
      id: 4,
      title: "Exhaust",
      description:
        "Exhaust: Ensure your vehicle meets safety and environmental standards with Flash Fits comprehensive MOT testing services. Our accredited testers rigorously inspect key components, including brakes, and emissions, to ensure compliance with legal requirements.",
      logo: Exhaust_Blue_Bg,
      arrowIcon: serviceCardArrow,
      hoverLogo:Exhaust_Yellow_Bg,
      hoverArrowIcon:hoverWhiteBgArrowIcon
    },
  ];
  

  return (
    <div className="md:mt-10 mt-5 w-full grid md:grid-cols-2 gap-[35px]">
      {homeServiceData.map((item, index) => (
        <div
          key={index}
          className={`p-9 rounded-[12px] md:flex lg:gap-6 xl:gap-4 transition duration-300 ease-in-out ${
            hoveredIndex === index ? "bg-[#2A317F] text-white" : "bg-[#F5F5F7] text-[#2D2D2D]"
          }`}
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <div className="flex gap-2 w-full 2xl:w-1/2">
            <div>
              <Image
                src={hoveredIndex === index ? item.hoverLogo : item.logo}
                alt={hoveredIndex === index ? "hoverLogo" : "logo"}
                className=""
              />
            </div>
            <div>
              <Image
                src={hoveredIndex === index ? item.hoverArrowIcon : item.arrowIcon}
                alt={hoveredIndex === index ? "hoverArrowIcon" : "arrow"}
                className=""
              />
            </div>
          </div>

          <div className="">
            <h2 className="  md:text-[24px] text-[22px] font-serif font-[600] md:mt-0 mt-3">
              {item.title}
            </h2>
            <p className="text-[15px] mt-[10px]  font-sans">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default HomeServiceCard;











