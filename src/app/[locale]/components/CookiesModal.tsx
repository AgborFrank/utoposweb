"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";
import { useState, useEffect } from "react";

const CookiesModal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const t = useTranslations("common.cookies");

  // Check if user has already accepted cookies
  useEffect(() => {
    const hasAcceptedCookies = localStorage.getItem("cookiesAccepted");
    if (!hasAcceptedCookies) {
      setIsOpen(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookiesAccepted", "true");
    setIsOpen(false);
  };

  const handleManagePreferences = () => {
    // Placeholder for preferences logic; just closes for now
    setIsOpen(false);
    console.log("Redirect to preferences page or open settings");
  };

  if (!isOpen) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50 max-w-sm w-full">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-semibold text-black mb-3">
         {t('title')}
        </h2>
        <p className="text-gray-700 text-sm mb-4">
        {t('desc')}{" "}
          <Link href="/privacy" className="underline text-primary">
            Privacy Policy
          </Link>
          .
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <button
            onClick={handleAccept}
            className="bg-primary text-white px-4 py-2 rounded-xl hover:bg-cta hover:bg-orange-400 transition-colors"
          >
           {t('accept')}
          </button>
          <button
            onClick={handleManagePreferences}
            className="text-gray-600 border border-purple-500 rounded-xl hover:text-black px-4 py-2 transition-colors"
          >
           {t('manage')}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookiesModal;