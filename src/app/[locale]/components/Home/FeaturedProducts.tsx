"use client";
import Image from 'next/image';
import React, { useState } from 'react';

// --- Data Structure for Products ---
// This mock data represents the products shown in the HTML structure.
// Using placeholders for images for demonstration purposes.
const productData = {
  "Layer 1 (Utopos)": [
    {
      type: "main",
      name: "Utopos Token ($UTOP)",
      subtitle:
        "The Utopos Token is a Fungible, collectible novelty token used for transactions within the city and worldwide. It supports cross bridge transactions across various blockchains like Polygon PoS and Solana",
      imageUrl: "/assets/img/object.png", // Using a more relevant placeholder
      learnMoreUrl:
        "https://app.uniswap.org/explore/tokens/polygon/0x0946C90058cE01d734B9e770FFCfD0C029F83709",
      badge: "Utopos Token",
    },
    {
      type: "other",
      name: "Utoswap",
      subtitle: "Find and book the best taxi within your city with Dropme",
      imageUrl: "/assets/img/swap.webp",
      learnMoreUrl: "#",
    },
    {
      type: "other",
      name: "DeFi Payment",
      subtitle: "Discover inter-city rides to get you anywhere across Cameroon",
      imageUrl: "/assets/img/pay.png",
      learnMoreUrl:
        "https://app.uniswap.org/explore/tokens/polygon/0x0946C90058cE01d734B9e770FFCfD0C029F83709",
    },
    {
      type: "other",
      name: "Virtual Gaming",
      subtitle: "Developing aworld’s premium site for hyper-realistic v-gamin",
      imageUrl: "/assets/img/game.png",
      learnMoreUrl:
        "https://app.uniswap.org/explore/tokens/polygon/0x0946C90058cE01d734B9e770FFCfD0C029F83709",
    },
    {
      type: "other",
      name: "V-Gigs & V-Lancing",
      subtitle:
        "Utopos City provides 3D teleconferencing and a VR platform for freelancers, enhancing work in technical and creative fields.",
      imageUrl: "/assets/img/user.png",
      learnMoreUrl:
        "https://app.uniswap.org/explore/tokens/polygon/0x0946C90058cE01d734B9e770FFCfD0C029F83709",
    },
  ],
  "Layer 2 (Earth)": [
    {
      type: "main",
      name: "Earth Token (ERTH)",
      subtitle:
        "Earth is a non-asset-backed, non-fungible token(NFT) compliant with the ERC-721 standard. Earth represents ownership of a fractional, digitized 99-year lease on the land underneath the City.",
      imageUrl: "https://placehold.co/800x600/f8f9fa/333?text=Xiaomi+TV",
      learnMoreUrl:
        "https://app.uniswap.org/explore/tokens/polygon/0x0946C90058cE01d734B9e770FFCfD0C029F83709",
      badge: "Earth Token",
    },
    {
      type: "other",
      name: "Metaverse",
      subtitle: "Explor the Utopos metaverse (Utoverse) with the Earth token",
      imageUrl: "https://placehold.co/400x400/f8f9fa/333?text=Xiaomi+15+Ultra",
      learnMoreUrl:
        "https://app.uniswap.org/explore/tokens/polygon/0x0946C90058cE01d734B9e770FFCfD0C029F83709",
    },
    {
      type: "other",
      name: "Earn Points & Rewards",
      subtitle:
        "Play competitive games and earn UTOP to unlock exclusive rewards",
      imageUrl: "https://placehold.co/400x400/f8f9fa/333?text=Xiaomi+15+Ultra",
      learnMoreUrl:
        "https://app.uniswap.org/explore/tokens/polygon/0x0946C90058cE01d734B9e770FFCfD0C029F83709",
    },
    {
      type: "other",
      name: "Fastest Payouts",
      subtitle: "Enjoy the fastes payout within the Utopos ecosystem",
      imageUrl: "https://placehold.co/400x400/f8f9fa/333?text=Xiaomi+15+Ultra",
      learnMoreUrl: "#",
    },
  ],
  "Layer 3 (Admin)": [
    {
      type: "main",
      name: "Administration Layer - Service Token (SERV)",
      subtitle:
        "The Service Token governs the Administrative layer and will be used for Consensus & voting, referendum fees, staking and many other applications.",
      imageUrl: "https://placehold.co/800x600/f8f9fa/333?text=Scooter",
      learnMoreUrl: "#",
      badge: "Service Token",
    },
    {
      type: "other",
      name: "Governance",
      subtitle: "Dial up your style",
      imageUrl: "https://placehold.co/400x400/f8f9fa/333?text=Watch+S4",
      learnMoreUrl: "#",
    },
  ],
};

type TabName = keyof typeof productData;

// --- Main Component ---
const FeaturedProducts: React.FC = () => {
  // State to keep track of the currently active tab
  const [activeTab, setActiveTab] = useState<TabName>('Layer 1 (Utopos)');
  const tabs = Object.keys(productData) as TabName[];

  return (
    <section className="bg-[#0a090d] py-12 md:py-24">
      <div className="max-w-screen-xl mx-auto px-6 md:px-0">
        {/* Section Title */}
        <h2 className="text-3xl md:text-5xl md:max-w-[80%] mx-auto font-semibold text-center text-white mb-4 pb-8">
        The World's First Smart City Powered by Blockchain Technology.
        </h2>

        {/* Tab Headers */}
        <div className="flex justify-center  mb-8">
          <div className="flex flex-wrap -mb-px bg-white/20 rounded-full" role="tablist">
            {tabs.map((tabName) => (
              <button
                key={tabName}
                onClick={() => setActiveTab(tabName)}
                role="tab"
                aria-selected={activeTab === tabName}
                className={`
                  px-4 py-3 md:text-md text-sm text-center  transition-colors duration-200 focus:outline-none
                  ${
                    activeTab === tabName
                      ? "bg-[#04BF68] text-black rounded-full font-bold border-[#04BF68]"
                      : "text-gray-100 hover:text-green-500 font-semibold border-transparent"
                  }
                `}
              >
                {tabName}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content Panels */}
        <div>
          {tabs.map((tabName) => {
            const products = productData[tabName] || [];
            const mainProduct = products.find((p) => p.type === "main");
            const otherProducts = products.filter((p) => p.type !== "main");

            return (
              <div
                key={tabName}
                role="tabpanel"
                hidden={activeTab !== tabName}
                className="transition-opacity duration-500 ease-in-out"
              >
                {activeTab === tabName && (
                  <div>
                    {/* Main Product Section */}
                    {mainProduct && (
                      <div className="bg-gradient-to-r from-[#1d1c20] rounded-xl overflow-hidden border border-purple-400/50 mb-6 flex flex-col md:flex-row items-center">
                        <div className="w-full md:w-3/5 md:p-8">
                          <Image
                            src={mainProduct.imageUrl}
                            alt={mainProduct.name}
                            width={800}
                            height={600}
                            className="w-[400px] h-[500px] object-contain"
                            onError={(e) => {
                              e.currentTarget.src =
                                "https://placehold.co/800x600/ff0000/ffffff?text=Error";
                            }}
                          />
                        </div>
                        <div className="w-full md:w-3/5 text-start p-8">
                          {mainProduct.badge && (
                            <span className="inline-block bg-primary text-white text-sm font-semibold px-3 py-2 rounded-full mb-4">
                              {mainProduct.badge}
                            </span>
                          )}
                          <h3 className="md:text-6xl text-[50px] leading-18 tracking-tight font-semibold font-ibm md:mb-6 text-white">
                            {mainProduct.name}
                          </h3>
                          <p className="text-gray-300 text-md mt-2 mb-6">
                            {mainProduct.subtitle}
                          </p>
                          <a
                            href={mainProduct.learnMoreUrl}
                            className="inline-block bg-primary text-white font-semibold py-3 px-5 rounded-full text-md hover:bg-[#ff8600] transition-colors"
                          >
                            Buy UTOP Token
                          </a>
                        </div>
                      </div>
                    )}

                    {/* Other Products Section */}
                    <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 md:gap-6 gap-2">
                      {otherProducts.map((product, index) => (
                        <div
                          key={index}
                          className="group bg-black/5 border-[1px] hover:bg-[#1e1b27] border-white/20 rounded-xl overflow-hidden text-center shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col"
                        >
                          <div className="flex-grow flex items-center justify-center p-6">
                            <Image
                              src={product.imageUrl}
                              alt={product.name}
                              width={200}
                              height={100}
                              className="w-full h-full object-contain md:max-h-[100px] max-h-[60px] group-hover:scale-105 transition-transform duration-300"
                              onError={(e) => {
                                e.currentTarget.src =
                                  "https://placehold.co/400/ff0000/ffffff?text=Error";
                              }}
                            />
                          </div>
                          <div className="md:px-6 px-3 pb-6">
                            <h4 className="font-semibold text-gray-100 text-lg">
                              {product.name}
                            </h4>
                            <p className="text-gray-300 text-sm mt-1">
                              {product.subtitle}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
