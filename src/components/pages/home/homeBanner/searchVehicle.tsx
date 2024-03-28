import React, { useState } from "react";
import searchVehicleDownArrow from '../../../../../public/assets/home/serachVehicle/searchVehicledownArrow.svg'
import Image from "next/image";

const data = [
  { id: "1", title: "Search by Vehicle" },
  { id: "2", title: "Search by Tyre Size" },
  // { id: "3", mobileTitle: "Vehicle" },
  // { id: "4", mobileTitle: "Tyre Size" },
 
];


const options = ['Tyres', 'Others'];

function SearchVehicle() {
  const [searchType, setSearchType] = useState(data[0]?.id);
  const [selectedOption, setSelectedOption] = useState(options[0]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleOptionSelect = (option: string) => {
    setSelectedOption(option);
    setIsDropdownOpen(false);
  };

  return (
    <div
      style={{
        boxShadow: "0px 4px 40px 0px rgba(0, 0, 0, 0.12)",
      }}
      className="bg-[#fff] z-0 shadow-lg  w-full overflow-hidden rounded-[24px] min-h-[180px] md:translate-y-[-50%] translate-y-[-30%] mx-auto " // Add relative positioning here
       
    >
      <div className="flex bg-[#a4a7c8] h-[56px]">
        {data.map((item) => {
          const isActive = searchType === item?.id;
          return (
            <button
              onClick={() => setSearchType(item?.id)}
              key={item?.id}
              className={
                isActive
                  ? "w-auto h-full px-[24px] bg-white text-[#2A317F] font-serif font-semibold flex gap-[12px] items-center justify-center"
                  : "w-auto h-full px-[24px] bg-inherit text-[#ffffff] font-serif font-semibold flex gap-[12px] items-center justify-center"
              }
            >
              <span className="font-serif text-[14px]">{item?.title}</span>
          
              <img
                className="md:w-[20px] md:h-[20px] w-[15px] h-[15px] object-cover"
                src={
                  isActive
                    ? "/assets/icons/search_blue.svg"
                    : "/assets/icons/search_white.svg"
                }
              />
            </button>
          );
        })}
      </div>

      <div className="md:flex items-center px-[24px] py-[24px] gap-[24px]">
        <div className="flex flex-col flex-1 gap-[5px] relative">
          <label className="text-[#000000] font-sans font-semibold mb-[5px] text-[14px]">
            What are you looking for?
          </label>
          <input
            className="h-[48px] border border-grey-500 rounded-[8px] pl-4 pr-12 focus:outline-none font-sans" 
            value={selectedOption}
            readOnly
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          />
          <div
            className={`${
              isDropdownOpen ? "block" : "hidden"
            } absolute top-[0]  right-0 md:mt-[-45px] mt-[85px] z-10 w-full bg-white shadow-lg rounded-md`} // Adjusted positioning
          >
            {options.map((option) => (
              <div
                key={option}
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                onClick={() => handleOptionSelect(option)}
              >
                {option}
              </div>
            ))}
          </div>
          <div className="absolute top-[52px] right-2 flex items-center pr-3 pointer-events-none">
            <Image src={searchVehicleDownArrow} alt=""/>
          </div>
        </div>

        <div className="relative flex flex-col flex-1 gap-[5px] md:mt-0 mt-5">
           <label className="text-[#000000]  font-semibold font-sans mb-[5px] text-[14px]">
             Vehicle Registration
           </label>
           <input className="h-[48px] font-sans text-[16px] border border-grey-500 rounded-[8px] pl-14 focus:outline-none"
              placeholder="Enter Number"
           />
           <div className="bg-[#2A317F] w-[40px] absolute top-[32px] py-[11px] rounded-tl-[8px] rounded-bl-[8px]">
             <h2 className="text-[#fff] text-[16px] font-[500]  text-center font-sans">UK</h2>
           </div>
         </div>

         <div className="flex flex-col flex-1 gap-[5px] md:mt-0 mt-5">
           <label className="text-[#000000] font-semibold font-sans mb-[5px] text-[14px]">
             Postcode
           </label>
           <input className="h-[48px] border border-grey-500 rounded-[8px] font-sans pl-3 focus:outline-none" 
             placeholder="Enter Code"
           />
          
         </div>

         <div className="flex flex-col flex-1 gap-[5px] mt-[31px]">
           <button className="bg-[#F8AD39] h-[48px] text-[#fff] rounded-[8px] font-[600] text-[16px] font-sans">
             Contact
           </button>
         </div>
       
      </div>
    </div>
  );
}

export default SearchVehicle;
