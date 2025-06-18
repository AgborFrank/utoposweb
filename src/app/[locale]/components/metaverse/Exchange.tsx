"use client";
import React from 'react';
import { ArrowRightLeft, Droplets, Zap, Globe } from 'lucide-react';

// Define the type for the props of a single feature card
// Added 'icon' property to include an icon component for each card
interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

// Data for the feature cards, now including an icon for each feature.
const Exchange: FeatureCardProps[] = [
  {
    title: 'Decentralized Exchange',
    description: 'UtoSwap is a decentralized exchanger network that allows its users to exchange fast, safe, and reliable cryptocurrency on-chain and token-to-token in a fully decentralized way.',
    icon: <ArrowRightLeft size={36} className="text-primary" />,
  },
  {
    title: 'Supply Liquidity',
    description: 'Liquidity providers are key to the success of an exchange. They provide funding to traders wanting to trade with leverage, and in exchange they earn a portion of the daily interest payments and rebate on fees.',
    icon: <Droplets size={36} className="text-primary" />,
  },
  {
    title: 'Instant Withdrawals',
    description: 'As a trader who utilizes the Utopos DEX, you may withdraw your funds at any time. We utilize advanced technology to ensure instant and safe payout to our traders. The Utopos DEX platform is designed to assist traders who want to withdraw funds from their trading accounts.',
    icon: <Zap size={36} className="text-primary" />,
  },
  {
    title: 'Trade from anywhere',
    description: 'We are preparing a set of necessary tools in our secure app and wallet with a clear interface.',
    icon: <Globe size={36} className="text-primary" />,
  },
];


// Reusable FeatureCard component, updated with Polygon-inspired styling
const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, icon }) => {
  return (
    // Gradient border effect: A parent div with a gradient background and padding
    // creates the border for the inner child div.
    <div className="relative p-px rounded-2xl bg-gradient-to-b from-white/10 to-transparent hover:from-white/20 transition-all duration-300">
        <div className="bg-[#111111] h-full w-full p-8 rounded-[15px]">
            {/* Icon container */}
            <div className="mb-6 w-16 h-16 bg-gray-800/50 rounded-lg flex items-center justify-center border border-white/10">
                {icon}
            </div>
            <h3 className="text-xl md:text-2xl font-semibold text-white mb-4">{title}</h3>
            <p className="text-gray-300 leading-relaxed">{description}</p>
        </div>
    </div>
  );
};


// Main section component that lays out the Exchange
const ExchangeSection: React.FC = () => {
  return (
    <section className="bg-gradient-to-br from-[#1d1c20] to-black text-white py-20 px-6 sm:px-6 lg:px-8 ">
      <div className="max-w-screen-xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h4 className="text-lg font-semibold text-purple-400 tracking-wider">
            Utopos Exchange
          </h4>
          <h2 className="text-5xl md:text-5xl font-semibold mt-4 text-white">
            A Decentralized Trading Platform
          </h2>
        </div>

        {/* Exchange Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {Exchange.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExchangeSection;