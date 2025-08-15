
import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/authProvider";

const Navbar = () => {
  const navigate = useNavigate();
  const { user, logOut } = useContext(AuthContext);
  const [totalProductsInCart, setTotalProductsInCart] = useState(0); // State variable for total products in cart

  useEffect(() => {
    const storedCartItems = localStorage.getItem("cartItems");
    if (storedCartItems) {
      const cartItems = JSON.parse(storedCartItems);
      // Calculate total products in cart
      const totalProducts = cartItems.reduce((total, item) => total + item.quantity, 0);
      setTotalProductsInCart(totalProducts);
    }
  }, []);

  const handleLogOut = () => {
    logOut().then(() => navigate("/login")); // Redirect to login after logout
  };

  const menuItems = (
    <>
      <li>
        <Link to="/products" className="text-success text-xl font-bold font-link">
          Products
        </Link>
      </li>
      {/* Other menu items */}
      {user?.email ? (
        <>
          <li>
            <Link className="text-success font-link text-xl font-bold" to="/inorders/:id">
              Orders
            </Link>
          </li>
          <li>
            <Link className="text-success font-link text-xl font-bold" to="/cart">
              Cart
               {/* {totalProductsInCart >=0 && `(${totalProductsInCart})`} */}
            </Link>
          </li>
          <li>
            <Link className="text-success font-link text-xl font-bold" to="/dashboard">
              Dashboard
            </Link>
          </li>
          <Link>
            <button className="btn btn-success text-white font-bold" onClick={handleLogOut}>
              SignOut
            </button>
          </Link>
        </>
      ) : (
        <Link to="/login">
          <button className="btn btn-success text-white font-bold">LogIn</button>
        </Link>
      )}
    </>
  );


  return (
    <div  >
      <div >
        <div className="navbar bg-white flex justify-between ">
          <div className="navbar-start">
            
            <div className="dropdown">
              <label tabIndex={1} className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-compact  dropdown-content mt-3  p-2 shadow bg-base-100 rounded-box w-52"
              >
                {menuItems}
              </ul>
            </div>
            {/* <Link style={{
        
      }} className="btn btn-ghost text-ghost  normal-case text-xl">CoffeeShop</Link> */}

            <Link className="text-success  text-xl font-bold ml-2" to="/">
              Ownerless-Oasis
            </Link>
          </div>
          <div className="navbar-center  hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{menuItems}</ul>
          </div>
          <div className="navbar-end"></div>
        </div>
        <label
          htmlFor="dashboard-drawer"
          tabIndex={2}
          className="btn btn-ghost lg:hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </label>
      </div>
    </div>
  );
};
export default Navbar;
