import React from "react";

type ListItem = {
  item1: string;
  item2: string;
  item3: string;
  item4?: string;
};

type Content = {
  id: number;
  title: string;
  desc: string;
  list?: ListItem;
};

export const contents: Content[] = [
  {
    id: 1,
    title: "Information We Collect",
    desc: "We may collect personal information from you when you visit our website, make a booking, or interact with us in any way. This information may include:",
    list: {
      item1: "Contact information (such as name, email address, phone number)",
      item2: "Vehicle information (such as make, model, year)",
      item3: "Booking details (such as service requests, appointment times)",
    },
  },
  {
    id: 2,
    title: "How We Use Your Information",
    desc: "We use the information collected from you for the following purposes:",
    list: {
      item1:
        "To provide and fulfill the services you request, such as scheduling appointments and processing payments.",
      item2:
        "To communicate with you about your bookings, updates, promotions, and other relevant information.",
      item3:
        "To improve our services, website functionality, and customer experience.",
      item4: "To comply with legal obligations and regulations.",
    },
  },
  {
    id: 3,
    title: "Information Sharing and Disclosure",
    desc: "We may share your personal information with third-party service providers who assist us in delivering our services, such as payment processors and appointment scheduling platforms. We do not sell or rent your personal information to third parties.",
  },
  {
    id: 4,
    title: "Data Security",
    desc: "We implement security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.",
  },
  {
    id: 5,
    title: "Your Choices and Rights",
    desc: "You have the right to access, update, or delete your personal information. You may also choose to opt-out of receiving promotional communications from us. To exercise these rights or for any inquiries regarding your personal information, please contact us using the information provided below.",
  },
  {
    id: 6,
    title: "Changes to This Privacy Policy",
    desc: "We reserve the right to update or modify this Privacy Policy at any time. We will post the revised version on our website with the effective date of the changes. Your continued use of our services after any modifications indicates your acceptance of the updated Privacy Policy.",
  },
];

const PrivacyAndConditions = () => {
  return (
    <section className="w-full h-full">
        <div className="w-full flex flex-col gap-10">
          {contents.map((item, idx) => (
            <div key={idx} className="flex flex-col gap-4">
              <h4 className="font-bold text-2xl" style={{color:'#0F0F0F'}}>{item.title}</h4>
              <p className="text-lg " style={{fontWeight:'200', color:'#505050'}}>{item.desc}</p>
              {item.list && (
                <ul className="list-disc px-8">
                  {Object.values(item.list).map((listItem, index) => (
                    <li key={index} style={{fontWeight:'200',color:'#505050'}}>{listItem}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
    </section>
  );
};

export default PrivacyAndConditions;
