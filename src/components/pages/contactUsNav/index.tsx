import React from "react";

import BookContact from "@/components/reuseable/BookContact/bookContact";
import TopBar from "@/components/layout/topBar";
import ContactUsNav from "./contactUsNav";
import ContactUsMap from "./contactUsMap";

const ContactUs = () => {
  return (
    <div className="">
     <div className="md:h-[400px] pt-5">
      <TopBar
        title="Contact Us"
      />
     </div>   
     
      <div className="root_parent_wrapper bg-[#fff]">
        <div className="root_child_wrapper">
          <ContactUsNav/>
        </div>
      </div>

      <div className="md:mt-40 mt-28 mb-14">
        <ContactUsMap/>
      </div>
     
    </div>
  );
};

export default ContactUs;
