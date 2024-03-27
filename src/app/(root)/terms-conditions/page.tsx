import TopBar from "@/components/layout/topBar";
import TermsAndConditions from "@/components/pages/termsAndConditions";
import React from "react";

const page = () => {
  return (
    <main>
      <TopBar title="Terms & Conditions" />
      <TermsAndConditions />
    </main>
  );
};

export default page;
