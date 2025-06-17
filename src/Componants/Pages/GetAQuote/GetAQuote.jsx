import React from 'react';
import { useTranslation } from 'react-i18next';
import Form from '../../Shared/Form';

const GetAQuote = () => {
  const { t } = useTranslation();

  return (
    <div>
      <div
        className="relative bg-cover bg-center bg-no-repeat py-36"
        style={{ backgroundImage: `url('https://i.ibb.co/BVzt5fDM/close-up-female-s-hand-using-smartphone.jpg')` }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black opacity-50 z-0"></div>

        {/* Text content */}
        <div className="relative z-10 container mx-auto px-4">
          <div className="w-full text-center">
            <h2 className="text-4xl md:text-5xl text-white krona-font tracking-widest">
              {t('quote2.getAFreeQuote')}
            </h2>
          </div>
        </div>
      </div>

      <div className="space-y-2 mt-4 px-2">
        <div className="elementor-widget-container">
          <h3 className="text-4xl prata-font font-semibold tracking-widest text-center">
            {t('quote2.getInTouch')}
          </h3>
        </div>
        <div className="elementor-widget-container">
          <h5 className="text-lg prata-font font-medium text-center px-2">
            {t('quote2.fillFormInstruction')}
          </h5>
        </div>
      </div>

      <Form />
    </div>
  );
};

export default GetAQuote;
