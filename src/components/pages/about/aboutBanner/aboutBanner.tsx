import React from "react";
import Image from "next/image";
import aboutPositioningBannerImg from "../../../../../public/assets/about/aboutBannerPositioningImg.webp";
import AboutBannerImageForMobile from "../../../../../public/assets/about/AboutBannerImageForMobile.svg";

function AboutBanner() {
  return (
    <div className="md:h-[530px] h-[420px] relative md:py-24 py-20">
      <div className="text-center text-[#fff]" data-aos="fade-right">
        <h2 className="md:text-[72px] text-[35px] leading-[60px] font-serif font-[600]">
          About FlashFit
        </h2>
        <p className="text-[18px] font-sans font-[400] md:block hidden mt-10">
          Where Automotive Passion Meets Precision:
          <br /> Unveiling the Heart Behind Flash Fit's Drive for
          <br /> Excellence.
        </p>

        {/* text for mobile phone   */}
        <p className="text-[16px] font-sans font-[400] md:hidden block mt-4">
          Where Automotive Passion Meets Precision: Unveiling the Heart Behind
          Flash Fit's Drive for Excellence.
        </p>
      </div>

      <div>
        <div className=" w-full overflow-hidden rounded-[24px] absolute top-[65%] lg:top-[80%] 3xl:top-[75%] 4xl:top-[65%] mx-auto">
          <Image
            src={aboutPositioningBannerImg}
            alt="aboutPositioningBannerImg"
            className="w-full mx-auto md:block hidden"
          />
        {/* for mobile image */}
          <Image
            src={AboutBannerImageForMobile}
            alt="aboutPositioningBannerImg"
            className="w-full mx-auto md:hidden block"
          />
        </div>
      </div>
    </div>
  );
}

export default AboutBanner;
