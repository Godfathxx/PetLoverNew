import React from "react";
function Conc() {
  return (
    <div className="container-fluid pt-5">
      <div className="d-flex flex-column text-center mb-5 pt-5">
        <h4 className="text-secondary mb-3">Contact Us</h4>
        <h1 className="display-4 m-0">
          Contact For <span className="text-primary">Any Query</span>
        </h1>
      </div>
      <div className="row justify-content-center">
        <div className="col-12 col-sm-8 mb-5">
          <div className="contact-form">
            <div id="success"></div>
            <form name="sentMessage" id="contactForm" noValidate="novalidate">
              <div className="control-group">
                <input
                  type="text"
                  className="form-control p-4"
                  id="name"
                  placeholder="Your Name"
                  required="required"
                  data-validation-required-message="Please enter your name"
                />
                <p className="help-block text-danger"></p>
              </div>
              <div className="control-group">
                <input
                  type="email"
                  className="form-control p-4"
                  id="email"
                  placeholder="Your Email"
                  required="required"
                  data-validation-required-message="Please enter your email"
                />
                <p className="help-block text-danger"></p>
              </div>
              <div className="control-group">
                <input
                  type="text"
                  className="form-control p-4"
                  id="subject"
                  placeholder="Subject"
                  required="required"
                  data-validation-required-message="Please enter a subject"
                />
                <p className="help-block text-danger"></p>
              </div>
              <div className="control-group">
                <textarea
                  className="form-control p-4"
                  rows="6"
                  id="message"
                  placeholder="Message"
                  required="required"
                  data-validation-required-message="Please enter your message"
                ></textarea>
                <p className="help-block text-danger"></p>
              </div>
              <div>
                <button
                  className="btn btn-primary py-3 px-5"
                  type="submit"
                  id="sendMessageButton"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Conc;
