import React from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import SimpleCardForm from "../SimpleCardForm/SimpleCardForm";

const stripePromise = loadStripe("pk_test_TYooMQauvdEDq54NiTphI7jx");
const PaymentProcesses = ({id}) => {
  return (
    <Elements stripe={stripePromise}>
      <SimpleCardForm id={id}></SimpleCardForm>
    </Elements>
  );
};

export default PaymentProcesses;
