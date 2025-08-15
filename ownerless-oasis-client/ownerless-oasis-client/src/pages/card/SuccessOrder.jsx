import React from "react";

const SuccessOrder = ({ orderId }) => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-24 w-24 text-green-500"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M5 13l4 4L19 7"
        />
      </svg>
      <h2 className="text-2xl font-bold mt-4">Order Placed Successfully!</h2>
      <p className="text-lg text-gray-600 mt-2">Your order ID is: {orderId}</p>
      <p className="text-lg text-gray-600 mt-2">We'll notify you once your order is ready.</p>
    </div>
  );
};

export default SuccessOrder;
