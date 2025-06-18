import React from 'react';
import { Settings } from 'lucide-react';

// A simple SVG component for the Discord icon, as it's not in Lucide.
const DiscordIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    stroke="currentColor"
    fill="currentColor"
    strokeWidth="0"
    viewBox="0 0 24 24"
    height="1em"
    width="1em"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M20.317 4.36981C18.7994 3.13425 16.9298 2.29602 14.8657 2.02246C14.8657 2.02246 14.7963 2.14158 14.7389 2.25164C13.203 2.81835 11.9641 3.65658 11.0381 4.79869C9.54452 6.64936 8.76106 8.91319 8.76106 11.4501C8.76106 11.4501 9.38799 11.5195 9.99307 11.4501C10.6593 11.3806 11.2744 11.1824 11.8412 10.9189C11.9706 10.8494 12.091 10.7889 12.2023 10.7284C12.2597 10.6971 12.308 10.6659 12.3654 10.6346C12.9814 10.2709 13.6708 9.98889 14.4386 9.77633C14.5181 9.7449 14.5885 9.72265 14.668 9.69223C15.5443 9.42877 16.5395 9.25619 17.6131 9.25619C17.6131 9.25619 17.6222 9.26535 17.6312 9.2745C18.6355 9.60682 19.4623 10.2119 20.0674 10.9691C20.1031 11.0185 20.1479 11.0679 20.1836 11.1174C20.2541 11.2162 20.3246 11.306 20.3951 11.4048C20.4445 11.4743 20.4848 11.5348 20.5342 11.6042C20.6137 11.7234 20.6842 11.8425 20.7547 11.9706C20.8041 12.0583 20.8444 12.137 20.8847 12.2247C21.4394 13.2472 21.7825 14.4386 21.8731 15.8077C21.8731 17.8404 21.1328 19.6911 19.8939 21.1328C18.491 22.7521 16.5815 23.6393 14.4168 23.9716C12.3323 23.5183 10.6346 22.2516 9.68116 20.5896C8.80492 19.054 8.44983 17.2033 8.76106 15.3526C8.76106 15.3526 8.77012 15.2245 8.77918 15.0964C8.83655 14.1623 9.12328 13.2976 9.5768 12.5298C9.62621 12.4421 9.67561 12.3634 9.72502 12.2847C10.5195 10.9995 11.6601 10.0563 12.9814 9.479C13.0691 9.4387 13.1568 9.3984 13.2445 9.3581C13.4688 9.24803 13.6931 9.15579 13.9265 9.06354C13.9622 9.04938 13.9979 9.03521 14.0427 9.02105C14.8657 8.68878 15.7917 8.48053 16.796 8.48053C16.8273 8.48053 16.8586 8.48053 16.8899 8.48969C16.8899 8.48969 16.8899 8.48969 16.8899 8.48969C16.8899 8.48969 16.8899 8.48969 16.8899 8.48969C16.8899 8.48969 16.8899 8.48969 16.8899 8.48969C17.8159 8.60878 18.6601 8.92205 19.3757 9.38799C19.4634 9.44755 19.5511 9.50712 19.6388 9.56668C20.6249 10.2329 21.3652 11.2162 21.7502 12.384C21.8076 12.5566 21.8559 12.7292 21.8952 12.8927C21.9042 12.9379 21.9133 12.9831 21.9224 13.0284C21.9617 13.2366 21.9919 13.4449 22.0222 13.6531C22.0222 13.6622 22.0222 13.6714 22.0222 13.6805C22.0222 13.6805 22.0222 13.6805 22.0222 13.6805C22.0818 14.4386 22.0012 15.2054 21.8286 15.9365C21.334 18.2321 20.0127 20.1836 18.2173 21.4394C16.9205 22.3165 15.3188 22.7917 13.6115 22.7521C11.9641 22.4596 10.6346 21.6528 9.77918 20.3951C8.83655 19.0449 8.52838 17.3829 8.76106 15.657C8.76106 15.657 8.76106 15.657 8.76106 15.657C8.76106 15.6479 8.76106 15.6387 8.76106 15.6296C8.76106 15.5419 8.76106 15.4632 8.77012 15.3845C8.7988 15.0299 8.84717 14.6753 8.92669 14.3297C8.92669 14.3297 8.92669 14.3206 8.92669 14.3115C9.40203 12.3931 10.6593 10.8303 12.2847 9.8768C12.334 9.8365 12.3924 9.80527 12.4508 9.77404C12.5181 9.73374 12.5765 9.70251 12.6438 9.67128C13.4383 9.30758 14.3418 9.07422 15.3188 9.02105C15.3188 9.02105 15.3279 9.02105 15.337 9.02105C16.1495 8.96149 16.962 9.06354 17.7192 9.31766C17.7192 9.31766 17.7192 9.31766 17.7192 9.31766C17.7192 9.31766 17.7192 9.31766 17.7192 9.31766C18.6137 9.60682 19.3666 10.1229 19.9118 10.7889C19.9713 10.8494 20.0309 10.909 20.0893 10.9691C20.0893 10.9691 20.0893 10.9691 20.0893 10.9691C20.0893 10.9691 20.0893 10.9691 20.0893 10.9691C20.0893 10.9691 20.0893 10.9691 20.0893 10.9691C20.0893 10.9691 20.0893 10.9691 20.0893 10.9691C20.0893 10.9691 20.0893 10.9691 20.0893 10.9691C20.0893 10.9691 20.0893 10.9691 20.0893 10.9691C20.0893 10.9691 20.0893 10.9691 20.0893 10.9691C20.0893 10.9691 20.0893 10.9691 20.0893 10.9691C20.0893 10.9691 20.0893 10.9691 20.0893 10.9691C20.0893 10.9691 20.0893 10.9691 20.0893 10.9691Z" />
  </svg>
);


// Placeholder images for the collage
const images = [
  "https://placehold.co/300x400/1e293b/ffffff?text=Event+1",
  "https://placehold.co/300x250/1e293b/ffffff?text=Community",
  "https://placehold.co/300x200/1e293b/ffffff?text=Talks",
  "https://placehold.co/200x350/1e293b/ffffff?text=Meetup",
  "https://placehold.co/300x300/1e293b/ffffff?text=Summit",
  "https://placehold.co/250x450/1e293b/ffffff?text=Devs",
];

// The new Community Section component
const CommunitySection: React.FC = () => {
  return (
    <section className="bg-[#101010] py-20 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto relative">
        {/* Background gradient glow */}
        <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-purple-600/30 rounded-full filter blur-3xl opacity-50"></div>
        
        <div className="relative bg-black/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10">
            <div className="grid grid-cols-1 md:grid-cols-2">
                {/* Left Column: Text and Buttons */}
                <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
                        Unifying the crypto community
                    </h2>
                    <p className="mt-6 text-lg text-gray-300">
                        Joining Polygon means joining an ever-expanding, aggregated network of chains.
                    </p>
                    <div className="mt-8 flex flex-col sm:flex-row gap-4">
                        <button className="flex items-center justify-center gap-2 px-6 py-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-colors duration-300">
                            <DiscordIcon className="w-6 h-6" />
                            <span>Join Polygon Discord</span>
                        </button>
                        <button className="flex items-center justify-center gap-2 px-6 py-3 bg-gray-800/50 text-white font-semibold rounded-lg border border-white/20 hover:bg-gray-700/60 transition-colors duration-300">
                            <Settings className="w-5 h-5" />
                            <span>Get Support</span>
                        </button>
                    </div>
                </div>

                {/* Right Column: Image Collage */}
                <div className="p-4 md:p-6">
                    <div className="grid grid-cols-3 grid-rows-3 gap-2 h-[450px]">
                        <div className="col-span-2 row-span-2 rounded-lg overflow-hidden">
                            <img src={images[0]} alt="Community event 1" className="w-full h-full object-cover" />
                        </div>
                        <div className="rounded-lg overflow-hidden">
                             <img src={images[1]} alt="Community event 2" className="w-full h-full object-cover" />
                        </div>
                        <div className="rounded-lg overflow-hidden">
                             <img src={images[2]} alt="Community event 3" className="w-full h-full object-cover" />
                        </div>
                         <div className="rounded-lg overflow-hidden">
                             <img src={images[3]} alt="Community event 4" className="w-full h-full object-cover" />
                        </div>
                         <div className="col-span-2 rounded-lg overflow-hidden">
                             <img src={images[4]} alt="Community event 5" className="w-full h-full object-cover" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;