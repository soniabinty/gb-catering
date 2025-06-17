import React from 'react';
import { FaInstagram, FaFacebook } from 'react-icons/fa';
import logo from './../../assets/logo.png'

const Footer = () => {
  return (
  <section className="bg-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col items-center justify-center text-center">
          {/* Logo Image */}
          <div className="mb-4">
            <img
              src={logo }
              alt="logo full"
              title="logo full"
              loading="lazy"
              className="h-24 object-contain mx-auto"
            />
          </div>

          {/* Social Icons */}
          <div className="flex space-x-4 mb-4 justify-center">
            <a
              href="https://www.instagram.com/gbcatering.fr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-pink-500 animate-pulse text-2xl"
            >
              <span className="sr-only">Instagram</span>
              <FaInstagram />
            </a>
            <a
              href="https://www.facebook.com/gbcatering.fr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-600 animate-pulse text-2xl"
            >
              <span className="sr-only">Facebook</span>
              <FaFacebook />
            </a>
          </div>

          {/* Divider */}
          <div className="w-full border-t border-gray-300"></div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
