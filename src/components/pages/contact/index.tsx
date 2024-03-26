"use client";
import React, { useState } from "react";
import FlashLogo from "@/components/svg/FlashLogo";
import CloseNavIcon from "@/components/svg/CloseNavIcon";
import RoundedBackBtn from "@/components/svg/RoundedBackBtn";
import ContactServiceType from "./contactServiceType";
import ContactForm from "./contactForm"
import ContactSuccessMessage from "./contactSuccessMessage";
import Link from "next/link";



const ContactPage = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);



   const handleStepChange = () => {
  setActiveStep(activeStep + 1)
  }
 


    // to store selected optons
    const handleOptionSelect = (option: string) => {
      setSelectedOptions([...selectedOptions, option]);
    };

  
  const totalSteps = 3;
  const progressWidth = (activeStep / (totalSteps - 1)) * 100;
    


  const handleBack = () => {
    if (activeStep <= 0) return;
    setActiveStep(activeStep - 1);
  };


// const handleBack = () => {
//   if (activeStep <= 0) { 
//   return;
//   setActiveStep(activeStep - 1);
//   setSelectedOptions([]); 
// };
// }


  return (
    <div
      className="relative w-full h-screen flex flex-col justify-between px-28 py-10 text-white border-2"
      style={{ backgroundColor: "#2A317F" }}
    >
      <div className="w-full flex justify-between">
        <div>
         {activeStep <= 0  && activeStep !== 1 &&(  <FlashLogo />)}
         {activeStep > 0 && <div className="cursor-pointer" onClick={handleBack} > <RoundedBackBtn /> </div>}
        </div>
        <div>
          
        {selectedOptions.map((option, index) => (
            <button
              type="button"
              key={index}
              className="contact-bg  thin flex items-center gap-2 text-lg  px-6 py-3 text-white rounded-full relative z-50"
              data-aos="fade-up-right">
              {option}
            </button>
          ))}
        </div>
          
          <div className="" >
            <Link href={'/'}>
            <CloseNavIcon />
            </Link>
          </div>
      </div>




     {activeStep > 0 && <div className="absolute bottom-4">
      <FlashLogo />
      </div>}



      {/*____________________________ contact page content _____________________*/}
      <div className="w-full h-full flex items-center justify-center">
        <>
          {activeStep === 0 && <ContactServiceType  handleStepChange={handleStepChange}  handleOptionSelect={handleOptionSelect}/>}
          {activeStep === 1 && <ContactForm handleStepChange={handleStepChange} />}
          {activeStep === 2 && <ContactSuccessMessage />}
        </>
      </div>





      {/*________________________ contact bottom  ____________________*/}
      <div className="w-full flex items-center">

        <div className="progress-bar w-full flex items-center  justify-center">
          <div className="progress-step w-2/5  h-2 bg-gray-300 sm:w-[100%]]">
            <div
              className="active h-full"
              style={{ width: `${progressWidth}%`, backgroundColor: "#F8AD39" }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
