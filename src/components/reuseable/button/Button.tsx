import { button } from '@material-tailwind/react';
import React from 'react'


interface btnProps {
bgColor?:string;
btnPadding?:string;
title?:string;
textColor?:string;
}



const Button = ({bgColor, btnPadding, title, textColor}:btnProps) => {
  return (
  <button className='rounded-md' style={{padding:btnPadding, backgroundColor:bgColor, color:textColor}}>
    {title}
  </button>
  )
}

export default Button;