import React from "react";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";
import UserRow from "./UserRow";

const Users = () => {
  const { data: users, isLoading, refetch } = useQuery("users", () =>
    fetch("https://damp-atoll-95691.herokuapp.com/user",{
        headers:{
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then((res) => res.json())
  );
  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="w-full">
      <h1 className="text-center py-4 text-2xl">All User: {users.length} </h1>
      <div className="overflow-x-auto px-8">
        <table className="table w-full ">
          {/* <!-- head --> */}
          <thead>
            <tr>
              <th></th>
              <th>Email</th>
              <th>Make Admin</th>
              <th>Delete Account</th>
            </tr>
          </thead>
          <tbody>
            {
                users.map((user, index)=><UserRow key={user._id}
                    user={user}
                    index={index}
                    refetch={refetch}
                ></UserRow>)
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
