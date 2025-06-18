"use client";
import Link from 'next/link';
import Image from 'next/image';

export default function DexAdvantage() {
    return (
        <section className="bg-black p-10 flex items-center justify-center">
      <div className="relative w-full max-w-screen-xl">
            <Image
          src="/assets/slides/2.png" 
          alt="Abstract purple and blue digital background"
          width={1200}
          height={600}
          className="absolute inset-0 w-full h-full object-cover rounded-3xl"
        />
             <div className=" w-full h-full backdrop-blur-xl border border-white/20 rounded-3xl pb-6 pt-6">
            <div className="max-w-screen-xl mx-auto px-6">
                <div className="flex md:flex-row flex-col items-center justify-center">
                    <div className="md:w-1/2 w-full space-y-6">
                        
                        <h1 className="md:text-5xl text-5xl text-white font-semibold">We are building the most friendly DEX exchange with UtoSwap</h1>
                        <p className="text-white mb-4 md:mb-0">UtoSwap is a DEX exchange for Utopos token holders. It will also support cross-chain trading with other blockchains such as ETH, BTC, EOS and etc. We aim to build the most friendly and secure exchange with lowest fees that can be used by regular people.</p>
                        
                    </div>
                    <div className="md:w-1/2">
                    <Image
                        src="/assets/img/swap-ui.png" 
                        alt="Abstract purple and blue digital background"
                        width={1200}
                        height={600}
                        className="inset-0 w-full h-full object-cover rounded-3xl"
                        />
                    </div>
                </div>
            </div>
           
</div>
            </div>
        </section>
    );
}