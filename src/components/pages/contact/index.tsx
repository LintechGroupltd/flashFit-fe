"use client";
import React, { useState } from "react";
import FlashLogo from "@/components/svg/FlashLogo";
import CloseNavIcon from "@/components/svg/CloseNavIcon";
import RoundedBackBtn from "@/components/svg/RoundedBackBtn";
import ContactServiceType from "./contactServiceType";
import ContactForm from "./contactForm";
import ContactSuccessMessage from "./contactSuccessMessage";
import Link from "next/link";
 import styles from "./styles.module.css";

const ContactPage = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  const handleStepChange = (step:number) => {
    setActiveStep(step);
  };

  const handleOptionSelect = (option: string) => {
    setSelectedOptions([...selectedOptions, option]);
  };

  const totalSteps = 3;
  const progressWidth = (activeStep / (totalSteps - 1)) * 100;
 

  const handleBack = () => {
    if (activeStep <= 0) {
      return;}
    setActiveStep(activeStep - 1);
    if (activeStep === 1) {
      setSelectedOptions([]);
    }
  };
  

  return (
    <div
      className="font-serif relative w-full h-screen flex flex-col justify-between px-6 md:px-12 lg:px-28 py-10 text-white"
      style={{ backgroundColor: "#2A317F" }}
    >
      <div className="w-full flex items-center justify-between">
        <div>
          {(activeStep <= 0 || activeStep === totalSteps - 1) &&  (<div className=" " data-aos='fade-right'><Link href={'/'}> <FlashLogo /> </Link></div>)}
     
 
             {(activeStep !== 0 && activeStep !== totalSteps -1 )  && ( 
             <div className={`${styles.arrowMain} border px-2 py-5 rounded-full cursor-pointer`} onClick={handleBack}> 
            <div className={`${styles.arrowWrapper}`}>
            <span className={`${styles.arrowSpan}`}>
               <div  className={`${styles.arr1} flex items-center justify-center`}>
                <RoundedBackBtn /> 
                </div>
               <div className={`${styles.arr2} flex items-center justify-center `}>
                <RoundedBackBtn /> 
                </div>
            </span>
          </div>
          </div> 
          )}
        </div>


        {activeStep !== totalSteps -1 && <div>
          {selectedOptions.map((option, index) => (
            <button
              type="button"
              key={index}
              className="contact-bg  thin flex items-center justify-center gap-2  text-xs sm:text-base cursor-pointer px-4 py-4 rounded-lg bg-white bg-opacity-10 border border-white"
              data-aos="fade-up-right" >
              {option}
            </button>
          ))}
        </div>}


        <div className={`${styles.arrowMain} border px-3 py-5 rounded-full cursor-pointer`} onClick={handleBack}> 
            <div className={`${styles.arrowWrapper}`}>
            <span className={`${styles.arrowSpan}`}>
               <div  className={`${styles.arr1} flex items-center justify-center`}>
                <CloseNavIcon /> 
                </div>

               <div className={`${styles.arr2} flex items-center justify-center `}>
                <CloseNavIcon /> 
                </div>
            </span>
          </div>
          </div> 




      </div>

      {(activeStep > 0 && activeStep !== totalSteps - 1) && ( <div className="absolute bottom-4" data-aos='fade-right'> <FlashLogo /> </div> )}

      {/*____________________________ contact page content _____________________*/}
      <div className="w-full h-full flex items-center justify-center">
        <>
          {activeStep === 0 && ( <ContactServiceType handleStepChange={handleStepChange} handleOptionSelect={handleOptionSelect} /> )}
          {activeStep === 1 && ( <ContactForm handleStepChange={handleStepChange} /> )}
          {activeStep === 2 && <ContactSuccessMessage />}
        </>
      </div>


      {/*________________________ contact bottom  ____________________*/}
      <div className="w-full flex items-center">
        <div className="progress-bar w-full flex items-center  justify-center">
          <div className="progress-step w-2/5  h-2 bg-gray-300 sm:w-[100%]]">
            <div className="active h-full" style={{ width: `${progressWidth}%`, backgroundColor: "#F8AD39" }}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
