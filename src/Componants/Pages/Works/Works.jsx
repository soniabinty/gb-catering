import React from 'react';

const Works = () => {

  const images = [
    "https://i.ibb.co/Y76Tpshn/clothes-twined-top-wedding-altar.jpg",
    "https://i.ibb.co/DPxx1D10/tall-vases-with-pink-flowers-stand-long-dinner-table.jpg",
    "https://i.ibb.co/fVF0h4fx/wonderful-wedding-ceremony-place-near-sea-decorated-by-flowers.jpg",
    "https://i.ibb.co/ZRZTZqK8/chandelier-with-flowers-greenery-hangs-dinner-table.jpg",
    "https://i.ibb.co/fVF0h4fx/wonderful-wedding-ceremony-place-near-sea-decorated-by-flowers.jpg",
    "https://i.ibb.co/ZRZTZqK8/chandelier-with-flowers-greenery-hangs-dinner-table.jpg"
  ];

    return (
        <div className=''>

            <div className='space-y-4'>
                   {images.map((src, index) => (
          <div key={index} className="overflow-hidden">
            <img
              src={src}
              alt={`Gallery image ${index + 1}`}
              className="w-full  object-cover "
            />
          </div>
        ))}

            </div>
            
        </div>
    );
};

export default Works;