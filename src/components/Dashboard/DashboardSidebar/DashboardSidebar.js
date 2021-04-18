import { faStackExchange } from '@fortawesome/free-brands-svg-icons';
import { faHdd } from '@fortawesome/free-regular-svg-icons';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';

const DashboardSidebar = () => {
    return (
        <div style={{height: '100vh'}} className="admin-sidebar d-flex justify-content-center bg-dark">
      <div className="">
        <div className="menu-item mt-5">
          <Link style={{textDecoration:"none"}} className="menu-item-link text-white" to="/dashboard/book">
          <FontAwesomeIcon icon={faShoppingCart} /> Book
          </Link>
        </div>
        <div className="menu-item mt-5">
          <Link style={{textDecoration:"none"}} className="menu-item-link text-white" to="/dashboard/bookingList">
          <FontAwesomeIcon icon={faHdd} /> Booking List
          </Link>
        </div>
        <div className="menu-item mt-5">
          <Link style={{textDecoration:"none"}} className="menu-item-link text-white" to="/dashboard/review">
          <FontAwesomeIcon icon={faStackExchange} /> Review
          </Link>
        </div>
      </div>
    </div>
    );
};

export default DashboardSidebar;