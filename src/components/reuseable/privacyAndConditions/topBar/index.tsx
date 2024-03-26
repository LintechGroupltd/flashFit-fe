import React from "react";
import NavBar from "@/components/layout/navbar/Navbar";

interface props {
  title: string;
}

const TopBar = ({ title }: props) => {
  return (
    <div className="w-full px-28 " style={{ backgroundColor: "#2A317F" }}>
      <NavBar />

      <div className="border-2 w-full flex items-center justify-center py-14">
        <h1 className="text-white text-center text-7xl">{title}</h1>
      </div>
    </div>
  );
};

export default TopBar;
