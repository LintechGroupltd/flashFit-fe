import React from "react";
import ourAchievementArrowIcon from "../../../../../public/assets/home/ourAchievement/ourAchievementArrowIcon.svg";
// import wheelImg from "../../../../../public/assets/home/ourAchievement/wheelImg.svg";
import wheelImg from "../../../../../public/assets/home/ourAchievement/wheelImg1.png";
import wheelImg2 from "../../../../../public/assets/home/ourAchievement/wheel2Img.svg";

import ourAchievementSmallTyreImg from "../../../../../public/assets/home/ourAchievement/ourAchievementSmallTyreImg.svg";

import Image from "next/image";

function OurAchievement() {
  return (
    // <div className="md:mt-36 mt-24 py-5 border-2 border-red-600">
    //   <div className="grid md:grid-cols-2 gap-[35px] ">

    //     <div className="bg-[#2A317F] h-[289px] md:flex justify-between rounded-[38px]" data-aos='fade-right'>

    //       <div>
    //         <h2 className="text-[#FFFFFF]  md:text-[47px] text-[36px] font-[600] leading-[56px] md:mt-36 mt-20 md:text-start text-center md:ml-10 font-serif">
    //           OUR <br /> ACHIEVEMENT
    //         </h2>
    //       </div>
    //       <div>
    //         <Image
    //           src={ourAchievementArrowIcon}
    //           alt="icon"
    //           className="md:block hidden"
    //         />
    //       </div>
    //     </div>




    //     <div className="bg-[#F5F5F7] md:h-[289px] h-[400px] rounded-[38px]  " data-aos='fade-left'  >

    //       <div className="p-8 ">
    //          <h2 className="text-[24px] font-serif font-[600]">Driven by a passion for cars and a dedication to quality</h2>
    //          <p className="text-[16px] font-[400] font-sans py-4">We strive to elevate the standard of vehicle maintenance and repair, ensuring that every customer who walks 
    //           through our doors receives top-notch service and leaves with complete satisfaction. </p>
    //           <div>
    //             <button className="bg-[#F8AD39] px-6 py-2 rounded-[7px] text-[16px] font-[500] text-[#fff] font-sans">About Us</button>
    //           </div> 
    //       </div>
           
    //     </div>

    //   </div>

    //   <div>
    //     <div className="grid md:grid-cols-12 gap-[35px] min-h-[300px] mt-[33px] w-full ">

    //       <div className="md:col-span-7 w-full  " data-aos='fade-up-right' data-aos-duration="500">
    //         <Image src={wheelImg} alt="wheelImg" className="w-full " />

    //       </div>

    //       <div className="bg-[#F5F5F7] md:col-span-5  w-full   rounded-[38px]" data-aos='fade-up-left' data-aos-duration="1000">
    //         <Image src={ourAchievementSmallTyreImg} alt="ourAchievementCar" className=""/>
    //       </div>
    //     </div>
    //   </div>
    // </div>






<div className="w-full h-auto flex flex-col gap-10 md:mt-36 mt-24">
  <div className="flex flex-col md:flex-row gap-10 w-full h-full">
    <div className="bg-[#2A317F] w-full md:flex justify-between rounded-[38px] " data-aos="fade-right">
      <div className="">
        <h2 className="text-[#FFFFFF]  md:text-[47px] text-[36px] font-[600] leading-[56px] md:mt-36 mt-20 md:text-start text-center md:ml-10 font-serif">
          OUR <br /> ACHIEVEMENT
        </h2>
      </div>


      <div>
        <Image src={ourAchievementArrowIcon} alt="icon" className="md:block hidden" />
      </div>
    </div>
    <div className="bg-[#F5F5F7] w-full rounded-[38px]" data-aos="fade-left">
      <div className="p-8">
         <h2 className="text-[24px] font-serif font-[600]">Driven by a passion for cars and a dedication to quality</h2>
         <p className="text-[16px] font-[400] font-sans py-4">We strive to elevate the standard of vehicle maintenance and repair, ensuring that every customer who walks through our doors receives top-notch service and leaves with complete satisfaction. </p>
          <div>
            <button className="bg-[#F8AD39] px-6 py-2 rounded-[7px] text-[16px] font-[500] text-[#fff] font-sans">About Us</button>
          </div> 
      </div>
       
    </div>
  </div>





  <div className="w-full h-full">
  <div className="flex flex-col md:flex-row gap-10 w-full h-full">
    <div className="w-full md:w-full h-auto" data-aos="fade-up-right" data-aos-duration="500">
      <Image src={wheelImg} alt="wheelImg" className="w-full h-full" style={{ maxHeight: "300px" }} />
    </div>


    <div className="bg-[#F5F5F7] w-full md:w-1/4 h-auto rounded-[38px]" data-aos="fade-up-left" data-aos-duration="1000">
      <Image src={wheelImg2} alt="ourAchievementCar" className="w-full h-full" style={{objectFit: "cover", maxHeight: "300px", height: "100%", borderRadius:'38px'}}/>
    </div>
  </div>
</div>

</div>

  );
}

export default OurAchievement;
