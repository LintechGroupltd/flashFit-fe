import React from "react";
import flashBenefitCardIcon from "../../../../public/assets/reuseableComponentImg/flashBenefitCardIcon.svg";
import Image from "next/image";

function FlashBenefitCard() {
  const flashBenefitCardData = [
    {
      id: 1,
      title: "Expertise you can trust",
      description:
        "With years of experience and a team of skilled technicians, Flash Fit delivers top-notch service tailored to your vehicle's specific requirements. Trust us to keep your car running smoothly and reliably.",
      logo: flashBenefitCardIcon,
    },
    {
      id: 2,
      title: "Comprehensive Solutions",
      description:
        "We take pride in our workmanship and use only the highest quality parts and equipment for all repairs and replacements. Rest assured, your vehicle is in capable hands with Flash Fit.",
      logo: flashBenefitCardIcon,
    },
    {
      id: 3,
      title: "Quality Assurance",
      description:
        "We take pride in our workmanship and use only the highest quality parts and equipment for all repairs and replacements. Rest assured, your vehicle is in capable hands with Flash Fit.",
      logo: flashBenefitCardIcon,
    },
    {
      id: 4,
      title: "Expertise you can trust",
      description:
        "We take pride in our workmanship and use only the highest quality parts and equipment for all repairs and replacements. Rest assured, your vehicle is in capable hands with Flash Fit.",
      logo: flashBenefitCardIcon,
    },
  ];

  return (
    <div className="mt-8 w-full grid md:grid-cols-2  gap-[35px]">
      {flashBenefitCardData?.map((item, index) => (
        <div
          key={index}
          className=" bg-[#F5F5F7] md:flex gap-3  p-8 rounded-[12px]"
        >
          <div className="w-48 2xl:w-36">
            <div>
              <Image src={item?.logo} alt="logo" className="" />
            </div>
          </div>

          <div className="">
            <h2 className="text-[#000] md:text-[24px] text-[22px] font-serif font-[600] md:mt-0 mt-2">
              {item?.title}
            </h2>
            <p className="md:text-[16px] text-[15px] text-[#2D2D2D] mt-2 font-sans font-[400]">
              {item?.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default FlashBenefitCard;
