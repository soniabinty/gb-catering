import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const Work = () => {
  const { t } = useTranslation();

  const images = [
    "https://i.ibb.co/Y76Tpshn/clothes-twined-top-wedding-altar.jpg",
    "https://i.ibb.co/DPxx1D10/tall-vases-with-pink-flowers-stand-long-dinner-table.jpg",
    "https://i.ibb.co/fVF0h4fx/wonderful-wedding-ceremony-place-near-sea-decorated-by-flowers.jpg",
    "https://i.ibb.co/ZRZTZqK8/chandelier-with-flowers-greenery-hangs-dinner-table.jpg",
    "https://i.ibb.co/fVF0h4fx/wonderful-wedding-ceremony-place-near-sea-decorated-by-flowers.jpg",
    "https://i.ibb.co/ZRZTZqK8/chandelier-with-flowers-greenery-hangs-dinner-table.jpg"
  ];

  return (
    <div className="bg-black px-4 md:px-24 py-12 flex flex-col justify-center items-center">
      <h2 className="text-3xl prata-font md:text-5xl tracking-[.28em] uppercase text-white text-center">
        {t('gallery.title')}
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10 w-full max-w-7xl">
        {images.map((src, index) => (
          <div key={index} className="overflow-hidden">
            <img
              src={src}
              alt={t('gallery.imageAlt', { number: index + 1 })}
              className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </div>

      <div className="mt-10">
        <Link
          to='/Our-Works'
          className="inline-block karla-font bg-pink-700 text-white px-7 py-2 text-sm shadow-md hover:bg-gray-200 hover:text-black transition tracking-[.30em] "
        >
          {t('gallery.viewMore')}
        </Link>
      </div>
    </div>
  );
};

export default Work;
