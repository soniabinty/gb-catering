import React from 'react';
import video from '../../../assets/WhatsApp Video 2025-06-16 at 02.24.07_28edcdad.mp4'
const AboutUs = () => {
    return (
        <div className='bg-white relative  flex flex-col justify-center'> 

  <div className=' z-50 border-4 border-gray-400 max-w-2xl mx-auto  p-16 text-white shadow-gray-300  shadow-md bg-[#917400]'>
     <h1 class="text-7xl font-bold mb-4 text-center uppercase">About Us</h1>
      <p class=" text-md  leading-loose text-justify word-spacing-widest ">
        At CB Catering & Events Management we pride ourselves as being among the best Asian Wedding Caterers in France and its surrounding areas. Catering for all occasions using fresh and seasonal ingredients from our in house kitchen. We can cook up rich traditional flare, complete with aromatic spices, served at the perfect temperature with delightful toppings and sides.
      </p>

  </div>

<section className="relative  w-full h-screen overflow-hidden ">
  {/* Background Video */}
  <video
    className="absolute  w-full h-full object-cover"
    autoPlay
    loop
    muted
    playsInline
  >
    <source src={video} type="video/mp4" />
    Your browser does not support the video tag.
  </video>

  {/* Overlay */}
  <div className="absolute inset-0 bg-black/30"></div>

  {/* Content */}
  <div className="relative z-10 flex items-center justify-center h-full text-white text-center px-4">
    <div>
      <h2 className="text-4xl tracking-widest word-spacing-widest   text-black font-bold leading-tight mb-6 animate-zoomIn">
        LIFE IS AN EVENT
      </h2>
      <h3 className="text-6xl word-spacing-widest   mb-6">
        MAKE IT MEMORABLE
      </h3>
 
    </div>
  </div>
</section>

            
        </div>
    );
};

export default AboutUs;