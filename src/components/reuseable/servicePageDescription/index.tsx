import React from "react";

interface props {
  title: string;
  desc1: string;
  desc2: string;
}

const ServicePageDesc = ({ title, desc1, desc2 }: props) => {
  return (
    <div className="root_parent_wrapper md:translate-y-[0%] translate-y-[-27%]">
      <div className="root_child_wrapper ">
        {/* <div className="w-full flex flex-col lg:flex-row justify-between gap-10 pt-[30px] pb-[40px] sm:pt-24 sm:pb-24"> */}
        <div className="w-full flex flex-col lg:flex-row justify-between gap-10 pt-[30px] pb-[40px] sm:pt-24 sm:pb-24 lg:py-28 ">
          <h1 className="font-serif text-[#0F0F0F] text-3xl sm:text-5xl w-full lg:max-w-sm font-semibold lg:text-left text-center " >
            {title}
          </h1>

          <div
            className="font-sans w-full flex flex-col gap-10 text-base sm:text-xl lg:text-2xl text-[#505050]"
            style={{ fontWeight: "200" }}>
            <p>{desc1}</p>

            <p>{desc2}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicePageDesc;
