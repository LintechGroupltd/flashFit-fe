import React from "react";

import BookContact from "@/components/reuseable/BookContact/bookContact";
import TopBar from "@/components/layout/topBar";
import ContactUsNav from "./contactUsNav";

const ContactUs = () => {
  return (
    <div className="">
      <TopBar
        title="Contact Us"
        // subTitle={subTitle}
      />

      <div className="root_parent_wrapper bg-[#fff]">
        <div className="root_child_wrapper">
          <ContactUsNav/>
        </div>
      </div>

   
     
    </div>
  );
};

export default ContactUs;
