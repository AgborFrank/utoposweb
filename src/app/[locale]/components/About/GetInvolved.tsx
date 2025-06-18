"use client";
import Image from 'next/image';
import React from 'react';

interface ChatMessage {
  user: string;
  message: string;
  avatar: string;
}

const chatMessages: ChatMessage[] = [
  {
    user: 'Mateusz',
    message: 'Huge update on tokenomics!',
    avatar: '',
  },
  {
    user: 'Mia',
    message: 'Exciting news!',
    avatar: '',
  },
  {
    user: 'Carlos',
    message: '🔥🚀',
    avatar: '',
  },
];

const GetInvolved: React.FC = () => {
  return (
    <section className="bg-[#0A0A0A] text-white py-12 px-6 md:px-12 lg:px-24  mx-auto">
      <div className="max-w-screen-xl mx-auto mb-12">
        <h2 className="text-3xl md:text-5xl font-semibold mb-2">
          Utopos City is Built on 3 Conceptual Layers
        </h2>
        <p className="text-gray-400 text-lg">
          The City uses a three-token Polygon-compliant system. It’s scalable
          and flexible for the possibility of migrating to a proprietary new
          blockchain / hard fork.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-screen-xl mx-auto">
        {/* Governance */}
        <article className="bg-[#121212] rounded-xl p-6 flex flex-col items-center text-start shadow-lg transition-transform hover:scale-[1.03] focus-within:scale-[1.03] duration-300 ease-in-out overflow-hidden">
          <h3 className="text-3xl font-semibold mb-4 self-start">
            01. Digital
          </h3>
          <p className="text-gray-500 mb-6 self-start text-sm leading-relaxed">
            UTOP is the native token for the digital layer, usable for
            city-to-city trade with other smart cities worldwide. $UTOP is
            designed to track the performance of underlying business, regardless
            of whether they&#39re transacting with Ether or other
            distributed-ledger systems.
          </p>
          <div className="flex justify-center w-full">
          <div
            aria-label="Polygon grants program stats"
            className="relative  rounded-full flex flex-col items-center justify-center  via-transparent to-transparent mx-auto"
            
          >
            <Image
              src="/assets/img/dirts.svg"
              width={600}
              height={600}
              alt="A classical archway symbolizing governance with Polygon logo inside"
              className="w-full h-[200px] -trans"
              loading="lazy"
              onError={(e) => {
                (e.target as HTMLImageElement).src = "/assets/img/moon.avif";
              }}
            />
          </div>
          </div>
          <div className="uppercase text-center">
          <h2 className='uppercase md:text-6xl text-4xl text-center text-cyan-500'>$UTOP</h2>
          <p className='text-gray-500 mb-6 text-sm leading-5 font-semibold tracking-widest'>Utopos Token</p>
          </div>
        </article>

        {/* Forum */}
        <article className="bg-[#121212] rounded-xl p-6 flex flex-col shadow-lg transition-transform hover:scale-[1.03] focus-within:scale-[1.03] duration-300 ease-in-out">
          <h3 className="text-3xl font-semibold mb-4">02. Dirt</h3>
          <p className="text-gray-500 mb-6 text-sm leading-relaxed">
            Earth is a non-asset-backed, non-fungible token(NFT) compliant with
            the ERC-721 standard. Earth represents ownership of a fractional,
            digitized 99-year lease on the land underneath the City.
          </p>
          <div className="flex flex-col gap-4 mt-auto">
          <div
            aria-label="Polygon grants program stats"
            className="relative  rounded-full flex flex-col items-center justify-center  via-transparent to-transparent mx-auto"
            
          >
          <Image
              src="/assets/img/earthc.svg"
              width={600}
              height={300}
              alt="A classical archway symbolizing governance with Polygon logo inside"
              className="w-full h-[200px] object-contain"
              loading="lazy"
              onError={(e) => {
                (e.target as HTMLImageElement).src = "/assets/img/moon.avif";
              }}
            />
          </div>
          </div>
          <div className="uppercase text-center">
          <h2 className='uppercase md:text-6xl text-4xl text-center text-green-600'>$ERTH</h2>
          <p className='text-gray-500 mb-6 text-sm leading-5 font-semibold tracking-widest'>Earth Token</p>
          </div>
        </article>

        {/* Grants */}
        <article className="bg-[#121212] rounded-xl p-6 flex flex-col items-center text-start shadow-lg transition-transform hover:scale-[1.03] focus-within:scale-[1.03] duration-300 ease-in-out space-y-6">
          <h3 className="text-3xl font-semibold self-start">
            03. Administration
          </h3>
          <p className="text-gray-500 text-sm leading-relaxed self-start">
            The Service Token governs the Administrative layer and will be used
            for Consensus & voting, referendum fees, staking and many other
            applications.
          </p>
          <div
            aria-label="Polygon grants program stats"
            className="relative  rounded-full flex flex-col items-center justify-center  via-transparent to-transparent mx-auto"
            
          >
             <Image
              src="/assets/img/serv.svg"
              width={600}
              height={600}
              alt="A classical archway symbolizing governance with Polygon logo inside"
              className="w-full h-[250px] -trans"
              loading="lazy"
              onError={(e) => {
                (e.target as HTMLImageElement).src = "/assets/img/moon.avif";
              }}
            />
          </div>
          <div className="uppercase text-center">
          <h2 className='uppercase md:text-6xl text-4xl text-center text-primary'>$SERV</h2>
          <p className='text-gray-500 mb-6 text-sm leading-5 font-semibold tracking-widest'>Service Token</p>
          </div>
        </article>
      </div>
    </section>
  );
};

export default GetInvolved;

