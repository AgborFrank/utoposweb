"use client";
import Link from 'next/link';
import Image from 'next/image';

export default function CommunityHero() {
    return (
      <section
        style={{
          backgroundImage: "url('/assets/slides/2.png')", // Replace with your image path
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
                  Unifying the Utopos crypto community
                </h1>
                <p className="text-white mb-4 md:mb-0">
                  We understand that the success in realising the Utopos
                  blockchain city requires a strong and diverse community. We
                  are committed to building a community that is inclusive,
                  diverse, and supportive, where everyone can contribute to the
                  growth and success of the Utopos ecosystem. We believe that
                  this community will be the key to unlocking the full potential
                  of the Utopos blockchain
                </p>
                <div className="cta mt-12">
                  <Link
                    href="https://t.me/utoposofficialgroup"
                    target="_blank"
                    className="bg-purple-600 text-white font-semibold py-3 px-8 rounded-full text-lg hover:bg-purple-700 transition-all duration-300 shadow-lg hover:shadow-purple-500/40 transform hover:scale-105"
                  >
                    Join On Telegram
                  </Link>
                </div>
              </div>
              <div className="md:w-1/2">
                <Image
                  src="/assets/img/commune.webp"
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