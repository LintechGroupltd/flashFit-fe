import AppFooter from "@/components/layout/footer/Footer";
import TopBar from "@/components/layout/topBar";
import TermsAndConditions from "@/components/pages/termsAndConditions";
import React from "react";

const page = () => {
  return (
    <div>
     <div className="md:h-[400px] py-4">
       <TopBar title="Cookie Policy" />
      </div> 
      <TermsAndConditions />
      <AppFooter />
    </div>
  );
};

export default page;
