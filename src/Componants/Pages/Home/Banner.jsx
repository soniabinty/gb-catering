import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const Banner = () => {
  const { t } = useTranslation();

  const images = [
    "https://i.ibb.co/Y76Tpshn/clothes-twined-top-wedding-altar.jpg",
    "https://i.ibb.co/DPxx1D10/tall-vases-with-pink-flowers-stand-long-dinner-table.jpg",
    "https://i.ibb.co/fVF0h4fx/wonderful-wedding-ceremony-place-near-sea-decorated-by-flowers.jpg",
    "https://i.ibb.co/ZRZTZqK8/chandelier-with-flowers-greenery-hangs-dinner-table.jpg"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section
      className="relative w-full h-[520px] bg-cover bg-center transition-opacity duration-1000"
      style={{
        backgroundImage: `url(${images[currentIndex]})`,
      }}
    >
      <div className="absolute inset-0 bg-black/70"></div>

      <div className="relative flex items-center justify-center h-full text-white text-center px-4">
        <div>
          <h2 data-aos="zoom-in" className="text-4xl krona-font md:text-6xl font-bold leading-tight mb-6 animate-zoomIn">
            {t('bannerTitleLine1')} <br /> & <br /> {t('bannerTitleLine2')}
          </h2>
          <h3 className="text-xl prata-font md:text-2xl italic mb-6">
            {t('bannerSubtitle')}
          </h3>
          <a
            href="/Our-Works"
            data-aos="zoom-in"
            className="inline-block karla-font bg-pink-700 text-white px-8 py-2 text-sm shadow-md hover:bg-gray-200 hover:text-black transition tracking-[.30em] uppercase"
          >
            {t('ourServices')}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Banner;
