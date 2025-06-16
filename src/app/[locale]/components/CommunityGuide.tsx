"use client";
import { useTranslations } from "next-intl";


export default function CommunityGuide() {
    const t = useTranslations("home.community");
    const guidelines = [
        {
            title: t("guidelines.guideline1_title"),
            description: t("guidelines.guideline1_desc"),
            link: "/"
        },
        {
            title: t("guidelines.guideline2_title"),
            description: t("guidelines.guideline2_desc"),
            link: "/"
        },
        {
            title: t("guidelines.guideline3_title"),
            description: t("guidelines.guideline3_desc"),
            link: "/"
        }
    ]
  return (
    <>
    <section>
        <div className="max-w-screen-xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
            <div className="md:w-full  max-w-[70%]">
                <h2 className="text-4xl font-bold tracking-tight text-gray-900 md:text-5xl">
                    {t("title")}
                </h2>
                
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 md:gap-30 gap-3 divider-x divider-vertical divide-base-300 md:pt-20">
                {guidelines.map((guide, index)=> (
                    <div className="flex flex-col items-cente justify-center text-left w-full my-4" key={index}>
                        <h3 className="text-gray-900 md:text-2xl text-xl font-bold tracking-tight">{guide.title}</h3>
                        <p className="mt-2 text-sm text-gray-500">{guide.description}</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
    
    </>
  );
}