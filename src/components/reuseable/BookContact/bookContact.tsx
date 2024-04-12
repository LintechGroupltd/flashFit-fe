import Link from "next/link";
import React from "react";
import bookContactBg from "../../../../public/assets/reuseableComponentImg/bookContact/bookiContactBg.svg";
import bookContactMobileBg from "../../../../public/assets/reuseableComponentImg/bookContact/bookContactMobileBg.svg";

const BookContact = () => {
  return (
   <div>
    <div
      className="md:mt-20 bg-[#2A317F] md:rounded-[30px] md:block hidden"
      style={{
        backgroundImage: `url(${bookContactBg.src})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}>
      <div className="text-center md:mt-28 py-24">
        <h1 className="md:text-[48px] text-[32px] font-serif font-[600] text-[#fff] leading-[50px]">
          Get Your Vehicle
          <br /> Running Smoothly Today
        </h1>
        <p className="md:text-[18px] text-[16px] md:px-0 px-2 font-serif text-[#fff] mt-4">
          "Book Now for Expert Car Care and MOT Services with Flash Fit!"
        </p>

        <div className="mt-8">
         <Link href='/contact-us'>
            <button className="bg-[#F8AD39]  px-[70px] py-3 rounded-[8px] md:text-[16px] text-[15px] text-[#fff] font-[500] font-sans">Contact</button>
          </Link>
        </div>
      </div>
    </div>


  {/* For mobile */}
    <div
      className="md:mt-20 md:rounded-[30px] md:hidden block"
      style={{
        backgroundImage: `url(${bookContactMobileBg.src})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}>
      <div className="text-center md:mt-28 py-24">
        <h1 className="md:text-[48px] text-[32px] font-serif font-[600] text-[#fff] leading-[50px]">
          Get Your Vehicle
          <br /> Running Smoothly Today
        </h1>
        <p className="md:text-[18px] text-[16px] md:px-0 px-2 font-serif text-[#fff] mt-4">
          "Book Now for Expert Car Care and MOT Services with Flash Fit!"
        </p>

        <div className="mt-8">
         <Link href='/contact-us'>
            <button className="bg-[#F8AD39]  px-[70px] py-3 rounded-[8px] md:text-[16px] text-[15px] text-[#fff] font-[500] font-sans">Contact</button>
          </Link>
        </div>
      </div>
    </div>




   </div> 
  );
};

export default BookContact;
