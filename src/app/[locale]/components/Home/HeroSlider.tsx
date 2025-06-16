"use client";
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const HeroSlider: React.FC = () => {
  const slideData = [
    {
      title: "Fusing AI, IoT, and Blockchain for Urban Life",
      subtitle: "Utopos is a project aimed at building futuristic cities powered by blockchain, AI, IoT, and VR technologies on a global scale.",
      desktopImageUrl: "/assets/slides/4.jpg",
      mobileImageUrl: "/assets/slides/4.jpg",
      learnMoreUrl: "#"
    },
    {
      title: "World's First Blockchain Powered Smart City",
      subtitle: "A 50,000-acre site is being developed as the world's first smart city powered by blockchain technology, with access to utilities like water and electricity.",
      desktopImageUrl: "/assets/slides/2.jpg",
      mobileImageUrl: "/assets/slides/2.jpg",
      learnMoreUrl: "#"
    },
    {
      title: "Futuristic, Eco-Friendly Building Construction",
      subtitle: "Utopos is a futuristic smart city with eco-friendly homes, apartments, offices, schools, retail, and high-tech industrial parks. It offers incentives for sustainable development, including digital agriculture and solar farming.",
      desktopImageUrl: "/assets/slides/2.png",
      mobileImageUrl: "/assets/slides/2.png",
      learnMoreUrl: "#"
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
          el: '.swiper-pagination',
          clickable: true,
          dynamicBullets: false,
        }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        className="hero-slider w-full h-full"
      >
        {slideData.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-full">
              <picture>
                <source media="(max-width: 768px)" srcSet={slide.mobileImageUrl} />
                <source media="(min-width: 769px)" srcSet={slide.desktopImageUrl} />
                <img 
                  src={slide.desktopImageUrl}
                  alt={slide.title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.src = 'https://placehold.co/1920x1080/ff0000/ffffff?text=Image+Error';
                  }}
                />
              </picture>
              <div className="absolute inset-0 bg-gradient-to-r from-black/90 bg-opacity-80 bg-blend-saturation flex items-center justify-start ">
                <div className="md:pl-30 text-start text-white  md:w-[650px] px-6 ">
                  <h2 className="text-4xl md:text-5xl lg:text-5xl font-extrabold mb-3 whitespace-pre-wrap">
                    {slide.title}
                  </h2>
                  <p className="text-[14px] md:text-[16px] max-w-2xl mx-auto mb-8">
                    {slide.subtitle}
                  </p>
                  <a
                    href={slide.learnMoreUrl}
                    className="inline-block bg-purple-500 text-white font-bold py-3 px-8 rounded-full text-sm hover:bg-gray-200 transition-colors"
                  >
                    BUY UTOP TOKEN
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
          background-color: #ED2AFFFF;
          opacity: 1;
          margin: 0 6px;
          transition: width 0.3s, background-color 0.3s;
        }
        .hero-slider .swiper-pagination-bullet-active {
          width: 100px;
          height: 2px;
          background-color: #730FFFFF;
        }
          .swiper-pagination-bullet {
          border-radius: 0px !important
          }
      `}</style>
    </div>
  );
};

export default HeroSlider;