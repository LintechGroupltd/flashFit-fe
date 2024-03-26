import React from "react";
import Button from "@/components/reuseable/button/Button";


interface StepProps {
  handleStepChange: () => void;
}

const ContactForm = ({ handleStepChange }: StepProps) => {
  return (
<div className="font-serif flex flex-col items-center md:items-start gap-10 lg:gap-20 md:flex-row ">
      <h1 className="text-6xl min-w-sm text-center md:text-left">Input your  personal info</h1>

      <div className="w-full ">
        <form action=""  className="w-full flex flex-col gap-6">
          <div className="w-full flex gap-10">
            <input className="w-full p-4 rounded-md bg-white bg-opacity-10" type="text" placeholder="First Name" />
            <input className="w-full p-4 rounded-md bg-white bg-opacity-10" type="text" placeholder="Last Name" />
          </div>

          <div className="w-full flex gap-10">
            <input className="w-full p-4 rounded-md bg-white bg-opacity-10"  type="text" placeholder="Phone" />
            <input className="w-full p-4 rounded-md bg-white bg-opacity-10"  type="text" placeholder="Email" />
          </div>



         <div>
         <textarea className="w-full p-4 rounded-md bg-white bg-opacity-10" name="" id="" placeholder="Your message here"></textarea>
         </div>



          <div className="w-full">
            <div className="float-right" onClick={handleStepChange} >
            <Button title="Submit" bgColor="#F8AD39" btnPadding="12px 24px 12px 24px" textColor="#fff" />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
