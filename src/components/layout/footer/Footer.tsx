import React from "react";

import Image from "next/image";
import Link from "next/link";
import flahFitFooterLogo from '../../../../public/assets/footer/FlashfitLogo.svg'

import telephoneIcon from '../../../../public/assets/footer/telephone.svg'
import infoWhatsApp from '../../../../public/assets/footer/infoWhatsApp.svg'
import locationIcon from '../../../../public/assets/footer/locationIcon.svg'


// import call_white from "@/assets/icons/call_white.svg";
// import whatsapp_white from "@/assets/icons/whatsapp_white.svg";
import { quickLinks } from "./data";
import { socialLinks } from "@/constants";

function Footer() {
  return (
    // <div className="root_parent_wrapper  mt-20 bg-[#F5F5F7]  ">
    <div className="root_parent_wrapper bg-[#F5F5F7]  ">
        <div className="root_child_wrapper">
      
    <footer className='w-full py-[50px] sm:py-[80px] lg:pt-[110px] rounded-b-[20px];' style={{backgroundColor:'#F5F5F7'}}>
      <main className=' w-full mx-auto flex flex-wrap items-start justify-between  gap-[24px];'>
        <div>
          <Link href={"/"}>
            <Image
              src={flahFitFooterLogo}
              alt="logo"
              className="md:h-[58px] md:w-[270px] w-[250px] h-[45px] md:mr-0 pr-10"
              // className={styles.logo}
            />
          </Link>

          <h4 className='text-[#000] font-serif font-[600] text-[20px] pt-[25px] md:pt-[38px] pb-[15px]'>Find Us On Social Media</h4>
          <div className='flex gap-[15px] items-center'>
            {socialLinks.map((socail, idx) => (
              <Link href={socail.url} key={idx}>
                <Image src={socail.img} alt={socail.label} className="w-9 h-9" />
              </Link>
            ))}
          </div>


        </div>

        {quickLinks.map((item, i) => {
          return (
            <div className='flex flex-col mt-3 items-start justify-start mb-[10px] gap-[10px] xs:gap-[16px] md:gap-[24px]' key={`${i}`}>
              <h4 className='text-[#000] font-[600] text-[21px] font-serif pb-[6px] sm:pb-[15px]'>
                {item.title} 
              </h4>
        
              {item?.children?.length
                ? item.children.map((child, index) => (
                    <Link href={child.link}>
                      <span className="font-sans text-[14px] font-[500] text-[#505050]">
                        {child.title}
                       
                      </span>
                    </Link>
                  ))
                : null}

               
           
            </div>
          );
        })}

           <div>
             <h4 className="text-[#000] font-[600] text-[21px] font-serif pb-[6px] sm:pb-[15px]"> Our Info</h4>   
             <div className=''> 
 
          {/* telephone */}
            <div className="flex gap-2 mt-[22px]">
              <div>
                <Image src={telephoneIcon} alt='telephoneIcon' /> 
              </div> 
              <div>
               <span className="text-[14px] font-[500] font-sans">
                 0121 272 9229 
                <br />
                (Fri-Sat)
              </span>
              </div>                    
            </div>
         
           {/* whatsApp */}
            <div className="flex items-center gap-2 mt-4">
              <div>
                <Image src={infoWhatsApp} alt='infoWhatsApp' />
              </div>
              <div>
               <span className="text-[14px] font-[500] font-sans">
                 +447301253447
               </span>
              </div> 
            </div>
           
          {/* location  */}
             <div className="flex gap-2 mt-[22px]">
              <div>
                <Image src={locationIcon} alt='locationIcon' /> 
              </div> 
              <div>
               <span className="text-[14px] font-[500] font-sans">
                 123 Main Street
                <br />
                 Cityville, USA
              </span>
              </div>                    
            </div>


          </div> 
           </div>

        <div className="w-full">
          <div className='bg-[#D7D7D7] w-full h-[1px] my-[30px] sm:my-[60px]' />
          <p className='w-full text-center text-[#000] pb-[0px] text-[16px] font-sans'>
             Copyright © 2024 John Clive Industries Ltd. Registered in England and Wales, UK
          </p>
          <p className='w-full text-center text-[#000] text-[16px] pb-[0px] font-sans'>All rights reserved Website Developed by Lintech Group</p>
        </div>
      </main>
    </footer>
    </div>
      </div>
  );
}

export default Footer;
