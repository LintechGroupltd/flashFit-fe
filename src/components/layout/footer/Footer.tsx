// import React from "react";
// import Image from "next/image";
// import flashFitLogo from '../../../../public/assets/footer/FlashfitLogo.svg'
// import whatsApp from '../../../../public/assets/footer/whatsApp.svg'
// import tiktok from '../../../../public/assets/footer/whatsApp.svg'
// import instagram from '../../../../public/assets/footer/whatsApp.svg'
// import facebook from '../../../../public/assets/footer/whatsApp.svg'

// import telephoneIcon from '../../../../public/assets/footer/telephone.svg'
// import infoWhatsApp from '../../../../public/assets/footer/infoWhatsApp.svg'
// import locationIcon from '../../../../public/assets/footer/locationIcon.svg'



// function HomeServices() {
//   return (
//     <div className="">
//        <div>

//        </div>
//     </div>
//   );
// }

// export default HomeServices;


import React from "react";

import Image from "next/image";
import Link from "next/link";

// import call_white from "@/assets/icons/call_white.svg";
// import whatsapp_white from "@/assets/icons/whatsapp_white.svg";
import { quickLinks } from "./data";

function Footer() {
  return (
    <footer className='bg-primary-dark  w-full py-[50px] sm:py-[80px] lg:py-[120px] px-[16px] xs:px-[30px] rounded-b-[20px];'>
      <main className=' w-full mx-auto flex flex-wrap items-start justify-between max-w-[1420px] gap-[24px];'>
        <div>
          <Link href={"/"}>
            <Image
              src="/icons/logo.svg"
              alt="logo"
              width={300}
              height={100}
              // className={styles.logo}
            />
          </Link>

          <h4 className='text-white font-bold pt-[25px] md:pt-[40px] pb-[15px]'>Find Us On Social Media</h4>
          <div className='flex gap-[16px] items-center'>
            {/* {socialLinks.map((socail, idx) => (
              <Link href={socail.url} key={idx}>
                <Image src={socail.img} alt={socail.label} />
              </Link>
            ))} */}
          </div>

          <h4 className='text-white font-bold pt-[25px] md:pt-[40px] pb-[15px]'>Our Info</h4>
          <div className='flex items-center gap-[12px] mb-[15px]'> 
            <div>
              {/* <Image src={call_white} alt={call_white} /> dsdsfgfgdf zds*/}
              <span className="">
                0121 272 9229 
                <br />
                (Fri-Sat)
              </span>
            </div>
            <div>
              {/* <Image src={whatsapp_white} alt={whatsapp_white} /> */}
              <span>
                +447301253447
                <br />
                (Fri-Sat)
              </span>
            </div>
          </div>
        </div>

        {quickLinks.map((item, i) => {
          return (
            <div className='flex flex-col items-start justify-start mb-[10px] gap-[10px] xs:gap-[16px] md:gap-[24px]' key={`${i}`}>
              <h4 className='text-white pb-[6px] sm:pb-[15px]'>{item.title}</h4>
              {item?.children?.length
                ? item.children.map((child, indx) => (
                    <Link href={child.link}>
                      <span style={{ color: "#A9A9A9 !important" }}>
                        {child.title}
                      </span>
                    </Link>
                  ))
                : null}
            </div>
          );
        })}

        <div className="w-full">
          <div className='bg-[#454545] w-full h-[1px] my-[30px] sm:my-[60px]' />
          <p className='w-full text-center text-white pb-[0px]'>
             Copyright © 2024 John Clive Industries Ltd. Registered in England and Wales, UK. 
          </p>
          <p className='w-full text-center text-white pb-[0px]'>All rights reserved Website Developed by Lintech Group</p>
        </div>
      </main>
    </footer>
  );
}

export default Footer;
