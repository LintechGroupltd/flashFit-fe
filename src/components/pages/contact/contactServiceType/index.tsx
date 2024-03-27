import React from "react";

export const contactServiceOptions = [
  { id: 1, tag: "MOT Testing" },
  { id: 2, tag: "Servicing" },
  { id: 3, tag: "Brakes" },
  { id: 4, tag: "Exhaust" },
  { id: 5, tag: "Tyres & Wheels" },
  { id: 6, tag: "Diagnosis Testing" },
];


interface StepProps {
  handleStepChange: () => void;
  handleOptionSelect: (option: string) => void;
  
}

const ContactServiceType = ({handleStepChange,handleOptionSelect}:StepProps) => {
  return (
    <div className="font-serif w-full  xl:w-3/5 flex flex-col gap-20 items-center">
      <h1 className="text-3xl sm:text-5xl lg:text-6xl text-center whitespace-nowrap">What Type of service ?</h1>

      <div>
        <ul className="flex items-center justify-center flex-wrap gap-4 sm:gap-10">
          {contactServiceOptions.map((item, idx) => (
            <li key={idx} className="text-xs sm:text-base cursor-pointer px-4 py-4 md:px-10 md:py-6 rounded-lg bg-white bg-opacity-10 border border-white"
            //  onClick={() =>{
            //   handleStepChange;
            //   handleOptionSelect(item.tag);
            //  } }>
            onClick={handleStepChange}
            >
              {item.tag}
              </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ContactServiceType;
