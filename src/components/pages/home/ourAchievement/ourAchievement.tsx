import React from "react";
import ourAchievementArrowIcon from '../../../../../public/assets/home/ourAchievement/ourAchievementArrowIcon.svg'
import wheelImg from '../../../../../public/assets/home/ourAchievement/wheelImg.svg'
import Image from "next/image";



function OurAchievement() {
  return (
    <div className=" mt-32 py-5">
        <div className="grid grid-cols-2 gap-5 h-[289px] ">
            <div className="bg-[#2A317F] flex justify-between rounded-[38px]">
               <div>
                   <h2 className="text-[#FFFFFF] text-[48px] font-[600] leading-[56px] mt-36 ml-10 font-serif">OUR <br/> ACHIEVEMENT</h2>
                </div>  
               <div>
                  <Image src={ourAchievementArrowIcon} alt="icon"/>
                </div>            
            </div>

            <div className="bg-[#F5F5F7] rounded-[38px]">

              <div className="flex justify-between items-center  p-14">
                <div>
                   <h2 className="text-[93px] font-[400] font-serif">37</h2>
                </div>
                <div className="text-[29px] font-[600] font-sans leading-[60px]">
                  <h2>Active<br/> Portfolio<br/> Companies</h2>
                </div>
              </div>  
               
            </div>
        </div> 


       <div className="grid grid-cols-12 gap-5 mt-6 w-full h-[289px]">

         <div className="col-span-8 w-full h-full">
           <Image src={wheelImg} alt="wheelImg" className="w-full"/>
         </div>

         <div className="bg-[#F5F5F7] col-span-4 rounded-[38px]">
           <h2 className="text-[93px] font-[400] flex justify-center items-center font-serif mt-14">37</h2>
         </div>
       
       </div>


    </div>
  );
}

export default OurAchievement;
