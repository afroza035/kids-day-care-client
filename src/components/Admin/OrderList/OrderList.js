import React, { useEffect, useState } from "react";
import AdminSidebar from "../AdminSidebar/AdminSidebar";
import OrderListTable from "../OrderListTable/OrderListTable";

const OrderList = () => {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    fetch("https://lit-plateau-42557.herokuapp.com/orders")
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);
  return (
    <div>
      <div className="row">
        <div className="col-md-2">
          <AdminSidebar></AdminSidebar>
        </div>
        <div className="col-md-10">
          <h2>Order List</h2>
          <div className="">
            <div className="px-5">
              <table className="table table-borderless">
                <thead>
                  <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Service</th>
                    <th scope="col">Pay With</th>
                    <th scope="col">status</th>
                  </tr>
                </thead>
                {orders.map((order) => (
                  <OrderListTable
                    order={order}
                    key={order._id}
                  ></OrderListTable>
                ))}
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderList;
