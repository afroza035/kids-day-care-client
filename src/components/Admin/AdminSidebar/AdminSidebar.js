import { faHdd } from "@fortawesome/free-regular-svg-icons";
import { faBorderNone, faPlus, faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

const AdminSidebar = () => {
  return (
    <div style={{height: '100vh'}} className="admin-sidebar d-flex justify-content-center bg-dark">
      <div className="">
        <div className="menu-item mt-5">
          <Link style={{textDecoration:"none"}} className="menu-item-link text-white" to="/admin/orderList">
          <FontAwesomeIcon icon={faHdd} /> Order List
          </Link>
        </div>
        <div className="menu-item mt-5">
          <Link style={{textDecoration:"none"}} className="menu-item-link text-white" to="/admin/addService">
          <FontAwesomeIcon icon={faPlus} /> Add Service
          </Link>
        </div>
        <div className="menu-item mt-5">
          <Link style={{textDecoration:"none"}} className="menu-item-link text-white" to="/admin/makeAdmin">
          <FontAwesomeIcon icon={faUserPlus} /> Make Admin
          </Link>
        </div>
        <div className="menu-item mt-5">
          <Link style={{textDecoration:"none"}} className="menu-item-link text-white" to="/admin/manageService">
          <FontAwesomeIcon icon={faBorderNone} /> Manage Services
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AdminSidebar;
