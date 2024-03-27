import React from "react";


function GalleryBanner() {
  return (
    <div className="md:h-[530px] relative md:py-28 py-20">
      <div className="text-center text-[#fff]">
        <h2 className="md:text-[72px] text-[50px] leading-[60px] font-serif font-[600]"> Flash Fit Gallery</h2>
        <p className="text-[18px] font-sans font-[400] md:block hidden mt-10">
          Step into the world of automotive excellence with the Flash Fit<br/> Gallery. Browse through a collection of 
          images showcasing our<br/> skilled technicians, cutting-edge equipment, and the<br/> outstanding results of our services.
        </p>
        <p className="text-[18px] font-sans font-[400] md:hidden block mt-4">
          Where Automotive Passion Meets Precision:
          Unveiling the Heart Behind Flash Fit's Drive for
          Excellence.
        </p>
      </div>

    
    </div>
  );
}

export default GalleryBanner;
