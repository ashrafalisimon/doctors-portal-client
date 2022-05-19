import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../firebase.init";

const MyAppointments = () => {
  const [appointments, setAppointments] = useState([]);
  const [user] = useAuthState(auth);
  const navigate = useNavigate()

  useEffect(() => {
    fetch(`http://localhost:5000/booking?patient=${user.email}`,{
      method: "GET",
      headers:{
        'authorization' : `Bearer ${localStorage.getItem('accessToken')}`
      }
    })
      .then((res) => {
        // console.log('res', res);
        if(res.status === 403 || res.status === 401){
          signOut(auth);
          localStorage.removeItem('accessToken');
          navigate('/home')
        }
        return res.json()
      })
      .then((data) => {
        
        setAppointments(data)
      });
  }, []);

  return (
    <div className="w-full">
      <h1 className="text-center py-4 text-xl">My Appointments :  {appointments.length}</h1>
      <div className="overflow-x-auto px-4">
        <table className="table w-full ">
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
