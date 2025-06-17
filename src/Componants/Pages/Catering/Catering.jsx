import React from "react";
import { useTranslation } from "react-i18next";
import NeedHelp from "../Home/NeedHelp";
import bgImage from "../../../assets/side-view-wedding-arch-with-flowers.jpg";

const Catering = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-white text-gray-800">
      {/* Banner Section */}
      <section
        className="relative bg-cover bg-center bg-no-repeat py-20 px-4"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="absolute inset-0 bg-black/60 z-0"></div>
        <div className="relative max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl md:text-6xl uppercase krona-font tracking-widest">
            {t("catering2.title")}
          </h2>
        </div>
      </section>

      {/* Intro Section */}
      <section className="flex flex-col md:flex-row items-start">
        <div className="md:w-2/5 bg-red-50 py-10 h-full px-4 md:px-6">
          <p className="text-gray-700 text-lg md:text-2xl font-medium text-justify leading-relaxed">
            {t("catering2.intro")}
          </p>
        </div>
        <div className="md:w-3/5">
          <img
            src="https://i.ibb.co/5WXXcgq5/wedding-catering-with-fruits-snacks-decorated-table.jpg"
            alt="Catering"
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* Occasion Section */}
      <section className="py-10 px-4 sm:px-6 lg:px-12 bg-gray-50 text-center">
        <h3 style={{ letterSpacing: '0.2em' }} className="text-3xl sm:text-4xl md:text-5xl prata-font mb-4 tracking-wide uppercase">
          {t("catering2.occasionTitle")}
        </h3>
        <p className="max-w-5xl raleway-font text-base sm:text-lg md:text-xl font-medium mx-auto text-gray-700 leading-relaxed text-justify">
          {t("catering2.occasionDesc")}
        </p>
      </section>

      {/* Wedding Types */}
      <section className="py-10 px-4 sm:px-6 lg:px-12 bg-white">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* Indian Wedding */}
          <div className="text-center bg-gray-200 overflow-hidden shadow-md">
            <img
              src="https://eventsbyindianocean.co.uk/wp-content/uploads/2021/08/staGE4.jpg"
              alt="Indian Wedding"
              className="w-full h-56 sm:h-64 object-cover"
            />
            <h2 className="text-xl sm:text-2xl krona-font  text-[#917400] font-medium mt-4">
              {t("catering2.indian.title")}
            </h2>
            <p className="mt-2 font-medium karla-font text-justify px-3 pb-4">
              {t("catering2.indian.desc")}
            </p>
          </div>

          {/* Muslim Wedding */}
          <div className="text-center bg-gray-200 overflow-hidden shadow-md">
            <img
              src="https://eventsbyindianocean.co.uk/wp-content/uploads/2021/08/stage-10-1.jpg"
              alt="Muslim Wedding"
              className="w-full h-56 sm:h-64 object-cover"
            />
            <h2 className="text-xl krona-font sm:text-2xl text-[#917400] font-medium mt-4">
              {t("catering2.muslim.title")}
            </h2>
            <p className="mt-2 karla-font font-medium text-justify px-3 pb-4">
              {t("catering2.muslim.desc")}
            </p>
          </div>

          {/* Arab Wedding */}
          <div className="text-center bg-gray-200 overflow-hidden shadow-md">
            <img
              src="https://eventsbyindianocean.co.uk/wp-content/uploads/2021/08/Wedding-Stages.jpg"
              alt="Arab Wedding"
              className="w-full h-56 sm:h-64 object-cover"
            />
            <h2 className="text-xl krona-font sm:text-2xl text-[#917400] font-medium mt-4">
              {t("catering2.arab.title")}
            </h2>
            <p className="mt-2 karla-font font-medium text-justify px-3 pb-4">
              {t("catering2.arab.desc")}
            </p>
          </div>
        </div>
      </section>

      <NeedHelp />
    </div>
  );
};

export default Catering;
