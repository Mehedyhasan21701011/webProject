import React, { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { products } from "../../products";
// Import product data
const ProductCard = ({ product }) => {
  //   const { productId } = useParams(); // Get product ID from URL

  //   const product = products.find((p) => p.id === parseInt(productId)); // Find product by ID
  const navigate = useNavigate(); // For programmatic navigation
  const [quantity, setQuantity] = useState(1);
  const handleAddToCart = () => {
    // Get existing cart items from local storage or state (replace with your logic)
    let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

    const existingItem = cartItems.find((item) => item.ProductID === product.ProductID);

    if (existingItem) {
      // Update quantity for existing item
      cartItems = cartItems.map((item) =>
        item.ProductID === product.ProductID
          ? { ...item, quantity: quantity + item.quantity }
          : item
      );
    } else {
      // Add new item to cart
      cartItems.push({ ...product, quantity });
    }

    // Store updated cart items in local storage or state (replace with your logic)
    localStorage.setItem("cartItems", JSON.stringify(cartItems));

    navigate("/"); // Navigate to Cart page after adding to cart
  };

  if (!product) {
    return <div>Product not found</div>; // Handle invalid product ID
  }

  return (
    <div className="relative overflow-hidden bg-white rounded-lg shadow-md  transform transition duration-300 hover:scale-105 hover:shadow-md">
      <div className="relative  h-64 overflow-hidden text-black">
        <img src={product.Img} alt={product.ProductName} className="mx-auto  mt-6" />
        <div className="absolute inset-0  from-gray-900 "></div>
      </div>
      <div className="p-4">
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-lg font-medium text-black">{product.ProductName}</h3>
          <span className="text-base font-medium text-black">
            {product.Quantity}
          </span>
        </div>
        <p className="text-sm text-black line-clamp-2">
          {product.StockStatus}
        </p>

        <div className="flex justify-between items-center mt-4">
          <span className="text-base font-medium text-black">
            ${product.Price.toFixed(2)}
          </span>
          <button
            className="text-xs font-bold text-red-500 border border-red-500 bg-white hover:bg-slate-200 rounded-lg py-3 px-2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            onClick={handleAddToCart}
          >
            Add to Cart
          </button>
          <Link
            to={`/products/${product.ProductID}`}
            className="text-xs font-medium text-white bg-red-500 hover:bg-red-700 rounded-md py-3 px-2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
