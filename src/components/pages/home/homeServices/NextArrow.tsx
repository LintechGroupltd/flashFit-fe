import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import rightBlueArrow from '../../../../../public/assets/services/serviceCardNewCardLogo/rightBlueArrow.svg';
import rightHoverWhiteArrow from '../../../../../public/assets/services/serviceCardNewCardLogo/rightHoverWhiteArrow.svg';

interface NextArrowProps {
  onClick: () => void; 
}

const NextArrow = ({ onClick }: NextArrowProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
   <div>

  {/* for desktop */}
    <div className="absolute md:block hidden right-[16px] -top-[85px] " onClick={onClick}>
      <div
        className="cursor-pointer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {isHovered ? (
          <Image src={rightHoverWhiteArrow} alt="rightHoverWhiteArrow" className='md:w-full md:h-full w-10/12 h-10/12'/>
        ) : (
          <Image src={rightBlueArrow} alt="rightBlueArrow" className='md:w-full md:h-full w-10/12 h-10/12'/>
        )}
      </div>
    </div>

    {/* For mobile */}
     <div className="absolute md:hidden block right-[111px] top-[106%]" onClick={onClick}>
      <div
        className="cursor-pointer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {isHovered ? (
          <Image src={rightHoverWhiteArrow} alt="rightHoverWhiteArrow" className='md:w-full md:h-full w-11/12 h-11/12'/>
        ) : (
          <Image src={rightBlueArrow} alt="rightBlueArrow" className='md:w-full md:h-full w-11/12 h-11/12'/>
        )}
      </div>
    </div>


   </div> 
  );
};

export default NextArrow;
