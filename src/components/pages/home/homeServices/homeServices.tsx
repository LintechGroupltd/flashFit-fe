import { useState } from "react";
import HomeServiceCard from "./homeServiceCard";


import motLogo from "../../../../../public/assets/services/serviceCardNewCardLogo/Mot.svg";
import serviceLogo from "../../../../../public/assets/services/serviceCardNewCardLogo/service.svg";
import brakesLogo from "../../../../../public/assets/services/serviceCardNewCardLogo/Brakes.svg";
import exhaustLogo from "../../../../../public/assets/services/serviceCardNewCardLogo/exhaust.svg";
import tyresLogo from "../../../../../public/assets/services/serviceCardNewCardLogo/tyres.svg";
import alignmentLogo from "../../../../../public/assets/services/serviceCardNewCardLogo/alignments.svg";
import diagnosisLogo from "../../../../../public/assets/services/serviceCardNewCardLogo/diagnosis.svg";

import learMoreUpperArrow from "../../../../../public/assets/services/serviceCardNewCardLogo/learnMoreUpperArrow.svg";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NextArrow from "./NextArrow";
import PrevArrow from "./prevArrow";

const homeServiceData = [
  {
    id: 1,
    title: "MOT",
    description:
      "Ensure your vehicle meets safety and environmental standards with Flash Fit's...",
    logo: motLogo,
    url: "/services/mot-testing",
    learMoreUpperArrow: learMoreUpperArrow,
  },
  {
    id: 2,
    title: "Service",
    description:
      "Keep your car running smoothly and efficiently with Flash Fit's comprehensive...",
    logo: serviceLogo,
    url: "/services/servicing",
    learMoreUpperArrow: learMoreUpperArrow,
  },
  {
    id: 3,
    title: "Brake",
    description:
      "Safeguard your vehicle's safety and performance with Flash Fit's meticulous...",
    logo: brakesLogo,
    url: "/services/brake-service",
    learMoreUpperArrow: learMoreUpperArrow,
  },
  {
    id: 4,
    title: "Exhaust",
    description:
      "Maintain optimal engine performance and reduce harmful emissions with our...",
    logo: exhaustLogo,
    url: "/services/exhaust-maintenance",
    learMoreUpperArrow: learMoreUpperArrow,
  },
  {
    id: 5,
    title: "Tyres",
    description:
      "Stay safe and road-ready with Flash Fit's tire services. Whether you need tire ins...",
    logo: tyresLogo,
    url: "/services/tyres-servicing",
    learMoreUpperArrow: learMoreUpperArrow,
  },
  {
    id: 6,
    title: "ALIGNMENTS",
    description:
      "Enhance your driving experience and prolong tire life with Flash Fit's precision...",
    logo: alignmentLogo,
    url: "/services/wheels-alignments",
    learMoreUpperArrow: learMoreUpperArrow,
  },
  {
    id: 7,
    title: "DIAGNOSIS",
    description:
      "Detect and address automotive issues early with Flash Fit's advanced vehicle...",
    logo: diagnosisLogo,
    url: "/services/diagnosis-testing",
    learMoreUpperArrow: learMoreUpperArrow,
  },
];

const HomeServices = () => {
  //  const [progress, setProgress]= useState(0)
  const [slideToShow, setSlideToShow] = useState(3);

  const setSlides = () => {
    if (window.innerWidth <= 1280 && window.innerWidth > 1000) {
      setSlideToShow(3);
    } else if (window.innerWidth <= 1000 && window.innerWidth > 650) {
      setSlideToShow(2);
    } else if (window.innerWidth <= 650) {
      setSlideToShow(1);
    }
  };

  const handleNextClick = () => {
    // Your logic for handling next arrow click
  };

  const handlePrevClick = () => {
    // Your logic for handling prev arrow click
  };

  const settings = {
    arrows: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow onClick={handleNextClick} />, // Pass onClick prop
    prevArrow: <PrevArrow onClick={handlePrevClick} />, // Pass onClick prop
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="relative bg-[#fff] w-full md:mt-10  ">
      <div>
        <h2 className="md:text-[48px] text-[34px] font-[600] font-serif md:leading-[55px] leading-[45px] ml-1">
          Browse our set
          <br /> of services
        </h2>
      </div>
      <Slider {...settings} className="md:mt-10 mt-5 z-0">
        {homeServiceData.map((serviceData, index) => (
          <HomeServiceCard key={index} serviceData={serviceData} />
        ))}
      </Slider>
    </div>
  );
};

export default HomeServices;
