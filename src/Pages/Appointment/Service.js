import React from "react";

const Service = ({service, setTreatment}) => {
    const {name, slots, price}=service;

  return (
    <div className="card lg:max-w-lg bg-base-100 shadow-xl">
      <div className="card-body text-center">
        <h2 className="card-title justify-center text-secondary ">{name}</h2>
        <p>{
            slots.length >0 
            ? <span>{slots[0]}</span> :
            <span className="text-red-500">Try Another Day</span>
            }</p>
        <p>
            {slots.length} {
                slots.length >1 ? "spaces" : "space"} available
        </p>
        <p>Price: <span className="font-bold">${price}</span></p>
        <div className="card-actions justify-center">
          <label
          onClick={()=>setTreatment(service)}
           htmlFor="Booking-modal" disabled={slots.length===0} className="btn btn-primary text-white bg-gradient-to-r from-primary to-secondary">Book Appointment</label>
        </div>
      </div>
    </div>
  );
};

export default Service;
