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
    <div className="relative w-full h-full ">
      <div className="">
        <TopBar title={title} subTitle={subTitle} />
      </div>

      <div className={showSearchVehicle ? "" : "translate-y-[-25%]"}>
        <div
          className={
            showSearchVehicle
              ? "root_child_wrapper"
              : "h-[200px] sm:h-[300px] xl:h-[452px] relative  root_child_wrapper"
          }>
          {heroImg && (
            <Image
              src={heroImg}
              alt=""
              width={1200}
              height={452}
              className="rounded-[24px] w-full h-full overflow-hidden object-cover  mx-auto "
            />
          )}

          {showSearchVehicle && <SearchVehicle />}
        </div>
      </div>
    </div>
  );
};

export default ServicesTopSection;

{
  /* <div className="h-96 lg:h-[530px] border-2"></div> */
}
