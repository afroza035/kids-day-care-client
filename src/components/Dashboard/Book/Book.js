import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { userContext } from "../../../App";
import PaymentProcesses from "../../PaymentProcesses/PaymentProcesses";
import DashboardSidebar from "../DashboardSidebar/DashboardSidebar";

const Book = () => {
  const [loggedInUser] = useContext(userContext);
  const { id } = useParams();
  const [classesData, setClassesData] = useState({});

  useEffect(() => {
    fetch("https://lit-plateau-42557.herokuapp.com/services/" + id)
      .then((res) => res.json())
      .then((data) => setClassesData(data));
  }, [id]);
  return (
    <div>
      <div className="row">
        <div className="col-md-2">
          <DashboardSidebar></DashboardSidebar>
        </div>
        <div className="col-md-10">
          <h2>Book</h2>
          <div className="">
            <form className="p-4">
              <div className="row g-5">
                <div className="col-12">
                  <input
                    className="form-control w-50"
                    name="name"
                    placeholder="Your Name"
                    defaultValue={loggedInUser.name}
                  />
                </div>
                <div className="col-12">
                  <input
                    className="form-control w-50"
                    name="email"
                    placeholder="Your Email"
                    defaultValue={loggedInUser.email}
                  />
                </div>
                <div className="col-12">
                  <input
                    className="form-control w-50"
                    name="serviceTittle"
                    placeholder="Service Tittle"
                    defaultValue={classesData.tittle}
                  />
                </div>
              </div>
            </form>
            <div className="w-50 p-4">
                <PaymentProcesses id={id}></PaymentProcesses>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Book;
