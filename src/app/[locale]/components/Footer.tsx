"use client";
import React from 'react';
import { Facebook, Twitter, Instagram, Youtube, Send } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

// --- Constants for Footer Links ---
// This structure makes it easy to add, remove, or change links
// without altering the component's JSX.

const footerSections = [
    {
        title: 'Ecosystem',
        links: [
            { label: 'Utoswap', url: 'https://www.utoswap.com/en' },
            { label: 'Gaming Hub', url: '/gaming' },
            { label: 'Payment Gateway', url: '/payment' },
            { label: 'Utopos Bridge', url: '/bridge' },
            { label: 'Token Extensions', url: '#' },
            { label: 'Metaverse', url: '#' },
            { label: 'NFT Marketplace', url: '#' },
            { label: 'DeFi Wallet', url: '#' },
        ]
    },
    {
        title: 'ABOUT US',
        links: [
            { label: 'About Utopos', url: '/about' },
            { label: 'Leadership Team', url: '#' },
            { label: 'Privacy Policy', url: '#' },
            { label: 'Whitepaper', url: '#' },
            { label: 'Tokenomics', url: '#' },
            { label: 'Ecosystem', url: '#' },
            { label: 'Project Roadmap', url: '#' },
            { label: 'Contact Us', url: '/contact' },
            { label: 'Support', url: '/support' },
        ]
    },
    {
        title: 'Protocol',
        links: [
            { label: 'Developers', url: '#' },
            { label: 'Community', url: '#' },
            { label: 'Documentation', url: '#' },
            { label: 'UTOP Polygonscan', url: 'https://polygonscan.com/token/0x0946C90058cE01d734B9e770FFCfD0C029F83709' },
            { label: 'UTOP Solscan', url: 'https://explorer.solana.com/address/Hk5938VDYidqm4KeTenbkrADbD5FSqeduRKEYNaGQHZS' },
        ]
    }
];

// --- Footer Component ---

const Footer: React.FC = () => {
    return (
        <footer className="dark:bg-gradient-to-br bg-gradient-to-br from-[#0a090d] via-[#110225] to-[#310573] text-gray-100">
            <div className="max-w-screen-xl mx-auto px-6 py-12">
                {/* Top section with links and social media */}
                <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Mapping over the link sections */}
                    {footerSections.map((section) => (
                        <div key={section.title}>
                            <h3 className="text-white font-semibold tracking-widest uppercase mb-4 text-sm">
                                {section.title}
                            </h3>
                            <ul>
                                {section.links.map((link) => (
                                    <li key={link.label} className="mb-2">
                                        <a href={link.url} className="hover:text-white transition-colors text-gray-400 text-sm">
                                            {link.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}

                    {/* Follow Dropme Section */}
                    <div>
                        <h3 className="text-primary font-semibold tracking-widest uppercase mb-4 text-sm">
                            Follow UTOPOS
                        </h3>
                        <div className="flex space-x-4 mb-6">
                            <a href="#" aria-label="Facebook" className="text-gray-200 hover:text-white"><Facebook size={30}/></a>
                            <a href="#" aria-label="YouTube" className="text-gray-200 hover:text-white"><Youtube size={30}/></a>
                            <a href="#" aria-label="Twitter" className="text-gray-200 hover:text-white"><Twitter size={30}/></a>
                            <a href="#" aria-label="Instagram" className="text-gray-200 hover:text-white"><Instagram size={30}/></a>
                        </div>
                        <h3 className="text-white font-semibold tracking-widest uppercase mb-4 text-sm">
                           Enter your email address to subscribe to our newsletters
                        </h3>
                        <form className="relative">
                            <input
                                type="email"
                                placeholder="Enter email address"
                                className="w-full bg-transparent border border-gray-600 rounded-lg py-2 px-4 text-black placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-white"
                            />
                            <button type="submit" className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white" aria-label="Subscribe">
                                <Send size={20}/>
                            </button>
                        </form>
                        <div className="follow flex md:flex-row flex-col mt-4 gap-3 overflow-hidden">
                            <Link href="" target="_blank">
                              <Image src="/assets/img/solana.svg" alt="Google Play" width={120} height={50} className='w-[120px] h-[40px] object-fit' />
                            </Link>
                            <Link href="" target="_blank">
                            <Image src="/assets/img/full-polygon-logo.png" alt="Apple Store"  width={120} height={50} className='w-[120px] h-[40px] object-contain' />
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Bottom section with copyright and legal links */}
                <div className="border-t border-gray-300 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-sm">
                    <p className="mb-4 md:mb-0">Copyright © 2020-{new Date().getFullYear()} Utopos Blockchain City. All Rights Reserved by Intellygen Technologies</p>
                    <div className="flex flex-wrap justify-center space-x-4">
                        <a href="#" className="hover:text-white transition-colors">Cookie settings</a>
                        <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Sitemap</a>
                        <a href="#" className="flex items-center hover:text-white transition-colors">
                            Global / English
                            {/* You can add a globe icon here if desired */}
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
