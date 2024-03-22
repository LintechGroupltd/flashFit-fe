import { useState } from "react";
import { DiVim } from "react-icons/di";

import faqPlusIcon from "../../../../public/assets/reuseableComponentImg/Faq/FaqPlusIcon.svg";
import faqMinusIcon from "../../../../public/assets/reuseableComponentImg/Faq/FaqMinusIcon.svg";


import Image from "next/image";

const FaqSection = () => {
  const FaqData = [
    {
      id: "01",
      title: "How long does the luxury renovation process typically take?",
      content:
        "Lorem ipsum dolor sit amet consectetur. Pulvinar arcu mattis in at sodales condimentum. Gravida arcu aliquet rutrum erat varius. Tellus felis sed pretium in egestas. Lorem ipsum dolor sit amet consectetur. Pulvinar arcu mattis in at sodales condimentum. Gravida arcu aliquet rutrum erat varius. Tellus felis sed pretium in egestas. Lorem ipsum dolor sit amet consectetur. Pulvinar arcu mattis in at sodales condimentum. Gravida arcu aliquet rutrum erat varius. Tellus felis sed pretium in egestas. Lorem ipsum dolor sit amet consectetur.",
    },
    {
      id: "02",
      title: "What sets your luxury renovation process apart from others?",
      content:
        "Our process is a meticulous blend of vision, precision, and innovation, categorized into distinct stages. From conceptualization to the final touches, each step is designed to elevate your space with unparalleled craftsmanship and attention to detail.",
    },
    {
      id: "03",
      title: "Can I be involved in the decision-making process during the renovation?",
      content:
        "Lorem ipsum dolor sit amet consectetur. Pulvinar arcu mattis in at sodales condimentum. Gravida arcu aliquet rutrum erat varius. Tellus felis sed pretium in egestas. Lorem ipsum dolor sit amet consectetur. Pulvinar arcu mattis in at sodales condimentum. Gravida arcu aliquet rutrum erat varius. Tellus felis sed pretium in egestas. Lorem ipsum dolor sit amet consectetur. Pulvinar arcu mattis in at sodales condimentum. Gravida arcu aliquet rutrum erat varius. Tellus felis sed pretium in egestas. Lorem ipsum dolor sit amet consectetur.",
    },
  ];

  const [openAccordionId, setOpenAccordionId] = useState<string | null>(null);

  const toggleAccordion = (id: string) => {
    setOpenAccordionId(openAccordionId === id ? null : id);
  };

  return (
    <div className="px-[100px] py-10">

      <div className="grid grid-cols-2">

      <div className="">
        <h2 className="text-[48px] font-serif font-[600]">FAQs</h2> 
        <p className="text-[18px] font-sans font-[400]">Discover Everything You Need to Know About<br/> Servicing: Unveiling the Most Commonly Asked<br/> Questions (FAQs) with Detailed Answers</p>
      </div>
     

      <div className="md:mt-9 mt-7">
        <div>
          {FaqData.map(({ id, title, content }) => (
            <div
              key={id}
              className=' py-7  border-b-[1px] border-[#E5E5E5] md:px-5 px-2 bg-[#fff]' 
            >
              <div className="flex md:gap-0 gap-3 justify-between  ">
                <div className="flex  md:gap-4 gap-2">
              
                  <h2
                    className='text-[18px] font-[500] font-sans text-[#000]'  
                  >
                    {title}
                  </h2>
                </div>

                <button
                  onClick={() => toggleAccordion(id)}
                  className={` focus:outline-none`}
                >
                  {openAccordionId === id ? 
                   <Image src={faqMinusIcon} alt="faqMinusIcon" />
                  : 
                  <Image src={faqPlusIcon} alt="faqPlusIcon" />
                  
                  }
                </button>
              </div>
              {openAccordionId === id && (
                <p
                  className='mt-3  text-justify text-[15px] font-sans font-[400] text-[#505050]'
                >
                  {content}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
      </div>

   
    </div>
  );
};

export default FaqSection;