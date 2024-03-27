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
    <div className="font-serif w-full h-full root_parent_wrapper bg-[#2A317F]  text-white lg:py-28">
      <div className="root_child_wrapper flex flex-col gap-10 ">



        <div className="flex flex-col">
          <h1 className="text-5xl max-w-md lg:max-w-2xl">{title}</h1>
          <p className="text-lg">{desc}</p>
        </div>



        <div className="">
          {data.map((item, idx) => (
            <div className="flex items-center " key={idx}>
              <div>
                <SolutionListIcon />
              </div>



              <div className="flex flex-col ">
                <h3>{item.tag}</h3>
                <p>{item.item}</p>
              </div>



            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceSolution;
