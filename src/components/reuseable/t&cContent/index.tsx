import React from "react";

type ListItem = {
  item1: string;
  item2: string;
  item3: string;
  item4?: string;
  item5?: string;
  item6?: string;
  item7?: string;
  item8?: string;
  item9?: string;
};

type Content = {
  id: number;
  title: string;
  desc: string;
  bottomDsc1:string;
  bottomDsc2:string;
  bottomDsc3:string;
  list?: ListItem;
};

export const contents: Content[] = [
  {
    id: 1,
    title: "Our privacy policy promise",
    desc: "We are committed to maintaining the trust and confidence of our visitors to our website. In particular, we want you to know that we are not in the business of selling, renting or trading email lists with other companies and businesses for marketing purposes. In this Privacy Policy, we’ve provided lots of detailed information on when and why we collect your personal information, how we use it, the limited conditions under which we may disclose it to others and how we keep it secure.",
    // list: {
    //   item1: "Contact information (such as name, email address, phone number)",
    //   item2: "Vehicle information (such as make, model, year)",
    //   item3: "Booking details (such as service requests, appointment times)",
    // },
    bottomDsc1:'',
    bottomDsc2:'',
    bottomDsc3:'',
  },
  {
    id: 2,
    title: "What information do we collect?",
    desc: "We may collect, store and use the following kinds of personal information.",
    list: {
      item1:
        "Information about your computer and about your visits to this website",
      item2:
        "Your IP address, geographical location, browser type and version, operating system, referral source, length of visit, page views and website navigation.",
      item3:
        "Information that you provide to us for the purpose of subscribing to our website services, email notifications and/or newsletters.",
      item4: "Any other information that you choose to send to us",
    },
    bottomDsc1:'Before you disclose to us the personal information of another person, you must obtain that person’s consent to both the disclosure and the processing of that personal information in accordance with the terms of this privacy policy.',
    bottomDsc2:'',
    bottomDsc3:'',
  },
  {
    id: 3,
    title: "Using your Personal Information",
    desc: "Personal information submitted to us via this website will be used for the purposes specified in this privacy policy or in relevant parts of the website. We may use your personal information to:",
    list: {
      item1:
        "Administer the website",
      item2:
        "Improve your browsing experience by personalising the website",
      item3:
        "Enable your use of the services available on the website",
      item4: "Send statements and invoices to you, and collect payments from you",
      item5: "Send you general (non-marketing) commercial communications",
      item6: "Send you email notifications which you have specifically requested",
      item7: "Send you our newsletter and other marketing communications relating to our business or the businesses of carefully-selected third parties which we think may be of interest to you, by post or, where you have specifically agreed to this, by email or similar technology and you can inform us at any time if you no longer require marketing communications",
      item8: "Provide third parties with statistical information about our users – but this information will not be used to identify any individual user",
      item9: "Deal with enquiries and complaints made by or about you relating to the website Keep the website secure and prevent fraud",
    },
    bottomDsc1:'Where you submit personal information for publication on our website, we will publish and otherwise use that information in accordance with the licence you grant to us. We will not, without your express consent, provide your personal information to any third parties for the purpose of direct marketing.',
    bottomDsc2:'',
    bottomDsc3:'',
  },
  {
    id: 4,
    title: "Links to other websites",
    desc: "This privacy notice does not cover the links within this site linking to other websites. Those sites are not governed by this Privacy Policy, and if you have questions about how a site uses your information, you’ll need to check that site’s privacy statement.",
    bottomDsc2:'',
    bottomDsc3:'',
    bottomDsc1:''
  },
  {
    id: 5,
    title: "Newsletter Signup",
    desc: "As part of the registration process for our monthly e-newsletter, we collect personal information. We use that information for a couple of reasons:",
    list: {
      item1:
        "to tell you about stuff you’ve asked us to tell you about",
      item2:
        "to contact you if we need to obtain or provide additional information;",
      item3:
        "to check our records are right and to check every now and then that you’re happy and satisfied.",
      
    },
    bottomDsc1:'We don’t rent or trade email lists with other organisations and businesses.',
    bottomDsc2:'We use a third party provider to deliver our newsletter. We gather statistics around email opening and clicks using industry standard technologies to help us monitor and improve our e-newsletter.',
    bottomDsc3:'You can unsubscribe to general mailings at any time of the day or night by clicking the unsubscribe link at the bottom of any of our emails or by emailing us via the contact page.',
  },
  {
    id: 6,
    title: "Disclosures",
    desc: "We may disclose your personal information to any of our employees, officers, agents, suppliers or subcontractors insofar as reasonably necessary for the purposes set out in this privacy policy.We may disclose your personal information to any member of our group of companies (this means our subsidiaries, our ultimate holding company and all its subsidiaries) insofar as reasonably necessary for the purposes set out in this privacy policy. In addition, we may disclose your personal information:",
    list: {
      item1:
        "To the extent that we are required to do so by law",
      item2:
        "In connection with any ongoing or prospective legal proceedings;",
      item3:
        "In order to establish, exercise or defend our legal rights (including providing information to others for the purposes of fraud prevention and reducing credit risk to any person who we reasonably believe may apply to a court or other competent authority for disclosure of that personal information where, in our reasonable opinion, such court or authority would be reasonably likely to order disclosure of that personal information.",
    },
    bottomDsc1:'Except as provided in this privacy policy, we will not provide your information to third parties.',
    bottomDsc2:'',
    bottomDsc3:'',
  },
  {
    id: 7,
    title: "Security of your personal information",
    desc: "We will take reasonable technical and organisational precautions to prevent the loss, misuse or alteration of your personal information. We will store all the personal information you provide on our secure password and firewall protected server. All electronic transactions entered into via the website will be protected by encryption technology. You acknowledge that the transmission of information over the internet is inherently insecure, and we cannot guarantee the security of data sent over the internet.",
    bottomDsc1:'',
    bottomDsc2:'',
    bottomDsc3:'',
  },
  {
    id: 8,
    title: "Access to your personal information",
    desc: "Under new GDPR legislation you have the right to request access, amend or request terminatation of any personal data that we hold. Provision of such information will be subject to:",
    list: {
      item1:
        "The supply of appropriate evidence of your identity (for this purpose, we will usually accept a photocopy of your passport certified by a solicitor or bank, plus an original copy of a utility bill showing your current address).",
  
    },
    bottomDsc1:'',
    bottomDsc2:'',
    bottomDsc3:'',
  },
  {
    id: 9,
    title: "Changes to this privacy notice",
    desc: "We keep our privacy notice under regular review. This privacy notice was last updated on May 14th, 2018.",
    bottomDsc1:'',
    bottomDsc2:'',
    bottomDsc3:'',
  },
];

const PrivacyAndConditions = () => {
  return (
    <section className="w-full h-full">
        <div className="w-full flex flex-col gap-10">


          {contents.map((item, idx) => (
            <div key={idx} className="flex flex-col gap-4">
              <h4 className="font-bold text-2xl " style={{color:'#0F0F0F'}}>{item.title}</h4>
              <p className="text-lg lg:w-4/5" style={{fontWeight:'200', color:'#505050'}}>{item.desc}</p>
              {item.list && (
                <ul className="list-disc px-8">
                  {Object.values(item.list).map((listItem, index) => (
                    <li key={index} style={{fontWeight:'200',color:'#505050'}}>{listItem}</li>
                  ))}
                </ul>
              )}
             <div>
               {item.bottomDsc1} 
               {item.bottomDsc2} 
               {item.bottomDsc3}
             </div>  
            </div>
          ))}



        </div>
    </section>
  );
};

export default PrivacyAndConditions;
