import React from 'react';
import Form from '../../Shared/Form';
import '../../../style.css'; // Import your CSS file with Elementor and custom styles
import 'font-awesome/css/font-awesome.min.css'; 
const Contact = () => {
    return (
        <div>
            {/* img */}

                <div className="relative bg-white py-8">
      <div className="container mx-auto px-4">
        <div className="w-full">
          <div className="flex justify-center">
            <img
              src="https://eventsbyindianocean.co.uk/wp-content/uploads/2021/09/Facebook-cover-full-size-HQ-1-1536x629.png"
              alt="Facebook cover"
              className="max-w-full h-auto"
              width="1536"
              height="629"
            />
          </div>
        </div>
      </div>
    </div>

    {/* contact */}

      <section
      className="elementor-section elementor-top-section elementor-element elementor-element-d7edca2 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
      data-id="d7edca2"
      data-element_type="section"
      data-settings='{"background_background":"classic"}'
    >
      <div className="elementor-container elementor-column-gap-default">
        <div
          className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-430575e"
          data-id="430575e"
          data-element_type="column"
        >
          <div className="elementor-widget-wrap elementor-element-populated">
            {/* Heading: Say hello */}
            <div
              className="elementor-element elementor-element-580a5110 elementor-widget elementor-widget-heading"
              data-id="580a5110"
              data-element_type="widget"
              data-widget_type="heading.default"
            >
              <div className="elementor-widget-container">
                <h2 className="elementor-heading-title elementor-size-default">Say hello</h2>
              </div>
            </div>

            {/* Spacer */}
            <div
              className="elementor-element elementor-element-3614cbd elementor-widget elementor-widget-spacer"
              data-id="3614cbd"
              data-element_type="widget"
              data-widget_type="spacer.default"
            >
              <div className="elementor-widget-container">
                <div className="elementor-spacer">
                  <div className="elementor-spacer-inner"></div>
                </div>
              </div>
            </div>

            {/* Contact Information List */}
            <div
              className="elementor-element elementor-element-f167f0 elementor-align-center elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list animated flash"
              data-id="f167f0"
              data-element_type="widget"
              data-settings='{"_animation":"flash"}'
              data-widget_type="icon-list.default"
            >
              <div className="elementor-widget-container">
                <ul className="elementor-icon-list-items">
                  <li className="elementor-icon-list-item">
                    <span className="elementor-icon-list-icon">
                      <i aria-hidden="true" className="far fa-envelope"></i>
                    </span>
                    <span className="elementor-icon-list-text">jay@eventsbyindianocean.co.uk</span>
                  </li>
                  <li className="elementor-icon-list-item">
                    <span className="elementor-icon-list-icon">
                      <i aria-hidden="true" className="fas fa-location-arrow"></i>
                    </span>
                    <span className="elementor-icon-list-text">
                      Indian Ocean Catering & Events, 146a Rush Green Road, Romford, RM7 0QA
                    </span>
                  </li>
                  <li className="elementor-icon-list-item">
                    <span className="elementor-icon-list-icon">
                      <i aria-hidden="true" className="fas fa-mobile-alt"></i>
                    </span>
                    <span className="elementor-icon-list-text">07960 950 612</span>
                  </li>
                  <li className="elementor-icon-list-item">
                    <span className="elementor-icon-list-icon">
                      <i aria-hidden="true" className="icon icon-phone"></i>
                    </span>
                    <span className="elementor-icon-list-text">01708738500 (5pm-7pm)</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Social Media Heading */}
            <div
              className="elementor-element elementor-element-57f5feac elementor-widget elementor-widget-heading"
              data-id="57f5feac"
              data-element_type="widget"
              data-widget_type="heading.default"
            >
              <div className="elementor-widget-container">
                <h3 className="elementor-heading-title elementor-size-default">Our Social Media</h3>
              </div>
            </div>

            {/* Social Media Icons */}
            <div
              className="elementor-element elementor-element-66e70a4 e-grid-align-mobile-center elementor-shape-rounded elementor-grid-0 e-grid-align-center elementor-widget elementor-widget-social-icons"
              data-id="66e70a4"
              data-element_type="widget"
              data-widget_type="social-icons.default"
            >
              <div className="elementor-widget-container">
                <div className="elementor-social-icons-wrapper elementor-grid">
                  <span className="elementor-grid-item">
                    <a
                      className="elementor-icon elementor-social-icon elementor-social-icon-instagram elementor-animation-grow elementor-repeater-item-9a80b0c"
                      href="https://www.instagram.com/eventsbyindianocean/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="elementor-screen-only">Instagram</span>
                      <i className="fab fa-instagram"></i>
                    </a>
                  </span>
                  <span className="elementor-grid-item">
                    <a
                      className="elementor-icon elementor-social-icon elementor-social-icon-facebook elementor-animation-grow elementor-repeater-item-3bfa096"
                      href="https://www.facebook.com/indianoceaneventsmanagement"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="elementor-screen-only">Facebook</span>
                      <i className="fab fa-facebook"></i>
                    </a>
                  </span>
                </div>
              </div>
            </div>

            {/* Form Section */}
            <section
              className="elementor-section elementor-inner-section elementor-element elementor-element-67f1968c elementor-section-boxed elementor-section-height-default elementor-section-height-default"
              data-id="67f1968c"
              data-element_type="section"
              data-settings='{"background_background":"classic"}'
            >
              <div className="elementor-background-overlay"></div>
              <div className="elementor-container elementor-column-gap-default">
                <div
                  className="elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-15b46bb3"
                  data-id="15b46bb3"
                  data-element_type="column"
                  data-settings='{"background_background":"classic"}'
                >
                  <div className="elementor-widget-wrap elementor-element-populated">
                    <div
                      className="elementor-element elementor-element-f2d8535 elementor-widget elementor-widget-shortcode"
                      data-id="f2d8535"
                      data-element_type="widget"
                      data-widget_type="shortcode.default"
                    >
                      <div className="elementor-widget-container">
                        <div className="elementor-shortcode">
                          <div className="mf-form-shortcode">
                            <div
                              id="metform-wrap-5594-5594"
                              className="mf-form-wrapper"
                              data-form-id="5594"
                              data-action="https://eventsbyindianocean.co.uk/wp-json/metform/v1/entries/insert/5594"
                              data-wp-nonce="6537918503"
                              data-form-nonce="8f4a3b2017"
                              data-quiz-summery="false"
                              data-save-progress="false"
                              data-form-type="contact_form"
                              data-stop-vertical-effect=""
                            >
                             <Form></Form> 
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </section>
            
        </div>
    );
};

export default Contact;




