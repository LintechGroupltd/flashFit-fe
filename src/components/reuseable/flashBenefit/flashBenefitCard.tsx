import React from "react";
import expertise from "../../../../public/assets/reuseableComponentImg/flashBenefit/expertise.svg";
import comprehensive from "../../../../public/assets/reuseableComponentImg/flashBenefit/comprehensive.svg";
import quality from "../../../../public/assets/reuseableComponentImg/flashBenefit/quality.svg";
import transparent from "../../../../public/assets/reuseableComponentImg/flashBenefit/transparent.svg";

import Image from "next/image";

function FlashBenefitCard() {
  const flashBenefitCardData = [
    {
      id: 1,
      title: "Expertise you can trust",
      description:
        "With years of experience and a team of skilled technicians, Flash Fit delivers top-notch service tailored to your vehicle's specific requirements. Trust us to keep your car running smoothly and reliably.",
      logo: expertise,
    },
    {
      id: 2,
      title: "Comprehensive Solutions",
      description:
        "Our automotive service center offers everything from routine servicing to MOT testing, ensuring your vehicle receives comprehensive care conveniently. Our commitment is seamless care.",
      logo: comprehensive,
    },
    {
      id: 3,
      title: "Quality Assurance",
      description:
        "We take pride in our workmanship and use only the highest quality parts and equipment for all repairs and replacements. Rest assured, your vehicle is in capable hands with Flash Fit.",
      logo: quality,
    },
    {
      id: 4,
      title: "Transparent Communication",
      description:
        "We believe in keeping our customers informed every step of the way. You'll receive clear explanations of any issues found during inspections, along with honest recommendations for necessary repairs.",
      logo: transparent,
    },
  ];

  return (
    <div className="mt-8 w-full grid md:grid-cols-2 gap-[35px] ">
      {flashBenefitCardData?.map((item, index) => (
        <div
          key={index}
          className=" bg-[#F5F5F7] md:flex gap-3 md:h-[220px] p-8 rounded-[12px]"
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
