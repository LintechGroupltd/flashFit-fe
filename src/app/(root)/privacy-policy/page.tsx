import PrivacyAndPolicy from "@/components/pages/privacyAndPolicy";
import TopBar from "@/components/layout/topBar";
import AppFooter from "@/components/layout/footer/Footer";
import React from "react";

const page = () => {
  return (
    <div>
      <div className="md:h-[432px] py-7">
        <TopBar title="Privacy Policy" />
       </div> 
      <PrivacyAndPolicy />
      <AppFooter />
    </div>
  );
};

export default page;
