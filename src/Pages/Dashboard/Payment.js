import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Loading from "../Shared/Loading";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(
  "pk_test_51L1sswFlniIeQFhAxGeu4Us4KrWQjjyvY4vDKztLcYjkMQ4z861WvX0BI4skKl1JaYriV4TEahIQdwI1OSYtDyap003aO35HyQ"
);
const Payment = () => {
  const { id } = useParams();
  const url = `http://localhost:5000/booking/${id}`;
  const { data: appointment, isLoading } = useQuery(["booking", id], () =>
    fetch(url, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );

  if (isLoading) {
    return <Loading />;
  }
  return (
    <div className=" flex flex-col">
      <div className="w-full ">
        <div class="card w-full bg-base-100 shadow-xl my-12">
          <div class="card-body">
            <p className="text-success font-bold">
              Hello,
              {appointment.patientName}
            </p>
            <h2 class="card-title">Please Pay for {appointment.treatment}</h2>
            <p>
              Your Appointment:{" "}
              <span className="text-orange-700">{appointment.date}</span> at{" "}
              {appointment.slot}
            </p>
            <p>Please pay: ${appointment.price}</p>
          </div>
        </div>
        <div class="card flex-shrink-0 w-full  shadow-2xl bg-base-100">
          <div class="card-body">
            <Elements stripe={stripePromise}>
              <CheckoutForm appointment={appointment }   />
            </Elements>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
