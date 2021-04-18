import { faMapMarker } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="mt-5">
      <div className=" d-flex justify-content-center">
        <div className="row container">
          <div className="col-md-3 text-center text-md-start">
            <Link
              style={{ fontSize: "30px" }}
              className="navbar-brand text-dark"
              to="/"
            >
              KIDS DAY CARE
            </Link>
            <p className="mt-3">
              <span className="me-2">
                <FontAwesomeIcon icon={faMapMarker} />
              </span>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut culpa
              delectus deleniti! Eos, ab. Culpa cumque officia deserunt quas,
              iste beatae inventore corporis temporibus hic, eveniet, velit amet
              sed libero!
            </p>
          </div>
          <div className="col-md-3 text-center text-md-start">
            <h2>Quick Links</h2>
            <p>
              <Link className="text-dark" to="">
                About
              </Link>
            </p>
            <p>
              <Link className="text-dark" to="">
                Services
              </Link>
            </p>
            <p>
              <Link className="text-dark" to="">
                Appointment
              </Link>
            </p>
            <p>
              <Link className="text-dark" to="">
                Our Plans
              </Link>
            </p>
            <p>
              <Link className="text-dark" to="">
                Contact
              </Link>
            </p>
          </div>
          <div className="col-md-3 text-center text-md-start">
            <h2>Useful Links</h2>
            <p>
              <Link className="text-dark" to="">
                Privacy Policy
              </Link>
            </p>
            <p>
              <Link className="text-dark" to="">
                Terms and Conditions
              </Link>
            </p>
            <p>
              <Link className="text-dark" to="">
                Disclaimer
              </Link>
            </p>
            <p>
              <Link className="text-dark" to="">
                Support
              </Link>
            </p>
            <p>
              <Link className="text-dark" to="">
                FAQ
              </Link>
            </p>
          </div>
          <div className="col-md-3 text-center text-md-start">
            <h2>News letter</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut culpa
              delectus deleniti! Eos, ab. Culpa cumque officia deserunt quas,
              iste beatae inventore corporis temporibus hic, eveniet, velit amet
              sed libero!
            </p>
          </div>
        </div>
      </div>
      <div
        style={{ backgroundColor: "#212529" }}
        className=" text-center p-2 d-flex align-items-center justify-content-center text-white"
      >
        <p>Copyright {new Date().getFullYear()} All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;