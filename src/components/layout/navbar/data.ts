import MotLogo from "../../../../public/assets/navabar/MOT_Blue_Bg.svg";
import serviceLogo from "../../../../public/assets/navabar/Service_Blue_Bg.svg";
import BrakersLogo from "../../../../public/assets/navabar/Brakes_Blue_Bg.svg";
import ExhaustLogo from "../../../../public/assets/navabar/Exhaust_Blue_Bg.svg";
import TyresLogo from "../../../../public/assets/navabar/Tyres_Blue_Bg.svg";
import wheesLogo from "../../../../public/assets/navabar/Wheels_Alignments_Blue_Bg.svg";
import diagnosisLogo from "../../../../public/assets/navabar/Diagnosis_Testing_Blue_Bg.svg";


import Mot_mobile_logo from '../../../../public/assets/navabar/MobileNavLogo/Mot_Mobile_logo.svg'
import Service_mobile_logo from '../../../../public/assets/navabar/MobileNavLogo/service__Mobile_logo.svg'
import Bakers_mobile_logo from '../../../../public/assets/navabar/MobileNavLogo/Brakes__Mobile_logo.svg'
import Exhaust__Mobile_logo from '../../../../public/assets/navabar/MobileNavLogo/Exhaust__Mobile_logo.svg'
import Tyres__Mobile_logo from '../../../../public/assets/navabar/MobileNavLogo/Tyres__Mobile_logo.svg'
import Wheels__Mobile_logo from '../../../../public/assets/navabar/MobileNavLogo/wheels__Mobile_logo.svg'
import Diagnosis__Mobile_logo from '../../../../public/assets/navabar/MobileNavLogo/Diagnosis__Mobile_logo.svg'

export const navListMenuItems = [
  {
    icon: MotLogo,
    mobile_icon:Mot_mobile_logo,
    title: "MOT",
    description: "Road-Worthy Assurance, Compliance Certified",
    url: "/services/mot-testing",
  },
  {
    icon: TyresLogo,
    mobile_icon:Tyres__Mobile_logo,
    title: "Tyres",
    description: "Grip Enhanced, Stability Guaranteed",
    url: "/services/tyres-servicing",
  },
  {
    icon: serviceLogo,
    mobile_icon:Service_mobile_logo,
    title: "Service",
    description: "Optimized Performance, Lasting Reliability",
    url: "/services/servicing",
  },
  {
    icon: wheesLogo,
    mobile_icon:Wheels__Mobile_logo,
    title: "Wheels Alignments",
    description: "Precision Aligned for Optimal Performance",
    url: "/services/wheels-alignments",
  },
  {
    icon: BrakersLogo,
    mobile_icon:Bakers_mobile_logo,
    title: "Brakes",
    description: "Enhanced Safety, Seamless Stops",
    url: "/services/brake-service",
  },
  {
    icon: diagnosisLogo,
    mobile_icon:Diagnosis__Mobile_logo,
    title: "Diagnosis Testing",
    description: "Precision Problem Solving",
    url: "/services/diagnosis-testing",
  },
  {
    icon: ExhaustLogo,
    mobile_icon:Exhaust__Mobile_logo,
    title: "Exhaust",
    description: "Efficiency Restored, Performance Preserved",
    url: "/services/exhaust-maintenance",
  },
];
