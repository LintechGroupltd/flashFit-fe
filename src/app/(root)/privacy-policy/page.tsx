import PrivacyAndPolicy from "@/components/pages/privacyAndPolicy";
import TopBar from "@/components/layout/topBar";
import AppFooter from "@/components/layout/footer/Footer";
import React from "react";

const page = () => {
  return (
    <div>
      <TopBar title="Privacy Policy" />
      <PrivacyAndPolicy />
      <AppFooter />
    </div>
  );
};

export default page;
