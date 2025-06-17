import React from "react";
import { useTranslation } from "react-i18next";
import NeedHelp from "../Home/NeedHelp";
import { FaInstagram } from "react-icons/fa";
import bgImage from "../../../assets/stage-2.jpg";
import { Link } from "react-router-dom";

const Stages = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-white text-gray-800">
      {/* Section Heading */}
      <section
        className="relative bg-cover bg-center bg-no-repeat py-20 px-4"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="absolute inset-0 bg-black/60 z-0"></div>
        <div className="relative max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl krona-font tracking-widest md:text-6xl uppercase">
            {t("stages.heading")}
          </h2>
        </div>
      </section>

      {/* Intro Text */}
      <section className="bg-white flex flex-col md:flex-row items-start">
        <div className="md:w-2/5 bg-red-50 py-14 px-4 sm:px-6 lg:px-10">
          <p className="text-gray-700 text-lg sm:text-xl md:text-2xl text-justify leading-relaxed">
            {t("stages.intro")}
          </p>
        </div>
        <div className="md:w-3/5">
          <img
            src={bgImage}
            alt={t("stages.imageAlt")}
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* Types Section */}
      <section className="relative bg-[#917400] pt-12">
        <div className="px-4 sm:px-6 lg:px-20 pb-8">
          <h3 className="text-white krona-font text-3xl md:text-4xl font-medium text-center">
            {t("stages.subheading")}
          </h3>
        </div>

        <div className="bg-[#b38f02] grid grid-cols-1 md:grid-cols-2 gap-6 px-4 sm:px-6 lg:px-16 pb-12">
          {/* Mehndi Stages */}
          <article className="flex flex-col justify-center bg-white p-6 sm:p-10 lg:p-16 rounded shadow">
            <h2 className="text-2xl prata-font  sm:text-3xl text-center font-medium mb-4">
              {t("stages.mehndi.title")}
            </h2>
            <p className="text-gray-700 karla-font text-base sm:text-lg md:text-xl leading-relaxed text-justify">
              {t("stages.mehndi.desc")}
            </p>
          </article>

          {/* Gallery & Social */}
          <article className="flex flex-col justify-center bg-white p-6 sm:p-10 lg:p-16 rounded shadow">
            <h3 className="text-2xl sm:text-3xl prata-font text-center font-medium mb-4">
              {t("stages.gallery.title")}
            </h3>
            <p className="text-gray-700 karla-font text-base sm:text-lg md:text-xl font-medium leading-relaxed text-justify">
              {t("stages.gallery.desc")}
            </p>

            <div className="mt-6 flex flex-col karla-font justify-center items-center space-y-4">
              <Link
                to='/Our-Works'
                className="inline-block px-4 py-2 bg-[#b38f02] text-white uppercase font-medium text-sm sm:text-base rounded hover:opacity-90 transition"
              >
                {t("stages.gallery.button")}
              </Link>

              <a
                href="https://www.instagram.com/gbcatering.fr"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-[#b38f02] text-white font-medium text-sm sm:text-base rounded hover:opacity-90 transition"
              >
                <FaInstagram className="text-xl" />
                {t("stages.gallery.social")}
              </a>
            </div>
          </article>
        </div>
      </section>

      {/* Help Section */}
      <NeedHelp />
    </div>
  );
};

export default Stages;
