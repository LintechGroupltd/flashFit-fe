import Button from "@/components/reuseable/button/Button";
import Link from "next/link";
import React from "react";

const ContactSuccessMessage = () => {
  return (
    <div className="font-serif flex flex-col gap-10 items-center ">
      <h1 className="text-6xl max-w-2xl text-center">Your booking has been received!</h1>


      <div className="cursor-pointer">
        <Link href={"/"}>
          <Button textColor="#fff" bgColor="#F8AD39" title="Done" btnPadding="12px 24px 12px 24px"  />
        </Link>
      </div>
    </div>
  );
};

export default ContactSuccessMessage;
