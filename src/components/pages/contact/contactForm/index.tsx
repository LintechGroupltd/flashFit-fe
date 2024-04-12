import React from "react";
import Button from "@/components/reuseable/button/Button";
import { useForm } from "react-hook-form";
import CalendarIcon from "@/components/svg/CalendarIcon";

interface StepProps {
  handleStepChange: (step: number) => void;
}

const ContactForm = ({ handleStepChange }: StepProps) => {
  const { register, handleSubmit } = useForm();
  const onSubmit = () => alert("form submitted!");

  return (
    // <div className="w-full h-full font-serif flex flex-col items-center justify-center gap-6 sm:gap-10 lg:gap-20 md:flex-row mt-10 border-2">
    <div className="absolute w-full  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  px-5  md:px-12 lg:px-28 mt-6">
    <div className="content w-full flex flex-col md:flex-row gap-6 sm:gap-10 lg:gap-20">
      <h1
        className="text-2xl sm:text-3xl lg:text-4xl xl:text-6xl min-w-sm text-center md:text-left"
        data-aos="fade-right"
      >
        Input your personal info
      </h1>


      <div className="w-full">
        <form
          action=""
          className="w-full flex flex-col gap-4 sm:gap-6"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="w-full flex flex-col md:flex-row gap-4 lg:gap-6">
            <input
              className="w-full py-2 px-2  md:p-4 rounded-md bg-white bg-opacity-10 outline-none"
              type="text"
              placeholder="First Name"
              {...register("firstName")}
            />
            <input
              className="w-full py-2 px-2  md:p-4 rounded-md bg-white bg-opacity-10 outline-none"
              type="text"
              placeholder="Last Name"
              {...register("lastName")}
            />
          </div>

          <div className="w-full flex flex-col md:flex-row gap-4 lg:gap-6">
            <input
              className="w-full py-2 px-2  md:p-4 rounded-md bg-white bg-opacity-10 outline-none"
              type="text"
              placeholder="Phone"
              {...register("phoneNumber")}
            />
            <input
              className="w-full py-2 px-2  md:p-4 rounded-md bg-white bg-opacity-10 outline-none"
              type="email"
              placeholder="Email"
              {...register("emailAddress")}
            />
          </div>

          {/* <div className="w-full flex flex-col md:flex-row gap-4 lg:gap-6">
            <input
              className="w-full py-2 px-2  md:p-4 rounded-md bg-white bg-opacity-10 outline-none"
              type="text"
              placeholder="Vehicle Number"
              {...register("vehicleNumber")}
            />

            <div className="w-full py-2 px-2  md:px-4 flex items-center relative rounded-md bg-white bg-opacity-10 ">
              <input
                className="w-full p-1 sm:p-2 bg-transparent  border-none outline-none "
                type="text"
                placeholder="Book Date"
                {...register("bookingDate")}
              />

              <div className="cursor-pointer">
                <CalendarIcon />
              </div>
            </div>
          </div> */}

          <div>
            <textarea
              className="w-full py-2 px-2 md:px-4 rounded-md bg-white bg-opacity-10 outline-none"
              id=""
              placeholder="Your message here"
              {...register("message")}
            ></textarea>
          </div>

          <div className="w-full">
            <div
              className="lg:float-right bg-[#F8AD39] flex justify-center rounded-md  py-2 md:py-3 px-6"
              onClick={() => {
                handleStepChange(2);
              }}
            >
              <Button
                title="Submit"
                // btnPadding="12px 24px 12px 24px"
                textColor="#fff"
              />
            </div>
          </div>
        </form>
      </div>
      </div>
    </div>
  );
};

export default ContactForm;
