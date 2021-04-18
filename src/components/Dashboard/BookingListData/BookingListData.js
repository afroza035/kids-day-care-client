import React from 'react';

const BookingListData = ({booking}) => {
    return (
        <div className="col-md-4">
            <div className="card p-3 text-center">
            <img src={booking.serviceData.imageUrl} alt=""/>
            <h2>{booking.serviceData.tittle}</h2>
            <h5>Age: {booking.serviceData.age}</h5>
            <h5>Class: {booking.serviceData.classes}</h5>
            <h5>Price: {booking.serviceData.price}</h5>
            <h5>Status: {booking.status}</h5>
            </div>
        </div>
    );
};

export default BookingListData;