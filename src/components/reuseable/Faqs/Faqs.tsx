import { useState } from "react";
import { DiVim } from "react-icons/di";

import faqPlusIcon from "../../../../public/assets/reuseableComponentImg/Faq/FaqPlusIcon.svg";
import faqMinusIcon from "../../../../public/assets/reuseableComponentImg/Faq/FaqMinusIcon.svg";


import Image from "next/image";
import { FaqData } from "./data";

const FaqSection = () => {
 
  const [openAccordionId, setOpenAccordionId] = useState<string | null>(null);

  const toggleAccordion = (id: string) => {
    setOpenAccordionId(openAccordionId === id ? null : id);
  };

  return (
    <div className="md:py-10 mt-20">

      <div className="grid md:grid-cols-12">

      <div className="col-span-5 ">
        <h2 className="md:text-[48px] text-[37px] font-serif font-[600]">FAQs</h2> 
        <p className="text-[18px] md:block hidden mt-2 font-sans font-[400]">Discover Everything You Need to Know About<br/> Servicing: Unveiling the Most Commonly Asked<br/> Questions (FAQs) with Detailed Answers</p>
        <p className="md:text-[18px] text-[16px] mt-2 md:hidden block font-sans font-[400]">Discover Everything You Need to Know About Servicing: Unveiling the Most Commonly Asked Questions (FAQs) with Detailed Answers</p>
      </div>
     

      <div className="md:mt-9 mt-7 col-span-7">
        <div>
          {FaqData.map(({ id, title, content }) => (
            <div
              key={id}
              className={`   md:px-5 px-2 bg-[#fff]`}
            >
              <div className="flex md:gap-0 gap-3 justify-between  pt-5">
                <div className="md:w-full w-10/12">
                  <h2 className='md:text-[18px] text-[16px] text-start font-[500] font-sans text-[#000]'>
                    {title}
                  </h2>
              
                </div>
            
              <div className="">
              <button
                  onClick={() => toggleAccordion(id)}
                  className={` focus:outline-none w-full`}
                >
                  {openAccordionId === id ? 
                   <Image src={faqMinusIcon} alt="faqMinusIcon" className="md:w-[24px] md:h-[24px] w-[17px] h-[17px]"/>
                  : 
                  <Image src={faqPlusIcon} alt="faqPlusIcon" className="md:w-[24px] md:h-[24px] w-[17px] h-[17px]"/>
                  
                  }
                </button>
              </div>  
                
              </div>
              {openAccordionId === id && (
                <p
                  className='mt-3  text-justify md:text-[15px] text-[15px] font-sans font-[400] text-[#505050]'
                >
                  {content}
                </p>
              )}

              <div    className={` w-full pt-5
              
              ${id !=='5' ? "border-b-[1px] border-[#E5E5E5]" : "border-none"}

            ` 
            } /> 
  
            </div>
          ))}
        </div>
      </div>
      </div>

   
    </div>
  );
};

export default FaqSection;