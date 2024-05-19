"use client"
import React from "react";
import { useSearchParams, usePathname } from "next/navigation";
import Link from "next/link";

// Define an interface for the structure of the search result object
interface SearchResult {
  data: any;
}

// Receive searchResult as prop with specified type
const Modal = ({ searchResult }: { searchResult: SearchResult | null }) => {
  const searchParams = useSearchParams();
  const modal = searchParams.get("modal");
  const pathname = usePathname();

  return (
    <>
      {modal && (
        <dialog className="fixed left-0 top-0 w-full h-full bg-black bg-opacity-50 z-50 overflow-auto backdrop-blur flex justify-center items-center">
          <div className="bg-white m-auto p-8">
            <div className="flex flex-col items-center">
              {searchResult ? (
                <>
                  <p>Modal content</p>
                  <p>Search Result: {JSON.stringify(searchResult)}</p>
                </>
              ) : (
                <p>No search result available</p>
              )}
              <br />
              <Link href={pathname}>
                <button type="button" className="bg-red-500 text-white p-2">
                  Close Modal
                </button>
              </Link>
            </div>
          </div>
        </dialog>
      )}
    </>
  );
};

export default Modal;
