import React from "react";
import { Metadata } from "next";
import { Ruda, DM_Sans } from "next/font/google";
import { NextIntlClientProvider, AbstractIntlMessages } from "next-intl";
import { notFound } from "next/navigation";
import ErrorFallback from "./components/ErrorFallback";
import { ErrorBoundary } from "react-error-boundary";
import dFont from "../../../lib/fonts";
import "./globals.css";
import { Providers } from "../../providers";
import { routing } from "../../i18n/routing";
import CookiesModal from "./components/CookiesModal";
import Header from "./components/Header";
import DropmeFooter from "./components/Footer";

// Fonts with optimization
const dmsans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: ["300", "400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
  display: "swap",
  preload: true,
});

const ruda = Ruda({
  subsets: ["latin"],
  variable: "--font-ruda",
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
  preload: true,
});

// Supported namespaces
const SUPPORTED_NAMESPACES = [
  "home",
  "common",
  "terms",
  "userAccount",
] as const;
type Namespace = typeof SUPPORTED_NAMESPACES[number];

// Viewport settings
export function generateViewport() {
  return {
    width: "device-width",
    initialScale: 1,
  };
}

type LocaleParams = {
  locale?: string;
};

export async function generateMetadata({
  params,
}: {
  params: Promise<LocaleParams>;
}): Promise<Metadata> {
  const resolvedParams = await params;
  const locale = resolvedParams?.locale ?? "en";

  return {
    title: "Utopos.io -Futuristic Blockchain City",
    description:
      "Utopos is a project aimed at building futuristic cities powered by blockchain, AI, IoT, and VR technologies on a global scale.",
    openGraph: {
      title: "Utopos.io -Futuristic Blockchain City",
      description: "Utopos is a project aimed at building futuristic cities powered by blockchain, AI, IoT, and VR technologies on a global scale.",
      locale,
      type: "website",
    },
  };
}

// Load messages with error handling
async function loadMessages(
  locale: string
): Promise<Record<Namespace, AbstractIntlMessages>> {
  const localeMessages: Partial<Record<Namespace, AbstractIntlMessages>> = {};

  await Promise.all(
    SUPPORTED_NAMESPACES.map(async (namespace) => {
      try {
        const messages = (
          await import(`../../../messages/${locale}/${namespace}.json`)
        ).default;
        localeMessages[namespace] = messages;
      } catch (error) {
        console.warn(
          `Failed to load ${namespace} for ${locale}, falling back to English`,
          error
        );
        try {
          const fallbackMessages = (
            await import(`../../../messages/en/${namespace}.json`)
          ).default;
          localeMessages[namespace] = fallbackMessages;
        } catch (fallbackError) {
          console.error(
            `Failed to load English fallback for ${namespace}`,
            fallbackError
          );
          localeMessages[namespace] = {};
        }
      }
    })
  );

  return localeMessages as Record<Namespace, AbstractIntlMessages>;
}

type LayoutProps = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

// Root layout with GTM integration
export default async function LocaleLayout({ children, params }: LayoutProps) {
  const resolvedParams = await params;
  const locale = resolvedParams.locale ?? "en";

  if (!routing.locales.includes(locale)) {
    notFound();
  }

  const messages = await loadMessages(locale);

  return (
    <html lang={locale} data-theme="light" className={dFont.className}>
      <head>
        <meta charSet="utf-8" />
        {/* GTM Script */}
        <link
          href="/assets/img/icon-colors.png"
          rel="shortcut icon"
          type="image/x-icon"
        />
      </head>
      <body className={` antialiased bg-white`}>
        {/* GTM Noscript */}
        <noscript
          dangerouslySetInnerHTML={{
            __html: `
              <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-M9BT3NKZ"
              height="0" width="0" style="display:none;visibility:hidden"></iframe>
            `,
          }}
        />

        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <NextIntlClientProvider locale={locale} messages={messages}>
            <Providers>
              <Header />
              {children}
              <CookiesModal />
              <DropmeFooter />
            </Providers>
          </NextIntlClientProvider>
        </ErrorBoundary>
      </body>
    </html>
  );
}
