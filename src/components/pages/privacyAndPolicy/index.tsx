import Footer from '@/components/layout/footer/Footer'
import PrivacyAndConditions from '@/components/reuseable/privacyAndConditions'
import TopBar from '@/components/reuseable/privacyAndConditions/topBar'
import React from 'react'

const PrivacyAndPolicy = () => {
  return (
    <div className='w-full'>
        <TopBar  title={'Privacy Policy'}/>
        <PrivacyAndConditions />

        <div className="root_parent_wrapper  mt-20 bg-[#F5F5F7]  ">
        <div className="root_child_wrapper">
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default PrivacyAndPolicy;