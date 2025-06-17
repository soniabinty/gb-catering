import React from 'react';
import { useTranslation } from 'react-i18next';
import Form from '../../Shared/Form';
import '../../../style.css'; // Optional: remove if Elementor styles not used
import 'font-awesome/css/font-awesome.min.css'; 
import ContactSection from './ContactSection';
import image from './../../../assets/side-view-wedding-arch-with-flowers.jpg';

const Contact = () => {
  const { t } = useTranslation();

  return (
    <div>
      {/* Header Image */}
      <div className="relative bg-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex justify-center">
            <img
              src="https://eventsbyindianocean.co.uk/wp-content/uploads/2021/09/Facebook-cover-full-size-HQ-1-1536x629.png"
              alt={t("contact2.headerAlt")}
              className="max-w-full h-auto"
              width="1536"
              height="629"
            />
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <section className="w-full py-12 bg-[#161616]">
        <div className="mx-auto w-full">
          <div className="w-full">
            {/* Custom Contact Section */}
            <ContactSection />

            {/* Background Image with Absolute Form */}
            <div
              className="relative bg-fixed bg-cover bg-center h-[420px] mt-10 pb-32"
              style={{ backgroundImage: `url(${image})` }}
            >
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-3xl px-4 z-10">
                <div className="bg-[#886D00] bg-opacity-90 p-10 sm:p-12 md:p-16 shadow-xl">
                  <Form />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
