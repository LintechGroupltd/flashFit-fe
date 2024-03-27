import React from "react";

const RoundedBackBtn = (props: any) => {
  return (
    <svg
      width="60"
      height="60"
      viewBox="0 0 60 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="30" cy="30" r="25" stroke="white" strokeWidth="1.5" />
      <path
        d="M40 30H20M20 30L27.5 22.5M20 30L27.5 37.5"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default RoundedBackBtn;
