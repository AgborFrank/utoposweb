import Image from "next/image";
import Link from "next/link";


export default function EarnUtop() {
  return (
    <section className="bg-gradient-to-tr from-black to-[#26013FFF]">
      <div className="max-w-screen-xl mx-auto px-4 py-10 sm:px-6 lg:px-8 border-1 bg-[#0A090D66] rounded-3xl border-purple-300/15">
        <div className="flex md:flex-row flex-col-reverse space-y-8 md:space-y-0 md:space-x-8 md:gap-32 items-center justify-center">
          <div className="md:w-1/2 w-full">
            <Image
              src="/assets/img/icon-colors.png"
              alt="lending"
              className="translate-3 "
              width={300}
              height={300}
            />
          </div>
          <div className="md:w-1/2 w-full flex flex-col space-y-3">
            <span className="inline-block bg-cyan-500 text-white text-md w-fit font-semibold px-3 py-1 rounded-full mb-4">
              Earn Rewards in UTOP
            </span>
            <h1 className="md:text-6xl text-5xl text-white font-semibold">
              Bonus UTOP token drop for first 2,500 players
            </h1>
            <p className="text-gray-300 pt-8">
              Join the Utopos community and earn UTOP tokens in the form of a
              bonus drop for the first 2,500 players to join the game.
            </p>
            <div className="cta mt-12">
              <Link
                href="https://kingfi.io/"
                target="_blank"
                className="bg-purple-600 text-white font-semibold py-3 px-8 rounded-full text-lg hover:bg-purple-700 transition-all duration-300 shadow-lg hover:shadow-purple-500/40 transform hover:scale-105"
              >
                Join Waiting List
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}