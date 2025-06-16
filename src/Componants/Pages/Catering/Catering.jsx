import React from "react";
import NeedHelp from "../Home/NeedHelp";
import bgImage from '../../../assets/side-view-wedding-arch-with-flowers.jpg'

const Catering = () => {
  return (
    <div className="bg-white text-gray-800">
      {/* Section Heading */}
        <section
          className="relative bg-cover bg-center bg-no-repeat py-20 px-4"
          style={{
            backgroundImage: `url(${bgImage})`,
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/60 z-0"></div>
    
          {/* Content */}
          <div className="relative max-w-4xl mx-auto text-center text-white z-10">
          
    <h2 className="text-6xl uppercase font-semibold">Catering</h2>
       
          </div>
        </section>

      {/* Intro Text */}
      <section className="  bg-white flex flex-col md:flex-row items-start ">
        <div className="md:w-2/5 bg-red-50 py-14 px-4">
          <p className="text-gray-700 text-2xl font-medium text-justify leading-relaxed">
            At GB Catering & Events Management we pride ourselves as
            being among the best Asian Wedding Caterers in France and its
            surrounding areas. Catering for all occasions using fresh and
            seasonal ingredients from our in house kitchen. We can
            cook up a rich traditional flare, complete with aromatic spices,
            served at the perfect temperature with delightful toppings and
            sides.
          </p>
        </div>
        <div className="md:w-3/5">{/* Empty column for symmetry or image */}
        <img src="https://i.ibb.co/5WXXcgq5/wedding-catering-with-fruits-snacks-decorated-table.jpg" alt="" />
        </div>
      </section>

      {/* Catering for Any Occasion */}
      <section className="py-12 px-4 bg-gray-50 text-center">
        <h3 className="text-5xl font-medium mb-4 tracking-[.28em]">Catering for ANY <br /> OCCASION</h3>
        <p className="max-w-5xl text-xl font-medium mx-auto text-gray-700 leading-relaxed text-justify">
          From weddings in unique venues to bespoke corporate events and private{" "}
          <strong>‘at home’</strong> family get togethers including{" "}
          <strong>Mehndi’s, Nikahs and Birthdays</strong>. We have{" "}
          <strong>various packages to suit your needs</strong>. Our catering is
          designed to impress you and your guests with the food and service for
          which we are renowned. Whether you wish to be involved at every
          juncture from <strong>choosing crockery to menu creation</strong> and
          venue dressing or whether you prefer us to take full control, enabling
          you to sit back and enjoy your event, we work with you to ensure we
          provide an unforgettable GB experience!
        </p>
      </section>

      {/* Wedding Types */}
      <section className="py-12 px-24 bg-white">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Indian Wedding */}
          <div className="text-center bg-gray-200">
            <img
              src="https://eventsbyindianocean.co.uk/wp-content/uploads/2021/08/staGE4.jpg"
              alt="Indian Wedding"
              className="w-full h-auto  shadow"
            />
            <h2 className="text-2xl text-[#917400] font-medium mt-4">INDIAN WEDDING</h2>
            <p className="mt-2 font-medium   text-justify p-3 mb-2">
              We will create and produce a spectacular Indian wedding for you,
              your family and guests. Bespoke walkways, light up floors, special
              indoor lighting and firework effects to bring colour and life into
              the event.
            </p>
          </div>

          {/* Muslim Wedding */}
          <div className="text-center bg-gray-200">
            <img
              src="https://eventsbyindianocean.co.uk/wp-content/uploads/2021/08/stage-10-1.jpg"
              alt="Muslim Wedding"
              className="w-full h-auto  shadow"
            />
            <h2 className="text-2xl text-[#917400] font-medium mt-4">MUSLIM WEDDING</h2>
            <p className="mt-2 font-medium   text-justify p-3 mb-2">
              Bespoke designs and decor to meet the expectations of an Islamic
              Wedding, themed with the traditions it holds with 100% Halal
              Certified food served. We offer wedding stages, lighting, florals,
              and backdrops, as well as table centrepieces for all your event
              needs.
            </p>
          </div>

          {/* Arab Wedding */}
          <div className="text-center bg-gray-200">
            <img
              src="https://eventsbyindianocean.co.uk/wp-content/uploads/2021/08/Wedding-Stages.jpg"
              alt="Arab Wedding"
              className="w-full h-auto  shadow"
            />
            <h2 className="text-2xl text-[#917400] font-medium mt-4">ARAB WEDDING</h2>
            <p className="mt-2 font-medium   text-justify p-3 mb-2">
              Using the latest trends and colours we can fulfil the requests of
              the Bride and Groom to reflect their traditions. Using various
              decor and props we can illuminate the event to your need and make
              it hospitable for your guests.
            </p>
          </div>
        </div>
      </section>

      {/* Help Section */}
    <NeedHelp></NeedHelp>
    </div>
  );
};

export default Catering;