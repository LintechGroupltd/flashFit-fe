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
import FlashMobileLogo from "@/components/svg/FlashMobileLogo";

const ContactPage = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  const handleStepChange = (step: number) => {
    setActiveStep(step);
  };

  const handleOptionSelect = (option: string) => {
    setSelectedOptions([...selectedOptions, option]);
  };

  const totalSteps = 2;
  // const progressWidth = (activeStep / (totalSteps - 1)) * 100;
  const progressWidth = activeStep === 0 ? 50 : 100;

  const handleBack = () => {
    if (activeStep <= 0) {
      return;
    }
    setActiveStep(activeStep - 1);
    if (activeStep === 1) {
      setSelectedOptions([]);
    }
  };

  return (
    <div
      className="font-serif relative w-full h-screen flex flex-col gap-3 px-4 sm:px-6 md:px-12 lg:px-28 py-6 sm:py-10 text-white oveflow-y-hidden"
      style={{ backgroundColor: "#2A317F" }}
    >
      <div className="contactNav w-full flex items-center justify-between">
        <div>
          {(activeStep <= 0 || activeStep === 2) && (
            <div className=" " data-aos="fade-right">
              <Link href={"/"}>
                <div className="hidden md:block">
                <FlashLogo />
                </div>

                <div className="md:hidden">
                <FlashMobileLogo />
                </div>
              </Link>
            </div>
          )}




          {activeStep !== 0 && activeStep !== 2 && (
            <div
              className={`${styles.arrowMain} sm:border sm:px-2 sm:py-5 rounded-full cursor-pointer`}
              onClick={handleBack}
            >
              <div className={`${styles.arrowWrapper}`}>
                <span className={`${styles.arrowSpan}`}>
                  <div
                    className={`${styles.arr1} flex items-center justify-center`}
                  >
                    <RoundedBackBtn />
                  </div>
                  <div
                    className={`${styles.arr2} flex items-center justify-center `}
                  >
                    <RoundedBackBtn />
                  </div>
                </span>
              </div>
            </div>
          )}
        </div>

        

        <Link href={"/"}>
          <div
            className={`${styles.arrowMain} sm:border sm:px-3 sm:py-5 rounded-full cursor-pointer`}
          >
            <div className={`${styles.arrowWrapper}`}>
              <span className={`${styles.arrowSpan}`}>
                <div
                  className={`${styles.arr1} flex items-center justify-center`}
                >
                  <CloseNavIcon />
                </div>

                <div
                  className={`${styles.arr2} flex items-center justify-center `}
                >
                  <CloseNavIcon />
                </div>
              </span>
            </div>
          </div>
        </Link>
      </div>




      {activeStep !== 2 && (
        <div className="absolute sm:top-10 left-1/2 -translate-x-1/2 w-auto flex items-center justify-center">
          {selectedOptions.map((option, index) => (
            <button
              type="button"
              key={index}
              className="thin flex items-center justify-center gap-2  text-xs md:text-base cursor-pointer px-2  py-2 md:px-4 sm:py-4 rounded-lg bg-white bg-opacity-10 border border-white"
              data-aos="fade-up-right"
            >
              {option}
            </button>
          ))}
        </div>
      )}

      {activeStep > 0 && activeStep !== totalSteps - 1 && (
        <div className="absolute bottom-4" data-aos="fade-right">
          {" "}
          <FlashLogo />{" "}
        </div>
      )}

      <div className="w-full h-full flex items-center justify-center">
        <>
          {activeStep === 0 && (
            <ContactServiceType
              handleStepChange={handleStepChange}
              handleOptionSelect={handleOptionSelect}
            />
          )}
          {activeStep === 1 && (
            <ContactForm handleStepChange={handleStepChange} />
          )}
          {activeStep === 2 && <ContactSuccessMessage />}
        </>
      </div>






      {/*________________________progress bar ____________________*/}
      {activeStep !== 2 && (
        <div className="w-full flex items-center">
          <div className="progress-bar w-full flex items-center  justify-center">
            <div className="progress-step w-full md:w-2/5  h-2 bg-gray-300 sm:w-[100%]] rounded-md">
              <div
                className="active h-full rounded-md"
                style={{
                  width: `${progressWidth}%`,
                  backgroundColor: "#F8AD39",
                }}
              ></div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactPage;
