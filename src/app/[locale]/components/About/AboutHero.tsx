"use client";
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const AboutHero: React.FC = () => {
    const slideData = [
        {
          title: "Pioneering Cameroon's Journey",
          subtitle: "Dropme redefines travel with cutting-edge tech, ensuring safe, seamless rides that connect communities and empower every journey.",
          desktopImageUrl: "/assets/slides/1.jpeg",
          mobileImageUrl: "/assets/slides/1.jpeg",
          learnMoreUrl: "#"
        },
        {
          title: "Drive Your Destiny",
          subtitle: "Join Dropme as a driver, embrace the freedom to set your own hours, and fuel your dreams with every ride.",
          desktopImageUrl: "/assets/slides/4.jpg",
          mobileImageUrl: "/assets/slides/4.jpg",
          learnMoreUrl: "#"
        },
        {
          title: "Mobility That Moves You",
          subtitle: "From budget-friendly rides to premium options, Dropme tailors every trip to your style, vibe, and destination.",
          desktopImageUrl: "/assets/slides/3.jpg",
          mobileImageUrl: "/assets/slides/3.jpg",
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
              <div className="absolute inset-0 bg-gradient-to-r from-black bg-opacity-10 flex items-center justify-start ">
                <div className="md:pl-30 text-start text-white  md:w-[700px]  py-4 px-6 ">
                  <h2 className="text-5xl md:text-5xl lg:text-6xl font-extrabold mb-3 whitespace-pre-wrap">
                    {slide.title}
                  </h2>
                  <p className="text-md md:text-xl max-w-2xl mx-auto mb-8">
                    {slide.subtitle}
                  </p>
                  <a
                    href={slide.learnMoreUrl}
                    className="inline-block bg-primary text-white font-bold py-3 px-8 rounded-lg text-sm hover:bg-gray-200 transition-colors"
                  >
                    Learn More
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
          background-color: #0F9E31FF;
          opacity: 1;
          margin: 0 6px;
          transition: width 0.3s, background-color 0.3s;
        }
        .hero-slider .swiper-pagination-bullet-active {
          width: 100px;
          height: 2px;
          background-color: #FFBB0FFF;
        }
          .swiper-pagination-bullet {
          border-radius: 0px !important
          }
      `}</style>
    </div>
  );
};

export default AboutHero;