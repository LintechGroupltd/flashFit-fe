import React from "react";

interface props {
  title: string;
  desc1: string;
  desc2: string;
}

const ServicePageDesc = ({ title, desc1, desc2 }: props) => {
  return (
    <div className="font-serif root_parent_wrapper" style={{color:'#0F0F0F'}}>
      <div className="root_child_wrapper">
        
        <div className="w-full flex flex-col lg:flex-row justify-between gap-10 py-24">
          <h1 className=" text-3xl sm:text-5xl w-full lg:max-w-sm font-semibold lg:text-left text-center">{title}</h1>

          <div className="w-full flex flex-col gap-10 text-base sm:text-xl lg:text-2xl" style={{fontWeight:'200'}}>
            <p>{desc1}</p>

            <p>{desc2}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicePageDesc;