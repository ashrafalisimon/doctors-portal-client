import { format } from "date-fns";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { toast } from 'react-toastify';

const BookingModal = ({ date, treatment, setTreatment, refetch }) => {
  const { _id, name, slots } = treatment;
  const formatedDate = format(date, 'PP');
  const [user, loading, error] = useAuthState(auth);
  const handleSubmitForm = event =>{
      event.preventDefault();
      const slot = event.target.slot.value;
      const booking = {
        treatmentId: _id,
        treatment: name,
        date: formatedDate,
        slot,
        patient: user.email,
        patientName: user.displayName,
        phone: event.target.phone.value
      }

      fetch('http://localhost:5000/booking', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                if(data.success){
                    toast(`Appointment is set, ${formatedDate} at ${slot}`)
                }
                else{
                    toast.error(`Already have and appointment on ${data.booking?.date} at ${data.booking?.slot}`)
                }
                refetch();
                setTreatment(null);
            });   
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
              {slots.map((slot, index) => (
                <option key={index} value={slot}>{slot}</option>
              ))}
            </select>
            <input
              type="text"
              name="name"
              disabled
              value={user?.displayName || ""}
              className="input input-bordered w-full"
            />
            <input
              type="email"
              name="email"
              disabled
              value={user?.email || ""}
              className="input input-bordered w-full"
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              className="input input-bordered w-full"
              required
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
