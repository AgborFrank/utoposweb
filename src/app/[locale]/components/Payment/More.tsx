"use client";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import React from "react";


export default function Advantage(){
    const t = useTranslations("home.paymentAd")
    return (
      <>
        <section className="bg-[#0a090d] md:py-20 py-8">
          <div className="max-w-screen-xl mx-auto px-6 md:py-12">
            <div className="flex md:flex-row flex-col md:gap-32 gap-6 items-center md:justify-between">
              <div className="md:w-1/2 w-full">
                <h1 className="md:text-5xl text-5xl font-semibold font-ibm mb-6 text-white">
                  {t("title")}
                </h1>
                <p className="pt-3 text-[14px]  text-gray-400">{t("desc")}</p>
                <div className="cta pt-8">
                  <Link
                    href="https://t.me/utoposofficialgroup"
                    target="_blank"
                    className="inline-block bg-primary text-white font-semibold py-3 px-5 rounded-full text-md hover:bg-[#ff8600] transition-opacity"
                  >
                    {t("cta")}
                  </Link>
                </div>
              </div>
              <div className="md:w-1/2 w-full">
                <Image
                  src="/assets/img/utopospay.svg"
                  alt="Business Image"
                  width={500}
                  height={500}
                  className="w-full h-[500px] object-contain rounded-lg"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="bg-[#141414FF]  py-8">
          <div className="max-w-screen-xl mx-auto px-6 md:py-12">
            <div className="flex md:flex-row flex-col md:gap-32 gap-6 items-center md:justify-between">
              <div className="md:w-1/2 w-full">
                <Image
                  src="/assets/img/white_label_crypto_wallet.avif"
                  alt="Business Image"
                  width={500}
                  height={500}
                  className="w-full h-[500px] object-contain rounded-lg"
                />
              </div>
              <div className="md:w-1/2 w-full">
                <h1 className="md:text-5xl text-5xl font-semibold font-ibm mb-6 text-white">
                  Do more with your crypto with Utopos Merchant Wallet
                </h1>
                <p className="pt-3 text-[14px]  text-gray-400">
                  Store your crypto in your own personal or business crypto
                  wallet and explore decentralized finance (DeFi), buy and sell
                  UTOP, NFTs, and more in one place.
                </p>
                <div className="cta pt-8">
                  <Link
                    href="https://t.me/utoposofficialgroup"
                    target="_blank"
                    className="inline-block bg-primary text-white font-semibold py-3 px-5 rounded-full text-md hover:bg-[#ff8600] transition-opacity"
                  >
                    {t("cta")}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
}