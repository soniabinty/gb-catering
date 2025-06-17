import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaAlignJustify, FaWindowClose, FaInstagram, FaFacebook } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import logo from './../../assets/logo.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t, i18n } = useTranslation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'auto';
  }, [isMenuOpen]);

  return (
    <header className="bg-gray-800 text-white" itemScope itemType="https://schema.org/WPHeader">
      <p className="text-center text-lg font-bold hidden" itemProp="headline">
        <Link to="/" title="Indian Ocean Catering and Events Management" rel="home">
          Indian Ocean Catering and Events Management
        </Link>
      </p>

      {/* Desktop Navigation */}
      <section className="hidden md:flex items-center justify-between py-4 px-6 max-w-7xl mx-auto">
        <div className="flex-shrink-0">
          <Link to="/">
            <img src={logo} alt="Logo" className="h-16 object-contain" />
          </Link>
        </div>

        <div className="flex items-center space-x-6">
          <nav>
            <ul className="flex montserrat-font space-x-4 text-base font-medium z-[999]">
              <li><Link to="/" className="hover:text-gray-300">{t('home')}</Link></li>
              <li className="relative group">
                <Link to="#" className="flex items-center hover:text-gray-300">
                  {t('services')} <span className="ml-1"><i className="fa fa-caret-down" /></span>
                </Link>
                <ul className="absolute hidden group-hover:block bg-gray-700 text-white rounded shadow-lg mt-1 w-56 z-10">
                  <li><Link to="/Catering" className="block px-4 py-2 hover:bg-gray-600">{t('catering')}</Link></li>
                  <li><Link to="/Weeding-stages" className="block px-4 py-2 hover:bg-gray-600">{t('weddingStages')}</Link></li>
                  <li><Link to="/wedding-decor" className="block px-4 py-2 hover:bg-gray-600">{t('weddingDecor')}</Link></li>
                  <li><Link to="/event-management" className="block px-4 py-2 hover:bg-gray-600">{t('eventManagement')}</Link></li>
                  <li><Link to="/wedding-services" className="block px-4 py-2 hover:bg-gray-600">{t('weddingServices')}</Link></li>
                </ul>
              </li>
              <li><Link to="/Our-Works" className="hover:text-gray-300">{t('ourWork')}</Link></li>
              <li><Link to="/Contact" className="hover:text-gray-300">{t('contact')}</Link></li>
              <li><Link to="/get-a-quote" className="hover:text-gray-300">{t('quote')}</Link></li>
            </ul>
          </nav>
          

          {/* Social Icons */}
          <div className="flex items-center space-x-4">
            <a href="https://www.instagram.com/gbcatering.fr" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
              <FaInstagram className="text-xl animate-pulse" />
            </a>
            <a href="https://www.facebook.com/gbcatering.fr" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
              <FaFacebook className="text-xl animate-pulse" />
            </a>
          </div>

          {/* Language Switcher */}
          <div className="flex space-x-2">
            <button onClick={() => i18n.changeLanguage('en')} className="text-sm border px-2 py-1 rounded hover:bg-gray-700">EN</button>
            <button onClick={() => i18n.changeLanguage('fr')} className="text-sm border px-2 py-1 rounded hover:bg-gray-700">FR</button>
          </div>
        </div>
      </section>

      {/* Mobile Navigation */}
   <section className="md:hidden relative flex items-center justify-between py-4 px-4 bg-gray-800">
  {/* Menu Toggle Button (Left) */}
  <button onClick={toggleMenu} className="text-white z-10">
    {isMenuOpen ? <FaWindowClose className="text-xl" /> : <FaAlignJustify className="text-xl" />}
  </button>

  {/* Centered Logo */}
  <div className="absolute left-1/2 transform -translate-x-1/2">
    <Link to="/">
      <img src={logo} alt="Logo" className="h-20 object-contain" />
    </Link>
  </div>

  {/* Language + Social Icons (Right) */}
  <div className="flex items-center space-x-3 z-10">
    {/* Language Switcher */}
    {i18n.language !== 'en' && (
      <button
        onClick={() => i18n.changeLanguage('en')}
        className="text-sm border px-2 py-1 rounded hover:bg-gray-700"
      >
        EN
      </button>
    )}
    {i18n.language !== 'fr' && (
      <button
        onClick={() => i18n.changeLanguage('fr')}
        className="text-sm border px-2 py-1 rounded hover:bg-gray-700"
      >
        FR
      </button>
    )}

    {/* Social Icons */}
    <a
      href="https://www.instagram.com/gbcatering.fr"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-gray-300"
    >
      <FaInstagram className="text-lg animate-pulse" />
    </a>
    <a
      href="https://www.facebook.com/gbcatering.fr"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-gray-300"
    >
      <FaFacebook className="text-lg animate-pulse" />
    </a>
  </div>
</section>


      {/* Mobile Menu Drawer */}
     {isMenuOpen && (
  <nav className="fixed top-0 left-0 right-0 bottom-0 montserrat-font bg-gray-800 text-white z-[9999] pt-6 px-6 overflow-y-auto">
    
    {/* Top bar with logo centered and close icon right */}
    <div className="flex items-center justify-between mb-6">
      {/* Empty div to balance the flex spacing */}
      <div className="w-6" />
      
      {/* Centered Logo */}
      <div className="flex justify-center flex-1">
        <Link to="/" onClick={toggleMenu}>
          <img src={logo} alt="Logo" className="h-20 object-contain" />
        </Link>
      </div>

      {/* Close Button */}
      <div className="w-6 flex justify-end">
        <button onClick={toggleMenu} className="text-white text-2xl hover:text-gray-400">
          <FaWindowClose />
        </button>
      </div>
    </div>

    <ul className="flex flex-col space-y-1">
      <li><Link to="/" className="block py-3 hover:bg-gray-700 px-2" onClick={toggleMenu}>{t('home')}</Link></li>

      <li>
        <details className="group">
          <summary className="cursor-pointer py-3 px-2 hover:bg-gray-700 flex justify-between items-center">
            {t('services')} <span className="ml-1">&#9662;</span>
          </summary>
          <ul className="pl-4 space-y-1">
            <li><Link to="/Catering" className="block py-2 px-2 hover:bg-gray-600" onClick={toggleMenu}>{t('catering')}</Link></li>
            <li><Link to="/Weeding-stages" className="block py-2 px-2 hover:bg-gray-600" onClick={toggleMenu}>{t('weddingStages')}</Link></li>
            <li><Link to="/wedding-decor" className="block py-2 px-2 hover:bg-gray-600" onClick={toggleMenu}>{t('weddingDecor')}</Link></li>
            <li><Link to="/event-management" className="block py-2 px-2 hover:bg-gray-600" onClick={toggleMenu}>{t('eventManagement')}</Link></li>
            <li><Link to="/wedding-services" className="block py-2 px-2 hover:bg-gray-600" onClick={toggleMenu}>{t('weddingServices')}</Link></li>
          </ul>
        </details>
      </li>

      <li><Link to="/Our-Works" className="block py-3 hover:bg-gray-700 px-2" onClick={toggleMenu}>{t('ourWork')}</Link></li>
      <li><Link to="/Contact" className="block py-3 hover:bg-gray-700 px-2" onClick={toggleMenu}>{t('contact')}</Link></li>
      <li><Link to="/get-a-quote" className="block py-3 hover:bg-gray-700 px-2" onClick={toggleMenu}>{t('quote')}</Link></li>

    
    </ul>
  </nav>
)}


    </header>
  );
};

export default Navbar;
