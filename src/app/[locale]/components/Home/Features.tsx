import React from 'react';


const GlobeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"></circle>
    <line x1="2" y1="12" x2="22" y2="12"></line>
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
  </svg>
);

const UsersIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
    <circle cx="9" cy="7" r="4"></circle>
    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
  </svg>
);

const EyeIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle>
    </svg>
);

const NavigationIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="3 11 22 2 13 21 11 13 3 11"></polygon>
    </svg>
);

const BriefcaseIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
    </svg>
);

const GiftIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="20 12 20 22 4 22 4 12"></polyline><rect x="2" y="7" width="20" height="5"></rect><line x1="12" y1="22" x2="12" y2="7"></line><path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"></path><path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"></path>
    </svg>
);

const ShieldIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
    </svg>
);

const CpuIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect><rect x="9" y="9" width="6" height="6"></rect><line x1="9" y1="1" x2="9" y2="4"></line><line x1="15" y1="1" x2="15" y2="4"></line><line x1="9" y1="20" x2="9" y2="23"></line><line x1="15" y1="20" x2="15" y2="23"></line><line x1="20" y1="9" x2="23" y2="9"></line><line x1="20" y1="14" x2="23" y2="14"></line><line x1="1" y1="9" x2="4" y2="9"></line><line x1="1" y1="14" x2="4"y2="14"></line>
    </svg>
);


// 1. Constant for Feature Data
const featuresData = [
  {
    icon: <GlobeIcon />,
    title: 'International Free Trade Zone',
    description: 'The City is planning to apply for several preferential designations including status as an international free trade zone. We are also seeking certifications regarding best practices for sustainable communities.',
  },
  {
    icon: <UsersIcon />,
    title: 'Utopos Metaverse',
    description: 'Utopos metaverse allows users to explore the city virtually, buy and sell land and operate business in a digital space through the "Dirt" layer that is powered by the ERTH Token.',
  },
  {
    icon: <EyeIcon />,
    title: 'Virtual Reality',
    description: 'Virtual Reality technology in allows you to inspect properties under constructions, explore land and real-estate properties with high-res VR visuals, inspections are easy.',
  },
  {
    icon: <NavigationIcon />,
    title: 'Virtual Tourism',
    description: 'Virtual tourism in Utopos City allow everyone in the real-world to explore important touristic sites in the virtual city through high resolution Virtual reality glasses.',
  },
  {
    icon: <BriefcaseIcon />,
    title: 'V-Gigs & V-Lancing',
    description: "From an impressive 3D teleconferencing capability, to the world's most advanced VR platform for freelancers and gigworkers across all technical and creative fields, Utopos City makes life easy.",
  },
  {
    icon: <GiftIcon />,
    title: 'Virtual Gaming',
    description: "From GTA-style vehicle chases and shootouts to treasure hunts and other crowd events, Utopos city will be the world's premium site for hyper-realistic v-gaming.",
  },
  {
    icon: <ShieldIcon />,
    title: 'The Digital Wild West',
    description: 'With blockchain-backed security and privacy, Blockchain City offers an ultimate 3D virtual relationship and dating community.',
  },
  {
    icon: <CpuIcon />,
    title: 'IOT & IOB Support',
    description: 'Fueled by AI, blockchain, VR, and robotic technologies, the City will be a testbed for developing a comprehensive Internet of Things to cover an entire urban area.',
  },
];

// 2. FeatureCard Component
const FeatureCard = ({ icon, title, description }) => (
  <div className="bg-gray-900/50 p-6 rounded-2xl border border-purple-500/20 shadow-lg transition-all duration-300 hover:border-purple-500/50 hover:shadow-purple-500/10 hover:-translate-y-1">
    <div className="text-purple-400 mb-4">
      {icon}
    </div>
    <h3 className="text-lg font-semibold text-white mb-2 tracking-wider">{title}</h3>
    <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
  </div>
);


// 3. Main Features Component
export default function Features() {
  return (
    <section className="bg-black py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 md:max-w-[80%] mx-auto">
          <h2 className="text-4xl md:text-5xl font-semibold text-white">
          Key Features of UTOP Platform
          </h2>
          <p className="mt-4  mx-auto text-[16px] text-gray-400">
          Now is the time to build a new economic system from the ground up, one city at a time, based on blockchain and cryptocurrency. Blockchain technology offers new hope for individuals, businesses, and communities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuresData.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
