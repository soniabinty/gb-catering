import { useEffect, useState } from "react";

const Banner = () => {
  const images = [
    "https://i.ibb.co/Y76Tpshn/clothes-twined-top-wedding-altar.jpg",
    "https://i.ibb.co/DPxx1D10/tall-vases-with-pink-flowers-stand-long-dinner-table.jpg",
    "https://i.ibb.co/fVF0h4fx/wonderful-wedding-ceremony-place-near-sea-decorated-by-flowers.jpg",
    "https://i.ibb.co/ZRZTZqK8/chandelier-with-flowers-greenery-hangs-dinner-table.jpg"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // 5 seconds per slide
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="relative w-full h-screen bg-cover bg-center transition-opacity duration-1000"
      style={{
        backgroundImage: `url(${images[currentIndex]})`,
      }}
    >
      <div className="absolute inset-0 bg-black/70"></div>

      <div className="relative z-10 flex items-center justify-center h-full text-white text-center px-4">
        <div>
          <h2 className="text-4xl md:text-6xl font-bold leading-tight mb-6 animate-zoomIn">
            GB Catering <br /> &  <br />Event Management
          </h2>
          <h3 className="text-xl md:text-2xl italic mb-6">
            "London's finest ASIAN caterers"
          </h3>
         <a
  href="#"
  className="inline-block bg-pink-700 text-white px-8 py-2 text-sm shadow-md hover:bg-gray-200 hover:text-black transition tracking-[.30em]
 uppercase"
>
  OUR SERVICES
</a>

        </div>
      </div>
    </section>
  );
};

export default Banner;
