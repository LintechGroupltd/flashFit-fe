import React from "react";
import Image from "next/image";

const data = [
  { id: "1", title: "Search by Vehicle " },
  { id: "2", title: "Search by Tyre Size " },
];

function SearchVehicle() {
  const [searchType, setSearchType] = React.useState(data[0]?.id);
  return (
    <div
      style={{
        boxShadow: "0px 4px 40px 0px rgba(0, 0, 0, 0.12)",
      }}
      className="bg-[#fff] shadow-lg w-full overflow-hidden rounded-[24px] min-h-[180px] translate-y-[-50%] mx-auto">
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
              }>
              <span className="text-inherit">{item?.title}</span>
              <img
                className="w-[20px] h-[20px] object-cover"
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

      <div className="flex items-center px-[24px] py-[24px] gap-[24px]">
        <div className="flex flex-col flex-1 gap-[5px]">
          <label className="text-[#000000] font-serif font-semibold">
            What are you looking for?
          </label>
          <input className="h-[48px] border border-grey-500" />
        </div>

        <div className="flex flex-col flex-1 gap-[5px]">
          <label className="text-[#000000] font-serif font-semibold">
            What are you looking for?
          </label>
          <input className="h-[48px] border border-grey-500" />
        </div>

        <div className="flex flex-col flex-1 gap-[5px]">
          <label className="text-[#000000] font-serif font-semibold">
            What are you looking for?
          </label>
          <input className="h-[48px] border border-grey-500" />
        </div>

        <div className="flex flex-col flex-1 gap-[5px]">
          <label className="text-[#000000] font-serif font-semibold">
            What are you looking for?
          </label>
          <input className="h-[48px] border border-grey-500" />
        </div>
      </div>
    </div>
  );
}

export default SearchVehicle;
