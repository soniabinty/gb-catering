import React from 'react';
import Form from '../../Shared/Form';

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

              <div className="space-y-2 mt-8 px-2">
        <div className="elementor-widget-container">
          <h3 className="text-2xl prata-font font-semibold tracking-widest text-center">
       QUESTIONS ?
          </h3>
        </div>
        <div className="elementor-widget-container">
          <p className="text-lg prata-font font-medium text-center px-2">
           Simply fill in the form below to get in touch with us.
          </p>
        </div>
      </div>

      <Form />
            
        </div>
    );
};

export default Works;