import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, Outlet } from "react-router-dom";
import auth from "../../firebase.init";
import useAdmin from "../../hooks/useAdmin";

const Dashboard = () => {
  const [user] =useAuthState(auth);
  const [admin] = useAdmin(user);
  return (
    <div className="mt-16 bg-green-50">
      <div className="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-start">
          <h1 className="text-3xl font-bold text-accent">Welcome To Dashboard</h1>
          <Outlet></Outlet>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 overflow-y-auto w-52 bg-base-100 text-base-content">
            {/* <!-- Sidebar content here --> */}
            <li>
              <Link to="/dashboard">My Appointments</Link>
            </li>
            <li>
              <Link to="/dashboard/myReview">My Reviews</Link>
            </li>
            <li>
              <Link to="/dashboard/myHistory">My History</Link>
            </li>
            {/* <li>
              <Link to="/dashboard/users">All User</Link>
            </li> */}
            {
              admin && <>
                <li>
              <Link to="/dashboard/users">All User</Link>
            </li>
            <li>
              <Link to="/dashboard/addDoctor">Add a Doctor</Link>
            </li>
            <li>
              <Link to="/dashboard/manageDoctor">Manage Doctors</Link>
            </li>
              </>
            }
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
