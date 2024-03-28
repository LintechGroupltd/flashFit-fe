import Image from "next/image";
import React from "react";
import wheelImg from "../../../../public/assets/services/images/manCheckingCar.png";
import BenefitListIcon from "@/components/svg/BenefitListIcon";

interface Benefit {
  id: number;
  item: string;
}

interface ServiceBenefitsProps {
  img1: any;
  img2?: any;
  figure: string;
  title: string;
  desc1: string;
  title2: string;
  desc2: string;
  data: Benefit[];
}

const ServiceBenefits: React.FC<ServiceBenefitsProps> = ({
  img1,
  img2,
  figure,
  title,
  desc1,
  title2,
  desc2,
  data,
}) => {
  const im1_component = (
    <Image
      src={img1}
      className="w-full h-[160px] sm:h-[272px] lg:h-full object-cover rounded-[24px] overflow-hidden"
      alt=""
    />
  );

  const im2_component = (
    <Image
      src={img2}
      alt="wheelImg"
      className="w-full  h-[160px] sm:h-[272px] lg:h-full object-cover rounded-2xl  hidden lg:block"
      style={{ maxHeight: "300px" }}
    />
  );

  return (
    <div
      className="w-full h-full pt-14 pb-[30px]  lg:py-28"
      style={{ backgroundColor: "#F5F5F7" }}>
      <div className="font-serif root_parent_wrapper">
        <div className="root_child_wrapper flex flex-col gap-[16px] xl:gap-10 ">
          <div className="flex flex-col lg:flex-row gap-[16px] xl:gap-8  ">
            <div
              className="w-full h-auto hidden lg:block"
              data-aos="fade-right">
              {im1_component}
            </div>

            <div
              className="w-full flex flex-col gap-[16px] xl:gap-6 bg-white py-8 px-10 rounded-2xl"
              data-aos="fade-up">
              <h1 className="text-5xl font-semibold text-[#2A317F]">
                {figure}
              </h1>
              <h4 className="text-2xl font-semibold">{title}</h4>
              <p className="text-base">{desc1}</p>
            </div>

            <div
              className="w-full flex flex-col gap-6 bg-white py-8 px-10 rounded-2xl"
              data-aos="fade-left">
              <h1 className="text-5xl font-semibold text-[#2A317F]">
                {figure}
              </h1>
              <h4 className="text-2xl font-semibold">{title2}</h4>
              <p className="text-base">{desc2}</p>
            </div>
          </div>

          <div className="w-full h-full">
            <div className="flex  flex-col lg:flex-row gap-[16px] xl:gap-8 w-full h-full">
              <div
                className="w-full md:w-full h-auto"
                data-aos="fade-up-right"
                data-aos-duration="500">
                {im2_component}
              </div>

              <div
                className="bg-[#2A317F] w-full flex flex-col gap-6 lg:w-2/4 h-auto rounded-2xl  py-8 px-10"
                data-aos="fade-up-left"
                data-aos-duration="1000">
                <h1 className="text-[#F8AD39] font-bold text-5xl">Benefits </h1>

                <ul className="flex flex-col gap-4">
                  {data.map((benefits, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-2  text-white font-thin">
                      <BenefitListIcon />
                      <span>{benefits.item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="w-full h-auto flex gap-[24px] lg:hidden mt-[8px]">
            <div className="w-full h-auto" data-aos="fade-right">
              {im1_component}
            </div>
            <div className="w-full h-auto" data-aos="fade-right">
              {im1_component}
            </div>
          </div>
          {/* 
    <div className="w-full h-full">
     <div className="flex  flex-row md:gap-10 gap-5 w-full h-full">
    <div className="w-full md:w-full h-auto" data-aos="fade-up-right" data-aos-duration="500">
      <Image src={wheelImg} alt="wheelImg" className="w-full h-full md:block hidden" style={{ maxHeight: "300px" }} />
    </div>










    <div className="bg-[#F5F5F7] w-full md:w-1/4 h-auto rounded-[38px]" data-aos="fade-up-left" data-aos-duration="1000">
      <Image src={wheelImg2} alt="ourAchievementCar" className="w-full h-full md:rounded-[38px]" style={{objectFit: "cover", maxHeight: "300px", height: "100%"}}/>
    </div>
  </div>
</div> */}
        </div>
      </div>
    </div>
  );
};

export default ServiceBenefits;
