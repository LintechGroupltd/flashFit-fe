"use client";

import React from "react";
import Image from "next/image";

import serviceCardArrow from "../../../../public/assets/home/HomeServices/serviceCardArrowSign.svg";
import hoverWhiteBgArrowIcon from "../../../../public/assets/home/HomeServices/hoverWhiteBgArrowIcon.svg";

import Mot_blue_Bg from "../../../../public/assets/services/OurServicesCardIcon/MOT_Blue_Bg.svg";
import Mot_Yellow_Bg from "../../../../public/assets/services/OurServicesCardIcon/MOT_Yellow_Bg.svg";

import Service_Blue_Bg from "../../../../public/assets/services/OurServicesCardIcon/Service_Blue_Bg.svg";
import Service_Yellow_Bg from "../../../../public/assets/services/OurServicesCardIcon/Service_Yellow_Bg.svg";

import Brakes_Blue_Bg from "../../../../public/assets/services/OurServicesCardIcon/Brakes_Blue_Bg.svg";
import Brakes_Yellow_Bg from "../../../../public/assets/services/OurServicesCardIcon/Brakes_Yellow_Bg.svg";

import Exhaust_Blue_Bg from "../../../../public/assets/services/OurServicesCardIcon/Exhaust_Blue_Bg.svg";
import Exhaust_Yellow_Bg from "../../../../public/assets/services/OurServicesCardIcon/Exhaust_Yellow_Bg.svg";

import Tyres_Blue_Bg from "../../../../public/assets/services/OurServicesCardIcon/Exhaust_Blue_Bg.svg";
import Tyres_Yellow_Bg from "../../../../public/assets/services/OurServicesCardIcon/Exhaust_Yellow_Bg.svg";

import Wheels_Alignments_Blue_Bg from "../../../../public/assets/services/OurServicesCardIcon/Wheels_Alignments_Blue_Bg.svg";
import Wheels_Alignments_Yellow_Bg from "../../../../public/assets/services/OurServicesCardIcon/Wheels_Alignments_Yellow_Bg.svg";

import Diagnosis_Testing_Blue_Bg from "../../../../public/assets/services/OurServicesCardIcon/Diagnosis_Testing_Blue_Bg.svg";
import Diagnosis_Testing_Yellow_Bg from "../../../../public/assets/services/OurServicesCardIcon/Diagnosis_Testing_Yellow_Bg.svg";
import Link from "next/link";

function OurAllServicesCard() {
  const [hoveredIndex, setHoveredIndex] = React.useState<number | null>(null);

  const homeServiceData = [
    {
            id: 1,
            title: "MOT Testing",
            description:
              "MOT Testing: Ensure your vehicle meets safety and environmental standards with Flash Fits comprehensive MOT testing services. Our accredited testers rigorously inspect key components, including brakes, and emissions, to ensure compliance with legal requirements.",
            logo: Mot_blue_Bg,
            arrowIcon: serviceCardArrow,
            hoverLogo:Mot_Yellow_Bg,
            hoverArrowIcon:hoverWhiteBgArrowIcon,
            url: "/services/mot-testing" // Example URL for MOT Testing
          },
          {
            id: 2,
            title: "Service",
            description:
              "Keep your car running smoothly and efficiently with Flash Fit's comprehensive servicing packages. From oil changes to fluid checks and filter replacements, our tailored services maintain peak performance and prolong the lifespan of your vehicle.",
            logo: Service_Blue_Bg,
            arrowIcon: serviceCardArrow,
            hoverLogo:Service_Yellow_Bg,
            hoverArrowIcon:hoverWhiteBgArrowIcon,
            url: "/services/servicing" // Example URL for Service
          },
          {
            id: 3,
            title: "Brake",
            description:
              "Safeguard your vehicle's safety and performance with Flash Fit's meticulous brake inspections and expert repairs. Our skilled technicians ensure your brakes are in top condition, providing responsive stopping power and peace of mind on the road.",
            logo: Brakes_Blue_Bg,
            arrowIcon: serviceCardArrow,
            hoverLogo:Brakes_Yellow_Bg,
            hoverArrowIcon:hoverWhiteBgArrowIcon,
            url: "/services/brake-service" // Example URL for Brake
          },
          {
            id: 4,
            title: "Exhaust",
            description:
              " Maintain optimal engine performance and reduce harmful emissions with our exhaust maintenance services. Our thorough inspections and precise repairs ensure your exhaust system functions efficiently, promoting a smoother engine operation.",
            logo: Exhaust_Blue_Bg,
            arrowIcon: serviceCardArrow,
            hoverLogo:Exhaust_Yellow_Bg,
            hoverArrowIcon:hoverWhiteBgArrowIcon,
            url: "/services/exhaust-maintenance" // Example URL for Exhaust
          },
      {
        id: 5,
        title: "Tyres",
        description:
          "Stay safe and road-ready with Flash Fit's tire services. Whether you need tire inspections, puncture repairs, or replacements, our expert technicians ensure your tires are in optimal condition for enhanced grip, stability, and fuel efficiency.",
        logo: Tyres_Blue_Bg,
        hoverLogo: Tyres_Yellow_Bg,
        arrowIcon: serviceCardArrow,
        hoverArrowIcon: hoverWhiteBgArrowIcon,
        url: "/services/tyres-servicing",
      },
      {
        id: 6,
        title: "Wheel Alignments",
        description:
          "Enhance your driving experience and prolong tire life with Flash Fit's precision wheel alignment services. Our state-of-the-art equipment and skilled technicians ensure your wheels are correctly aligned, promoting smoother handling and reduced tire wear.",
        logo: Wheels_Alignments_Blue_Bg,
        hoverLogo: Wheels_Alignments_Yellow_Bg,
        arrowIcon: serviceCardArrow,
        hoverArrowIcon: hoverWhiteBgArrowIcon,
        url: "/services/wheels-alignments", 
      },
      {
        id: 7,
        title: "Diagnosis Testing",
        description:
          "Detect and address automotive issues early with Flash Fit's advanced vehicle diagnosis services. Using cutting-edge diagnostic tools and extensive expertise, our technicians pinpoint potential problems and provide accurate recommendations for optimal vehicle performance and reliability.",
        logo: Diagnosis_Testing_Blue_Bg,
        hoverLogo: Diagnosis_Testing_Yellow_Bg,
        arrowIcon: serviceCardArrow,
        hoverArrowIcon: hoverWhiteBgArrowIcon,
        url: "/services/diagnosis-testing",
      },
  ];

  return (
    <div className="w-full grid md:grid-cols-2 gap-[35px] mt-24">
      {homeServiceData.map((item, index) => (
        <Link href={item.url}>
        <div
          key={index}
          className={`p-9 rounded-[12px] md:flex lg:gap-6 xl:gap-4 transition md:h-[255px] duration-300 ease-in-out ${
            hoveredIndex === index
              ? "bg-[#2A317F] text-white"
              : "bg-[#F5F5F7] text-[#2D2D2D]"
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
                src={
                  hoveredIndex === index ? item.hoverArrowIcon : item.arrowIcon
                }
                alt={hoveredIndex === index ? "hoverArrowIcon" : "arrow"}
                className=""
              />
            </div>
          </div>

          <div className="">
            <h2 className="  md:text-[24px] text-[22px] font-serif font-[600] md:mt-0 mt-3">
              {item.title}
            </h2>
            <p className="text-[15px] mt-[10px]  font-sans">
              {item.description}
            </p>
          </div>
        </div>
      </Link>   
      ))}
    </div>
  );
}

export default OurAllServicesCard;













// import React, { useState } from "react";
// import Image from "next/image";
// import serviceCardLogo from "../../../../../public/assets/home/HomeServices/serviceCardLogo.svg";
// import serviceCardYellowBgLogo from "../../../../../public/assets/home/HomeServices/serviceCardYellowBgLogo.svg";
// import serviceCardArrow from "../../../../../public/assets/home/HomeServices/serviceCardArrowSign.svg";
// import hoverWhiteBgArrowIcon from "../../../../../public/assets/home/HomeServices/hoverWhiteBgArrowIcon.svg";


// import MOT_Blue_Bg from '../../../../../public/assets/services/OurServicesCardIcon/MOT_Blue_Bg.svg'
// import MOT_Yellow_Bg from '../../../../../public/assets/services/OurServicesCardIcon/MOT_Yellow_Bg.svg'

// import Service_Blue_Bg from '../../../../../public/assets/services/OurServicesCardIcon/Service_Blue_Bg.svg'
// import Service_Yellow_Bg from '../../../../../public/assets/services/OurServicesCardIcon/Service_Yellow_Bg.svg'

// import Brakes_Blue_Bg from '../../../../../public/assets/services/OurServicesCardIcon/Brakes_Blue_Bg.svg'
// import Brakes_Yellow_Bg from '../../../../../public/assets/services/OurServicesCardIcon/Brakes_Yellow_Bg.svg'

// import Exhaust_Blue_Bg from '../../../../../public/assets/services/OurServicesCardIcon/Exhaust_Blue_Bg.svg'
// import Exhaust_Yellow_Bg from '../../../../../public/assets/services/OurServicesCardIcon/Exhaust_Yellow_Bg.svg'
// import Link from "next/link";


// function HomeServiceCard() {
//   const [hoveredIndex, setHoveredIndex] = React.useState<number | null>(null);
//   // const [hoveredIndex, setHoveredIndex] = React.useState(null);

//   const homeServiceData = [
//     {
//       id: 1,
//       title: "MOT Testing",
//       description:
//         "MOT Testing: Ensure your vehicle meets safety and environmental standards with Flash Fits comprehensive MOT testing services. Our accredited testers rigorously inspect key components, including brakes, and emissions, to ensure compliance with legal requirements.",
//       logo: MOT_Blue_Bg,
//       arrowIcon: serviceCardArrow,
//       hoverLogo:MOT_Yellow_Bg,
//       hoverArrowIcon:hoverWhiteBgArrowIcon,
//       url: "/services/mot-testing" // Example URL for MOT Testing
//     },
//     {
//       id: 2,
//       title: "Service",
//       description:
//         "Keep your car running smoothly and efficiently with Flash Fit's comprehensive servicing packages. From oil changes to fluid checks and filter replacements, our tailored services maintain peak performance and prolong the lifespan of your vehicle.",
//       logo: Service_Blue_Bg,
//       arrowIcon: serviceCardArrow,
//       hoverLogo:Service_Yellow_Bg,
//       hoverArrowIcon:hoverWhiteBgArrowIcon,
//       url: "/services/servicing" // Example URL for Service
//     },
//     {
//       id: 3,
//       title: "Brake",
//       description:
//         "Safeguard your vehicle's safety and performance with Flash Fit's meticulous brake inspections and expert repairs. Our skilled technicians ensure your brakes are in top condition, providing responsive stopping power and peace of mind on the road.",
//       logo: Brakes_Blue_Bg,
//       arrowIcon: serviceCardArrow,
//       hoverLogo:Brakes_Yellow_Bg,
//       hoverArrowIcon:hoverWhiteBgArrowIcon,
//       url: "/services/brake-service" // Example URL for Brake
//     },
//     {
//       id: 4,
//       title: "Exhaust",
//       description:
//         " Maintain optimal engine performance and reduce harmful emissions with our exhaust maintenance services. Our thorough inspections and precise repairs ensure your exhaust system functions efficiently, promoting a smoother engine.",
//       logo: Exhaust_Blue_Bg,
//       arrowIcon: serviceCardArrow,
//       hoverLogo:Exhaust_Yellow_Bg,
//       hoverArrowIcon:hoverWhiteBgArrowIcon,
//       url: "/services/exhaust-maintenance" // Example URL for Exhaust
//     },
// {
//   id: 5,
//   title: "Tyres",
//   description:
//     "MOT Testing: Ensure your vehicle meets safety and environmental standards with Flash Fit's comprehensive MOT testing services. Our accredited testers rigorously inspect key components, including brakes, and emissions, to ensure compliance with legal requirements.",
//   logo: Tyres_Blue_Bg,
//   hoverLogo: Tyres_Yellow_Bg,
//   arrowIcon: serviceCardArrow,

//   hoverArrowIcon: hoverWhiteBgArrowIcon,
// },
// {
//   id: 6,
//   title: "Wheel Alignments",
//   description:
//     "MOT Testing: Ensure your vehicle meets safety and environmental standards with Flash Fit's comprehensive MOT testing services. Our accredited testers rigorously inspect key components, including brakes, and emissions, to ensure compliance with legal requirements.",
//   logo: Wheels_Alignments_Blue_Bg,
//   hoverLogo: Wheels_Alignments_Yellow_Bg,
//   arrowIcon: serviceCardArrow,

//   hoverArrowIcon: hoverWhiteBgArrowIcon,
// },
// {
//   id: 7,
//   title: "Diagnosis Testing",
//   description:
//     "MOT Testing: Ensure your vehicle meets safety and environmental standards with Flash Fit's comprehensive MOT testing services. Our accredited testers rigorously inspect key components, including brakes, and emissions, to ensure compliance with legal requirements.",
//   logo: Diagnosis_Testing_Blue_Bg,
//   hoverLogo: Diagnosis_Testing_Yellow_Bg,
//   arrowIcon: serviceCardArrow,

//   hoverArrowIcon: hoverWhiteBgArrowIcon,
// },
//   ];
  
  

//   return (
//     <div className="md:mt-10 mt-5 w-full grid md:grid-cols-2 gap-[35px]">
//       {homeServiceData.map((item, index) => (
//       <Link href={item.url}>
//         <div
//           key={index}
//           className={`p-9 rounded-[12px] md:flex lg:gap-6 xl:gap-4 h-[255px] transition duration-300 ease-in-out ${
//             hoveredIndex === index ? "bg-[#2A317F] text-white" : "bg-[#F5F5F7] text-[#2D2D2D]"
//           }`}
//           onMouseEnter={() => setHoveredIndex(index)}
//           onMouseLeave={() => setHoveredIndex(null)}
//         >
//           <div className="flex gap-2 w-full 2xl:w-1/2">
//             <div>
//               <Image
//                 src={hoveredIndex === index ? item.hoverLogo : item.logo}
//                 alt={hoveredIndex === index ? "hoverLogo" : "logo"}
//                 className=""
//               />
//             </div>
//             <div>
//               <Image
//                 src={hoveredIndex === index ? item.hoverArrowIcon : item.arrowIcon}
//                 alt={hoveredIndex === index ? "hoverArrowIcon" : "arrow"}
//                 className=""
//               />
//             </div>
//           </div>

//           <div className="">
//             <h2 className="  md:text-[24px] text-[22px] font-serif font-[600] md:mt-0 mt-3">
//               {item.title}
//             </h2>
//             <p className="text-[15px] mt-[10px]  font-sans">{item.description}</p>
//           </div>
//         </div>
//       </Link>  
      
//       ))}
//     </div>
//   );
// }

// export default HomeServiceCard;











