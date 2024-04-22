import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Home.css"; // Import your custom styles if needed

const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    className: 'slider-wrapper'
  };

  return (
    <Slider {...settings}>
      <div>
        <img
          className="d-block w-100 slider-image"
          src="https://static.vecteezy.com/system/resources/previews/005/857/332/non_2x/funny-portrait-of-cute-corgi-dog-outdoors-free-photo.jpg"
          alt="First slide"
        />
        <div className="carousel-caption text-overlay">
          <h2>Welcome to our Pet Adoption Website</h2>
          <p>Positive vibes for your furry friends!</p>
        </div>
      </div>
      <div>
        <img
          className="d-block w-100 slider-image"
          src="https://www.princeton.edu/sites/default/files/styles/1x_full_2x_half_crop/public/images/2022/02/KOA_Nassau_2697x1517.jpg?itok=Bg2K7j7J"
          alt="Second slide"
        />
        <div className="carousel-caption text-overlay">
          <h2>Find Your Perfect Pet</h2>
          <p>
            Explore our diverse range of adorable pets waiting for a loving
            home.
          </p>
        </div>
      </div>
      <div>
        <img
          className="d-block w-100 slider-image"
          src="https://cff2.earth.com/uploads/2023/08/26042949/National-Dog-Day--scaled.jpg"
          alt="Third slide"
        />
        <div className="carousel-caption text-overlay">
          <h2>Join Our Pet Community</h2>
          <p>Connect with fellow pet lovers and share your pet stories.</p>
        </div>
      </div>
      <div>
        <img
          className="d-block w-100 slider-image"
          src="https://www.southernliving.com/thmb/a4b73J7C4S4wgSmymmEgXRCmACA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-185743593-2000-507c6c8883a44851885ea4fbc10a2c9e.jpg"
          alt="Fourth slide"
        />
        <div className="carousel-caption text-overlay">
          <h2>Support Pet Adoption</h2>
          <p>Every pet deserves a loving home. Adopt, don't shop!</p>
        </div>
      </div>
    </Slider>
  );
};

export default Home;
