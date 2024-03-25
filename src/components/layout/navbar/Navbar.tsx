"use client";

import React from "react";
import navbarLogo from "../../../../public/assets/navabar/FlashfitLogo.svg";
import downArrow from "../../../../public/assets/navabar/Arrow_Down.svg";
import serviceDropdownOptionLogo from "../../../../public/assets/navabar/serviceDropdownOptionLogo.svg";
import contactUs_arrow_right from "../../../../public/assets/navabar/contactUs-arrow-right.svg";
import DropdonMegamenuImage from "../../../../public/assets/navabar/DropdonMegamenuImage.svg";

import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
  List,
  ListItem,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";
import {
  ChevronDownIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

import Image from "next/image";

const navListMenuItems = [
  {
    icon: serviceDropdownOptionLogo,
    title: "MOT Testing",
    description: "Road-Worthy Assurance, Compliance Certified",
  },
  {
    icon: serviceDropdownOptionLogo,
    title: "Servicing",
    description: "Optimized Performance, Lasting Reliability",
  },
  {
    icon: serviceDropdownOptionLogo,
    title: "Brakes",
    description: "Enhanced Safety, Seamless Stops",
  },
  {
    icon: serviceDropdownOptionLogo,
    title: "Exhust",
    description: "Efficiency Restored, Performance Preserved",
  },
  {
    icon: serviceDropdownOptionLogo,
    title: "Tyres and Wheels Alignments",
    description: "Grip Enhanced, Stability Guaranteed",
  },
  {
    icon: serviceDropdownOptionLogo,
    title: "Diagnosis Testing",
    description: "GPrecision Problem Solving",
  },
  {
    icon: serviceDropdownOptionLogo,
    title: "Diagnosis Testing",
    description: "GPrecision Problem Solving",
  },
];

function NavListMenu() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const renderItems = navListMenuItems.map(
    ({ icon, title, description }, key) => (
      <a href="#" key={key}>
        <MenuItem className="flex items-center gap-3 rounded-lg" placeholder="">
          <div className=" rounded-lg  p-2 ">
            {" "}
            <Image src={icon} alt="" />
          </div>
          <div className="mt-2">
            <Typography
              placeholder=""
              variant="h6"
              color="blue-gray"
              className="  text-[16px] font-sans font-[600]"
            >
              {title}
            </Typography>
            <Typography
              placeholder=""
              variant="paragraph"
              className="text-[12px] font-[400] text-[#505050] font-sans mt-2"
            >
              {description}
            </Typography>
          </div>
        </MenuItem>
      </a>
    )
  );

  return (
    <React.Fragment>
      <Menu
        open={isMenuOpen}
        handler={setIsMenuOpen}
        offset={{ mainAxis: 20 }}
        placement="bottom"
        allowHover={true}
      >
        <MenuHandler>
          <Typography
            as="div"
            variant="small"
            className="font-medium"
            placeholder=""
          >
            <div
              className="flex cursor-pointer w-full items-center  py-2 pr-[20px]  text-[#fff] text-[16px] font-[500] font-sans"
              // selected={isMenuOpen || isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((cur) => !cur)}
              // placeholder=""
            >
              Services
              <div className="w-full">
                <Image
                  src={downArrow}
                  alt="Logo"
                  className={`hidden h-5 w-9 transition-transform lg:block ${
                    isMenuOpen ? "rotate-180" : ""
                  }`}
                />
              </div>
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`block h-3 w-3 transition-transform lg:hidden ${
                  isMobileMenuOpen ? "rotate-180" : ""
                }`}
              />
            </div>
          </Typography>
        </MenuHandler>

        <MenuList
          className="hidden max-w-full p-[0px] border border-none xl:ml-[70px] rounded-xl lg:block menulist_style"
          placeholder=""
        > 
          <div className="flex  outline-none outline-0 ">
            <div className="p-4 bg-[#F5F5F7]">
               <Image src={DropdonMegamenuImage} alt="DropdonMegamenuImage"/>
               <div>
                 <p className="text-[#000] text-[16px] font-[600] font-sans mt-5">Driven by a passion for cars and a<br/> dedication to quality</p>
               </div>
              
            </div>
            <div>
             <ul className="grid grid-cols-2 p-4 gap-y-2">        
               {renderItems}
             </ul>
            </div>
          </div>
         
          <div className="bg-[#2A317F] text-[18px] flex justify-center gap-2 py-4 text-[#F8AD39] font-[600] ">
            <button>Contact Us</button>
            <div>
              <Image src={contactUs_arrow_right} alt="" className="w-[24px] h-[24px]"/>
            </div>
          </div>
        </MenuList>
      </Menu>
      <div className="block lg:hidden">
        <Collapse open={isMobileMenuOpen}>{renderItems}</Collapse>
      </div>
    </React.Fragment>
  );
}

function NavList() {
  return (
    <List
      className="mt-4 mb-6 p-0 text-[#fff] lg:mt-0 lg:mb-0 lg:flex-row lg:p-1"
      placeholder=""
    >
      <Typography
        placeholder=""
        as="a"
        href="#"
        variant="small"
        className="font-medium"
      >
        <div className="flex items-center gap-2 py-2 pr-[30px] text-[16px] font-[500] font-sans">
          Home
        </div>
      </Typography>
      <NavListMenu />
      <Typography
        placeholder=""
        as="a"
        href="#"
        variant="small"
        className="font-medium"
      >
        <div className="flex items-center gap-2 py-2 pr-[30px] text-[16px] font-[500] font-sans">
          About Us
        </div>
      </Typography>

      <Typography
        placeholder=""
        as="a"
        href="#"
        variant="small"
        className="font-medium"
      >
        <div className="flex items-center gap-2 pr-[30px] py-2 text-[16px] font-[500] font-sans">
          Gallery
        </div>
      </Typography>
    </List>
  );
}

function MegaMenuWithHover() {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  return (
    <div className="text-[#fff] pt-3">
      <div className="flex items-center justify-between text-[#fff] ">
        <Typography
          placeholder=""
          as="a"
          href="#"
          variant="h6"
          className="mr-4 mt-2 cursor-pointer py-1.5 lg:ml-2"
        >
          <Image src={navbarLogo} alt="navbarLogo" />
        </Typography>
        <div className="hidden lg:block ">
          <NavList />
        </div>
        <IconButton
          placeholder=""
          variant="text"
          color="white"
          className="lg:hidden"
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
          )}
        </IconButton>

        <button
          style={{ fontWeight: "600" }}
          className="bg-[#FDAD39] md:block font-sans hidden text-[#fff] px-5 py-[10px] rounded-lg   text-[15px] transition duration-300"
        >
          Contact
        </button>
      </div>
      <Collapse open={openNav}>
        <NavList />
      </Collapse>
    </div>
  );
}

export default MegaMenuWithHover;
