"use client";
import Link from "next/link";
import Image from "next/image";

export default function BridgeProtocol() {
  return (
    <section className="bg-black p-10 flex items-center justify-center">
      <div className="relative w-full max-w-screen-xl">
        <Image
          src="/assets/slides/7.jpg"
          alt="Abstract purple and blue digital background"
          width={1200}
          height={600}
          className="absolute inset-0 w-full h-full object-cover rounded-3xl"
        />
        <div className=" w-full h-full backdrop-blur-xl border border-white/20 rounded-3xl pb-6 pt-6">
          <div className="max-w-screen-xl mx-auto px-6">
            <div className="flex md:flex-row flex-col items-center justify-center md:gap-40">
              <div className="md:w-1/2 w-full space-y-6">
                <h1 className="md:text-5xl text-5xl text-white font-semibold">
                  Migrate UTOP v1 and Utopos v2 to UTOP v3
                </h1>
                <p className="text-white mb-4 md:mb-0">
                  If you are using UTOP v1 or Utopos v2, you can migrate to our
                  more secure UTOP v3 token that unlocks more features and
                  security. To get started, click on the button below to learn
                  more about the migration process.
                </p>
                <div className="cta mt-8">
                  <Link
                    href="https://utoswap.com"
                    target="_blank"
                    className="bg-purple-600 text-white font-semibold py-3 px-8 rounded-full text-lg hover:bg-purple-700 transition-all duration-300 shadow-lg hover:shadow-purple-500/40 transform hover:scale-105"
                  >
                    Migrate to UTOP v3
                  </Link>
                </div>
              </div>
              <div className="md:w-1/2">
                <Image
                  src="/assets/img/utoswap.png"
                  alt="Abstract purple and blue digital background"
                  width={1200}
                  height={600}
                  className="inset-0 w-[390px] h-[400px] object-fit rounded-3xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
