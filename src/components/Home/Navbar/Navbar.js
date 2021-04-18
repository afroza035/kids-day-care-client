import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { userContext } from "../../../App";
import './Navbar.css';

const Navbar = () => {
  const [loggedInUser] = useContext(userContext);
  const [isAdmin, setIsAdmin] = useState([]);
  useEffect(() => {
    fetch("https://lit-plateau-42557.herokuapp.com/isAdmin?email=" + loggedInUser.email)
      .then((res) => res.json())
      .then((data) => {
        setIsAdmin(data);
      });
  }, [loggedInUser.email]);
  const isAdminEmail = isAdmin[0]?.email;
  return (
    <nav className="navbar navbar-expand-lg navbar-light container">
      <Link className="navbar-brand kids-style" to="#">
        KIDS
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item active">
            <Link className="nav-link ms-5" to="/home">
              Home
            </Link>
          </li>
          {isAdminEmail && <li className="nav-item">
            <Link className="nav-link ms-5" to="/admin/addService">
              Admin
            </Link>
          </li>}
          <li className="nav-item">
            <Link className="nav-link ms-5" to="/dashboard/bookingList">
              Dashboard
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link ms-5" to="#">
              Blogs
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link ms-5" to="#">
              Reviews
            </Link>
          </li>
          <li className="nav-item">
            {loggedInUser.name ? (
              <Link to="/login" className="nav-link ms-5">
                {loggedInUser.name}
              </Link>
            ) : (
              <Link to="/login" className="nav-link ms-5">
                Login
              </Link>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
