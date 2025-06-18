import Image from "next/image";
import Link from "next/link";


export default function BlockChains(){
  const Stats = [
    {
      title: "Total Supply",
      value: "10T"
    },
    {
      title: "Total Holders",
      value: "1000+"
    },
    {
      title: "Blockchain",
      value: "Polygon"
    },
    {
      title: "Ticker",
      value: "UTOP"
    }
    
    
  ]
    return (
      <section className="bg-black px-6 md:py-20 py-8">
        <div className="max-w-screen-xl mx-auto">
          <div className="pt-6 md:max-w-[50%] mb-6">
            <h1 className="md:text-5xl text-4xl font-semibold text-white">
              UTOP Current Support Blockchains
            </h1>
          </div>
          <div className="grid md:grid-cols-2 grid-cols-1 md:gap-12 gap-4 py-6">
            <div className="rounded-3xl hover:bg-white/15 flex flex-col space-y-3 border-1 border-white/30 bg-white/10 px-6 py-6">
              <Image
                src="/assets/img/full-polygon-logo.png"
                alt="Apple Store"
                width={120}
                height={50}
                className="w-[120px] h-[40px] object-contain"
              />
              <h2 className="md:text-3xl text-2xl font-semibold text-white">
                Polygon PoS
              </h2>
              <div className="flex md:flex-wrap flex-col justify-between gap-6">
                <p className=" text-[14px] text-gray-400 md:max-w-[70%]">
                  UTOP token uses the ERC-20 standard token. It is used to pay
                  for gas fees and to stake on the Polygon network.
                </p>
                <div className="cta flex gap-3">
                  <Link
                    href="https://polygonscan.com/token/0x0946C90058cE01d734B9e770FFCfD0C029F83709"
                    target="_blank"
                    className="bg-green-500 hover:bg-white/15 text-black hover:text-white text-normal rounded-full px-4 py-2 text-sm"
                  >
                    Polygon scan
                  </Link>
                  <Link
                    href="https://utoswap.com/"
                    target="_blank"
                    className="bg-white/10 hover:bg-white/15 text-white rounded-full px-4 py-2 text-sm"
                  >
                    Migrate to UTOP v3
                  </Link>
                </div>
              </div>
            </div>
            <div className="rounded-3xl hover:bg-white/15 flex flex-col space-y-3 border-1 border-white/30 bg-white/10 px-6 py-6">
              <Image
                src="/assets/img/solana.svg"
                alt="Google Play"
                width={120}
                height={50}
                className="w-[120px] h-[40px] object-fit"
              />
              <h2 className="md:text-3xl text-2xl font-semibold text-white">
                Solana <span className="bg-purple-500/20 text-primary text-sm rounded-lg py-1 pulse-button px-3" style={{ color: '#AB2DFFFF' }}>New</span>
              </h2>
              <div className="flex md:flex-col flex-col justify-between gap-6">
                <p className=" text-[14px] text-gray-400">
                  UTOP is available on the Solana blockchain. It is a DeFi token
                  that can be used to pay for gas fees and to stake on the
                  Solana network.
                </p>
                <div className="cta flex md:gap-3 gap-3">
                  <Link
                    href="https://explorer.solana.com/address/Hk5938VDYidqm4KeTenbkrADbD5FSqeduRKEYNaGQHZS"
                    target="_blank"
                    className="bg-green-300/10 text-white rounded-full px-4 py-2 text-sm"
                  >
                    Solscan
                  </Link>
                  <Link
                    href="https://utoswap.com/"
                    target="_blank"
                    className="bg-white/10 hover:bg-white/15 text-white rounded-full px-4 py-2 text-sm"
                  >
                    Buy UTOP on Raydium
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-screen-xl mx-auto pt-8">
          <div className="grid grid-cols-2 md:grid-cols-4 md:gap-10 gap-3">
            {Stats.map((stat, index) => (
              <div
                key={index}
                className="text-center shadow-md transition-transform hover:scale-[1.03] focus-within:scale-[1.03] duration-300 ease-in-out space-y-2 bg-gradient-to-tl via-black border-1 border-purple-200/15 from-purple-600/20 to-purple-700/30 rounded-xl p-4"
              >
                <h1 className="md:text-5xl text-4xl font-semibold text-white">
                  {stat.value}
                </h1>
                <h3 className="font-light">{stat.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
}