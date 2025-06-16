import Image from 'next/image';


export default function UtopTrade(){
    return (
      <>
        <section className="bg-gradient-to-r from-[#1d1c20] to-black py-8 md:px-0 px-6">
          <div className="max-w-screen-xl mx-auto flex flex-row md:gap-6">
            <div className="hidden md:block w-2/12 bg-white/10 border border-white/20 rounded-4xl">
              <Image
                src="/assets/img/swap_01.webp"
                alt="Utoswap"
                width={200}
                height={200}
                className="w-[200px] h-[200px] object-contain"
              />
            </div>
            <div className="text flex flex-col space-y-4 w-10/12">
              <h3 className="text-3xl font-semibold text-white">
                Buy, Sell, Earn, and Trade, 200+ top cryptocurrencies with the
                worlds easiest-to-use DEX.
              </h3>
              <p className="text-[15px] text-gray-300">
                UtoSwap is a cryptocurrency exchange that makes it easy to buy,
                sell, earn and trade 150+ cryptocurrencies. With a simple but
                powerful user interface and features such as &apos;instant
                login&apos;, you can access the wealth of potential that
                blockchain technology promises. UtoSwap puts the power of
                exchange in the hands of everyone.
              </p>
            </div>
          </div>
        </section>
      </>
    );
}