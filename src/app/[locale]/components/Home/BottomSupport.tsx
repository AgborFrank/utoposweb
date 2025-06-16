"use client";
import React from 'react';
import { Icon } from '@iconify/react';

const DropmeSupport: React.FC = () => {
  // Constant array of support items
  const supportItems = [
    {
      icon: "mdi:headset",
      title: "Customer Support",
      description: "Contact us via live-chat, email, and phone",
      href: "https://www.dropme.com/support/contact/",
      ariaLabel: "Customer Support,Contact us via live-chat, email, and phone",
    },
    {
      icon: "mdi:car",
      title: "Ride Assistance",
      description: "Get help with your rides and safety, find your lost items",
      href: "https://www.dropme.com/support/ride-assistance/",
      ariaLabel: "Ride Assistance,Get help with your rides and safety",
    },
    {
      icon: "mdi:book",
      title: "User Guides",
      description: "Find and download your Dropme app guide",
      href: "https://www.dropme.com/support/user-guide/",
      ariaLabel: "User Guides,Find and download your Dropme app guide",
    },
    {
      icon: "mdi:frequently-asked-questions",
      title: "FAQ",
      description: "Search for help with Dropme services",
      href: "https://www.dropme.com/support/faq/",
      ariaLabel: "FAQ,Search for help with Dropme services",
    },
  ];

  return (
    <section className="grid grid-cols-1 gap-6 mx:p-6 p-4 bg-white pt-20 pb-20">
      <div className="max-w-screen-xl mx-auto">
        <h3 className="text-3xl font-bold text-gray-800 mb-9 text-center">Dropme Support</h3>
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 md:gap-6 gap-3 ">
          {supportItems.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center md:p-4 px-2  cursor-pointer"
              role="link"
              tabIndex={-1}
              aria-label={item.ariaLabel}
            >
              <div className="flex items-center justify-center w-20 h-20 mb-4">
                <Icon icon={item.icon} width="80" height="80" className="text-gray-400 w-24 h-24" />
              </div>
              <div className="text-center">
                <a
                  className="text-xl font-semibold text-black text-center hover:text-gray-600 transition-colors"
                  href={item.href}
                >
                  {item.title}
                </a>
              </div>
              <div className="text-[16px] text-gray-500 mt-2 text-center" aria-hidden="true">
                {item.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DropmeSupport;