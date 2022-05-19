import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const MyAppointments = () => {
  const [appointments, setAppointments] = useState([]);
  const [user] = useAuthState(auth);

  useEffect(() => {
    fetch(`http://localhost:5000/booking?patient=${user.email}`)
      .then((res) => res.json())
      .then((data) => setAppointments(data));
  }, []);

  return (
    <div className="w-full">
      <h1 className="text-center py-4 text-xl">My Appointments :  {appointments.length}</h1>
      <div class="overflow-x-auto px-4">
        <table class="table w-full ">
          {/* <!-- head --> */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Date</th>
              <th>Time</th>
              <th>Treatment</th>
            </tr>
          </thead>
          <tbody>
            {
                appointments.map((a,index)=> 
                <tr key={a._id}>
                     <th>{index +1}</th>
                    <td>{a.patientName}</td>
                    <td>{a.date}</td>
                    <td>{a.slot}</td>
                    <th>{a.treatment}</th>
                  </tr> )
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyAppointments;
