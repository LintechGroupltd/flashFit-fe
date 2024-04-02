import PrivacyAndConditions from '@/components/reuseable/t&cContent';
import Link from 'next/link';
import React from 'react'



  

const CookiePolicy = () => {
  return (
    <div className="font-serif">
      <div>
        <h2 className='text-[24px] font-[600] font-serif'>What is a cookie</h2>
        <p className='mt-3 text-[18px] font-sans font-[400]'>Cookies are text files containing small amounts of information which are downloaded to your personal computer, mobile or other device 
            when you visit a website. Cookies are then sent back to the originating website on each subsequent visit, or to another website that 
            recognises that cookie. Cookies are useful because they allow a website to recognise a user's device.</p>
      </div>
      

    {/* How long are cookies stored for? */}
      <div className='mt-9'>
        <h2 className='text-[24px] font-[600] font-serif'>How long are cookies stored for?</h2>

        <div className='ml-2'>
        <div className='flex gap-2'>
         <div className='mt-4'>
            <div className='w-1 h-1 rounded-full bg-[#000]'></div> 
         </div>
         <div>
            <p className='mt-2 text-[18px] font-sans font-[400]'>Persistent cookies - these cookies remain on a user's device for the period of time specified in the cookie. They are activated each time that the user visits the website that created that particular cookie.</p>
         </div>
        </div>
      
        <div className='flex gap-2'>
         <div className='mt-[18px]'>
            <div className='w-1 h-1 rounded-full bg-[#000]'></div> 
         </div>
         <div>
            <p className='mt-2 text-[18px] font-sans font-[400]'>Session cookies - these cookies allow website operators to link the actions of a user during a browser session. A browser session starts when a user opens the browser window and finishes when they close the browser window. Session cookies are created temporarily. Once you close the browser, all session cookies are deleted.</p>
         </div>
        </div>
       </div> 
        <p className='mt-1 text-[18px] font-sans font-[400]'>Cookies do lots of different jobs, like letting you navigate between pages efficiently, remembering your preferences, and generally improve the user experience.</p>
      </div>

    {/* Types of cookies used on this website? */}

    <div className='mt-9'>
        <h2 className='text-[24px] font-[600] font-serif'>Types of cookies used on this website?</h2>

        <div className='ml-2'>
        <div className='flex gap-2'>
         <div className='mt-4'>
            <div className='w-1 h-1 rounded-full bg-[#000]'></div> 
         </div>
         <div>
            <p className='mt-2 text-[18px] font-sans font-[400]'>Strictly necessary cookies - These cookies enable services you have specifically asked for. These cookies are essential in order to enable you to move around the Website and use its features, such as accessing secure areas of the Website.</p>
         </div>
        </div>
      
        <div className='flex gap-2'>
         <div className='mt-[18px]'>
            <div className='w-1 h-1 rounded-full bg-[#000]'></div> 
         </div>
         <div>
            <p className='mt-2 text-[18px] font-sans font-[400]'>Performance cookies - These cookies collect anonymous information on the pages visited. By using the Website, you agree that we can place these types of cookies on your device. These cookies collect information about how visitors use the Website, for instance which pages visitors go to most often, and if they get error messages from web pages. These cookies don't collect information that identifies a visitor. All information these cookies collect is aggregated and therefore anonymous. It is only used to improve how the Website works.</p>
         </div>
        </div>

        <div className='flex gap-2'>
         <div className='mt-[18px]'>
            <div className='w-1 h-1 rounded-full bg-[#000]'></div> 
         </div>
         <div>
            <p className='mt-2 text-[18px] font-sans font-[400]'>Functionality cookies - These cookies allow the Website to remember choices you make (such as your user name, language or the region you are in) and provide enhanced, more personal features. These cookies can also be used to remember changes you have made to text size, fonts and other parts of web pages that you can customise. They may also be used to provide services you have asked for such as watching a video or commenting on a blog. The information these cookies collect may be anonymised and they cannot track your browsing activity on other websites.</p>
         </div>
        </div>
        <div className='flex gap-2'>
         <div className='mt-[18px]'>
            <div className='w-1 h-1 rounded-full bg-[#000]'></div> 
         </div>
         <div>
            <p className='mt-2 text-[18px] font-sans font-[400]'>Google Analytics - We use Google Analytics to analyse the use of this website. Google Analytics generates statistical and other information about website use. The information generated relating to our website is used to create reports about the use of the website. Google will store this information. Google's privacy policy is available at: <Link href='http://www.google.com/privacypolicy.html' className='text-[#2A317F]'> http://www.google.com/privacypolicy.html</Link></p>
         </div>
        </div>

       </div> 
      
      </div>

    {/* Cookies we use  */}
      <div className='mt-9'>
         <h2 className='text-[24px] font-[600] font-serif'>Cookies we use</h2>
         <p className='mt-3 text-[18px] font-sans font-[400]'>We use the following cookies:</p>

        <div className='border border-[border-[#BCBCBC] mt-5'>
        <div className='grid grid-cols-12 border border-[#BCBCBC] bg-[#F5F5F7] h-[80px]'>
             <div className='col-span-2 border-2 border-r-[#BCBCBC] text-[16px] font-sans py-6'>
               <h2 className='text-center'>Category</h2>
            </div>
            <div className='col-span-2 border-2 border-r-gray-400 py-6'>
               <h2 className='text-center text-[16px] font-sans'>Cookie Name</h2>
            </div>
            <div className=' col-span-8'>
               <h2 className='text-[16px] font-sans ml-4 py-6'>Purpose</h2>  
            </div>
         </div>

         {/* row-2   */}
         <div className='w-full grid grid-cols-12 border border-[#BCBCBC] bg-[#fff] h-[80px]'>
             <div className='col-span-2 border-2 border-r-[#BCBCBC] text-[16px] font-sans py-6 border-b-[#BCBCBC]'>
               <h2 className='text-center text-[#505050]'>Necessary Cookies</h2>
            </div>
            <div className='col-span-2 border-2 border-r-gray-400 py-6 border-b-[#BCBCBC]'>
               <h2 className='text-center text-[16px] font-sans text-[#505050]'>PHPSESSID</h2>
            </div>
            <div className='w-full col-span-8'>
               <p className='w-full  text-[16px] font-sans ml-4 py-4 text-[#505050]'>Necessary cookies enable core functionality. The website cannot function properly without these cookies, and can
                 only be disabled by changing your browser preferences.</p>  
            </div>

         </div>

          {/* row-3   */}
          <div className='w-full grid grid-cols-12 border border-[#BCBCBC] bg-[#F5F5F7] h-[80px]'>
             <div className='col-span-2 border-2 border-r-[#BCBCBC] text-[16px] font-sans py-6 border-b-[#BCBCBC]'>
               <h2 className='text-center text-[#505050] '>Necessary Cookies</h2>
            </div>
            <div className='col-span-2 border-2 border-r-gray-400 py-3 border-b-[#BCBCBC]'>
               <h2 className='text-center text-[16px] font-sans text-[#505050]'>__utma,<br/>__utmb</h2>
            </div>
            <div className='w-full col-span-8 pr-4'>
               <p className='w-full  text-[16px] font-sans ml-4 py-4 text-[#505050]'>These cookies are used to store information, such as what time your current visit occurred, whether you have been to
                the site before, and what site referred you to the web page.</p>  
            </div>
          </div>

         {/* row-4   */}
         <div className='w-full grid grid-cols-12 border border-[#BCBCBC] bg-[#fff] h-[80px]'>
             <div className='col-span-2 border-2 border-r-[#BCBCBC] text-[16px] font-sans py-6 border-b-[#BCBCBC]'>
               <h2 className='text-center text-[#505050]'>Necessary Cookies</h2>
            </div>
            <div className='col-span-2 border-2 border-r-gray-400 py-6 border-b-[#BCBCBC]'>
               <h2 className='text-center text-[16px] font-sans text-[#505050]'>__utmc</h2>
            </div>
            <div className='w-full col-span-8'>
               <p className='w-full  text-[16px] font-sans ml-4 py-4 text-[#505050]'>These cookies contain no personally identifiable information but they will use your computer’s IP address to know from
                where in the world you are accessing the Internet.</p>  
            </div>
         </div>

         {/* row-5  */}
         <div className='w-full grid grid-cols-12 border border-[#BCBCBC] bg-[#F5F5F7] h-[105px]'>
             <div className='col-span-2 border-2 border-r-[#BCBCBC] text-[16px] font-sans py-9 '>
               <h2 className='text-center text-[#505050]'>Necessary Cookies</h2>
            </div>
            <div className='col-span-2 border-2 border-r-gray-400 py-5 '>
               <h2 className='text-center text-[16px] font-sans text-[#505050]'>__utmv,<br/>__utmz</h2>
            </div>
            <div className='w-full col-span-8 border-1 border-b-[#BCBCBC]'>
               <p className='w-full  text-[16px] font-sans ml-4 py-4 text-[#505050]'>TGoogle stores the information collected by these cookies on servers in the United States. Google may transfer this
                 information to third-parties where required to do so by law, or where such third-parties process the information on Google’s behalf.</p>  
            </div>
          </div>
        </div> 
      </div>
  {/* Cookies we use end  */}

  {/* Opt-Out */}
    <div className='mt-9'>
       <h2 className='text-[24px] font-[600] font-serif'>Opt-Out</h2>
        <p className='mt-3 text-[18px] font-sans font-[400]'>In order to provide website visitors with more choice on how data is collected by Google Analytics, Google has developed the Google Analytics Opt-out Browser Add-on. The add-on communicates with the Google Analytics JavaScript (ga.js) to stop data being sent to Google Analytics. The Google Analytics Opt-out Browser Add-on does not affect usage of the website in any other way. A link to further information on the Google Analytics Opt-out Browser Add-on is 
         provided below for your convenience.</p> 
         <p className='py-6 text-[18px] font-sans font-[400]'>Download the Addon <Link href='' className='text-[#2A317F]'><u>Click here</u></Link></p>
         <p>For more information on the usage of cookies by Google Analytics please see the Google website. A link to the privacy advice for this product is provided below for your convenience. <Link href='' className='text-[#2A317F]'><u>Click here</u></Link></p>
    </div>

{/* Third Party Cookies */}
      <div className='mt-9'>
        <h2 className='text-[24px] font-[600] font-serif'>Third Party Cookies</h2>
        <p className='mt-3 text-[18px] font-sans font-[400]'>These cookies allow third parties to track the success of their application or customise the application for you. Because of how cookies work we cannot access these cookies, nor can the third parties access the data in cookies used on our site. For example, if you choose to ‘share’ content through Twitter or other social networks you might be sent cookies from these websites. We don't control the setting of these cookies, so please check those websites for more information about their
         cookies and how to manage them.</p>
      </div>

      

     {/* Disabling Cookies */}
     <div className='mt-9'>
        <h2 className='text-[24px] font-[600] font-serif'>Disabling Cookies</h2>
        <p className='mt-3 text-[18px] font-sans font-[400]'>If you would like to restrict the use of cookies you can control this in your Internet browser. Links to advice on how to do this for the most popular Internet browsers are provided below for convenience and will be available for the Internet browser of your choice either online or via the software 
         help (normally available via key F1).</p>

        <div className='ml-2 mt-2'>
        <div className='flex gap-2'>
         <div className='mt-[12px]'>
            <div className='w-1 h-1 rounded-full bg-[#000]'></div> 
         </div>
         <div>
            <Link href='' className='mt-2 text-[18px] font-sans font-[400] text-[#2A317F]'><u>Internet Explorer</u></Link>
         </div>
        </div>
      
        <div className='flex gap-2'>
         <div className='mt-[12px]'>
            <div className='w-1 h-1 rounded-full bg-[#000]'></div> 
         </div>
         <div>
            <Link href='' className='mt-2 text-[18px] font-sans font-[400] text-[#2A317F]'><u>Google Chrome</u></Link>
         </div>
        </div>
        <div className='flex gap-2'>
         <div className='mt-[12px]'>
            <div className='w-1 h-1 rounded-full bg-[#000]'></div> 
         </div>
         <div>
            <Link href='' className='mt-2 text-[18px] font-sans font-[400] text-[#2A317F]'><u>Mozilla Firefox</u></Link>
         </div>
        </div>
       </div> 
       
      </div>



    </div>
  )
}

export default CookiePolicy;