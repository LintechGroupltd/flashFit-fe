"use client";
import React, { useState } from "react";
import Link from "next/link";


const data = [
  { id: "1", title: "Search by Vehicle" },
  // { id: "2", title: "Search by Tyre Size" },
];

const options = ["Tyres", "Others", "dfgd", "tfret", "dffdsf"];

export interface searchResultDataType {
  registrationNumber: string;
  make: string;
  colour: string;
  yearOfManufacture: number;
  fuelType: string;
  // Add other properties as needed
}

function SearchVehicle() {
  const [searchType, setSearchType] = useState("1");
  const [registrationNumber, setRegistrationNumber] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [searchResult, setSearchResult] = useState<searchResultDataType | null>(
    null
  );

  const handleSearch = async () => {
    if (!registrationNumber) {
      setError("Please enter a valid registration number");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const apiKey = process.env.NEXT_PUBLIC_API_KEY;
      const response = await fetch(`/api/vehicle-enquiry-endpoint`, {
        method: "POST",
        headers: {
          "x-api-key": apiKey || "", // Ensure apiKey is not undefined
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          registrationNumber: registrationNumber,
        }),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      setSearchResult(data);
      localStorage.setItem("FlashFit_result", JSON.stringify(data));
      setShowModal(true); // Open the modal after search completes
    } catch (error) {
      console.error("Error fetching data:", error);
      setError("Your registration number is not correct.");
    } finally {
      setLoading(false);
    }
  };

  const handleCloseModal = () => {
    // Reset search result and close the modal
    setSearchResult(null);
    setShowModal(false);
    setRegistrationNumber("");
  };

  return (
    <div>
      <div className="bg-white z-0 md:h-[171px] h-[240px] shadow-lg w-full overflow-hidden rounded-lg translate-y-[-50%] mx-auto ">
        {/* Search type buttons */}
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

        {/* Search form based on searchType */}
        {searchType === "1" && (
          <div className="md:flex items-center px-[24px] gap-[24px]">
            {/* Input for registration number */}
            <div className="flex flex-col flex-1 gap-[5px] relative mt-1">
              <label className="text-[#000000] font-sans font-semibold mb-[5px] text-[14px] md:mt-0 mt-2">
                Vehicle Registration
              </label>
              <input
                className="h-[48px] font-sans text-[16px] border border-grey-500 rounded-[8px] pl-14 focus:outline-none"
                placeholder="Enter Number"
                value={registrationNumber}
                onChange={(e) =>
                  setRegistrationNumber(e.target.value.toUpperCase())
                }
              />
              <div className="bg-[#2A317F] w-[40px] absolute md:top-[32px] top-[40px] py-[11px] rounded-tl-[8px] rounded-bl-[8px]">
                <h2 className="text-[#fff] text-[16px] font-[500] text-center font-sans">
                  UK
                </h2>
              </div>
            </div>

            {/* Search button */}
            <div className="md:flex flex-col flex-1 gap-[5px] md:mt-[33px] mt-5">
              <button
                disabled={loading}
                className="bg-[#F8AD39] h-[48px] w-full text-white font-semibold rounded-[8px]"
                onClick={handleSearch}
              >
                {loading ? "Loading..." : "Search"}
              </button>
            </div>
          </div>
        )}
        <div className="mt-1 px-6">
          {/* Error message */}
          {error && <p className="text-red-500">{error}</p>}
        </div>
      </div>

      {/* Modal for displaying search result */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 z-50 w-full md:mx-0 px-3">
          <div className="bg-white p-8 rounded-lg w-[620px]">
            <div className="flex justify-between items-center">
              <h2 className="text-[19px] font-semibold uppercase font-sans">
                Your Search Result
              </h2>
              <button
                className="text-[14px] text-white font-bold py-2 px-6 rounded bg-[#2A317F] hover:bg-[#42569D] font-sans uppercase hover:text-[#F8AD39]"
                onClick={handleCloseModal}
              >
                Close
              </button>
            </div>

            <hr className="h-[3px] bg-[#2A317F] my-3" />

            {searchResult && typeof searchResult === "object" && (
              <div>
                {/* Display specific search result properties if searchResult is an object */}
                <p className="mb-2 text-[15px]">
                  <span className="font-bold">Registration Number:</span>{" "}
                  <span>{searchResult.registrationNumber}</span>
                </p>
                <p className="mb-2 text-[15px]">
                  <span className="font-bold">Make:</span>{" "}
                  <span>{searchResult.make}</span>
                </p>
                <p className="mb-2 text-[15px]">
                  <span className="font-bold">Colour:</span>{" "}
                  <span>{searchResult.colour}</span>
                </p>
                <p className="mb-2 text-[15px]">
                  <span className="font-bold">Year of Manufacture:</span>{" "}
                  <span>{searchResult.yearOfManufacture}</span>
                </p>
                <p className="mb-2 text-[15px]">
                  <span className="font-bold">Fuel Type:</span>{" "}
                  <span>{searchResult.fuelType}</span>
                </p>

                <hr className="h-[3px] bg-[#2A317F] my-3" />

                <div className="w-full mt-3">
                  <p className="text-[15px] mb-3">Is this Your Car?</p>
                  <div className="flex gap-4">
                    <Link href="/contact-us">
                      <button
                        className="bg-[#2A317F] hover:bg-[#42569D] text-white font-bold py-2 px-6 rounded"
                        
                      >
                        Yes
                      </button>
                    </Link>
                    <button
                      className="bg-gray-300 hover:bg-gray-400 text-[#2A317F] font-bold py-2 px-6 rounded"
                      onClick={handleCloseModal}
                    >
                      No, Search Again
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default SearchVehicle;
