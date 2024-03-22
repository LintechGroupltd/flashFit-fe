import React, { useState } from "react";
import navbarLogo from "../../../../public/assets/navabar/FlashfitLogo.svg";
import downArrow from "../../../../public/assets/navabar/Arrow_Down.svg";
import serviceDropdownOptionLogo from "../../../../public/assets/navabar/serviceDropdownOptionLogo.svg";
import contactUsArrowRight from "../../../../public/assets/navabar/contactUs-arrow-right.svg";

import Image from "next/image";
import Link from "next/link";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const serviceDropDownOption = [
    {
      id: 1,
      logoImg: serviceDropdownOptionLogo,
      serviceOption: "MOT Testing",
      serviceDescription: "Road-Worthy Assurance, Compliance Certified",
    },
    {
      id: 2,
      logoImg: serviceDropdownOptionLogo,
      serviceOption: "Servicing",
      serviceDescription: "Optimized Performance, Lasting Reliability",
    },
    {
      id: 3,
      logoImg: serviceDropdownOptionLogo,
      serviceOption: "Brakes",
      serviceDescription: "Enhanced Safety, Seamless Stops",
    },
    {
      id: 4,
      logoImg: serviceDropdownOptionLogo,
      serviceOption: "Exhust",
      serviceDescription: "Efficiency Restored, Performance Preserved",
    },
    {
      id: 5,
      logoImg: serviceDropdownOptionLogo,
      serviceOption: "Tyres and Wheels Alignments",
      serviceDescription: "Grip Enhanced, Stability Guaranteed",
    },
    {
      id: 6,
      logoImg: serviceDropdownOptionLogo,
      serviceOption: "Diagnosis Testing",
      serviceDescription: "GPrecision Problem Solving",
    },
  ];

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  return (
    <div className="w-full">
      <div className=" md:flex md:justify-between items-center py-4">
        {/* Left Section - Logo */}
        <div className=" items-center pt-2 md:block hidden">
          <Image
            src={navbarLogo}
            alt="Logo"
            className="h-[40px] w-[200px] mr-4"
          />
        </div>

        {/* Middle Section - Menu (for large screens) */}
        <div className="hidden md:flex space-x-7 font-sans">
          <Link
            href="#"
            className="text-white text-[16px] hover:text-gray-300 transition duration-300 ">
            Home
          </Link>

          <div className="relative group">
            <div className="flex items-center gap-1">
              <Link
                href="#"
                className="text-white  text-[16px] hover:text-gray-300 transition duration-300 ">
                Services
              </Link>
              <Image
                src={downArrow}
                alt="Logo"
                className=" transition duration-300 cursor-pointer w-6 h-6"
              />
            </div>

            <div className="absolute hidden group-hover:block bg-white rounded-lg shadow-lg mt-[3px] z-10">
              <div className=" pt-2  px-[20px]   w-[395px]">
                {serviceDropDownOption?.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-5 py-[14px] px-3 hover:bg-[#E9EAF9] mt-2 rounded-[9px]">
                    <Image src={item?.logoImg} alt="" />

                    <Link href="">
                      <div className="">
                        <h2
                          className="text-[15px] text-[#000] font-sans"
                          style={{ fontWeight: "500" }}>
                          {item?.serviceOption}
                        </h2>
                        <p className="text-[12px] text-[#505050] font-sans mt-[5px]">
                          {item?.serviceDescription}
                        </p>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>

              <div className="flex gap-3 bg-[#FEF7EB] py-5 justify-center items-center mt-4">
                <button className="text-[#F8AD39] font-[500] text-[16px]">
                  Contact Us
                </button>
                <Image src={contactUsArrowRight} alt="" />
              </div>
            </div>
          </div>

          <Link
            href="#"
            className="text-white  text-[16px] hover:text-gray-300 transition duration-300">
            About Us
          </Link>
          <Link
            href="#"
            className="text-white  text-[16px] hover:text-gray-300 transition duration-300">
            Gallery
          </Link>
        </div>

        {/* Burger Menu (for small screens) */}
        <div className="md:hidden flex justify-end pr-4">
          <button
            onClick={toggleMenu}
            className="text-white  focus:outline-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Right Section - Contact Button */}
        <button
          style={{ fontWeight: "600" }}
          className="bg-[#FDAD39] md:block font-sans hidden text-[#000] px-5 py-[10px] rounded-lg   text-[15px] transition duration-300">
          Contact
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-0 left-0 bg-[#2A317F] h-full w-full z-10">
          <div className="px-4 pt-2">
            <div className="flex justify-between">
              <div className="flex items-center pt-3">
                <Image
                  src={navbarLogo}
                  alt="Logo"
                  className="h-[40px] w-[200px] mr-4"
                />
              </div>

              <button
                onClick={toggleMenu}
                className="text-white focus:outline-none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <div className="mt-4">
              <Link
                href="#"
                className="block px-3 py-2 text-white hover:bg-gray-700 transition duration-300">
                Home
              </Link>
              <Link
                href="#"
                className="block px-3 py-2 text-white hover:bg-gray-700 transition duration-300">
                Service
              </Link>
              <Link
                href="#"
                className="block px-3 py-2 text-white hover:bg-gray-700 transition duration-300">
                About Us
              </Link>
              <Link
                href="#"
                className="block px-3 py-2 text-white hover:bg-gray-700 transition duration-300">
                Gallery
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
