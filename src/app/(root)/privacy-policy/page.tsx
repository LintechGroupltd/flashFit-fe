import PrivacyAndPolicy from "@/components/pages/privacyAndPolicy";
import TopBar from "@/components/layout/topBar";
import React from "react";

const page = () => {
  return (
    <main>
      <TopBar title="Privacy Policy" />
      <PrivacyAndPolicy />
    </main>
  );
};

export default page;
