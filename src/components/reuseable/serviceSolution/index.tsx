import SolutionListIcon from "@/components/svg/SolutionListIcon";
import React from "react";

interface Solutions {
  id: number;
  tag: string;
  item: string;
}

interface ServiceSolutionProps {
  title: string;
  desc: string;
  data: Solutions[];
}

const ServiceSolution: React.FC<ServiceSolutionProps> = ({
  title,
  desc,
  data,
}) => {
  return (
    <div className="font-serif w-full h-full root_parent_wrapper bg-[#2A317F]  text-white py-14 lg:py-28">
      <div className="root_child_wrapper flex flex-col gap-10 ">
        <div className="flex flex-col gap-8 max-w-md md:max-w-2xl">
          <h1 className="text-3xl lg:text-5xl font-bold text-center lg:text-left" data-aos='fade-up'>{title}</h1>
          <p className="text-sm md:text-lg font-thin" data-aos='fade-up'>{desc}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 text-black" data-aos='fade-up'>
          {data.map((item, idx) => (
            <div
              className="flex flex-col lg:flex-row gap-4 lg:gap-10 bg-white px-10  py-10 rounded-md"
              key={idx}
            >
              <div>
                <SolutionListIcon />
              </div>



              <div className="flex flex-col gap-6">
                <h3 className="text-lg lg:text-2xl font-bold">{item.tag}</h3>
                <p className="">{item.item}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceSolution;
