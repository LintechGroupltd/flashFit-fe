import React from "react";

import Image from "next/image";

function ServicePricingCard() {
  const servicePricingData = [
    {
      id: 1,
      servicingTitle: "Basic Servicing",
      monthlyPrice: "$20/mth",
      billedType: "Billed annually.",
      nestedData: {
        imageLogo: "logo_url_here",
        options: ["Oil Change", "Fluid Top-Ups", "Filter Replacements" ,"Tire Inspection", "Visual Inspection"],
      },
    },

    {
        id: 2,
        servicingTitle: "Intermediate Servicing",
        monthlyPrice: "$50/mth",
        billedType: "Billed annually.",
        nestedData: {
          imageLogo: "logo_url_here",
          options: ["All Basic Servicing Benefits", "Brake Inspection", "Battery Check" ,"Wheel Alignment", "Diagnostic Scan"],
        },
      },

      {
        id: 3,
        servicingTitle: "Comprehensive Servicing",
        monthlyPrice: "$100/mth",
        billedType: "Billed annually.",
        nestedData: {
          imageLogo: "logo_url_here",
          options: ["All Basic Servicing Benefits", "Brake Inspection", "Battery Check" ,"Wheel Alignment", "Diagnostic Scan"],
        },
      },
  ];
  return <div className=""></div>;
}

export default ServicePricingCard;
