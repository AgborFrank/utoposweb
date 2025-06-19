"use client";
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const PayHero: React.FC = () => {
    const slideData = [
        {
          title: "Transform Business with Utopos Payments",
          subtitle: "Empower your business with Utopos' cutting-edge payment gateway, offering seamless blockchain payment solutions tailored for businesses of all sizes. Enhance efficiency, security, and global reach with ease.",
          desktopImageUrl: "/assets/slides/12.jpg",
          mobileImageUrl: "/assets/slides/12.jpg",
          learnMoreUrl: "https://app.uniswap.org/explore/tokens/polygon/0x0946C90058cE01d734B9e770FFCfD0C029F83709",
        },
        {
          title: "Simplify Crypto Payments with Utopos",
          subtitle: "Expand your payment options with Utopos' versatile gateway, supporting top cryptocurrencies like USDT, UTOP, USDC, and BNB. Experience a complete DeFi payment solution designed for modern businesses.",
          desktopImageUrl: "/assets/slides/2.jpg",
          mobileImageUrl: "/assets/slides/2.jpg",
          learnMoreUrl: "https://app.uniswap.org/explore/tokens/polygon/0x0946C90058cE01d734B9e770FFCfD0C029F83709",
        },
        {
          title: "Secure Blockchain Transactions",
          subtitle: "Utopos ensures secure, transparent, and lightning-fast transactions with blockchain technology. Build trust with your customers while simplifying your payment processes.",
          desktopImageUrl: "/assets/slides/11.jpg",
          mobileImageUrl: "/assets/slides/crypto.png",
          learnMoreUrl: "https://app.uniswap.org/explore/tokens/polygon/0x0946C90058cE01d734B9e770FFCfD0C029F83709",
        },
        {
          title: "Global Payments, Local Solutions",
          subtitle: "Break geographical barriers with Utopos' global payment gateway. Enjoy localized solutions that cater to diverse markets, ensuring smooth transactions for your international customers.",
          desktopImageUrl: "/assets/slides/10.png",
          mobileImageUrl: "/assets/slides/10.png",
          learnMoreUrl: "https://app.uniswap.org/explore/tokens/polygon/0x0946C90058cE01d734B9e770FFCfD0C029F83709",
        }
      ];

  return (
    <div className="relative w-full h-[55vh] md:h-[85vh]">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          el: ".swiper-pagination",
          clickable: true,
          dynamicBullets: false,
        }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        className="hero-slider w-full h-full"
      >
        {slideData.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-full">
              <picture>
                <source
                  media="(max-width: 768px)"
                  srcSet={slide.mobileImageUrl}
                />
                <source
                  media="(min-width: 769px)"
                  srcSet={slide.desktopImageUrl}
                />
                <img
                  src={slide.desktopImageUrl}
                  alt={slide.title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.src =
                      "https://placehold.co/1920x1080/ff0000/ffffff?text=Image+Error";
                  }}
                />
              </picture>
              <div className="absolute inset-0 bg-gradient-to-r from-black/90 bg-opacity-80 bg-blend-saturation flex items-center justify-start ">
                <div className="md:pl-30 text-start text-white  md:w-[650px] px-6 ">
                  <h2 className="text-4xl md:text-5xl lg:text-5xl font-semibold mb-3 whitespace-pre-wrap">
                    {slide.title}
                  </h2>
                  <p className="text-[14px] md:text-[16px] max-w-2xl mx-auto mb-8">
                    {slide.subtitle}
                  </p>
                  <a
                    href={slide.learnMoreUrl}
                    className="inline-block bg-purple-500 text-white font-semibold py-3 px-8 rounded-full text-sm hover:bg-gray-200 transition-colors"
                  >
                    Sign up for free
                  </a>
                </div>
                
              </div>
            </div>
          </SwiperSlide>
        ))}
        <div className="swiper-pagination"></div>
        <div className="swiper-button-prev"></div>
        <div className="swiper-button-next"></div>
      </Swiper>

      <style jsx global>{`
        .hero-slider .swiper-button-next,
        .hero-slider .swiper-button-prev {
          color: white;
          background-color: rgba(222, 222, 222, 0.2);
          width: 44px;
          height: 44px;
          border-radius: 30%;
          transition: background-color 0.3s;
        }
        .hero-slider .swiper-button-next:hover,
        .hero-slider .swiper-button-prev:hover {
          background-color: rgba(0, 0, 0, 0.5);
        }
        .hero-slider .swiper-button-next::after,
        .hero-slider .swiper-button-prev::after {
          font-size: 1.2rem;
          font-weight: 900;
        }
        .hero-slider .swiper-pagination {
          bottom: 20px;
          text-align: center;
        }
        .hero-slider .swiper-pagination-bullet {
          width: 100px;
          height: 2px;
          background-color: #ed2affff;
          opacity: 1;
          margin: 0 6px;
          transition: width 0.3s, background-color 0.3s;
        }
        .hero-slider .swiper-pagination-bullet-active {
          width: 100px;
          height: 2px;
          background-color: #730fffff;
        }
        .swiper-pagination-bullet {
          border-radius: 0px !important;
        }
      `}</style>
    </div>
  );
};

export default PayHero;