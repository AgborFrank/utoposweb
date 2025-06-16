import { useTranslations } from "next-intl";

export default function Banner() {
    const t = useTranslations('common.about_banner');
  return (
    <>
      <section>
        <div className="max-w-screen-xl mx-auto px-4 py-10 sm:px-6 sm:py-10 lg:px-8">
          <h2 className="text-2xl">{t("title")}</h2>
        </div>
      </section>
    </>
  );
}