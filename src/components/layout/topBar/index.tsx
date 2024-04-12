import React from "react";
import NavBar from "@/components/layout/navbar/Navbar";

interface props {
  title: string;
  subTitle?:string;
}

const TopBar = ({ title,subTitle }: props) => {
  return (
    <div className=" w-full h-full root_parent_wrapper bg-[#2A317F]" >
      <div className="root_child_wrapper">
        <NavBar />

        <div className="w-full flex text-white items-center text-center justify-center py-12 md:py-24" data-aos='fade-right'>
          <div className="max-w-xl flex flex-col gap-3 md:gap-3">
          <h1 className="font-serif md:text-[72px] text-[35px] font-semibold md:leading-[90px]">{title}</h1>
          <p className="font-sans text-[15px] md:text-lg font-thin mb-10 sm:mb-20 " style={{fontWeight:"200"}}>{subTitle}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;

 