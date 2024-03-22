import Link from "next/link";
import React from "react";


const BookContact = () => {
  return (
    <div className='mt-20 bg-[#2A317F] rounded-[30px]'>
      <div className='text-center py-24'>
        <h1 className="text-[48px] font-serif font-[600] text-[#fff] leading-[55px]">Get Your Vehicle<br/> Running Smoothly Today</h1>
        <p className="text-[18px] font-serif text-[#fff] mt-4">
          "Book Now for Expert Car Care and MOT Services with Flash Fit!"
        </p>

        <div className="mt-8">
         <Link href=''>
            <button className="bg-[#F8AD39] px-[70px] py-3 rounded-[8px] text-[16px] text-[#000] font-[500] font-sans">Contact</button>
          </Link>
        </div>
      
      </div>
    </div>
  );
};

export default BookContact;
