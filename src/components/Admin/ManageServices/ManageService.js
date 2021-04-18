import React, { useEffect, useState } from "react";
import AdminSidebar from "../AdminSidebar/AdminSidebar";
import ManageServicesData from "../ManageServicesData/ManageServicesData";

const ManageService = () => {
  const [classesData, setClassesData] = useState([]);

  useEffect(() => {
    fetch("https://lit-plateau-42557.herokuapp.com/services")
      .then((res) => res.json())
      .then((data) => setClassesData(data));
  }, []);
  console.log(classesData);
  return (
    <div>
      <div className="row">
        <div className="col-md-2">
          <AdminSidebar></AdminSidebar>
        </div>
        <div className="col-md-10">
          <h2>Manage Service</h2>
          <div className="">
            <div className="px-5">
              <table className="table table-borderless">
                <thead>
                  <tr>
                    <th scope="col">Tittle</th>
                    <th scope="col">Age</th>
                    <th scope="col">Class</th>
                    <th scope="col">Price</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                {classesData.map((classes) => (
                  <ManageServicesData
                    classes={classes}
                    key={classes._id}
                  ></ManageServicesData>
                ))}
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageService;
