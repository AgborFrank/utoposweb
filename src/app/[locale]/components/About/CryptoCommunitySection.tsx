"use client";
import React from 'react';
import { MdSupport } from 'react-icons/md';
import { FaDiscord } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';



const CryptoCommunitySection: React.FC = () => {
  return (
    <section className='py-20'>
        <div className="bg-gradient-to-r from-purple-900 via-black to-black relative py-16 px-6 sm:px-10 md:px-16 lg:px-24 rounded-3xl max-w-screen-xl mx-auto">
      <div className="flex flex-col md:flex-row md:gap-12 lg:gap-20">
        {/* Left Content */}
        <div className="flex-1 flex flex-col justify-center text-white mb-12 md:mb-0 max-w-xl">
          <h2 className="text-4xl sm:text-5xl font-semibold leading-tight mb-6">
            Future of Urban Living with Utopos City
          </h2>
          <p className="text-gray-300 mb-10 leading-relaxed">
            Joining Utopos means joining an ever-expanding, aggregated network of chains
          </p>

          <div className="flex flex-wrap gap-6">
            <a
              href="#"
              className="inline-flex items-center gap-2 bg-purple-700 hover:bg-purple-800 transition-colors rounded-full px-6 py-3 font-medium text-white shadow-lg"
              aria-label="Join Utopos Discord"
            >
              <FaDiscord size={20} aria-hidden="true" />
              Join Utopos Discord
            </a>
            <Link
              target='_blank'
              href="https://t.me/utoposofficialgroup"
              className="inline-flex items-center gap-2 bg-white text-black hover:bg-gray-200 transition-colors rounded-full px-6 py-3 font-medium shadow-lg"
              aria-label="Get Support"
            >
              <MdSupport size={24} aria-hidden="true" />
              Get Support
            </Link>
          </div>
        </div>

        {/* Right Image Masonry Grid */}
        <div className="flex-1  gap-4 md:gap-6 rounded-3xl overflow-hidden">
        <Image
              src="/assets/img/hero-stripea.svg"
              width={800}
              height={800}
              alt="A classical archway symbolizing governance with Polygon logo inside"
              className="w-full h-full -trans"
              loading="lazy"
              onError={(e) => {
                (e.target as HTMLImageElement).src = "/assets/img/moon.avif";
              }}
            />
        </div>
      </div>
    </div>
    </section>
  );
};

export default CryptoCommunitySection;
