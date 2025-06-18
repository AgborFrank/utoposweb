"use client";
import React, { useState } from "react";
import { Plus, Minus } from 'lucide-react';

// Define the type for each FAQ item
type FaqItemProps = {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
};

// Data for the FAQ section
const faqData = [
    {
        question: "What is UtoposVerse?",
        answer: "UtoposVerse is a virtual reality platform that is mapped to the real world, allowing users to engage in real-time experiences and interactions with each other."
    },
    {
        question: "What is the UTOP token used for in UtoposVerse?",
        answer: "The UTOP token is used as the main means of land acquisition and real estate construction within the Utopos blockchain city. It can also be used for e-commerce, payments, and all daily financial transactions within the Utopos ecosystem."
    },
    {
        question: "How does UtoposVerse differ from other virtual reality platforms?",
        answer: "UtoposVerse stands out from other virtual reality platforms as it is built on Polygon (Matic) and offers a decentralized, safe, and fast metaverse where users can actually own their digital content."
    },
    {
        question: "How can users earn UTOP tokens in UtoposVerse?",
        answer: "Users can earn UTOP tokens through multiple income streams, such as earning a return on their properties, participating in Utopos bounties, collecting fees from visitors, creating classrooms, hosting live shows, and scheduling meetings with nearby business owners."
    },
    {
        question: "What are the benefits of owning real estate in UtoposVerse?",
        answer: "Owning real estate in UtoposVerse offers users the ability to build on their property, sell it, and even purchase real-world locations in Utopos city from their UtoposVerse account."
    },
    {
        question: "Will there be any job opportunities for the younger generation in the UtoposVerse?",
        answer: "Yes, UtoposVerse is creating new job opportunities for the younger generation in areas such as virtual real estate development, programming, content creation, and customer service, among others."
    },
    {
        question: "Can UtoposVerse be used for educational purposes?",
        answer: "Yes, UtoposVerse can be used for educational purposes as users can create classrooms and host virtual lessons within the platform."
    },
    {
        question: "How does UtoSwap simplify crypto portfolio management?",
        answer: "UtoSwap offers a decentralized exchange where users can buy, sell, and earn over 200 top cryptocurrencies with low fees and fast trading, making it easy to manage a crypto portfolio."
    },
];

// Reusable component for a single FAQ item (accordion)
const FaqItem: React.FC<FaqItemProps> = ({ question, answer, isOpen, onClick }) => {
    return (
      <div className="py-4 border border-1 border-white/15 rounded-md px-6">
        <button
          onClick={onClick}
          className="w-full flex justify-between items-center text-left"
          aria-expanded={isOpen}
        >
          <h3 className="text-md font-semibold text-white">{question}</h3>
          <span className="text-purple-400">
            {isOpen ? <Minus size={24} /> : <Plus size={24} />}
          </span>
        </button>
        <div
          className={`grid transition-all duration-500 ease-in-out ${
            isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
          }`}
        >
          <div className="overflow-hidden">
            <p className="pt-4 text-neutral-300 leading-relaxed">{answer}</p>
          </div>
        </div>
      </div>
    );
};


// The main FAQ section component
const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-gradient-br from-black text-white py-20 px-4 sm:px-6 lg:px-8 ">
      <div className="max-w-screen-xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-semibold">
            Frequently Asked Questions
          </h2>
        </div>
        <div className="md:max-w-[80%] mx-auto grid gap-4  grid-cols-1 md:grid-cols-2">
          {faqData.map((item, index) => (
            <FaqItem
              key={index}
              question={item.question}
              answer={item.answer}
              isOpen={openIndex === index}
              onClick={() => handleToggle(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;