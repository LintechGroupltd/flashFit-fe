import TopBar from "@/components/layout/topBar";
import HeroImg from "../../../../public/assets/services/images/motHeroImg.png";
import React from "react";
import Image from "next/image";

interface props {
  title: string;
  subTitle?:string;
}

const ServicesTopSection = ({ title ,subTitle}: props) => {
  return (
    <div className="relative w-full h-full">
      <div className="">
        <TopBar
          title={title}
          subTitle={subTitle}
        />
      </div>




      {/* <div className="absolute top-1/2 lg:top-[65%] 2xl:top-2/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4/5 "> */}
      <div className="absolute top-1/2  left-1/2 md:top-[60%] transform -translate-x-1/2 -translate-y-1/2 sm:-translate-y-1/3 lg:top-1/2 xl:top-[70%]  w-4/5 ">
        <div className="w-full h-auto relative bg-lime-500">
          {/* <Image
            src="/assets/services/images/motHeroImg.png"
            alt=""
            width={1200}
            height={300}
            layout="responsive"
          /> */}

        </div>
      </div>

      <div className="h-96 lg:h-[530px] border-2"></div>
    </div>
  );
};

export default ServicesTopSection;
