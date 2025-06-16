"use client";
import Link from 'next/link';
import Image from 'next/image';

export default function MetaHero() {
    return (
        <section 
            style={{
                backgroundImage: "url('/assets/slides/2.jpg')", // Replace with your image path
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
            }}
        >
             <div className=" w-full h-full backdrop-blur-lg pb-10 pt-20">
            <div className="max-w-screen-xl mx-auto px-6">
                <div className="flex md:flex-row flex-col items-center justify-center">
                    <div className="md:w-1/2 w-full space-y-6">
                        <span className="inline-block bg-primary text-white text-xs font-bold px-3 py-1 rounded-full mb-4">
                              Polygon PoS Support
                        </span>
                        <h1 className="md:text-5xl text-5xl text-white font-semibold">Simplify your crypto portfolio with UtoSwap</h1>
                        <p className="text-white mb-4 md:mb-0">With UtoSwap you can buy, sell and earn 200+ top cryptocurrencies with the worlds easiest-to-use DEX. Choose from a wide selection of coins, take advantage of low-fees and fast trading to make smart investments.</p>
                        <div className="cta mt-12">
                        <Link href="https://www.utoswap.com/en" target='_blank' className="bg-purple-600 text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-purple-700 transition-all duration-300 shadow-lg hover:shadow-purple-500/40 transform hover:scale-105">
              TRY UTOSWAP NOW
            </Link>
                        </div>
                    </div>
                    <div className="md:w-1/2">
                    <Image
                        src="/assets/img/swap.avif" 
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