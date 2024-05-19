import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

interface StepProps {
  handleStepChange: (step: number) => void;
  selectedOptions: { value: string };
}

const ContactForm = ({ handleStepChange, selectedOptions }: StepProps) => {
  // Safely parse the localStorage item
  const getLocalStorageItem = (key: string, defaultValue: any) => {
    const storedValue = localStorage.getItem(key);
    if (!storedValue) return defaultValue;

    try {
      return JSON.parse(storedValue);
    } catch (error) {
      console.error(`Error parsing localStorage item "${key}":`, error);
      return defaultValue;
    }
  };

  const search_result = getLocalStorageItem("FlashFit_result", null);

  const [formData, setFormData] = useState({
    serviceType: selectedOptions.value,

    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const data = {
        from: "FlashFit <info@FlashFit.com>",
        to: "Admin | Customer Care <info@FlashFit.com>",
        subject: "FlashFit",
        data: [
          {
            key: "Service Type",
            value: formData.serviceType,
          },
          {
            key: "Full Name",
            value: formData.firstName,
          },
          {
            key: "Last Name",
            value: formData.lastName,
          },
          {
            key: "Phone",
            value: formData.phone,
          },
          {
            key: "Email",
            value: formData.email,
          },
          {
            key: "Message",
            value: formData.message,
          },
          {
            key: "Registration Number",
            value: search_result ? search_result.registrationNumber : "N/A",
          },
          {
            key: "Make",
            value: search_result ? search_result.make : "N/A",
          },
          {
            key: "Colour",
            value: search_result ? search_result.colour : "N/A",
          },
          {
            key: "Year of Manufacture",
            value: search_result ? search_result.yearOfManufacture : "N/A",
          },
          {
            key: "Fuel Type",
            value: search_result ? search_result.fuelType : "N/A",
          },
        ],
      };

      const response = await axios.post(
        "https://lintech-contact-api.vercel.app/api/v1/contact",
        data
      );
      console.log("Form submitted successfully:", response.data);
      console.log(data);

      Swal.fire({
        icon: "success",
        title: "Thank You!",
        text: "",
        confirmButtonText: "OK",
      });

      // Clear form fields after successful submission
      setFormData({
        serviceType: selectedOptions.value,
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        message: "",
      });

      // Call handleStepChange after successful form submission
      handleStepChange(2);
    } catch (error) {
      console.error("Error submitting form:", error);
      // Show error message
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong! Please try again later.",
        confirmButtonText: "OK",
      });
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value });
  };

  return (
    <div className="absolute w-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-5 md:px-12 lg:px-28 mt-6">
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
            onSubmit={handleFormSubmit}
          >
            <div className="w-full flex flex-col md:flex-row gap-4 lg:gap-6">
              <input
                className="w-full py-2 px-2 md:p-4 rounded-md bg-white bg-opacity-10 outline-none"
                type="text"
                placeholder="First Name"
                value={formData.firstName}
                onChange={(e) => handleInputChange("firstName", e.target.value)}
                required
              />
              <input
                className="w-full py-2 px-2 md:p-4 rounded-md bg-white bg-opacity-10 outline-none"
                type="text"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={(e) => handleInputChange("lastName", e.target.value)}
                required
              />
            </div>

            <div className="w-full flex flex-col md:flex-row gap-4 lg:gap-6">
              <input
                className="w-full py-2 px-2 md:p-4 rounded-md bg-white bg-opacity-10 outline-none"
                type="text"
                placeholder="Phone"
                value={formData.phone}
                onChange={(e) => handleInputChange("phone", e.target.value)}
                required
              />
              <input
                className="w-full py-2 px-2 md:p-4 rounded-md bg-white bg-opacity-10 outline-none"
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                required
              />
            </div>

            <div>
              <textarea
                className="w-full py-2 px-2 md:px-4 rounded-md bg-white bg-opacity-10 outline-none"
                id=""
                placeholder="Your message here"
                value={formData.message}
                onChange={(e) => handleInputChange("message", e.target.value)}
                required
              ></textarea>
            </div>

            <div className="w-full">
              <button
                type="submit"
                className="lg:float-right bg-[#F8AD39] text-[#FFF] text-[16px] font-semibold font-inter flex justify-center rounded-md py-2 md:py-3 px-6"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
