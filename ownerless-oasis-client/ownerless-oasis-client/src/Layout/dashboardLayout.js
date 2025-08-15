import { Link, Outlet } from "react-router-dom";

import { useContext } from "react";
import Navbar from "../pages/Shared/navbar";

const DashBoardLayout = () => {
  //   const {user} = useContext(AuthContext);
  // //   const[isAdmin] = useAdmin(user?.email);

  return (
    <div>
      <Navbar></Navbar>

      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          {/* Page content here */}
          <Outlet></Outlet>
          {/* <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label> */}
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-50 h-full bg-base-200 text-base-content">
            {/* Sidebar content here */}
            <li>
              <Link to="/dashboard/allusers">AllUsers</Link>
            </li>
            <li>
              <Link to="/dashboard/orders">Orders</Link>
            </li>
            <li>
              <Link to="/dashboard/addProduct">Add A Products</Link>
            </li>
            <li>
              <Link to="/dashboard/allProducts">All Products</Link>
            </li>
            <li>
              <Link to="/dashboard/salesreport">Sales Report</Link>
            </li>
            {/* <li>
              <Link to="/dashboard/invoice">Invoice</Link>
            </li> */}
          </ul>
        </div>
      </div>
    </div>
  );
};
export default DashBoardLayout;
