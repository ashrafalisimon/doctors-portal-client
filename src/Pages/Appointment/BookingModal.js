import { format } from "date-fns";
import React from "react";

const BookingModal = ({ treatment,date, setTreatment }) => {
  const { _id, name, slots } = treatment;
  const handleSubmitForm = event =>{
      event.preventDefault();
      const slot = event.target.slot.value;
      console.log(_id, name, slot);
      
      // to close the modal
      setTreatment(null);
  }
  return (
    <div>
      <input type="checkbox" id="Booking-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <label
            htmlFor="Booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="font-bold text-center text-accent text-lg">{name}</h3>
          <form onSubmit={handleSubmitForm} className="space-y-2 mt-8">
            <input
              type="text"
              disabled
              value={format(date, "PP")}
              className="input input-bordered w-full "
            />
            <select name="slot" className="select select-bordered w-full ">
              {slots.map((slot) => (
                <option value={slot}>{slot}</option>
              ))}
            </select>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="input input-bordered w-full"
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              className="input input-bordered w-full"
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              className="input input-bordered w-full"
            />
            <input
              type="submit"
              value="Submit"
              className="btn w-full"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
