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
  console.log({ heroImg });
  return (
    <div className="relative w-full h-full">
      <div className="">
        <TopBar title={title} subTitle={subTitle} />
      </div>

      <div className="translate-y-[-25%] root_child_wrapper">
        <div className="w-full h-auto relative  ">
          {heroImg && (
            <Image
              src={heroImg}
              alt=""
              width={1200}
              height={300}
              layout="responsive"
              className="rounded-[24px] overflow-hidden w-full max-w-[1200px] mx-auto "
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
