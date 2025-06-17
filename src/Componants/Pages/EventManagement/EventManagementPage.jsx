import React from "react";
import NeedHelp from "../Home/NeedHelp";
import { useTranslation } from "react-i18next";
import bgImage from "../../../assets/event-management.jpg";
import cakeImage from './../../../assets/cake.jpg'

const EventManagementPage = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-white text-gray-800">
      {/* Section Heading */}
      <section
        className="relative bg-cover bg-center bg-no-repeat py-20 px-4"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="absolute inset-0 bg-black/60 z-0"></div>
        <div className="relative max-w-5xl mx-auto text-center text-white">
          <h2 className="text-3xl krona-font tracking-widest sm:text-4xl md:text-5xl lg:text-6xl uppercase">
            {t("event.title")}
          </h2>
        </div>
      </section>

      {/* Intro Text Section */}
      <section className="bg-white flex flex-col md:flex-row items-start">
        <div className="md:w-2/5 bg-red-50 py-10 px-4 sm:px-6 lg:px-10 space-y-6">
          <p className="text-gray-700 text-base sm:text-lg md:text-xl lg:text-2xl text-justify leading-relaxed">
            {t("event.intro1")}
          </p>
          <p className="text-gray-700 text-base sm:text-lg md:text-xl lg:text-2xl text-justify leading-relaxed">
            {t("event.intro2")}
          </p>
          <p className="text-gray-700 text-base sm:text-lg md:text-xl lg:text-2xl text-justify leading-relaxed">
            {t("event.intro3")}
          </p>
        </div>
        <div className="md:w-3/5 hidden md:block">
          <img
            src={cakeImage}
            alt={t("event.imageAlt")}
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* Services and Management Section */}
      <section className="relative bg-[#917400] pt-12">
        <div className="bg-[#b38f02] grid grid-cols-1 md:grid-cols-2 gap-6 px-4 sm:px-10 lg:px-16 py-10">
          {/* Services */}
          <article className="flex flex-col justify-center bg-white p-6 sm:p-10 lg:p-16 rounded shadow">
            <h2 className="text-2xl prata-font sm:text-3xl md:text-4xl text-center font-medium mb-4">
              {t("event.services.title")}
            </h2>
            <p className="text-gray-700 raleway-font text-base sm:text-lg md:text-xl leading-relaxed text-justify">
              {t("event.services.description")}
            </p>
          </article>

          {/* Management */}
          <article className="flex flex-col justify-center bg-white p-6 sm:p-10 lg:p-16 rounded shadow">
            <h3 className="text-2xl prata-font sm:text-3xl md:text-4xl text-center font-medium mb-4">
              {t("event.management.title")}
            </h3>
            <p className="text-gray-700 raleway-font text-base sm:text-lg md:text-xl font-medium leading-relaxed text-justify">
              {t("event.management.description")}
            </p>
          </article>
        </div>
      </section>

      {/* Wedding Planners Section */}
      <section className="px-4 py-12  max-w-5xl mx-auto bg-white">
        <h3 style={{ letterSpacing: '0.5em' }} className="text-2xl  prata-font sm:text-3xl md:text-4xl mb-6 text-center">
          {t("event.planners.title")}
        </h3>

        <div className="space-y-6 raleway-font text-base sm:text-lg md:text-xl text-gray-700 text-justify leading-relaxed">
          <p>{t("event.planners.p1")}</p>
          <p>{t("event.planners.p2")}</p>
        </div>
      </section>

      {/* Help Section */}
      <NeedHelp />
    </div>
  );
};

export default EventManagementPage;
