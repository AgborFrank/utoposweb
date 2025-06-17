import Image from "next/image";


export default function EarnUtop() {
  return (
    <section className="bg-gradient-to-tl from-black to-black">
      <div className="max-w-screen-xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex md:flex-row flex-col-reverse space-y-8 md:space-y-0 md:space-x-8 md:gap-32 items-center justify-center">
        <div className="md:w-1/2 w-full">
                <Image src="/assets/img/gem.webp" alt="lending" className="" width={400} height={400} />
            </div>
            <div className="md:w-1/2 w-full flex flex-col space-y-3">
                <span className="inline-block bg-green-500 text-white text-md w-fit font-semibold px-3 py-1 rounded-full mb-4">
                    Earn Rewards in UTOP          
                </span>
                <h1 className="md:text-6xl text-5xl text-white font-semibold">Substainable to Green Future and Earn UTOP
                </h1>
                <p className="text-gray-300 pt-8">
                Utopos is a blockchain-based carbon credit token that drives down emission and promotes sustainability and green living through reward mechanisms.
                </p>
            </div>
            
        </div>
      </div>
    </section>
  );
}