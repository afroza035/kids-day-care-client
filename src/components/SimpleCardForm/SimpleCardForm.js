import React, { useContext, useEffect, useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { useHistory } from "react-router";
import { userContext } from "../../App";

const SimpleCardForm = ({ id }) => {
  // console.log(id);
  const [loggedInUser] = useContext(userContext);
  const history = useHistory();
  const stripe = useStripe();
  const elements = useElements();
  const [serviceData, setServiceData] = useState({});
  const [paymentError, setPaymentError] = useState(null);
  const [paymentSuccess, setPaymentSuccess] = useState(null);

  useEffect(() => {
    fetch(`https://lit-plateau-42557.herokuapp.com/services/${id}`)
      .then((res) => res.json())
      .then((data) => setServiceData(data));
  }, [id]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const cardElement = elements.getElement(CardElement);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: cardElement,
    });

    if (error) {
      setPaymentError(error.message);
      setPaymentSuccess(null);
    } else {
      setPaymentSuccess(paymentMethod.id);
      setPaymentError(null);

      const paymentType = paymentMethod.type;
      const cardType = paymentMethod.card.brand;
      const status = "pending";
      const allData = {
        ...loggedInUser,
        serviceData,
        paymentType,
        cardType,
        status,
      };

      fetch("https://lit-plateau-42557.herokuapp.com/addOrders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(allData),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          history.push("/dashboard/review")
        });
      
    }
  };

  return (
    <div className="">
      <form onSubmit={handleSubmit}>
        <CardElement />
        <button className="btn btn-primary mt-3" type="submit" disabled={!stripe}>
          Pay with ${serviceData.price}
        </button>
      </form>
      {paymentError && <p style={{ color: "red" }}>{paymentError}</p>}
      {paymentSuccess && (
        <p style={{ color: "green" }}>Thank you Payment Successfully.</p>
      )}
    </div>
  );
};

export default SimpleCardForm;
