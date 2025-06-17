import React from 'react';
import { useTranslation } from 'react-i18next';
import {
  FaEnvelope,
  FaLocationArrow,
  FaMobileAlt,
  FaInstagram,
  FaFacebook,
} from 'react-icons/fa';

const ContactSection = () => {
  const { t } = useTranslation();

  return (
    <section className="px-4 py-12 text-gray-800 pb-[420px]">
      {/* Heading */}
      <div className="text-center my-8">
        <h2 className="text-7xl font-bold text-[#886D00]">
          {t('contact3.sayHello')}
        </h2>
      </div>

      {/* Contact Info List */}
      <ul style={{ letterSpacing: '0.1em' }} className="space-y-2 text-center text-lg raleway-font   text-white font-medium">
        <li className="flex items-center justify-center gap-3">
          <FaEnvelope className="text-2xl text-[#886D00]" />
          <span>contact@gbcatering.fr</span>
        </li>
        <li className="flex items-center justify-center gap-3">
          <FaLocationArrow className="text-2xl text-[#886D00]" />
          <span>{t('contact3.address')}</span>
        </li>
        <li className="flex items-center justify-center gap-3">
          <FaMobileAlt className="text-2xl text-[#886D00]" />
          <span>+33189337956</span>
        </li>
      </ul>

      {/* Social Media Heading */}
      <div className="mt-6 mb-6 text-center">
        <h3 style={{ letterSpacing: '0.5em' }} className="text-2xl text-white prata-font uppercase font-sans transition-all duration-300">
          {t('contact3.socialMedia')}
        </h3>
      </div>

      {/* Social Media Icons */}
      <div className="flex justify-center gap-8">
        <a
          href="https://www.instagram.com/gbcatering.fr"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#886D00] hover:scale-110 transition-transform"
        >
          <FaInstagram className="text-3xl" />
        </a>
        <a
          href="https://www.facebook.com/gbcatering.fr"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#886D00] hover:scale-110 transition-transform"
        >
          <FaFacebook className="text-3xl" />
        </a>
      </div>
    </section>
  );
};

export default ContactSection;
