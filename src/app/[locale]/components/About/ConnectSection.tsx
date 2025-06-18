"use client";
import React from "react";
import { SvgIcon } from "@mui/material"; // For material icons usage

type ConnectCardProps = {
  icon: "discord" | "facebook" | "x";
  title: string;
  description: string;
  stats: string;
};

// --- SVG Icons ---

const DiscordIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <SvgIcon {...props} viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.317 4.3698a19.7913 19.7913 0 0 0-4.8851-1.5152.0741.0741 0 0 0-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 0 0-.0785-.0371 19.7363 19.7363 0 0 0-4.8852 1.515.0699.0699 0 0 0-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 0 0 .0312.0561 19.9 19.9 0 0 0 5.9949 3.0294.0777.0777 0 0 0 .0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 0 0-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 0 1-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 0 1 .0786-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 0 1 .0815.0095c.1202.099.246.1981.372.2924a.0766.0766 0 0 1-.0065.1276 12.2986 12.2986 0 0 1-1.873.8914.0766.0766 0 0 0-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 0 0 .0842.0286 19.9023 19.9023 0 0 0 6.005-3.0293.081.081 0 0 0 .0305-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 0 0-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1824 0-2.1568-1.0857-2.1568-2.419 0-1.3332.9554-2.4189 2.1568-2.4189 1.2108 0 2.1757 1.0952 2.1569 2.419 0 1.3332-.946 2.4189-2.1569 2.4189z" />
  </SvgIcon>
);

const XIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <SvgIcon {...props} viewBox="0 0 24 24" fill="currentColor" >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </SvgIcon>
);

const FacebookIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <SvgIcon {...props} viewBox="0 0 24 24" fill="currentColor">
        <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.128 22 16.991 22 12z" />
    </SvgIcon>
);


const ConnectCard: React.FC<ConnectCardProps> = ({ icon, title, description, stats }) => {
  const renderIcon = () => {
    switch (icon) {
      case "discord":
        return <DiscordIcon className="w-6 h-6 text-white mr-3" aria-hidden="true" />;
      case "x":
        return <XIcon className="w-6 h-6 text-white mr-3" aria-hidden="true" />;
      case "facebook":
        return <FacebookIcon className="w-6 h-6 text-white mr-3" aria-hidden="true" />;
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

const ConnectSection: React.FC = () => {
  return (
    <section
      aria-labelledby="connect-heading"
      className="bg-black text-white px-6 py-10 sm:px-10 sm:py-14  mx-auto"
    >
      <div className="max-w-screen-xl mx-auto mb-12">
        <h2
          id="connect-heading"
          className="text-4xl font-semibold mb-3 leading-tight max-w-full"
        >
          Connect
        </h2>
        <p className="text-neutral-400 max-w-2xl text-base leading-relaxed">
          Join the Utopos community across various social media platforms to
          stay connected and engaged with the latest news and updates.
        </p>
      </div>
      <div
        className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4 max-w-screen-xl mx-auto"
      >
        <ConnectCard
          icon="discord"
          title="Utopos Discord"
          description="Hub to hang, find info on apps and projects, and get support."
          stats="180K MEMBERS"
        />
        <ConnectCard
          icon="facebook"
          title="Utopos Facebook"
          description="Follow the research and development of the Utopos city and related DeFi gateway, lending protocol and more"
          stats="13K FOLLOWERS"
        />
        <ConnectCard
          icon="x"
          title="Utopos on X"
          description="Follow for news, updates, and good vibes"
          stats="2M FOLLOWERS"
        />
        <ConnectCard
          icon="x"
          title="Utopos Foundation"
          description="Follow to get updates on Protocols & Governance."
          stats="177.6K FOLLOWERS"
        />
      </div>
    </section>
  );
};

export default ConnectSection;
