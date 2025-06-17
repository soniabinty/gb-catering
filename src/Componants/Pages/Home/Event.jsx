import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import eventPlaner from './../../../assets/event-planer.jpg'
import centrepieces from './../../../assets/CENTREPIECES.jpg'
import service from './../../../assets/wedding-service.jpg'
import decor from './../../../assets/decor.jpg'
import stage from './../../../assets/stage.jpg'

const Event = () => {
  const { t } = useTranslation();

  const cards = [
    {
      title: t('event2.catering.title'),
      img: 'https://i.ibb.co/5WXXcgq5/wedding-catering-with-fruits-snacks-decorated-table.jpg',
      desc: t('event2.catering.desc'),
      to: '/Catering',
    },
    {
      title: t('event2.weddingStages.title'),
      img: `${stage}`,
      desc: t('event2.weddingStages.desc'),
      to: '/Weeding-stages',
    },
    {
      title: t('event2.weddingDecor.title'),
      img: `${decor}`,
      desc: t('event2.weddingDecor.desc'),
      to: '/wedding-decor',
    },
    {
      title: t('event2.eventPlanners.title'),
      img: `${eventPlaner}`,
      desc: t('event2.eventPlanners.desc'),
      to: '/event-management',
    },
    {
      title: t('event2.weddingService.title'),
      img: `${service}`,
      desc: t('event2.weddingService.desc'),
      to: '/wedding-services',
    },
    {
      title: t('event2.centrepieces.title'),
      img: `${centrepieces}`,
      desc: t('event2.centrepieces.desc'),
      to: '/',
    },
  ];

  return (
    <div className="bg-gray-950 min-h-screen py-20 px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {cards.map((card, index) => (
          <div key={index} className="bg-white p-5 max-w-3xl mx-auto flex flex-col justify-between">
            <h2 className="text-2xl krona-font font-bold text-gray-800 mb-4 text-center">{card.title}</h2>
            <div className="flex justify-center mb-4">
              <img
                src={card.img}
                alt={card.title}
                className="w-full max-w-2xl h-66 object-cover rounded shadow"
              />
            </div>
            <p className="text-gray-700 karla-font text-sm font-medium mb-6 text-justify">{card.desc}</p>
            <div className="text-center mt-auto">
              <Link
                to={card.to}
                data-aos="zoom-in"
                className="inline-block karla-font bg-pink-700 hover:bg-pink-600 text-white tracking-[.30em] px-6 py-2 text-sm transition duration-300 shadow-md"
              >
                {t('event2.readMore')}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Event;
