import AppFooter from "@/components/layout/footer/Footer";
import TopBar from "@/components/layout/topBar";
import TermsAndConditions from "@/components/pages/termsAndConditions";
import React from "react";

const page = () => {
  return (
    <div>
      <TopBar title="Terms & Conditions" />
      <TermsAndConditions />
      <AppFooter />
    </div>
  );
};

export default page;
