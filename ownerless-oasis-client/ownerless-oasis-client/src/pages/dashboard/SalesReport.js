import BarChart from "./chart";
import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import Home from "../Home/home";
import SalesRep from "./SalesRep";

const SalesReport = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    fetch("cars.json")
      //  fetch(`http://localhost:5000/services?order=${isAsc? 'Ascending' : 'Descending '}`)
      // fetch('http://localhost:5000/cars')

      // fetch('cars.json')
      .then((res) => res.json())
      .then((data) => setCars(data));
  });

  return (
    <div className="flex home-container">
      {/* <div className='first'>
            <Link to='/'>home</Link>
        </div> */}
      <div className="nav p-5">
        {/* <ul className="menu bg-base-200 rounded-box navList"> */}
        {/* <div className='mb-32 mt-6 navLink'>
       
        <svg xmlns="http://w...content-available-to-author-only...3.org/2000/svg"
         height="1em" viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg>
       </div> */}
        {/* <div style={{
  background:'blue'
 }} className='p-1 rounded-lg mb-8 navLink'>
 
    
     <Link to='/' >
     <svg xmlns="http://w...content-available-to-author-only...3.org/2000/svg" height="1em" viewBox="0 0 576 512"><path d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"/></svg>
     </Link>
    
  
 </div> */}
        <div className="mb-8 navLink">
          {/* <a className="tooltip tooltip-right navLink" data-tip="Details"> */}
          {/* <Link >   <svg xmlns="http://w...content-available-to-author-only...3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg></Link> */}
          {/* </a> */}
        </div>
        <div className="mb-8 navLink">
          {/* <a className="tooltip tooltip-right navLink" data-tip="Stats"> */}
          {/* <Link >
     <svg xmlns="http://w...content-available-to-author-only...3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M40 48C26.7 48 16 58.7 16 72v48c0 13.3 10.7 24 24 24H88c13.3 0 24-10.7 24-24V72c0-13.3-10.7-24-24-24H40zM192 64c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zM16 232v48c0 13.3 10.7 24 24 24H88c13.3 0 24-10.7 24-24V232c0-13.3-10.7-24-24-24H40c-13.3 0-24 10.7-24 24zM40 368c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24H88c13.3 0 24-10.7 24-24V392c0-13.3-10.7-24-24-24H40z"/></svg></Link>
    </a> */}
        </div>
        {/* <div className='mb-64 navLink'>
    <Link>
    <svg xmlns="http://w...content-available-to-author-only...3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464H398.7c-8.9-63.3-63.3-112-129-112H178.3c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3z"/></svg></Link>
  </div> */}
        {/* <div className='mb-8 navLink hide'>
    <Link>
    <svg xmlns="http://w...content-available-to-author-only...3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M224 0c-17.7 0-32 14.3-32 32V49.9C119.5 61.4 64 124.2 64 200v33.4c0 45.4-15.5 89.5-43.8 124.9L5.3 377c-5.8 7.2-6.9 17.1-2.9 25.4S14.8 416 24 416H424c9.2 0 17.6-5.3 21.6-13.6s2.9-18.2-2.9-25.4l-14.9-18.6C399.5 322.9 384 278.8 384 233.4V200c0-75.8-55.5-138.6-128-150.1V32c0-17.7-14.3-32-32-32zm0 96h8c57.4 0 104 46.6 104 104v33.4c0 47.9 13.9 94.6 39.7 134.6H72.3C98.1 328 112 281.3 112 233.4V200c0-57.4 46.6-104 104-104h8zm64 352H224 160c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7s18.7-28.3 18.7-45.3z"/></svg></Link>
  </div>
  <div className='navLink hide'>
  <svg xmlns="http://w...content-available-to-author-only...3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"/></svg>
  </div> */}
      </div>
      <div className="p-10 bg-base-200">
        <div className="flex">
          <div className="avatar">
            <div className="w-24 rounded-full">
              <img src="https://i...content-available-to-author-only...b.co/C8Fh3KT/mike.jpg" />
            </div>
          </div>
          <div className="ml-4 mt-4 first">
            <h1 className="text-2xl font-link font-bold">Hi admin,{}</h1>
            <h1 className="pera-link">Welcome back</h1>
          </div>
        </div>
        <div className="mt-8">
          <p className="font-bold mb-2">Total sale </p>
          <h1 className="font-link font-bold text-xl">$1000</h1>
          <p
            style={{
              color: "gray",
            }}
          >
            Today
          </p>
          <p className="font-bold font-link mt-2">$400</p>
          <p
            style={{
              color: "gray",
            }}
          >
            This week
          </p>
          <h1 className="font-bold font-link mt-2">$189</h1>
          <p
            style={{
              color: "gray",
            }}
          >
            This month
          </p>
          <button
            style={{
              width: 100,
            }}
            className="btn-primary rounded-lg text-white mt-4  p-2"
          >
            Back SalesReport
          </button>
        </div>
        {}
      </div>
      <div className="p-16">
        <h1 className="text-primary pera-link font-bold">Report</h1>
        <h1 className="font-bold">Starting Year 2024</h1>
        <div className="grid grid-cols-3 gap-8 mt-4">{}</div>
        <h1 className="pera-link font-bold">Total sales analytic</h1>
        <BarChart></BarChart>
        <div className="mt-8">
          <p
            style={{
              color: "gray",
            }}
          >
            This number represent current goal achievement
          </p>
          {/* <div className="flex">
            <div>
              <div className="mt-8">
                <h1>
                  <span className="font-bold">Age:</span> Under 30
                </h1>
                <div className="divider"></div>
              </div>
              <div>
                <h1>
                  <span className="font-bold">Salary:</span> K20-K30
                </h1>
                <div className="divider"></div>
              </div>
              <div>
                <h1>
                  <span className="font-bold">Gender:</span> Male
                </h1>
                <div className="divider"></div>
              </div>
            </div>
            <div className="ml-16 mt-16">
              <div
                className="radial-progress text-success mr-6"
                style={{ "--value": 78 }}
              >
                78%
              </div>

              <div
                className="radial-progress text-success mr-6"
                style={{ "--value": 90 }}
              >
                90%
              </div>
              <div
                className="radial-progress text-success"
                style={{ "--value": 59 }}
              >
                59%
              </div>
            </div>
          </div> */}
          <SalesRep />
        </div>
      </div>
      <div className="bg-base-200 p-12">
        {}
        <div className="card w-2/3 bg-base-100 shadow-xl mb-6 ml-10">
          <div className="card-body">
            <h2 className="card-title">Customers </h2>
            <h2 className="card-title">12 </h2>
            <img
              style={{
                height: 80,
                width: 80,
              }}
              className="mask mask-circle"
              src="https://i...content-available-to-author-only...b.co/XSNq4KT/customers.jpg"
              alt="customers"
              border="0"
            ></img>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            {}
          </div>
        </div>
        <div className="card w-2/3 bg-base-100 shadow-xl mb-6 ml-10">
          <div className="card-body">
            <h2 className="card-title">Products</h2>
            <h2 className="card-title">40</h2>

            <img
              style={{
                height: 80,
                width: 80,
              }}
              className="mask mask-circle"
              src="https://i...content-available-to-author-only...b.co/V9zcRQW/order.jpg"
              alt="order"
              border="0"
            ></img>
            <p>{cars.length}</p>

            {}
          </div>
        </div>
        <div className="card w-2/3 bg-base-100 shadow-xl ml-10">
          <div className="card-body">
            <h2 className="card-title">Sale</h2>
            <h2 className="card-title">$1000</h2>
            <img
              style={{
                height: 80,
                width: 80,
              }}
              className="mask mask-circle"
              src="https://i...content-available-to-author-only...b.co/tLk4Ys4/sale.png"
              alt="sale"
              border="0"
            ></img>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            {}
          </div>
        </div>
      </div>
    </div>
  );
};
export default SalesReport;
