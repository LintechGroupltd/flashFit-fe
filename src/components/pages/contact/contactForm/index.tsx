import React from "react";
import Button from "@/components/reuseable/button/Button";
import { useForm } from "react-hook-form";

interface StepProps {
  handleStepChange: (step: number) => void;
}

const ContactForm = ({ handleStepChange }: StepProps) => {
  const { register, handleSubmit } = useForm();
  const onSubmit = () => alert("form submitted!");

  return (
    <div className="font-serif flex flex-col items-center lg:items-start gap-10 lg:gap-20 lg:flex-row ">
      <h1 className="text-2xl md:text-6xl min-w-sm text-center lg:text-left">
        Input your personal info
      </h1>

      <div className="w-full ">
        <form
          action=""
          className="w-full flex flex-col gap-6"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="w-full flex gap-4 md:gap-10">
            <input
              className="w-full p-2 md:p-4 rounded-md bg-white bg-opacity-10 outline-none"
              type="text"
              placeholder="First Name"
              {...register("firstName")}
            />
            <input
              className="w-full p-2 md:p-4 rounded-md bg-white bg-opacity-10 outline-none"
              type="text"
              placeholder="Last Name"
              {...register("lastName")}
            />
          </div>

          <div className="w-full flex gap-4 md:gap-10">
            <input
              className="w-full p-2 md:p-4 rounded-md bg-white bg-opacity-10 outline-none"
              type="text"
              placeholder="Phone"
              {...register("phoneNumber")}
            />
            <input
              className="w-full p-2 md:p-4 rounded-md bg-white bg-opacity-10 outline-none"
              type="email"
              placeholder="Email"
              {...register("emailAddress")}
            />
          </div>

          <div>
            <textarea
              className="w-full p-4 rounded-md bg-white bg-opacity-10 outline-none"
              id=""
              placeholder="Your message here"
              {...register("message")}
            ></textarea>
          </div>

          <div className="w-full">
            <div
              className="float-right"
              onClick={() => {
                handleStepChange(2);
              }}
            >
              <Button
                title="Submit"
                bgColor="#F8AD39"
                btnPadding="12px 24px 12px 24px"
                textColor="#fff"
              />
            </div>
          </div>


        </form>
      </div>
    </div>
  );
};

export default ContactForm;
