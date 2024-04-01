import React from "react";

export const contactServiceOptions = [
  { id: 1, tag: "MOT Testing" },
  { id: 2, tag: "Services" },
  { id: 3, tag: "Brakes" },
  { id: 4, tag: "Exhaust" },
  { id: 5, tag: "Tyres" },
  {id:6, tag: "wheels Alignments"},
  { id: 7, tag: "Diagnosis Testing" },
];


interface StepProps {
  handleStepChange: (step: number) => void; 
  handleOptionSelect: (option: string) => void;
  
}

const ContactServiceType = ({handleStepChange,handleOptionSelect}:StepProps) => {
  return (
    <div className="font-serif w-full h-full  xl:w-4/5 flex flex-col gap-20 items-center justify-center" data-aos='fade-up'>
      <h1 className="text-3xl sm:text-5xl lg:text-6xl text-center whitespace-nowrap">What Type of service ?</h1>

      <div>
        <ul className="flex items-center justify-center flex-wrap gap-4 sm:gap-10">
          {contactServiceOptions.map((item, idx) => (
            <li key={idx} className="text-xs sm:text-base cursor-pointer px-4 py-4 md:px-10 rounded-lg bg-white bg-opacity-10 border border-white hover:bg-opacity-5"
             onClick={() =>{
              handleStepChange(1);
              handleOptionSelect(item.tag);
             } }
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
