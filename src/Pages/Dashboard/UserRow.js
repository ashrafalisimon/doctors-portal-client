import React from "react";
import { toast } from "react-toastify";

const UserRow = ({ user, index, refetch }) => {
    const {email, role}= user;
    const makeAdmin = ()=>{
        fetch(`https://damp-atoll-95691.herokuapp.com/user/admin/${email}`,
        {
            method: 'PUT',
            headers:{
                'authorization': `Bearer ${localStorage.getItem('accessToken')} `
            }
        })
        .then(res =>{
            if(res.status === 403){
                toast.error('Failed to Make an admin')
            } 
            return res.json})
        .then(data =>{
            // console.log(data);
            if(data.modifiedCount > 0){
                refetch();
                toast.success('Successfully Made by Admin');
            } 
        })
    }
  return (
      <tr>
        <th>{index + 1}</th>
        <td>{email}</td>
        <td>
          {
              role !== 'admin' && <button onClick={makeAdmin} className="btn btn-xs btn-secondary text-white"> Make Admin
              </button>
          }
        </td>
        <td>
          <button className="btn btn-xs btn-error text-white">Remove Account
          </button>
        </td>
      </tr>
  );
};

export default UserRow;
