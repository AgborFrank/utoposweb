"use client";
import { useState } from 'react';
import Link from 'next/link';
import { MdClose, MdMenu } from 'react-icons/md';
import { FaDiscord } from 'react-icons/fa';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

// Icon Components (for clarity and reuse)
const PolygonPoSIcon = () => (
    <svg aria-hidden="true" focusable="false" width="20" height="20" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="24" cy="24" r="20" fill="#6E32F0" />
      <path d="M24 4a20 20 0 0 0 0 40V4Z" fill="#2C034E" />
    </svg>
  );
  
  const PolygonZkEvmIcon = () => (
    <svg aria-hidden="true" focusable="false" width="20" height="20" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="24" cy="24" r="20" fill="#6E32F0" />
      <path d="M24 8a16 16 0 0 0 0 32V8Z" fill="#2C034E" />
    </svg>
  );
  
  const MidenIcon = () => (
    <svg aria-hidden="true" focusable="false" width="20" height="20" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="24" cy="24" r="20" fill="#6E32F0" />
      <rect x="16" y="16" width="16" height="16" fill="#2C034E" />
    </svg>
  );
  
  // Navigation Data
  const solutionLinks = {
    leftColumn: [
      {
        href: "/solutions/agg-layer",
        icon: "AL",
        title: "Utoswap",
        description: "Swap UTOP tokens on Polygon PoS",
      },
      {
        href: "/payment",
        icon: "CD",
        title: "Payment Gateway",
        description: "Merchant payment gateway for DeFi payments",
      },
    ],
    rightColumn: [
      {
        href: "/bridge",
        icon: <PolygonPoSIcon />,
        title: "Utopos Bridge",
        description: "Bridge Polygon and Solana tokens",
      },
      {
        href: "/solutions/polygon-zkevm",
        icon: <PolygonZkEvmIcon />,
        title: "NFT Market",
        description: "An EVM equivalent, open-source zk-Rollup",
      },
      {
        href: "/solutions/miden",
        icon: <MidenIcon />,
        title: "Gaming Hub",
        description: "Find games to play and earn UTOP",
      },
    ],
  };
  
  const mainNavLinks = [
    { href: '/about', label: 'about' },
    { href: '/exchange', label: 'exchange' },
    { href: '/payment', label: 'payment' },
    { href: '/blog', label: 'tokenomics' },
    { href: '/community', label: 'community', className: 'whitespace-nowrap' },
    { href: '/contact', label: 'contact' },
  ];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const t = useTranslations("common.navigation");

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);
  const closeAllMenus = () => {
    setMobileMenuOpen(false);
    setSolutionsOpen(false);
  }

  return (
    <>
      <header className="bg-black text-white sticky top-0 z-50 shadow-lg ">
        <div className="max-w-screen-xl mx-auto px-6 md:px-0 lg:px-0 h-16 flex justify-between items-center">
          <div className="flex justify-between items-center h-16 md:h-20">
            {/* Left: Logo */}
            <div className="flex justify-between">
            <div className="flex items-center space-x-3">
              <Link href="/" className="flex items-center space-x-2">
                <Image
                  src="/assets/logo/white-logo.png"
                  alt="Utopos"
                  width={120}
                  height={30}
                  className="w-[120px] h-[30px] object-contain"
                />
              </Link>
            </div>

            {/* Center: Navigation */}
            <nav className="hidden md:flex space-x-6 lg:space-x-8 items-center font-semibold text-sm select-none ">
              {/* Solutions with dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setSolutionsOpen(true)}
                onMouseLeave={() => setSolutionsOpen(false)}
              >
                <button
                  aria-haspopup="true"
                  aria-expanded={solutionsOpen}
                  aria-controls="solutions-menu"
                  className={`px-3 py-1 rounded-full transition-colors duration-200 focus:outline-none ${
                    solutionsOpen ? "bg-gray-800" : "hover:bg-gray-900"
                  }`}
                  onClick={() => setSolutionsOpen(!solutionsOpen)}
                >
                  {t("solution")}
                </button>

                {solutionsOpen && (
                  <div
                    id="solutions-menu"
                    className="absolute top-full left-0 mt-3 w-[680px] bg-gray-900 rounded-2xl shadow-2xl p-6 grid grid-cols-2 gap-6 text-left z-50"
                    role="menu"
                    aria-label="Solutions submenu"
                  >
                    {/* Left column */}
                    <div className="space-y-6">
                      <Link href="/solutions/agg-layer" legacyBehavior passHref>
                        <a
                          className="group block rounded-xl bg-gradient-to-tr from-purple-700 via-purple-900 to-purple-700 p-6 text-white shadow-lg hover:shadow-purple-600 transition-shadow duration-300"
                          role="menuitem"
                        >
                          <div className="flex flex-col md:items-center md:space-x-6">
                            <Image
                              src="/assets/img/solana.jpg"
                              alt="Aggregation Layer illustration"
                              width={200}
                              height={116}
                              className="rounded-lg w-full object-cover flex-shrink-0"
                            />
                            <div className="mt-4 md:mt-0 max-w-[270px]">
                              <h3 className="text-lg font-bold leading-tight">
                                Utopos Token is now <br /> available on Solana
                              </h3>
                              <p className="mt-2 text-xs leading-relaxed text-purple-200">
                              $UTOP which serve as the native token for everyday transactions within the Utopos blockchain city is now on Solana
                              </p>
                            </div>
                          </div>
                        </a>
                      </Link>
                      <div className="flex flex-col space-y-4 pt-4 border-t border-gray-700">
                        {solutionLinks.leftColumn.map((link) => (
                          <Link
                            key={link.href}
                            href={link.href}
                            legacyBehavior
                            passHref
                          >
                            <a
                              className="flex items-center space-x-4 group hover:bg-gray-800 p-3 rounded-lg transition-colors"
                              role="menuitem"
                            >
                              <div className="w-12 h-12 rounded-full bg-purple-700 flex items-center justify-center text-white text-lg font-bold select-none">
                                {link.icon}
                              </div>
                              <div>
                                <h4 className="font-semibold text-white leading-tight">
                                  {link.title}
                                </h4>
                                <p className="text-gray-400 text-sm leading-snug truncate max-w-xs">
                                  {link.description}
                                </p>
                              </div>
                            </a>
                          </Link>
                        ))}
                      </div>
                    </div>
                    {/* Right column */}
                    <div className="flex flex-col space-y-6 pt-6 border-t border-l border-gray-700 pl-6 md:pt-0 md:border-t-0 md:border-l-0 md:pl-0">
                      {solutionLinks.rightColumn.map((link) => (
                        <Link
                          key={link.href}
                          href={link.href}
                          legacyBehavior
                          passHref
                        >
                          <a
                            className="flex items-center space-x-4 group hover:bg-gray-800 rounded-lg p-3 transition-colors"
                            role="menuitem"
                          >
                            <div className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center text-purple-600">
                              {link.icon}
                            </div>
                            <div>
                              <h4 className="font-semibold text-white leading-tight">
                                {link.title}
                              </h4>
                              <p className="text-gray-400 text-sm leading-snug">
                                {link.description}
                              </p>
                            </div>
                          </a>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Mapped Main Navigation */}
              {mainNavLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`hover:text-purple-500 transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 rounded-md px-2 py-1 ${
                    link.className || ""
                  }`}
                >
                  {t(link.label)}
                </Link>
              ))}
            </nav>
            </div>
            {/* Right side Actions */}
            <div className="flex items-center space-x-4 pl-6">
              
              <button
                className="hidden md:block p-2 rounded-md hover:bg-gray-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-500"
                aria-label="Close solutions menu"
                onClick={() => setSolutionsOpen(false)}
                tabIndex={solutionsOpen ? 0 : -1}
              >
                <MdClose
                  className={`w-6 h-6 transition-opacity duration-300 ${
                    solutionsOpen
                      ? "opacity-100"
                      : "opacity-0 pointer-events-none"
                  }`}
                />
              </button>
              <a
                href="https://discord.gg/polygon"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-purple-500 transition-colors duration-200 p-2 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-500"
                aria-label="Polygon Discord"
              >
                <FaDiscord className="w-6 h-6" />
              </a>
              <Link
                href="https://app.uniswap.org/explore/tokens/polygon/0x0946C90058cE01d734B9e770FFCfD0C029F83709" target='_blank'
                className="bg-purple-700 hover:bg-purple-800 transition-colors text-white py-2 px-5 pulse-button rounded-full whitespace-nowrap font-semibold text-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-500"
              >
                {t('account')}
              </Link>
              <button
                onClick={toggleMobileMenu}
                aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
                className="md:hidden p-2 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-500"
              >
                {mobileMenuOpen ? (
                  <MdClose className="w-6 h-6" />
                ) : (
                  <MdMenu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {mobileMenuOpen && (
          <nav
            className="md:hidden bg-black fixed top-16 inset-x-0 bottom-0 z-40 p-6 overflow-y-auto"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile Navigation Menu"
          >
            <ul className="space-y-6 font-semibold text-lg">
              <li>
                <button
                  onClick={() => setSolutionsOpen(!solutionsOpen)}
                  aria-expanded={solutionsOpen}
                  aria-controls="mobile-solutions-submenu"
                  className="w-full text-left rounded-md px-3 py-2 bg-gray-900 hover:bg-gray-800"
                >
                  Solutions
                </button>
                {solutionsOpen && (
                  <ul
                    id="mobile-solutions-submenu"
                    className="pl-4 mt-2 space-y-4 text-sm font-normal text-gray-300"
                  >
                    {[
                      ...solutionLinks.leftColumn,
                      ...solutionLinks.rightColumn,
                    ].map((link) => (
                      <li key={link.href}>
                        <Link
                          href={link.href}
                          className="block px-3 py-1 hover:bg-gray-700 rounded-md"
                          onClick={closeAllMenus}
                        >
                          {link.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
              {mainNavLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="block px-3 py-2 rounded-md hover:bg-gray-800"
                    onClick={closeAllMenus}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </header>
    </>
  );
}