import React from "react";
import video from "./../../../assets/WhatsApp Video 2025-06-16 at 02.24.07_28edcdad.mp4";
import { useTranslation } from "react-i18next";

const AboutUs = () => {
  const { t } = useTranslation();

  return (
    <div className="relative w-full  mx-auto ">
      {/* Floating About Box outside video container */}
      <div className="relative z-50 max-w-2xl mx-auto bg-[#917400] text-white p-12 border-2 border-gray-400 shadow-md -mb-32">
        {/* -mb-32 pulls it down toward video container */}
        <h1 className="text-4xl md:text-6xl krona-font font-bold mb-4 text-center uppercase">
          {t('aboutUs.title')}
        </h1>
        <p className="text-md leading-loose text-justify tracking-widest">
          {t('aboutUs.description')}
        </p>
      </div>

      {/* Video Container */}
      <div className="relative w-full h-[480px] overflow-hidden shadow-lg">
        <video
          className="absolute w-full h-full object-cover top-0 left-0"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src={video} type="video/mp4" />
          {t('aboutUs.videoFallback')}
        </video>

        {/* Overlay */}
        <div className="absolute inset-0 bg-white/60"></div>

        {/* Centered Headline */}
        <div className="relative z-10 flex items-center justify-center h-full text-white text-center px-4">
          <div>
            <h2 className="lg:text-4xl krona-font text-2xl text-black leading-tight mb-6 tracking-widest drop-shadow-lg">
              {t('aboutUs.headline1')}
            </h2>
            <h3 className="lg:text-6xl prata-font text-4xl mb-6 tracking-widest drop-shadow-lg">
              {t('aboutUs.headline2')}
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
