"use client";
import Link from 'next/link';
import Image from 'next/image';

export default function BridgeHero() {
    return (
      <section
        style={{
          backgroundImage: "url('/assets/slides/bridge.webp')", // Replace with your image path
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className=" w-full h-full backdrop-blur-lg pb-10 pt-20">
          <div className="max-w-screen-xl mx-auto px-6">
            <div className="flex md:flex-row flex-col items-center justify-center">
              <div className="md:w-1/2 w-full space-y-6">
                <span className="inline-block bg-primary text-white text-md font-semibold px-3 py-1 rounded-full mb-4">
                  Utopos Bridge
                </span>
                <h1 className="md:text-5xl text-5xl text-white font-semibold">
                  Bridge UTOP between Solana and Polygon Chains
                </h1>
                <p className="text-white mb-4 md:mb-0">
                  Utopos bridge support 
                  cross-chain transfers, which means you can move your UTOP tokens 
                  between the Solana and Polygon chains without having to worry about 
                  fees or gas costs.  
                </p>
                <div className="cta mt-12">
                  <Link
                    href="https://www.utoswap.com/en"
                    target="_blank"
                    className="bg-purple-600 text-white font-semibold py-3 px-8 rounded-full text-lg hover:bg-purple-700 transition-all duration-300 shadow-lg hover:shadow-purple-500/40 transform hover:scale-105"
                  >
                    Bridge Assets
                  </Link>
                </div>
              </div>
              <div className="md:w-1/2">
                <Image
                  src="/assets/img/bridge.png"
                  alt="Abstract purple and blue digital background"
                  width={1200}
                  height={600}
                  className="inset-0 w-full h-full object-cover rounded-3xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}