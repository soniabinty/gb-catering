import React from "react";
import bgImage from "../../../assets/side-view-wedding-arch-with-flowers.jpg"; 

const NeedHelp = () => {
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
        <h4 className="text-3xl text-black  word-spacing-widest tracking-[.30em] md:text-4xl font-medium uppercase mb-4">
          NEED HELP?
        </h4>

        <p className="text-lg md:text-xl mb-2 text-black">
          If you need more information about making a selection from the services we offer,
        </p>
        <p className="text-lg md:text-xl mb-6 text-black">
          please don’t hesitate to get in touch!
        </p>

        <a
          href="https://www.eventsbyindianocean.co.uk/contact/"
          className="inline-block bg-pink-700 text-white px-8 py-3 text-sm font-medium uppercase tracking-[.30em] hover:bg-white hover:text-black transition duration-300"
        >
          Get in Touch
        </a>
      </div>
    </section>
  );
};

export default NeedHelp;
