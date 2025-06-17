import React from 'react';
import { useTranslation } from 'react-i18next';
import Form from '../../Shared/Form';

const LetsTalk = () => {
  const { t } = useTranslation();

  return (
    <div className='mt-12'>
      <div className='space-y-2 mt-4'>
        <div className="elementor-widget-container">
          <h3 className="text-4xl krona-font font-semibold text-center uppercase">
            {t('letsTalk.title')}
          </h3>
        </div>
        <div className="elementor-widget-container">
          <h5 className="text-center">
            {t('letsTalk.subtitle')}
          </h5>
        </div>
      </div>

      <Form />
    </div>
  );
};

export default LetsTalk;
