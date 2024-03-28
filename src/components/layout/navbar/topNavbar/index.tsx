"use client";

import React, { Fragment } from "react";
import navbarLogo from "../../../../../public/assets/navabar/FlashfitLogo.svg";
import downArrow from "../../../../../public/assets/navabar/Arrow_Down.svg";

import contactUs_arrow_right from "../../../../../public/assets/navabar/contactUs-arrow-right.svg";
import DropdownMegamenuImage from "../../../../../public/assets/navabar/DropdonMegamenuImage.svg";

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
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

import Image from "next/image";
import Link from "next/link";

import { navListMenuItems } from "../data";

import { motion } from "framer-motion";
function NavListMenu() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const renderItems = navListMenuItems.map(
    ({ icon, mobile_icon, title, description, url }, key) => (
      <Link href={url} key={key}>
        <MenuItem
          className="flex md:items-center md:gap-3 gap-4 md:hover:bg-[#E9EAF3] hover:bg-[#2A317F] rounded-lg"
          placeholder="">
          <div className=" rounded-lg  md:p-2 ">
            {" "}
            <Image src={icon} alt="" className="md:block hidden" />
            <Image src={mobile_icon} alt="" className="md:hidden block" />
          </div>
          <div className="mt-2 ">
            <Typography
              placeholder=""
              variant="h6"
              color="blue-gray"
              className="md:text-[16px] text-[14px] font-sans font-[600] lg:text-[#000] text-[#fff] ">
              {title}
            </Typography>
            <Typography
              placeholder=""
              variant="paragraph"
              className="text-[12px] md:font-[400] font-[500] md:text-[#505050] text-[#fff] font-sans mt-2 md:block hidden">
              {description}
            </Typography>
          </div>
        </MenuItem>
      </Link>
    )
  );

  return (
    <React.Fragment>
      <Menu
        open={isMenuOpen}
        handler={setIsMenuOpen}
        offset={{ mainAxis: 20 }}
        placement="bottom"
        allowHover={true}>
        <MenuHandler>
          <Typography
            as="div"
            href="/about"
            variant="small"
            className="font-medium "
            placeholder="">
            <div
              className="flex cursor-pointer md:border-none border-b border-[#3F4696] w-full items-center md:py-2 py-4 pr-[20px]  text-[#fff] text-[16px] font-[500] font-sans"
              // selected={isMenuOpen || isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((cur) => !cur)}
              // placeholder=""
            >
              <Link href={"/services/our-services"}>Services</Link>
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
          placeholder="">
          <div className="flex  outline-none outline-0 ">
            <div className="p-4 bg-[#F5F5F7]">
              <Image src={DropdownMegamenuImage} alt="DropdonMegamenuImage" />
              <div>
                <p className="text-[#000] text-[16px] font-[600] font-sans mt-5">
                  Driven by a passion for cars and a<br /> dedication to quality
                </p>
              </div>
            </div>
            <div>
              <ul className="grid grid-cols-2 p-4 gap-y-2 ">{renderItems}</ul>
            </div>
          </div>

          <div className="bg-[#2A317F] outline-none outline-0 text-[18px] flex justify-center gap-2 py-4 text-[#F8AD39] font-[600] ">
            <Link href={"/contact-us"}>
              <button>Contact Us</button>
            </Link>
            <div>
              <Image
                src={contactUs_arrow_right}
                alt=""
                className="w-[24px] h-[24px]"
              />
            </div>
          </div>
        </MenuList>
      </Menu>

      <div className="block lg:hidden bg-[#2A317F]  rounded-xl">
        <Collapse open={isMobileMenuOpen}>
          <div className="">{renderItems}</div>
        </Collapse>
      </div>
    </React.Fragment>
  );
}

function NavList() {
  return (
    <List
      className="mt-4 mb-6 p-0 text-[#fff]  lg:h-0 h-screen lg:mt-0 lg:mb-0 lg:flex-row root_child_wrapper lg:w-auto"
      placeholder="">
      <Typography
        placeholder=""
        as="a"
        href="/"
        variant="small"
        className="font-medium">
        <div className="flex lg:border-none border-b border-[#3F4696]  items-center gap-2 md:py-2 py-5 pr-[30px] text-[16px] font-[500] font-sans">
          Home
        </div>
      </Typography>

      <NavListMenu />
      <Typography
        placeholder=""
        as="a"
        href="/about"
        variant="small"
        className="font-medium">
        <div className="flex lg:border-none border-b border-[#3F4696] items-center gap-2 md:py-2 py-4 pr-[30px] text-[16px] font-[500] font-sans">
          About Us
        </div>
      </Typography>

      <Typography
        placeholder=""
        as="a"
        href="/gallery"
        variant="small"
        className="font-medium">
        <div className="flex lg:border-none border-b border-[#3F4696] items-center gap-2 pr-[30px] md:py-2 py-4 text-[16px] font-[500] font-sans">
          Gallery
        </div>
      </Typography>

      <div className="lg:hidden block mt-6">
        <div className="bg-[#F8AD39] rounded-[8px] outline-none outline-0 text-[15px] flex justify-center gap-2 py-3 text-[#fff] font-[600] ">
          <button>Contact Us</button>
          <div>
            <Image
              src={contactUs_arrow_right}
              alt=""
              className="w-[20px] h-[20px]"
            />
          </div>
        </div>
      </div>
    </List>
  );
}

function MegaMenuWithHover({ isSticky }: { isSticky?: boolean }) {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  return (
    <Fragment>
      <div className={"h-[68px]"} />

      <div
        className="text-[#fff] fixed top-0 left-0  bg-[#2A317F] w-full h-auto z-[100]"
        style={{ visibility: isSticky ? "hidden" : undefined }}>
        <div className="flex mt-3 justify-between  text-[#fff]  mx-auto root_child_wrapper">
          <Typography
            placeholder=""
            as="a"
            href="/"
            variant="h6"
            className=" cursor-pointer mt-[10px]">
            <Image
              src={navbarLogo}
              alt="navbarLogo"
              className="md:w-[215px] md:h-[48px] w-[180px] h-[35px] object-contain "
            />
          </Typography>

          <div className="hidden lg:block mt-3">
            <NavList />
          </div>

          <IconButton
            placeholder=""
            variant="text"
            color="white"
            className="block lg:hidden "
            onClick={() => setOpenNav(!openNav)}>
            {openNav ? (
              <XMarkIcon
                className="w-[30px] h-[30px] md:w-[40px] md:h-[40px] "
                strokeWidth={2}
              />
            ) : (
              <Bars3Icon
                className="w-[30px] h-[30px] md:w-[40px] md:h-[40px]"
                strokeWidth={2}
              />
            )}
          </IconButton>

          <motion.button
            whileHover="on_hover"
            style={{ fontWeight: "600" }}
            className="  font-sans hidden lg:block mt-2 text-[#fff] px-5 rounded-lg   text-[15px] transition duration-300">
            <a href={"/contact-us"} className="flex items-center gap-3">
              <div className="bg-[#fff] w-[40px] h-[40px] relative rounded-full p-3 text-[16px] font-[600] font-sans overflow-hidden">
                <div className="absolute w-full h-full left-0 top-0 flex items-center justify-center">
                  <motion.img
                    initial={{ x: "-30px" }}
                    variants={{
                      on_hover: {
                        x: 0,
                      },
                    }}
                    src={"/assets/navabar/GetInTouchArrowRight.svg"}
                    alt="navbarRightArrowIcon"
                  />
                </div>

                <div className="absolute w-full h-full left-0 top-0 flex items-center justify-center">
                  <motion.img
                    initial={{ x: 0 }}
                    variants={{
                      on_hover: {
                        x: "30px",
                      },
                    }}
                    src={"/assets/navabar/GetInTouchArrowRight.svg"}
                    alt="navbarRightArrowIcon"
                  />
                </div>
              </div>
              Get in touch
            </a>
          </motion.button>
        </div>
        {/* <Collapse open={openNav}>
          <NavList />
        </Collapse> */}
      </div>

      <div
        className="fixed top-0 left-0 h-screen bg-[#2A317F] z-50 w-full"
        style={{ display: !openNav ? "none" : "block" }}>
        <div className="flex mt-1 justify-between  text-[#fff]  mx-auto root_child_wrapper">
          <Typography
            placeholder=""
            as="a"
            href="/"
            variant="h6"
            className=" cursor-pointer mt-[10px]">
            <Image
              src={navbarLogo}
              alt="navbarLogo"
              className="md:w-[215px] md:h-[48px] w-[180px] h-[40px] object-contain "
            />
          </Typography>

          <IconButton
            placeholder=""
            variant="text"
            color="white"
            className="block lg:hidden "
            onClick={() => setOpenNav(!openNav)}>
            {openNav ? (
              <XMarkIcon
                className="w-[30px] h-[30px] md:w-[40px] md:h-[40px]"
                strokeWidth={2}
              />
            ) : (
              <Bars3Icon
                className="w-[30px] h-[30px] md:w-[40px] md:h-[40px]"
                strokeWidth={2}
              />
            )}
          </IconButton>
        </div>

        <NavList />
      </div>
    </Fragment>
  );
}

export default MegaMenuWithHover;
