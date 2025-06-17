import React from "react";
import { useTranslation } from "react-i18next";
import bgImage from "./../../../assets/flower.jpg";
import { Link } from "react-router-dom";

const NeedHelp = () => {
  const { t } = useTranslation();

  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat py-20 px-4"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-white/60 z-0"></div>

      {/* Content */}
      <div className="relative max-w-4xl mx-auto text-center text-white z-10">
        <h4 className="text-3xl krona-font text-black tracking-[.30em] md:text-4xl font-medium uppercase mb-4">
          {t("needHelp.title")}
        </h4>

        <p className="text-lg md:text-xl mb-2 text-black">
          {t("needHelp.line1")}
        </p>
        <p className="text-lg md:text-xl mb-6 text-black">
          {t("needHelp.line2")}
        </p>

        <Link
          to='/Contact'
          className="inline-block karla-font bg-pink-700 underline text-white px-8 py-3 text-sm font-medium tracking-[.30em] hover:bg-white hover:text-black transition duration-300"
        >
          {t("needHelp.button")}
        </Link>
      </div>
    </section>
  );
};

export default NeedHelp;
