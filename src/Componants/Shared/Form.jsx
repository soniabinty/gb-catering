import React, { useState } from 'react';
import '../../../src/style.css'; // Import your CSS file with Elementor and custom styles
import 'font-awesome/css/font-awesome.min.css'; // Ensure Font Awesome is included

const Form = () => {

      const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    location: '',
    eventDate: '',
    requirements: '',
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here (e.g., API call)
    console.log('Form submitted:', formData);
  };

    return (
        <div>
            <form className="metform-form-content" onSubmit={handleSubmit}>
                                <div
                                  className="mf-main-response-wrap mf-response-msg-wrap"
                                  data-show="0"
                                >
                                  <div className="mf-response-msg">
                                    <i className="mf-success-icon"></i>
                                    <p></p>
                                  </div>
                                </div>
                                <div className="metform-form-main-wrapper">
                                  {/* First Name */}
                                  <section
                                    className="elementor-section elementor-top-section elementor-element elementor-element-aeb9a2d elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                                    data-id="aeb9a2d"
                                    data-element_type="section"
                                  >
                                    <div className="elementor-container elementor-column-gap-default">
                                      <div
                                        className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-53e6c7b"
                                        data-id="53e6c7b"
                                        data-element_type="column"
                                      >
                                        <div className="elementor-widget-wrap elementor-element-populated">
                                          <div
                                            className="elementor-element elementor-element-0c64ade elementor-widget elementor-widget-mf-listing-fname"
                                            data-id="0c64ade"
                                            data-element_type="widget"
                                            data-settings='{"mf_input_name":"mf-listing-fname"}'
                                            data-widget_type="mf-listing-fname.default"
                                          >
                                            <div className="elementor-widget-container">
                                              <div className="mf-input-wrapper">
                                                <input
                                                  type="text"
                                                  className="mf-input"
                                                  id="mf-input-text-0c64ade"
                                                  name="firstName"
                                                  placeholder="FIRST NAME"
                                                  aria-invalid="false"
                                                  value={formData.firstName}
                                                  onChange={handleChange}
                                                />
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </section>

                                  {/* Last Name */}
                                  <section
                                    className="elementor-section elementor-top-section elementor-element elementor-element-44978e0 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                                    data-id="44978e0"
                                    data-element_type="section"
                                  >
                                    <div className="elementor-container elementor-column-gap-default">
                                      <div
                                        className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-240bc7a"
                                        data-id="240bc7a"
                                        data-element_type="column"
                                      >
                                        <div className="elementor-widget-wrap elementor-element-populated">
                                          <div
                                            className="elementor-element elementor-element-eb4eb3c elementor-widget elementor-widget-mf-listing-lname"
                                            data-id="eb4eb3c"
                                            data-element_type="widget"
                                            data-settings='{"mf_input_name":"mf-listing-lname"}'
                                            data-widget_type="mf-listing-lname.default"
                                          >
                                            <div className="elementor-widget-container">
                                              <div className="mf-input-wrapper">
                                                <input
                                                  type="text"
                                                  className="mf-input"
                                                  id="mf-input-text-eb4eb3c"
                                                  name="lastName"
                                                  placeholder="SECOND NAME"
                                                  aria-invalid="false"
                                                  value={formData.lastName}
                                                  onChange={handleChange}
                                                />
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </section>

                                  {/* Email */}
                                  <section
                                    className="elementor-section elementor-top-section elementor-element elementor-element-7b412c3 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                                    data-id="7b412c3"
                                    data-element_type="section"
                                  >
                                    <div className="elementor-container elementor-column-gap-default">
                                      <div
                                        className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-4ca166e"
                                        data-id="4ca166e"
                                        data-element_type="column"
                                      >
                                        <div className="elementor-widget-wrap elementor-element-populated">
                                          <div
                                            className="elementor-element elementor-element-6b23ef3 elementor-widget elementor-widget-mf-email"
                                            data-id="6b23ef3"
                                            data-element_type="widget"
                                            data-settings='{"mf_input_name":"mf-email"}'
                                            data-widget_type="mf-email.default"
                                          >
                                            <div className="elementor-widget-container">
                                              <div className="mf-input-wrapper">
                                                <input
                                                  type="email"
                                                  className="mf-input"
                                                  id="mf-input-email-6b23ef3"
                                                  name="email"
                                                  placeholder="EMAIL"
                                                  aria-invalid="false"
                                                  value={formData.email}
                                                  onChange={handleChange}
                                                />
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </section>

                                  {/* Phone */}
                                  <section
                                    className="elementor-section elementor-top-section elementor-element elementor-element-02d4576 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                                    data-id="02d4576"
                                    data-element_type="section"
                                  >
                                    <div className="elementor-container elementor-column-gap-default">
                                      <div
                                        className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-fffc8e0"
                                        data-id="fffc8e0"
                                        data-element_type="column"
                                      >
                                        <div className="elementor-widget-wrap elementor-element-populated">
                                          <div
                                            className="elementor-element elementor-element-ad7c1b7 elementor-widget elementor-widget-mf-telephone"
                                            data-id="ad7c1b7"
                                            data-element_type="widget"
                                            data-settings='{"mf_input_name":"mf-telephone"}'
                                            data-widget_type="mf-telephone.default"
                                          >
                                            <div className="elementor-widget-container">
                                              <div className="mf-input-wrapper">
                                                <input
                                                  type="tel"
                                                  className="mf-input"
                                                  id="mf-input-telephone-ad7c1b7"
                                                  name="phone"
                                                  placeholder="PHONE"
                                                  aria-invalid="false"
                                                  value={formData.phone}
                                                  onChange={handleChange}
                                                />
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </section>

                                  {/* Location */}
                                  <section
                                    className="elementor-section elementor-top-section elementor-element elementor-element-aec845f elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                                    data-id="aec845f"
                                    data-element_type="section"
                                  >
                                    <div className="elementor-container elementor-column-gap-default">
                                      <div
                                        className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-4170668"
                                        data-id="4170668"
                                        data-element_type="column"
                                      >
                                        <div className="elementor-widget-wrap elementor-element-populated">
                                          <div
                                            className="elementor-element elementor-element-4fb15b9 elementor-widget elementor-widget-mf-text"
                                            data-id="4fb15b9"
                                            data-element_type="widget"
                                            data-settings='{"mf_input_name":"Location"}'
                                            data-widget_type="mf-text.default"
                                          >
                                            <div className="elementor-widget-container">
                                              <div className="mf-input-wrapper">
                                                <input
                                                  type="text"
                                                  className="mf-input"
                                                  id="mf-input-text-4fb15b9"
                                                  name="location"
                                                  placeholder="LOCATION OR VENUE"
                                                  aria-invalid="false"
                                                  value={formData.location}
                                                  onChange={handleChange}
                                                />
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </section>

                                  {/* Event Date */}
                                  <section
                                    className="elementor-section elementor-top-section elementor-element elementor-element-d1ee18d elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                                    data-id="d1ee18d"
                                    data-element_type="section"
                                  >
                                    <div className="elementor-container elementor-column-gap-default">
                                      <div
                                        className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-c28501d"
                                        data-id="c28501d"
                                        data-element_type="column"
                                      >
                                        <div className="elementor-widget-wrap elementor-element-populated">
                                          <div
                                            className="elementor-element elementor-element-b538236 elementor-widget elementor-widget-mf-date"
                                            data-id="b538236"
                                            data-element_type="widget"
                                            data-settings='{"mf_input_name":"mf-date"}'
                                            data-widget_type="mf-date.default"
                                          >
                                            <div className="elementor-widget-container">
                                              <div className="mf-input-wrapper">
                                                <input
                                                  type="date"
                                                  className="mf-input mf-date-input"
                                                  name="eventDate"
                                                  placeholder="EVENT DATE IF KNOWN"
                                                  aria-invalid="false"
                                                  value={formData.eventDate}
                                                  onChange={handleChange}
                                                />
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </section>

                                  {/* Requirements */}
                                  <section
                                    className="elementor-section elementor-top-section elementor-element elementor-element-ca83bd2 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                                    data-id="ca83bd2"
                                    data-element_type="section"
                                  >
                                    <div className="elementor-container elementor-column-gap-default">
                                      <div
                                        className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-11d8028"
                                        data-id="11d8028"
                                        data-element_type="column"
                                      >
                                        <div className="elementor-widget-wrap elementor-element-populated">
                                          <div
                                            className="elementor-element elementor-element-b3a396d elementor-widget elementor-widget-mf-textarea"
                                            data-id="b3a396d"
                                            data-element_type="widget"
                                            data-settings='{"mf_input_name":"Requirements"}'
                                            data-widget_type="mf-textarea.default"
                                          >
                                            <div className="elementor-widget-container">
                                              <div className="mf-input-wrapper">
                                                <label
                                                  className="mf-input-label"
                                                  htmlFor="mf-input-text-area-b3a396d"
                                                >
                                                  <span className="mf-input-required-indicator"></span>
                                                </label>
                                                <textarea
                                                  className="mf-input mf-textarea"
                                                  id="mf-input-text-area-b3a396d"
                                                  name="requirements"
                                                  placeholder="YOUR REQUIREMENTS"
                                                  cols="30"
                                                  rows="10"
                                                  aria-invalid="false"
                                                  value={formData.requirements}
                                                  onChange={handleChange}
                                                ></textarea>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </section>

                                  {/* Submit Button */}
                                  <section
                                    className="elementor-section elementor-top-section elementor-element elementor-element-2b178b1 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                                    data-id="2b178b1"
                                    data-element_type="section"
                                  >
                                    <div className="elementor-container elementor-column-gap-default">
                                      <div
                                        className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-df8c0e8"
                                        data-id="df8c0e8"
                                        data-element_type="column"
                                      >
                                        <div className="elementor-widget-wrap elementor-element-populated">
                                          <div
                                            className="elementor-element elementor-element-644dcc5 mf-btn--center elementor-widget elementor-widget-mf-button"
                                            data-id="644dcc5"
                                            data-element_type="widget"
                                            data-widget_type="mf-button.default"
                                          >
                                            <div className="elementor-widget-container">
                                              <div className="mf-btn-wraper">
                                                <button
                                                  type="submit"
                                                  className="metform-btn metform-submit-btn"
                                                >
                                                  <span>Submit</span>
                                                </button>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </section>
                                </div>
                              </form>
        </div>
    );
};

export default Form;