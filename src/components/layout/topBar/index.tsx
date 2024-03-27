import React from "react";
import NavBar from "@/components/layout/navbar/Navbar";

interface props {
  title: string;
}

const TopBar = ({ title }: props) => {
  return (
    <div className="font-serif root_parent_wrapper bg-[#2A317F]">
      <div className="root_child_wrapper">
        <NavBar />

        <div className="w-full flex items-center justify-center py-12 md:py-24">
          <h1 className="text-white text-center text-3xl sm:text-5xl md:text-7xl">{title}</h1>
        </div>
      </div>
    </div>
  );
};

export default TopBar;

 