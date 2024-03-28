import React from "react";

import servicePricingWhiteArrowIcon from '../../../../public/assets/services/images/servicePricingWhiteArrowIcon.svg'
import servicePricingYellowArrowIcon from '../../../../public/assets/services/images/servicePricingYellowArrowIcon.svg'


 export const servicePricingData = [
    {
      id: 1,
      servicingTitle: "Basic Servicing",
      monthlyPrice: "$20/mth",
      billedType: "Billed annually.",
      nestedData: {
        icon: servicePricingYellowArrowIcon,
        hoverIcon:servicePricingWhiteArrowIcon,
        options: ["Oil Change", "Fluid Top-Ups", "Filter Replacements" ,"Tire Inspection", "Visual Inspection"],
      },
    },

    {
        id: 2,
        servicingTitle: "Intermediate Servicing",
        monthlyPrice: "$50/mth",
        billedType: "Billed annually.",
        nestedData: {
          icon: servicePricingYellowArrowIcon,
          hoverIcon:servicePricingWhiteArrowIcon,
          options: ["All Basic Servicing Benefits", "Brake Inspection", "Battery Check" ,"Wheel Alignment", "Diagnostic Scan"],
        },
      },

      {
        id: 3,
        servicingTitle: "Comprehensive Servicing",
        monthlyPrice: "$100/mth",
        billedType: "Billed annually.",
        nestedData: {
          icon: servicePricingYellowArrowIcon,
          hoverIcon:servicePricingWhiteArrowIcon,
          options: ["All Basic Servicing Benefits", "Brake Inspection", "Battery Check" ,"Wheel Alignment", "Diagnostic Scan"],
        },
      },
  ];
  



