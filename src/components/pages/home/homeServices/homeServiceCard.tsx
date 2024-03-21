import React from "react";
import Image from "next/image";
import serviceCardLogo from "../../../../../public/assets/home/HomeServices/serviceCardLogo.svg";
import serviceCardArrow from "../../../../../public/assets/home/HomeServices/serviceCardArrowSign.svg";

function HomeServiceCard() {
  const homeServiceData = [
    {
      id: 1,
      title: "MOT Testing",
      description:
        "MOT Testing: Ensure your vehicle meets safety and environmental standards with Flash Fits comprehensive MOT testing services. Our accredited testers rigorously inspect key components, including brakes, and emissions, to ensure compliance with legal requirements.",
      logo: serviceCardLogo,
      arrowIcon: serviceCardArrow,
    },
    {
      id: 2,
      title: "MOT Testing",
      description:
        "MOT Testing: Ensure your vehicle meets safety and environmental standards with Flash Fits comprehensive MOT testing services. Our accredited testers rigorously inspect key components, including brakes, and emissions, to ensure compliance with legal requirements.",
      logo: serviceCardLogo,
      arrowIcon: serviceCardArrow,
    },
    {
      id: 3,
      title: "MOT Testing",
      description:
        "MOT Testing: Ensure your vehicle meets safety and environmental standards with Flash Fits comprehensive MOT testing services. Our accredited testers rigorously inspect key components, including brakes, and emissions, to ensure compliance with legal requirements.",
      logo: serviceCardLogo,
      arrowIcon: serviceCardArrow,
    },
    {
      id: 4,
      title: "MOT Testing",
      description:
        "MOT Testing: Ensure your vehicle meets safety and environmental standards with Flash Fits comprehensive MOT testing services. Our accredited testers rigorously inspect key components, including brakes, and emissions, to ensure compliance with legal requirements.",
      logo: serviceCardLogo,
      arrowIcon: serviceCardArrow,
    },
  ];

  return (
    <div className="mt-8 w-full grid grid-cols-2 gap-5">
      {homeServiceData?.map((item, index) => (
        <div key={index} className=" bg-[#F5F5F7] flex gap-4  p-8 rounded-[12px]">
         
        

            <div className="flex gap-2 w-full 2xl:w-1/2">
              <div>
                <Image src={item?.logo} alt="logo"  className=""/>
              </div>  
              <div>
                <Image src={item?.arrowIcon} alt="arrow" className="" />
              </div>   
             
             
            </div>

            <div className="">
              <h2 className="text-[#000] text-[24px] font-sans font-[600]">{item?.title}</h2>
              <p className="text-[15px] text-[#2D2D2D] mt-2 font-sans">{item?.description}</p>
            </div>
         
      
            
            
        </div>
      ))}
    </div>
  );
}

export default HomeServiceCard;
