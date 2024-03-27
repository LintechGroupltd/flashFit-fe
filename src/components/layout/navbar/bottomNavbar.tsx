// BottomNavbar.tsx
import React from "react";
import { List, Typography } from "@material-tailwind/react";
import Image from "next/image";
import Link from "next/link";
import contactUs_arrow_right from "../../../../public/assets/navabar/contactUs-arrow-right.svg";

function BottomNavbar() {
  return (
    <List className="fixed bottom-0 left-0 right-0 bg-gray-800 p-4 flex justify-between items-center" placeholder=''>
      <Typography
      placeholder=''
        as="a"
        href="/"
        variant="small"
        className="font-medium text-white"
      >
        Home
      </Typography>
      <Typography
      placeholder=''
        as="a"
        href="/about"
        variant="small"
        className="font-medium text-white"
      >
        About Us
      </Typography>
      <Typography
      placeholder=''
        as="a"
        href="/gallery"
        variant="small"
        className="font-medium text-white"
      >
        Gallery
      </Typography>
      <div className="bg-yellow-500 rounded-full px-3 py-1 flex items-center">
        <Link href="/contact-us">
          <div className="flex items-center text-white">
            Contact Us
            <Image src={contactUs_arrow_right} alt="" className="ml-1" />
          </div>
        </Link>
      </div>
    </List>
  );
}

export default BottomNavbar;
