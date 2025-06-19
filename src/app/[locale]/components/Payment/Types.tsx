import { Icon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";


export default function PaymentTypes(){

    const ArrowRight = () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right-icon lucide-arrow-right text-green-300"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
      );
  const Stats = [
    {
      title: "Enjoy low transaction fees",
      value: "Fees"
    },
    {
      title: "Fast transactions across networks",
      value: "Fast"
    },
    {
      title: "Your transaction is highly secured",
      value: "Secure"
    },
    {
      title: "Supported cryptocurrencies including our native UTOP",
      value: "100+"
    }
    
    
  ]
    return (
      <section className="bg-black px-6 md:py-20 py-8">
        <div className="max-w-screen-xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="pt-6 md:max-w-[50%] mb-6">
              <h1 className="md:text-5xl text-4xl mb-4 font-semibold text-white">
                Utopos Merchants Gateway
              </h1>
              <p className="text-gray-400">
                The Utopos merchant payment gateway is a crypto payment solution
                that allows business to accept crypto payments from their
                customers both online and offline.
              </p>
            </div>
            <div className="ac ">
              <Link href="/" className="flex gap-3">
                Signup now
                <ArrowRight />
              </Link>
            </div>
          </div>
          <div className="grid md:grid-cols-2 grid-cols-1 md:gap-12 gap-4 py-6">
            <div className="rounded-3xl hover:bg-white/15 flex flex-row gap-4 space-y-3 border-1 border-white/30 bg-white/10 px-6 py-6">
              <div className="w-1/3">
                <Image
                  src="/assets/img/utopay.avif"
                  alt="Apple Store"
                  width={300}
                  height={100}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="w-3/4">
                <h2 className="md:text-3xl text-2xl font-semibold text-white">
                  Accept UTOP Tokens
                </h2>
                <div className="flex md:flex-wrap flex-col justify-between gap-6 pt-4">
                  <p className=" text-[14px] text-gray-400 md:max-w-[100%]">
                    Allow your customers to pay with UTOP tokens in your
                    application. With the Utopos merchant payment gateway, you
                    can accept payments in a few clicks.
                  </p>
                  <div className="cta flex gap-3">
                    <Link
                      href="#"
                      target="_blank"
                      className="bg-primary hover:bg-white/15 text-white hover:text-white text-normal rounded-full px-4 py-2 text-sm"
                    >
                      Sign up now
                    </Link>
                    <Link
                      href="#"
                      target="_blank"
                      className="bg-white/10 hover:bg-white/15 text-white rounded-full px-4 py-2 text-sm"
                    >
                      API Documentation
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-3xl hover:bg-white/10 flex flex-row gap-4 space-y-3 border-1 border-white/30 bg-white/10 px-6 py-6">
              <div className="w-1/3">
                <Image
                  src="/assets/img/cryptocurrency-3d-illustration-png.webp"
                  alt="Apple Store"
                  width={300}
                  height={100}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="w-3/4">
                <h2 className="md:text-3xl text-2xl font-semibold text-white">
                  Buy and sell crypto.
                </h2>
                <div className="flex md:flex-wrap flex-col justify-between gap-6 pt-4">
                  <p className=" text-[14px] text-gray-400 md:max-w-[100%]">
                    Trust Utopos to keep things simple and put you in control.
                    It's non-custodial, so your crypto stays yours.
                  </p>
                  <div className="cta flex gap-3">
                    <Link
                      href="#"
                      target="_blank"
                      className="bg-primary hover:bg-white/15 text-white hover:text-white text-normal rounded-full px-4 py-2 text-sm"
                    >
                      Sign up now
                    </Link>
                    <Link
                      href="#"
                      target="_blank"
                      className="bg-white/10 hover:bg-white/15 text-white rounded-full px-4 py-2 text-sm"
                    >
                      API Documentation
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-screen-xl mx-auto pt-8 md:mt-16">
          <div className="grid grid-cols-2 md:grid-cols-4 md:gap-10 gap-3">
            {Stats.map((stat, index) => (
              <div
                key={index}
                className="text-center shadow-md transition-transform hover:scale-[1.03] focus-within:scale-[1.03] duration-300 ease-in-out space-y-2 bg-gradient-to-tl via-black border-1 border-green-200/15 from-gray-600/20 to-green-700/30 rounded-xl py-4 px-6"
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