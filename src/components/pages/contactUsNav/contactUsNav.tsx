"use client";

import React from 'react';

import contactDownArrow from '../../../../public/assets/icons/contact_down_arrow.svg'
import Image from 'next/image';


const ContactUsNav = () => {
  const [fullName, setFullName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [phone, setPhone] = React.useState('');
//   const [service, setService] = React.useState('');
  const [message, setMessage] = React.useState('');


  const [selectedService, setSelectedService] = React.useState<string | null>(null);
  const [isOpen, setIsOpen] = React.useState(false);



//   const handleServiceChange = (e) => {
//     setService(e.target.value);
//   };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', { fullName, email, phone, message });
  };


 

  const services = [
    'Service',
    'Brakes',
    'Exhaust',
    'Tyres',
    'Wheel Alignments',
    'Diagnosis Testing',
    'Others'
  ];

  const handleSelectService = (service: string) => {
    setSelectedService(service);
    setIsOpen(false);
  };





  return (
     <div>
        <div className='md:hidden block mt-14 text-center'>
          <p className="md:text-[48px] text-[34px] font-[600] font-serif">Get In Touch</p>
          <p className="text-[18px] font-[400] font-sans text-[#505050] py-3">
           Connect with us: Engage in real-time chat, direct phone support, and visit our location for personalized assistance 
         </p>
        </div>
    <div className="grid md:grid-cols-2 md:gap-[50px] gap-[30px] bg-[#F5F5F7] md:my-28 my-14 md:p-10 p-4 rounded-[16px]">

      <form className="w-full mx-auto my-8 " onSubmit={handleSubmit}>
        <div className="mb-6">
          <label htmlFor="fullName" className="block mb-2 font-[600] text-[13px] font-sans ">
            Full Name
          </label>
          <input
            type="text"
            id="fullName"
            className="w-full px-4 text-[15px] font-sans font-[400] py-3 border-[1px] border-[#D7D7D7] rounded-[8px] focus:outline-none "
            placeholder="Enter full name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />
        </div>
        <div className="mb-6">
          <label htmlFor="email" className="block mb-2 font-[600] text-[13px] font-sans">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            className="w-full px-4 text-[15px] font-sans font-[400] py-3  border-[1px] border-[#D7D7D7] rounded-[8px] focus:outline-none "
            placeholder="Enter email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-6">
          <label htmlFor="phone" className="block mb-2 font-[600] text-[13px] font-sans">
            Phone Number
          </label>
          <input
            type="text"
            id="phone"
            className="w-full px-4 text-[15px] font-sans font-[400] py-3 rounded-[8px] border-[1px] border-[#D7D7D7] focus:outline-none "
            placeholder="Enter phone number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>
       
      
<div className="relative">
       <label htmlFor="service" className="block mb-2 font-[600] text-[13px] font-sans">
            Service
          </label>
      <input
        type="text"
        placeholder="Select a service"
        value={selectedService || ''}
        onChange={() => {}}
        onClick={() => setIsOpen(!isOpen)}
        className="border border-gray-300  text-[15px] font-sans font-[400] w-full rounded-md px-4 py-3 pr-10 focus:outline-none"
      />
      <Image
        src={contactDownArrow}
        alt="contactDownArrow"
        className="absolute right-3 top-[50px] transform -translate-y-1/2 h-5 w-8 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      />
      {isOpen && (
        <div className="absolute w-full mt-0 bg-white shadow-lg rounded-md">
          {services.map((service, index) => (
            <div
              key={index}
              className="cursor-pointer px-4 py-2 hover:bg-gray-100 font-sans text-[14px] font-[500]" 
              onClick={() => handleSelectService(service)}
            >
              {service}
            </div>
          ))}
        </div>
      )}
    </div>
     


        <div className="mb-6 mt-6">
          <label htmlFor="message" className="block mb-2 font-[600] text-[13px] font-sans">
            Message
          </label>
          <textarea
            id="message"
            className="w-full px-4 text-[15px] font-sans border-[1px] border-[#D7D7D7] font-[400] py-3  rounded-[8px] focus:outline-none "
            placeholder="Enter your message here"
            rows={4}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="md:w-[188px] w-[180px] md:h-[56px] h-[50px] py-2 text-white bg-[#F8AD39] rounded-[8px] focus:outline-none text-[16px] font-[600] font-sans"
        >
          Submit
        </button>
      </form>

     {/* right section  */}
      <div className="justify-center md:p-8 p-5">
        <div className='md:block hidden'>
          <p className="md:text-[48px] text-[34px] font-[600] font-serif">Get In Touch</p>
          <p className="text-[18px] font-[400] font-sans text-[#505050] py-3">
            Connect with us: Engage in real-time chat, direct phone support, and visit our location for personalized assistance 
         </p>
        </div>

        <div className='mt-4'>
           <h2 className='md:text-[20px] text-[18px] font-[600] font-serif '>Chat to us</h2> 
           <p className='text-[16px] font-[400] font-sans mt-2'>Get instant assistance and support</p>
           <p className='text-[#2A317F] text-[16px] font-[500] font-sans mt-1'>flashfit21@gmail.com</p>
        </div>

        <div className='mt-4'>
           <h2 className='md:text-[20px] text-[18px] font-[600] font-serif '>Phone</h2> 
           <p className='text-[16px] font-[400] font-sans mt-2'>Give us a call on our phone line from Mon-Sun, 8am to 8pm</p>
           <p className='text-[#2A317F] text-[16px] font-[500] font-sans mt-1'>+01 21 269 4786</p>
        </div>

        <div className='mt-4'>
           <h2 className='md:text-[20px] text-[18px] font-[600] font-serif '>Whatsapp</h2> 
           <p className='text-[16px] font-[400] font-sans mt-2'>Chat with us on this line</p>
           <p className='text-[#2A317F] text-[16px] font-[500] font-sans mt-1'>+07527 042810</p>
        </div>

        <div className='mt-4'>
           <h2 className='md:text-[20px] text-[18px] font-[600] font-serif '>Office Address</h2> 
           <p className='text-[16px] font-[400] font-sans mt-[5px]'>Come say hello at our office HQ.</p>
        </div>

        <div className='mt-2'>
           <p className='text-[16px] font-[500] font-sans mt-2 text-[#2A317F]'>21 Factory Road,</p>
           <p className='text-[16px] font-[500] font-sans text-[#2A317F]'>Birmingham, United Kingdom, B18 5JU</p>
        </div>
       
      
      </div>
    </div>

     

   </div> 
  );
};

export default ContactUsNav;
