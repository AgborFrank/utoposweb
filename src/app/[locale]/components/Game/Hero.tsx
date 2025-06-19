"use client";
import Link from 'next/link';
import Image from 'next/image';

export default function GameHero() {
    return (
      <section
        style={{
          backgroundImage: "url('/assets/slides/9.jpg')", // Replace with your image path
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className=" w-full h-full backdrop-blur-lg pb-10 pt-20">
          <div className="max-w-screen-xl mx-auto px-6">
            <div className="flex md:flex-row flex-col items-center justify-center">
              <div className="md:w-1/2 w-full space-y-6">
                
                <h1 className="md:text-6xl text-5xl text-white font-semibold">
                KingFi Chess – Strategy Meets Sovereignty
                </h1>
                <p className="text-white mb-4 md:mb-0">
                The next-gen on-chain chess game with real rewards and real stakes.
                </p>
                <div className="cta mt-12">
                  <Link
                    href="https://kingfi.io/"
                    target="_blank"
                    className="bg-purple-600 text-white font-semibold py-3 px-8 rounded-full text-lg hover:bg-purple-700 transition-all duration-300 shadow-lg hover:shadow-purple-500/40 transform hover:scale-105"
                  >
                    Visit KingFi Game
                  </Link>
                </div>
              </div>
              <div className="md:w-1/2">
                <Image
                  src="/assets/img/chess.png"
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