import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios"; // Import axios for HTTP requests

const ProductDetails = () => {
  const { id } = useParams(); // Get id from URL
  const [product, setProduct] = useState([]); // State to hold product data
  const [imageError, setImageError] = useState(false); // State to track image loading errors
  const navigate = useNavigate(); // For programmatic navigation

  useEffect(() => {
    // Fetch product data using id
    axios
      .get(`http://localhost:8081/products/` + id)
      .then((res) => {
        setProduct(res.data[0]); //*********** ekhane jodi array er modde data[0] na dei tkhn prblm hbe*******************
      })
      .catch((err) => {
        console.log(err);
        // Handle error if needed
      });
  }, [id]); // Re-fetch product data when id changes

  const handleAddToCart = () => {
    if (!product) return; // Check if product is null
    // Get existing cart items from local storage or state (replace with your logic)
    let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

    const existingItem = cartItems.find(
      (item) => item.ProductID === product.ProductID
    );

    if (existingItem) {
      // Update quantity for existing item
      cartItems = cartItems.map((item) =>
        item.ProductID === product.ProductID
          ? { ...item, quantity: 1 + item.quantity } // Assuming you always add one more
          : item
      );
    } else {
      // Add new item to cart
      cartItems.push({ ...product, quantity: 1 }); // Start with quantity 1
    }

    // Store updated cart items in local storage or state (replace with your logic)
    localStorage.setItem("cartItems", JSON.stringify(cartItems));

    navigate("/cart"); // Navigate to Cart page after adding to cart
  };

  // Render loading message if product is null or undefined
  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto py-12">
      <h1 className="text-2xl font-bold text-gray-900 mb-4">
        {product.ProductName}
      </h1>
      <div className="flex flex-wrap">
        {imageError ? (
          <div className="w-full md:w-1/2 p-4 flex justify-center items-center">
            <p className="text-red-500">Imag not available</p>
          </div>
        ) : (
          <img
            src={product.Img}
            alt={product.ProductName}
            className="w-full md:w-1/2 p-4 rounded-lg shadow-md"
            onError={() => setImageError(true)} // Handle image loading errors
          />
        )}
        <div className="w-full md:w-1/2 p-4">
          <div className=" items-center mb-2">
            <span className="text-base bg-slate-400 p-1 font-bold text-gray-900">
              Description:
            </span>
            <span className="text-base ml-2 text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
              natus nisi aperiam accusamus facere ad alias, sint perspiciatis
              quae pariatur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, facere.
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore dignissimos obcaecati maiores, iure ipsum corporis laudantium nostrum sed ducimus earum?
            </span>
          </div>
          <div className="flex items-center mb-2">
            <span className="text-base font-medium text-gray-900">
              Stock Status:
            </span>
            <span className="text-base ml-2 text-gray-500">
              {product.StockStatus}
            </span>
          </div>
          <div className="flex items-center mb-2">
            <span className="text-base font-medium text-gray-900">Price:</span>
            <span className="text-base ml-2 text-gray-500">
              {product.Price
                ? `${product.Price.toFixed(2)}`
                : "Price Not Available"}
            </span>
          </div>
          {/* Add more details sections as needed (e.g., specifications, features) */}
          <div className="flex items-center mb-4">
            <button
              className="text-xs font-medium  text-white bg-red-500 hover:bg-blue-700 rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              onClick={handleAddToCart}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
