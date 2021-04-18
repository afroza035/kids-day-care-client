import React from "react";
import './ServiceCard.css';
import { Link } from "react-router-dom";

const ServicesCard = ({ classes }) => {
 
  return (
    <div className="col-md-4 mt-3">
      <div className="card">
        <Link className="service-card" style={{textDecoration:"none"}} to={`/dashboard/book/${classes._id}`}>
          <img src={classes.imageUrl} alt="" className="card-img-top" />
          <div className="card-body">
            <h5 className="card-tittle">{classes.tittle}</h5>
            <p className="card-text">AGE GROUP: {classes.age}YEARS</p>
            <p>CLASS SIZE: {classes.classes}</p>
            <h6>PRICE: {classes.price}</h6>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ServicesCard;
