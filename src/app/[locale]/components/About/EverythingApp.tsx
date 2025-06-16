"use client";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import React from "react";


export default function EverythingApp(){
    const t = useTranslations("home.everything_app")
    return (
      <>
        <section className="bg-green-50 md:py-20 py-6">
          <div className="max-w-screen-xl mx-auto px-6 md:py-12 py-6">
            <div className="flex md:flex-row flex-col md:gap-32 gap-3">
              <div className="md:w-1/2 w-full">
                <Image
                  src="/assets/img/app.jpg"
                  alt="Business Image"
                  width={500}
                  height={500}
                  className="w-full h-[400px] object-contain rounded-lg"
                />
              </div>
              <div className="md:w-1/2 w-full">
                <span className="inline-block bg-primary text-white md:text-lg text-md font-bold px-3 py-1 rounded-full mb-4">
                  {t("badge")}
                </span>
                <h1 className="md:text-5xl text-5xl tracking-tight font-bold font-ibm md:mb-6 text-gray-900">
                  {t("title")}
                </h1>
                <p className="pt-3 text-lg">{t("desc")}</p>
                <div className="cta pt-8">
                  <Link
                    href="#"
                    className="inline-block bg-[#04BF68] text-white font-semibold py-3 px-5 rounded-xl text-md hover:bg-[#ff8600] transition-opacity"
                  >
                    {t("cta")}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-white md:py-20 py-6">
          <div className="max-w-screen-xl mx-auto px-6 md:py-12 py-6">
            <div className="flex md:flex-row flex-col md:gap-32 gap-3">
              <div className="md:w-1/2 w-full">
                <span className="inline-block bg-transparent text-primary md:text-lg text-md font-bold  rounded-full mb-2">
                  {t("more.badge")}
                </span>
                <h1 className="md:text-5xl text-5xl tracking-tight font-bold font-ibm md:mb-6 text-gray-900">
                  {t("more.title")}
                </h1>
                <p className="pt-3 text-lg">{t("more.desc")}</p>
                <div className="cta pt-8">
                  <Link
                    href="#"
                    className="inline-block bg-[#04BF68] text-white font-semibold py-3 px-5 rounded-xl text-md hover:bg-[#ff8600] transition-opacity"
                  >
                    {t("more.cta")}
                  </Link>
                </div>
              </div>
              <div className="md:w-1/2 w-full">
                <Image
                  src="/assets/img/app.jpg"
                  alt="Business Image"
                  width={500}
                  height={500}
                  className="w-full h-[400px] object-contain rounded-lg"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="py-20 bg-primary text-white px-6 md:px-0">
          <div className="max-w-screen-xl mx-auto">
            <div className="flex flex-col md:flex-row md:gap-20 gap-6">
              <div className="md:w-1/2 w-full space-y-4">
                <h3 className="text-4xl font-bold tracking-tight">
                  Our guiding principles
                </h3>
                <p className="md:text-2xl text-xl">
                  Strong corporate governance principles help us stay true to
                  our mission.
                </p>
              </div>
              <div className="md:w-1/2 w-full space-y-4">
                <h3 className="text-4xl font-bold tracking-tight">
                  A safer everyday for everyone
                </h3>
                <p className="md:text-2xl text-xl">
                  As we grow to serve millions every day, so do our measures to
                  ensure a secure marketplace everyone can thrive in
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-green-600">
          <div className="max-w-screen-xl mx-auto py-6 px-6 md:px-0">
            <Link href="" className="">
              Contact Us
            </Link>
          </div>
        </section>
      </>
    );
}