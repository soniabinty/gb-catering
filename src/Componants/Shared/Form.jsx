import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { useTranslation } from 'react-i18next';

const Form = () => {
  const { t } = useTranslation();
  const formRef = useRef();
  const [responseMessage, setResponseMessage] = useState('');
  const [isError, setIsError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_7nfwgrl', 'template_w0y1zgm', formRef.current, '02Los9i9rekzztFWp')
      .then(
        () => {
          setResponseMessage(t('form.success'));
          setIsError(false);
          formRef.current.reset();
        },
        () => {
          setResponseMessage(t('form.error'));
          setIsError(true);
        }
      );
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
        {responseMessage && (
          <div
            className={`p-4 rounded ${
              isError ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'
            }`}
          >
            {responseMessage}
          </div>
        )}

        <input type="text" name="first_name" placeholder={t('form.first_name')} className="w-full p-3 border-none bg-[#FAFAFA]" required />
        <input type="text" name="last_name" placeholder={t('form.last_name')} className="w-full p-3 border-none bg-[#FAFAFA]" required />
        <input type="email" name="email" placeholder={t('form.email')} className="w-full p-3 border-none bg-[#FAFAFA]" required />
        <input type="tel" name="phone" placeholder={t('form.phone')} className="w-full p-3 border-none bg-[#FAFAFA]" />
        <input type="text" name="location" placeholder={t('form.location')} className="w-full p-3 border-none bg-[#FAFAFA]" />
        <input type="date" name="event_date" placeholder={t('form.event_date')} className="w-full p-3 border-none bg-[#FAFAFA]" />

        <textarea name="message" placeholder={t('form.message')} className="w-full p-3 border-none bg-[#FAFAFA] h-36" required></textarea>

        <div className="text-center">
          <button type="submit" className="bg-pink-700 text-white px-5 py-3 rounded-md hover:bg-yellow-600 transition">
            {t('form.submit')}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
