import React from "react";
import NavBar from "@/components/layout/navbar/Navbar";

interface props {
  title: string;
  subTitle?:string;
}

const TopBar = ({ title,subTitle }: props) => {
  return (
    <div className="font-serif w-full h-full root_parent_wrapper bg-[#2A317F]" >
      <div className="root_child_wrapper">
        <NavBar />

        <div className="w-full flex text-white items-center text-center justify-center py-12 md:py-24" data-aos='fade-right'>
          <div className="max-w-xl flex flex-col gap-5 sm:gap-10">
          <h1 className="text-3xl sm:text-5xl md:text-7xl font-semibold">{title}</h1>
          <p className="text-xs md:text-lg font-normal mb-10 sm:mb-20 ">{subTitle}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;

 