"use client";
import { useTranslations } from "next-intl";
import Link from "next/link";
import React from "react";


export default function Business(){
    const t = useTranslations("home.business")
    return (
      <>
        <section
          className="bg-black "
          style={{
            backgroundImage: "url(/assets/slides/4.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="backdrop-blur-lg  md:py-20 py-6">
            <div className="max-w-screen-xl mx-auto px-6 md:py-12 py-6">
              <div className="flex md:flex-row flex-col md:gap-32 gap-3">
                <div className="md:w-1/2 w-full">
                  <h1 className="md:text-5xl text-4xl font-semibold font-ibm md:mb-6 text-white">
                    {t("title")}
                  </h1>
                  <p className="pt-3 text-[15px] text-gray-300">{t("desc")}</p>
                  
                </div>
                <div className="md:w-1/2 w-full ">
                  <div className="home-card  bg-black/50 items-center px-8 py-12 rounded-4xl">
                    <p className="text-white">{t('desc_2')}</p>
                    <div className="cta pt-8">
                    <Link
                      href="#"
                      className="inline-block bg-primary text-white font-semibold py-3 px-5 rounded-full text-md hover:bg-[#ff8600] transition-opacity"
                    >
                      {t("cta")}
                    </Link>
                  </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
}