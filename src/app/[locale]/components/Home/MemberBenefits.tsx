"use client";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import React from "react";


export default function MemberAdvantage(){
    const t = useTranslations("home.benefits")
    return (
      <>
        <section className="bg-[#0a090d] md:py-20 py-8">
          <div className="max-w-screen-xl mx-auto px-6 md:py-12">
            <div className="flex md:flex-row flex-col md:gap-32 gap-6">
            <div className="md:w-1/2 w-full">
                <Image src="/assets/img/r1.png" alt="Business Image" width={500} height={500} className="w-full h-[400px] object-contain rounded-lg" />
                </div>
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
              
            </div>
          </div>
        </section>
      </>
    );
}