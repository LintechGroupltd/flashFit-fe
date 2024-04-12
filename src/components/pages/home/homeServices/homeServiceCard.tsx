import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface ServiceData {
  id: number;
  title: string;
  description: string;
  logo: string;
  url: string;
  learMoreUpperArrow: string;
}

const HomeServiceCard: React.FC<{ serviceData: ServiceData }> = ({
  serviceData,
}) => {
  const { id, title, description, logo, url, learMoreUpperArrow } = serviceData;

  return (
    <div className="w-full bg-[#2A317F] rounded-[8px] p-[28px] ml-2">
      <div>
        <h2 className="text-[24px] font-[600] font-serif text-center text-[#fff] uppercase">
          {title}
        </h2>
      </div>

      <div>
        <div className="w-full mx-auto my-4">
          <Image
            className="mx-auto"
            src={logo}
            alt="sliderImg"
            width={300}
            height={300}
          />
        </div>

        <div className="mt-5">
          <p className="text-[13px] font-[400] font-sans text-[#fff] text-center">
            {description}
          </p>
        </div>

        <Link href={url}>
          <div className="flex justify-center border border-[#F8AD39] gap-3 bg-[#2A317F] hover:bg-[#F8AD39] mt-6 py-3 rounded-[8px]">
            <p className="text-[#fff] text-[16px] font-[600] font-sans">
              Learn More
            </p>
            <div>
              <Image src={learMoreUpperArrow} alt="learMoreUpperArrow" />
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default HomeServiceCard;
