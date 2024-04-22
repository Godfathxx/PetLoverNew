import React from "react";
import About from "./about.js";
import Serv from "./service.js";
import Book from "./booking.js";
import Conc from "./contact.js";
import Home from "./Home.js";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  Switch
} from "react-router-dom";
const Navbar = () => {
  return (
    <div className="container-fluid p-0">
      <nav className="navbar navbar-expand-lg bg-dark navbar-dark py-3 py-lg-0 px-lg-5">
        <div className="navbar-brand d-block d-lg-none">
          <h1 className="m-0 display-5 text-capitalize font-italic text-white">
            <span className="text-primary">Safety</span>First
          </h1>
        </div>
        <button
          type="button"
          className="navbar-toggler"
          data-toggle="collapse"
          data-target="#navbarCollapse"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-between px-3"
          id="navbarCollapse"
        >
          <h2>
            <span className="text-primary">Pet</span>Lovers
          </h2>
          <ul className="navbar-nav mr-auto py-0">
            <li className="nav-item">
              <Link to="/Home" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/service" className="nav-link">
                {" "}
                Service{" "}
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/booking" className="nav-link">
                {" "}
                Booking{" "}
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link">
                {" "}
                Contact{" "}
              </Link>
            </li>
          </ul>
          <a href="" className="btn btn-lg btn-primary px-3 d-none d-lg-block">
            Book Now
          </a>
        </div>
      </nav>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Serv />} />
        <Route path="/booking" element={<Book />} />
        <Route path="/contact" element={<Conc />} />
      </Routes>
    </div>
  );
};
export default App;
