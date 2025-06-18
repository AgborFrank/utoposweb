"use client";
import React, { useState } from "react";
import { Mail, User, MessageSquare, ChevronDown } from 'lucide-react';
import Image from "next/image";

// Define the type for the form state
interface FormState {
  name: string;
  email: string;
  category: string;
  message: string;
}

// Define the message categories
const messageCategories = [
    "General Inquiry",
    "Technical Support",
    "Partnership",
    "Feedback",
    "Media Request",
];

// The main Contact Us section component
const ContactUsSection: React.FC = () => {
  const [formState, setFormState] = useState<FormState>({
    name: "",
    email: "",
    category: messageCategories[0],
    message: "",
  });
  
  // Your Gmail address
  const recipientEmail = "your-email@gmail.com";

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };
  
  // This function constructs the mailto link
  const constructMailtoLink = () => {
    const { name, email, category, message } = formState;
    const subject = encodeURIComponent(`Contact Form: ${category} - ${name}`);
    const body = encodeURIComponent(
        `Name: ${name}\n\nEmail: ${email}\n\nMessage:\n${message}`
    );
    return `mailto:${recipientEmail}?subject=${subject}&body=${body}`;
  };

  return (
    <section className="bg-gradient-to-tr via-black from-purple-900 to-black text-white py-20 px-4 sm:px-6 lg:px-8" id="#form">
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center">
        <div className="text-start mb-12 md:w-1/2">
        <Image
                        src="/assets/img/message.webp" 
                        alt="Abstract purple and blue digital background"
                        width={600}
                        height={400}
                        className="inset-0 w-[400px] h-[300px] object-contain rounded-3xl"
                        />
          <h2 className="text-4xl md:text-5xl font-semibold">Contact Us</h2>
          <p className="text-neutral-400 mt-4">
            Have a question or want to work together? Fill out the form below.
          </p>
          
        </div>

        <div className="w-1/2">
        <form className="space-y-6 bg-black/20 border border-white/15 p-6 rounded-3xl">
          {/* Name Input */}
          <div className="relative">
            <User
              className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-500"
              size={20}
            />
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formState.name}
              onChange={handleInputChange}
              className="w-full bg-neutral-900 border border-neutral-700 rounded-lg py-3 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
            />
          </div>

          {/* Email Input */}
          <div className="relative">
            <Mail
              className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-500"
              size={20}
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formState.email}
              onChange={handleInputChange}
              className="w-full bg-neutral-900 border border-neutral-700 rounded-lg py-3 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
            />
          </div>

          {/* Category Select */}
          <div className="relative">
            <ChevronDown
              className="absolute right-4 top-1/2 -translate-y-1/2 text-neutral-500"
              size={20}
            />
            <select
              name="category"
              value={formState.category}
              onChange={handleInputChange}
              className="w-full appearance-none bg-neutral-900 border border-neutral-700 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
            >
              {messageCategories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>

          {/* Message Textarea */}
          <div className="relative">
            <MessageSquare
              className="absolute left-4 top-5 text-neutral-500"
              size={20}
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows={6}
              value={formState.message}
              onChange={handleInputChange}
              className="w-full bg-neutral-900 border border-neutral-700 rounded-lg py-4 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
            />
          </div>

          {/* Submit Button (as a link) */}
          <a
            href={constructMailtoLink()}
            className="w-full block text-center bg-purple-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-purple-700 transition-colors duration-300"
          >
            Submit
          </a>
        </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUsSection;