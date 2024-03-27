import TopBar from "@/components/layout/topBar";
import React from "react";
import Image from "next/image";
import SearchVehicle from "@/components/pages/home/homeBanner/searchVehicle";

interface Props {
  title: string;
  subTitle?: string;
  heroImg?: any;
  showSearchVehicle?: boolean;
}

const ServicesTopSection: React.FC<Props> = ({
  title,
  subTitle,
  heroImg,
  showSearchVehicle,
}: Props) => {
  return (
    <div className="relative w-full h-full">
      <div className="">
        <TopBar title={title} subTitle={subTitle} />
      </div>

      <div className="absolute top-1/2  left-1/2 md:top-[60%] transform -translate-x-1/2 -translate-y-1/2 sm:-translate-y-1/3 lg:top-1/2 xl:top-[70%]  w-4/5 ">
        <div className="w-full h-auto relative">
          {heroImg && (
            <Image
              src={heroImg}
              alt=""
              width={1200}
              height={300}
              layout="responsive"
            />
          )}

          {showSearchVehicle && <SearchVehicle />}
        </div>
      </div>

      <div className="h-96 lg:h-[530px] border-2"></div>
    </div>
  );
};

export default ServicesTopSection;

{
  /* <div className="h-96 lg:h-[530px] border-2"></div> */
}
