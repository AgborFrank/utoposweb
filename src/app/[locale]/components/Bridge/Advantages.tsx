"use client";
import React from "react";
import { SvgIcon } from "@mui/material"; // For material icons usage

type ConnectCardProps = {
  icon: "bridge" | "speed" | "security" | "multi";
  title: string;
  description: string;
  stats: string;
};

// --- SVG Icons ---

const BridgeIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <SvgIcon {...props} viewBox="0 0 24 24" fill="currentColor">
    <path d="M21 13v-2h-2V9a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v2H3v2h18zm-4-4v2H7V9h10zm-2 6v2H9v-2h6z" />
  </SvgIcon>
);

const SpeedIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <SvgIcon {...props} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 14h-2v-2h2v2zm2.07-7.75l-1.41 1.41c-.39-.39-1.02-.39-1.41 0s-.39 1.02 0 1.41l1.41 1.41c-.78.78-.78 2.05 0 2.83s2.05.78 2.83 0 1.41-1.41 0-2.83z" />
  </SvgIcon>
);

const SecurityIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <SvgIcon {...props} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z" />
  </SvgIcon>
);

const MultiIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <SvgIcon {...props} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 6c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm6 9H6v-1.5c0-2.5 4-4.5 6-4.5s6 2 6 4.5V18z" />
  </SvgIcon>
);

const ConnectCard: React.FC<ConnectCardProps> = ({ icon, title, description, stats }) => {
  const renderIcon = () => {
    switch (icon) {
      case "bridge":
        return <BridgeIcon className="w-6 h-6 text-white mr-3" aria-hidden="true" />;
      case "speed":
        return <SpeedIcon className="w-6 h-6 text-white mr-3" aria-hidden="true" />;
      case "security":
        return <SecurityIcon className="w-6 h-6 text-white mr-3" aria-hidden="true" />;
      case "multi":
        return <MultiIcon className="w-6 h-6 text-white mr-3" aria-hidden="true" />;
      default:
        return null;
    }
  };

  return (
    <article className="flex flex-col bg-neutral-900 rounded-xl p-6 shadow-md transition-transform hover:scale-[1.03] focus-within:scale-[1.03] duration-300 ease-in-out max-w-full min-w-[14rem]">
      <div className="flex items-center mb-5">
        {renderIcon()}
        <h3 className="text-white font-semibold text-lg">{title}</h3>
      </div>
      <p className="text-neutral-400 text-sm flex-grow leading-relaxed">{description}</p>
      <div className="mt-6 text-xs font-semibold text-neutral-500">{stats}</div>
    </article>
  );
};

const AdvantageSection: React.FC = () => {
  return (
    <section
      aria-labelledby="connect-heading"
      className="bg-black text-white px-6 py-10 sm:px-10 sm:py-14 mx-auto"
    >
      <div className="max-w-screen-xl mx-auto mb-12">
        <h2
          id="connect-heading"
          className="text-4xl font-semibold mb-3 leading-tight max-w-full"
        >
          Why Utopos Bridge?
        </h2>
        <p className="text-neutral-400 max-w-2xl text-base leading-relaxed">
          Utopos bridge is a one-stop-shop for all your Utopos needs,
          making it easy to access and use your tokens on any platform you
          choose.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4 max-w-screen-xl mx-auto">
        <ConnectCard
          icon="bridge"
          title="Cross-Chain Connectivity"
          description="Seamlessly bridge UTOP tokens between Solana and Polygon, enabling flexible asset movement across ecosystems."
          stats="SOLANA & POLYGON SUPPORTED"
        />
        <ConnectCard
          icon="speed"
          title="Fast Transactions"
          description="Experience rapid token transfers with minimal latency, optimized for efficiency across both networks."
          stats="LOW LATENCY"
        />
        <ConnectCard
          icon="security"
          title="Secure Bridging"
          description="Benefit from robust security protocols ensuring safe and transparent token transfers."
          stats="TRUSTED PROTOCOLS"
        />
        <ConnectCard
          icon="multi"
          title="Multi-Token Support"
          description="Bridge not only UTOP but also other major tokens, expanding your cross-chain possibilities."
          stats="MULTIPLE TOKENS"
        />
      </div>
    </section>
  );
};

export default AdvantageSection;