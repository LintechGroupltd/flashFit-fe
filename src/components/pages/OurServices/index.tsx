import React from "react";
import OurAllServicesCard from "./OurAllServicesCard";
import TopBar from "@/components/layout/topBar";
import BookContact from "@/components/reuseable/BookContact/bookContact";

const OurServices = () => {
  return (
    <div className="">
      <TopBar
        title="Our Services"
        // subTitle={subTitle}
      />

      <div className="root_parent_wrapper">
        <div className="root_child_wrapper">
          <OurAllServicesCard />
        </div>
      </div>

      <div
        className="md:root_parent_wrapper   py-24"
        data-aos="fade-up"
        date-aos-duration="1000"
      >
        <div className="md:block hidden root_child_wrapper">
          <BookContact />
        </div>
        <div className="md:hidden block ">
          <BookContact />
        </div>
      </div>
    </div>
  );
};

export default OurServices;
