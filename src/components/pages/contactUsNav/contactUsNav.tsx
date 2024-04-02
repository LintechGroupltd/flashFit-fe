"use client";

import React from 'react';

import contactDownArrow from '../../../../public/assets/icons/contact_down_arrow.svg'
import Image from 'next/image';

const ContactUsNav = () => {
  const [fullName, setFullName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [phone, setPhone] = React.useState('');
  const [service, setService] = React.useState('');
  const [message, setMessage] = React.useState('');

  const handleServiceChange = (e) => {
    setService(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', { fullName, email, phone, service, message });
  };

  return (
    <div className="grid grid-cols-2 gap-[50px] bg-[#F5F5F7] my-28 p-10 rounded-[16px]">
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
            className="w-full px-4 text-[15px] font-sans font-[400] py-3 border border-[1px] border-[#D7D7D7] rounded-[8px] focus:outline-none "
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
            className="w-full px-4 text-[15px] font-sans font-[400] py-3 border rounded-[8px] border-[1px] border-[#D7D7D7] focus:outline-none "
            placeholder="Enter phone number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>
        <div className="mb-6">
          <label htmlFor="service" className="block mb-2 font-[600] text-[13px] font-sans">
            Service
          </label>

          <select
            id="service"
            className="w-full relative px-4 py-3 border-[1px] border-[#D7D7D7] rounded appearance-none focus:outline-none"
            value={service}
            onChange={handleServiceChange}
            required   
          >
          <div className='absolute'>
             <Image 
               src={contactDownArrow}
               alt='contactDownArrow'
             />
          </div>

            <option value="">Select Service</option>
            <option value="MOT Testing">MOT Testing</option>
            <option value="Service">Service</option>
            <option value="Brakes">Brakes</option>
            <option value="Exhaust">Exhaust</option>
            <option value="Tyres">Tyres</option>
            <option value="Wheel Alignments">Wheel Alignments</option>
            <option value="Diagnosis Testing">Diagnosis Testing</option>
          </select>
        </div>
        <div className="mb-6">
          <label htmlFor="message" className="block mb-2 font-[600] text-[13px] font-sans">
            Message
          </label>
          <textarea
            id="message"
            className="w-full px-4 text-[15px] font-sans border-[1px] border-[#D7D7D7] font-[400] py-3  rounded-[8px] focus:outline-none "
            placeholder="Enter your message here"
            rows="4"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-[188px] h-[56px] py-2 text-white bg-[#F8AD39] rounded-[8px] hover:bg-yellow-600 focus:outline-none text-[16px] font-[600] font-sans"
        >
          Submit
        </button>
      </form>

     {/* right section  */}
      <div className="justify-center p-8">
        <div>
          <p className="text-[48px] font-[600] font-serif">Get In Touch</p>
          <p className="text-[18px] font-[400] font-sans text-[#505050] py-3">
           Connect with us: Engage in real-time chat, direct phone support, and visit our location for personalized assistance 
         </p>
        </div>

        <div className='mt-4'>
           <h2 className='text-[20px] font-[600] font-serif '>Chat to us</h2> 
           <p className='text-[16px] font-[400] font-sans mt-2'>Get instant assistance and support</p>
           <p className='text-[#2A317F] text-[16px] font-[500] font-sans mt-1'>flashfit@example.com</p>
        </div>

        <div className='mt-4'>
           <h2 className='text-[20px] font-[600] font-serif '>Phone</h2> 
           <p className='text-[16px] font-[400] font-sans mt-2'>Give us a call on our dedicated phone line from Mon-Fri, 8am to 5-pm</p>
           <p className='text-[#2A317F] text-[16px] font-[500] font-sans mt-1'>+44 20 1234 5678</p>
        </div>

        <div className='mt-4'>
           <h2 className='text-[20px] font-[600] font-serif '>Office Address</h2> 
           <p className='text-[16px] font-[400] font-sans mt-2'>Come say hello at our office HQ.</p>
        </div>

        <div className='mt-5'>
           <p className='text-[16px] font-[500] font-sans mt-2 text-[#2A317F]'>100 Smith Street</p>
           <p className='text-[16px] font-[500] font-sans text-[#2A317F]'>Collingwood VIC 3066 AU</p>
        </div>
       
      
      </div>
    </div>
  );
};

export default ContactUsNav;
