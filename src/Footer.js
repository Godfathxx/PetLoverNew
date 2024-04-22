import React from "react";
const Footer = () => {
  return (
    <footer>
      <div className="container-fluid bg-dark text-white py-5 px-sm-3 px-md-5">
        <div className="row pt-5">
          <div className="col-lg-4 col-md-12 mb-5">
            <h1 className="mb-3 display-5 text-capitalize text-white">
              <span className="text-primary">Pet</span>Lover
            </h1>
            <p className="m-0">
              Welcome to our esteemed Pet Adoption and Care Center, a
              compassionate sanctuary dedicated to fostering loving connections
              between pets and caring individuals. Our organization stands as a
              beacon of hope, committed to providing a safe haven for homeless
              and abandoned animals. With an unwavering dedication to their
              well-being, we offer not only adoption services but also
              comprehensive care, medical attention, and nurturing environments
              for these beloved companions. Through our tireless efforts, we aim
              to create forever homes and lasting bonds, fostering a community
              that cherishes and values every furry life. Join us in our mission
              to ensure that every pet receives the love, care, and compassion
              they deserve.
            </p>
          </div>
          <div className="col-lg-8 col-md-12">
            <div className="row">
              <div className="col-md-4 mb-5">
                <h5 className="text-primary mb-4">Get In Touch</h5>
                <p>
                  <i className="fa fa-map-marker-alt mr-2"></i>VIT, Chennai,
                  Tamil Nadu, India
                </p>
                <p>
                  <i className="fa fa-phone-alt mr-2"></i>+013 345 67890
                </p>
                <p>
                  <i className="fa fa-envelope mr-2"></i>
                  petloversglb@gmail.com
                </p>
              </div>
              <div className="col-md-4 mb-5">
                <h5 className="text-primary mb-4">Popular Links</h5>
                <div className="d-flex flex-column justify-content-start">
                  <a
                    className="text-white mb-2"
                    href="https://www.petfinder.com/"
                  >
                    <i className="fa fa-angle-right mr-2"></i>Our Partners
                  </a>
                  <a
                    className="text-white mb-2"
                    href="https://www.pedigree.in/"
                  >
                    <i className="fa fa-angle-right mr-2"></i>Pet Foods
                  </a>
                  <a
                    className="text-white mb-2"
                    href="https://dharamsalaanimalrescue.org/"
                  >
                    <i className="fa fa-angle-right mr-2"></i>Dharamshala Animal
                    Rescue
                  </a>
                  <a
                    className="text-white mb-2"
                    href="https://supertails.com/pages/consult-a-vet"
                  >
                    <i className="fa fa-angle-right mr-2"></i> Vet for Pets
                  </a>
                  <a
                    className="text-white"
                    href="https://ayurveda-akademie.org/en/knowledge/ayurveda/ayurveda-for-animals"
                  >
                    <i className="fa fa-angle-right mr-2"></i>Ayurveda for
                    animals
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="container-fluid text-white py-4 px-sm-3 px-md-5"
        style={{ background: "#111111" }}
      >
        <div className="row">
          <div className="col-md-6 text-center text-md-left mb-3 mb-md-0">
            <p className="m-0 text-white">
              &copy;{" "}
              <a>
                <a className="h">PET </a>Lovers{" "}
              </a>
              All Rights Reserved. Designed by Team 227
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
