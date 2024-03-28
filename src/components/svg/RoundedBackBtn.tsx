import React from "react";

const RoundedBackBtn = (props: any) => {
  return (
    // <svg
    //   width="60"
    //   height="60"
    //   viewBox="0 0 60 60"
    //   fill="none"
    //   xmlns="http://www.w3.org/2000/svg"
    // >
    //   <circle cx="30" cy="30" r="25" stroke="white" strokeWidth="1.5" />
    //   <path
    //     d="M40 30H20M20 30L27.5 22.5M20 30L27.5 37.5"
    //     stroke="white"
    //     strokeWidth="1.5"
    //     strokeLinecap="round"
    //     strokeLinejoin="round"
    //   />
    // </svg>

    <svg
      width="22"
      height="18"
      viewBox="0 0 22 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M21 9H1M1 9L8.5 1.5M1 9L8.5 16.5"
        stroke="white"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default RoundedBackBtn;
