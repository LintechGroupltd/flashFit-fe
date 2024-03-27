import React from "react";

const CloseNavIcon = (props:any) => {
  return (
    <svg
      width="60"
      height="60"
      viewBox="0 0 60 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx="30" cy="30" r="25" stroke="white" strokeWidth="1.5" />
      <path
        d="M36.2499 23.7501L23.75 36.25M23.7499 23.75L36.2499 36.2499"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default CloseNavIcon;
