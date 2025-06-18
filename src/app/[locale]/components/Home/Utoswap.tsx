import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

// This is a new component for the "UtoSwap" call-to-action section.
// It's designed to be placed over a background image or a textured section
// to achieve the desired visual effect from your screenshot.
export default function UtoSwapCta() {
  return (
    // The main container for the section.
    // We add padding and a background to give it some space and context.
    <div className="bg-black p-10 flex items-center justify-center ">
      <div className="relative w-full max-w-screen-xl">
        {/* Background Image */}
        {/* This is a placeholder image. Replace the `src` with the actual background image
            you want to use for this section. The blur effect will be applied on top of it. */}
        <Image
          src="/assets/slides/4.jpg" 
          alt="Abstract purple and blue digital background"
          width={1200}
          height={600}
          className="absolute inset-0 w-full h-full object-cover rounded-3xl"
        />

        <div className="relative bg-black/30 backdrop-blur-xl border border-white/20 rounded-3xl p-8 sm:p-12 text-center text-white overflow-hidden">
          {/* Inner content */}
          <div className="flex flex-col items-center justify-center">
            <div className="mb-4">
              <span className="bg-purple-500/20 text-purple-300 text-xs font-bold uppercase px-3 py-1 rounded-full">
                Beta Version
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-semibold mb-4">
              Swap Cryptocurrencies with UtoSwap
            </h2>
            <p className="max-w-2xl mx-auto text-base md:text-[15px] text-purple-200/80 mb-8">
              UtoSwap is a next-generation layer-2 decentralized exchange and Automated Market Maker that lets you swap MRC-20 tokens on Polygon (Matic) network, at near-zero gas fees.
            </p>
            <Link href="https://www.utoswap.com/en" target='_blank' className="bg-purple-600 text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-purple-700 transition-all duration-300 shadow-lg hover:shadow-purple-500/40 transform hover:scale-105">
              TRY UTOSWAP NOW
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
