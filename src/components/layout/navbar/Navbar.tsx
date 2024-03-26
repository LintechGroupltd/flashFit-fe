"use client";

import React from "react";
import navbarLogo from "../../../../public/assets/navabar/FlashfitLogo.svg";
import downArrow from "../../../../public/assets/navabar/Arrow_Down.svg";

import MotLogo from "../../../../public/assets/navabar/MOT.png";
import serviceLogo from "../../../../public/assets/navabar/Service.png";
import BrakersLogo from "../../../../public/assets/navabar/Brakes.png";
import ExhaustLogo from "../../../../public/assets/navabar/Exhaust.png";
import TyresLogo from "../../../../public/assets/navabar/Tyres.png";
import wheesLogo from "../../../../public/assets/navabar/WheelsAlignments.png";
import diagnosisLogo from "../../../../public/assets/navabar/DiagnosisTesting.png";



import contactUs_arrow_right from "../../../../public/assets/navabar/contactUs-arrow-right.svg";
import DropdownMegamenuImage from "../../../../public/assets/navabar/DropdownMegamenuImage.png";

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
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

import Image from "next/image";
import Link from "next/link";

const navListMenuItems = [
  {
    icon: MotLogo,
    title: "MOT Testing",
    description: "Road-Worthy Assurance, Compliance Certified",
  },
  {
    icon: serviceLogo,
    title: "Servicing",
    description: "Optimized Performance, Lasting Reliability",
  },
  {
    icon: BrakersLogo,
    title: "Brakes",
    description: "Enhanced Safety, Seamless Stops",
  },
  {
    icon: ExhaustLogo,
    title: "Exhust",
    description: "Efficiency Restored, Performance Preserved",
  },
  {
    icon: TyresLogo,
    title: "Tyres and Wheels Alignments",
    description: "Grip Enhanced, Stability Guaranteed",
  },
  {
    icon: wheesLogo,
    title: "Wheels Alignments",
    description: "Grip Enhanced, Stability Guaranteed",
  },
  {
    icon: diagnosisLogo,
    title: "Diagnosis Testing",
    description: "Precision Problem Solving",
  },
];

function NavListMenu() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const renderItems = navListMenuItems.map(
    ({ icon, title, description }, key) => (
      <a href="#" key={key}>
        <MenuItem className="flex items-center gap-3  rounded-lg" placeholder="">
          <div className=" rounded-lg  p-2 ">
            {" "}
            <Image src={icon} alt="" />
          </div>
          <div className="mt-2">
            <Typography
              placeholder=""
              variant="h6"
              color="blue-gray"
              className="md:text-[16px] text-[14px] font-sans font-[600] md:text-[#000] text-[#fff]"
            >
              {title}
            </Typography>
            <Typography
              placeholder=""
              variant="paragraph"
              className="text-[12px] font-[400] md:text-[#505050] text-[#fff] font-sans mt-2"
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
            className="font-medium "
            placeholder=""
          >
            <div
              className="flex cursor-pointer md:border-none border-b border-[#3F4696] w-full items-center py-2 pr-[20px]  text-[#fff] text-[16px] font-[500] font-sans"
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

              <Image
                  src={downArrow}
                  alt="Logo"
                  className={`block h-5 w-9 transition-transform lg:hidden ${
                    isMobileMenuOpen ? "rotate-180" : ""
                  }`}
                />

            
            </div>
          </Typography>
        </MenuHandler>

        <MenuList
          className="hidden max-w-full p-[0px] mt-[32px] border border-none xl:ml-[70px] rounded-[16px] lg:block menulist_style"
          placeholder=""
        > 
          <div className="flex  outline-none outline-0 ">
            <div className="p-4 bg-[#F5F5F7]">
               <Image src={DropdownMegamenuImage} alt="DropdonMegamenuImage"/>
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
         
          <div className="bg-[#2A317F] outline-none outline-0 text-[18px] flex justify-center gap-2 py-4 text-[#F8AD39] font-[600] ">
            <Link href={'/contact-us'}>
            <button >Contact Us</button>
             </Link>
            <div>
              <Image src={contactUs_arrow_right} alt="" className="w-[24px] h-[24px]"/>
            </div>
          </div>
        </MenuList>
      </Menu>

      <div className="block lg:hidden bg-[#383F88] rounded-xl">
        <Collapse open={isMobileMenuOpen}>
          <div className="">
            {renderItems}
          </div>
         
        </Collapse>
      </div>
    

    </React.Fragment>
  );
}

function NavList() {
  return (
    <List
      className="mt-4 mb-6 p-0 text-[#fff]  md:h-0 h-screen lg:mt-0 lg:mb-0 lg:flex-row lg:p-1"
      placeholder=""
    >
      <Typography
        placeholder=""
        as="a"
        href="#"
        variant="small"
        className="font-medium"
      >
        <div className="flex md:border-none border-b border-[#3F4696] items-center gap-2 py-2 pr-[30px] text-[16px] font-[500] font-sans">
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
        <div className="flex md:border-none border-b border-[#3F4696] items-center gap-2 py-2 pr-[30px] text-[16px] font-[500] font-sans">
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
        <div className="flex md:border-none border-b border-[#3F4696] items-center gap-2 pr-[30px] py-2 text-[16px] font-[500] font-sans">
          Gallery
        </div>
      </Typography>
       
       <div className="md:hidden block mt-6">
        <div className="bg-[#F8AD39] rounded-[8px] outline-none outline-0 text-[15px] flex justify-center gap-2 py-3 text-[#fff] font-[600] ">
            <button>Contact Us</button>
            <div>
              <Image src={contactUs_arrow_right} alt="" className="w-[20px] h-[20px]"/>
            </div>
          </div>
       </div>

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
      <div className="flex mt-2 justify-between text-[#fff] ">
        <Typography
          placeholder=""
          as="a"
          href="#"
          variant="h6"
          className="md:mr-0 mr-4 mt-1 cursor-pointer py-1.5 lg:ml-2"
        >
          <Image src={navbarLogo} alt="navbarLogo" className="md:w-[215px] md:h-[48px] w-[190px] h-[40px]"/>
        </Typography>
        <div className="hidden lg:block pt-[4px]">
          <NavList />
        </div>
        
        <IconButton
          placeholder=""
          variant="text"
          color="white"
          className="lg:hidden ml-20"
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
          )}
        </IconButton>

        <div className="mt-[8px]">
        <button
          style={{ fontWeight: "600" }}
          className="bg-[#FDAD39] md:block font-sans hidden text-[#fff] px-5 py-[10px] rounded-lg   text-[15px] transition duration-300"
        >
          <Link href={'/contact-us'}>
          Contact
          </Link>
        </button>
        </div>
  
      </div>
      <Collapse open={openNav}>
        <NavList />
      </Collapse>
    </div>
  );
}

export default MegaMenuWithHover;
