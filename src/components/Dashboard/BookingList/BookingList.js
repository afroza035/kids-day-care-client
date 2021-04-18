import React, { useContext, useEffect, useState } from "react";
import BookingListData from "../BookingListData/BookingListData";
import DashboardSidebar from "../DashboardSidebar/DashboardSidebar";
import { userContext } from "../../../App";

const BookingList = () => {
  const [loggedInUser] = useContext(userContext);
  const [bookings, setBookings] = useState([]);
  useEffect(() => {
    fetch(
      "https://lit-plateau-42557.herokuapp.com/ordersEmail?email=" +
        loggedInUser.email
    )
      .then((res) => res.json())
      .then((data) => setBookings(data));
  }, [loggedInUser.email]);
  return (
    <div>
      <div className="row">
        <div className="col-md-2">
          <DashboardSidebar></DashboardSidebar>
        </div>
        <div className="col-md-10">
          <h2>Booking List</h2>
          <div className="p-3">
            <div className="row">
                {
                    bookings.map(booking=><BookingListData booking={booking} key={booking._id}></BookingListData>)
                }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingList;
