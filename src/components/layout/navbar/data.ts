import MotLogo from "../../../../public/assets/navabar/MOT_Blue_Bg.svg";
import serviceLogo from "../../../../public/assets/navabar/Service_Blue_Bg.svg";
import BrakersLogo from "../../../../public/assets/navabar/Brakes_Blue_Bg.svg";
import ExhaustLogo from "../../../../public/assets/navabar/Exhaust_Blue_Bg.svg";
import TyresLogo from "../../../../public/assets/navabar/Tyres_Blue_Bg.svg";
import wheesLogo from "../../../../public/assets/navabar/Wheels_Alignments_Blue_Bg.svg";
import diagnosisLogo from "../../../../public/assets/navabar/Diagnosis_Testing_Blue_Bg.svg";

export const navListMenuItems = [
  {
    icon: MotLogo,
    title: "MOT Testing",
    description: "Road-Worthy Assurance, Compliance Certified",
    url: "/services/mot-testing",
  },
  {
    icon: serviceLogo,
    title: "Servicing",
    description: "Optimized Performance, Lasting Reliability",
    url: "/services/servicing",
  },
  {
    icon: BrakersLogo,
    title: "Brakes",
    description: "Enhanced Safety, Seamless Stops",
    url: "/services/brake-service",
  },
  {
    icon: ExhaustLogo,
    title: "Exhust",
    description: "Efficiency Restored, Performance Preserved",
    url: "/services/exhaust-maintenance",
  },
  {
    icon: TyresLogo,
    title: "Tyres and Wheels Alignments",
    description: "Grip Enhanced, Stability Guaranteed",
    url: "/services/tyres",
  },
  {
    icon: wheesLogo,
    title: "Wheels Alignments",
    description: "Grip Enhanced, Stability Guaranteed",
    url: "/services/wheels-alignments",
  },
  {
    icon: diagnosisLogo,
    title: "Diagnosis Testing",
    description: "Precision Problem Solving",
    url: "/services/diagnosis-testing",
  },
];
