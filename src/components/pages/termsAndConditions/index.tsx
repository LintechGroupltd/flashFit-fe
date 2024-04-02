import PrivacyAndConditions from '@/components/reuseable/t&cContent';
import React from 'react'
import CookiePolicy from './cookiePolicy';

const TermsAndConditions = () => {
  return (
    <div className="font-serif w-full py-24">
      <div className="root_parent_wrapper ">
        <div className="root_child_wrapper">
           <CookiePolicy/>
        </div>
      </div>
    </div>
  )
}

export default TermsAndConditions;