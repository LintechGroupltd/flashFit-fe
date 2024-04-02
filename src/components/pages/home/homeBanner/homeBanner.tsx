import React from "react";
import Image from "next/image";

import heroImg from "../../../../../public/assets/home/bannerSection/heroImg.svg";
import heroMobileImg from "../../../../../public/assets/home/bannerSection/heroMobileImg.svg";


function HomeBanner() {
  return (
    <div className="">
      <div className="grid md:grid-cols-2  w-full justify-between mx-auto  items-center pt-14 pb-44 ">
        <div className="" data-aos="fade-right">
          <h2 className="md:text-[67px] text-[34px] text-[#fff] md:leading-[70px] leading-[45px] font-[600]  font-serif">
            Revitalise Your
            <br /> Ride with FlashFix
          </h2>

          {/*for desktop  */}
          <p className="text-white md:text-[18px] text-[16px] mt-7 font-sans md:block hidden">
             Elevate your ride with FlashFit where expert care<br/> meets unmatched performance, experience the<br/> difference today.
          </p>

          {/*for Mobile  */}
          <p className="text-white md:text-[18px] text-[16px] mt-4 font-sans md:hidden block ">
            Elevate your ride with FlashFit where expert care meets unmatched performance, experience the difference today.
          </p>
        </div>

        <div
          className="w-full h-full md:mt-0 mt-14"
          data-aos="fade-left"
          data-aos-duration="1000">
          {/* <Image src={heroImgAngleBg} alt="bannerImg" className="absolute" /> */}
          <Image
            src={heroImg}
            alt="bannerImg"
            className="w-full md:block hidden"
          />
          <Image
            src={heroMobileImg}
            alt="bannerImg"
            className="w-full md:hidden block mb-[100px]"
          />
        </div>
      </div>
    </div>
  );
}

export default HomeBanner;
