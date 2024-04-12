import Image from "next/image";
import { useState } from 'react';
import leftBlueArrow from '../../../../../public/assets/services/serviceCardNewCardLogo/leftBlueArrow.svg';
import leftHoverWhiteArrow from '../../../../../public/assets/services/serviceCardNewCardLogo/leftHoverWhiteArrow.svg';

interface PrevArrowProps {
  onClick: () => void; 
}

const PrevArrow = ({ onClick }: PrevArrowProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="absolute md:right-[99px] right-[80px] -top-[85px]" onClick={onClick}>
       <div
        className="cursor-pointer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {isHovered ? (
          <Image src={leftHoverWhiteArrow} alt="rightHoverWhiteArrow"  className='md:w-full md:h-full w-10/12 h-10/12' />
        ) : (
          <Image src={leftBlueArrow} alt="rightBlueArrow"  className='md:w-full md:h-full w-10/12 h-10/12'/>
        )}
      </div>
    </div>
  );
};

export default PrevArrow;
