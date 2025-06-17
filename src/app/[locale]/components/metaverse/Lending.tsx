import Image from "next/image";


export default function Lending() {
  return (
    <section className="bg-gradient-to-tl from-black to-black">
      <div className="max-w-screen-xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex md:flex-row flex-col-reverse space-y-8 md:space-y-0 md:space-x-8 md:gap-32 items-center justify-center">
            <div className="md:w-1/2 w-full flex flex-col space-y-3">
            <span className="inline-block bg-primary text-white text-md w-fit font-semibold px-3 py-1 rounded-full mb-4">
                              Utopos Lending Protocol
                        </span>
                <h1 className="md:text-6xl text-5xl text-white font-semibold">Utopos Crypto Lending Protocol</h1>
                <p className="text-gray-300 pt-8">Utopos Crypto Lending offers you a unique opportunity to make money on your crypto assets! You can safely lend them through our service, with no risks. Lend different coins or tokens and earn profit with daily payments. In addition, Utopos Crypto Lending also offers an additional program for active investors with rate higher than the average interests rate in the market.

                </p>
            </div>
            <div className="md:w-1/2 w-full">
                <Image src="/assets/img/give.png" alt="lending" className="" width={400} height={400} />
            </div>
        </div>
      </div>
    </section>
  );
}