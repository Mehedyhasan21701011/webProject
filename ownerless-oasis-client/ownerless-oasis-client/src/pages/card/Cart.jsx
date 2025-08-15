import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import { AuthContext } from "../../Context/authProvider";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]); // Array to store cart items
  const { user } = useContext(AuthContext);
  const naviget = useNavigate();

  // Fetch cart items from local storage or state (replace with your logic)
  useEffect(() => {
    const storedCartItems = localStorage.getItem("cartItems");
    if (storedCartItems) {
      setCartItems(JSON.parse(storedCartItems));
    }
  }, []);

  const [users , setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios.get('http://localhost:8081/placeorders')
    .then(res => {
        setUsers(res.data); // Update state with fetched data
        setLoading(false); // Set loading to false after data is fetched
    })
    .catch(err => {
        console.log(err);
        setLoading(false); // Set loading to false in case of error
    });
}, []);

  // Update cart state or local storage on changes (replace with your logic)
  const updateCart = (updatedItems) => {
    setCartItems(updatedItems);
    localStorage.setItem("cartItems", JSON.stringify(updatedItems));
  };

  const handleRemoveItem = (productId) => {
    const newCartItems = cartItems.filter(
      (item) => item.ProductID !== productId
    );
    updateCart(newCartItems);
  };

  const handleQuantityChange = (productId, newQuantity) => {
    const updatedCartItems = cartItems.map((item) => {
      if (item.ProductID === productId) {
        return { ...item, quantity: newQuantity }; // Update quantity for matching product ID
      }
      return item; // Keep other items unchanged
    });
    updateCart(updatedCartItems);
  };

  const subtotal = cartItems.reduce(
    (total, item) => total + item.Price * item.quantity,
    0
  );
 
  const placeOrder = async (userEmail) => {
    try {
      // Find the user with the matching email address
      const usmail = users.find((usmail) => usmail.Email === userEmail);
      if (!usmail) {
        console.log("User not found with email:", userEmail);
        return;
      }
  
      const orderData = {
        OrderDate: new Date().toISOString(),
        Quantity: cartItems.length,
        UserCartID: usmail.UserId // Set UserCartID based on the found user 
      };
  
      if (cartItems.length > 0) {
        // Place order
        const response = await axios.post("http://localhost:8081/confirm", orderData);
        console.log("Order Placed", response.data);
        console.log(usmail.UserId);
        // Fetch cart details
        const cartOrderResponse = await axios.get("http://localhost:8081/cartdetails");
        // // Fetch product details
        const productResponse = await axios.get("http://localhost:8081/productdetails");
  
        // Construct order details
        // const orderdetailsArray = cartOrderResponse.data.map(cartOrder => {
        //   const correspondingProduct = productResponse.data.find(product => product.ProductID === cartOrder.ProductID);
        //   return {
        //     OrderID: cartOrder.OrderID,
        //     Quantity: cartItems.length
        //   };
        // });
        const orderdetailsArray = {
          OrderID: cartOrderResponse.data[cartOrderResponse.data.length - 1].OrderID,
          Quantity: cartItems.length
        };
       
  
        // Post order details to server
        const orderDetailsResponse = await axios.post('http://localhost:8081/orderdetails', orderdetailsArray);
        console.log("Inserted data in orderdetails", orderDetailsResponse.data);
        
        localStorage.removeItem("cartItems");
        setCartItems([]);
  
      } else {
        alert("Your cart is empty!");
      }
    } catch (error) {
      console.log("Error placing order", error);
    }
    naviget('/confirm');
  };
  
  
  

 
  // useEffect(()=>{
  //   axios.get("http://localhost:8081/cartdetails")
  //   .then(res=>{
  //     setCartorder(res.data);
  //   })
  //   .catch(err=>{
  //     console.log(err);
  //   })

  // })
  // useEffect(()=>{
  //   axios.get("http://localhost:8081/productdetails")
  //   .then(res=>{
  //     setProduct(res.data);
  //   })
  //   .catch(err=>{
  //     console.log(err);
  //   })

  // })


  
  return (
    <div className="container mx-auto py-12">
      {cartItems.length === 0 ? (
        <p className="text-center text-gray-500">Your cart is empty.</p>
      ) : (
        <div className="grid  gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-4/5 mx-auto my-10">
          {cartItems.map((item) => (
            <div
              key={item.ProductID}
              className="p-4 bg-gray-100 rounded-lg shadow-md"
            >
              <img
                src={item.Img}
                alt={item.ProductName}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <div className="flex justify-between mb-2">
                <h3 className="text-lg font-medium text-gray-900">
                  {item.ProductName}
                </h3>
                <span className="text-base font-medium text-gray-500">
                  ${(item.Price * item.quantity).toFixed(2)}
                </span>
              </div>
              <div className="flex items-center mb-2">
                <button
                  className="text-xs font-medium text-white bg-blue-500 hover:bg-blue-700 rounded-lg py-1 px-2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  onClick={() =>
                    handleQuantityChange(
                      item.ProductID,
                      Math.max(item.quantity - 1, 1)
                    )
                  }
                >
                  -
                </button>
                <span className="mx-2 text-base font-medium text-gray-900">
                  {item.quantity}
                </span>
                <button
                  className="text-xs font-medium text-white bg-blue-500 hover:bg-blue-700 rounded-lg py-1 px-2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  onClick={() =>
                    handleQuantityChange(item.ProductID, item.quantity + 1)
                  }
                >
                  +
                </button>
                <button
                  className="ml-4 text-xs font-medium text-red-500 hover:text-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                  onClick={() => handleRemoveItem(item.ProductID)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
      {cartItems.length !== 0 && (
        <div className="flex justify-end mt-8">
          <p className="text-base font-medium text-gray-700">
            Subtotal: ${subtotal.toFixed(2)}
          </p>
          {/* Add buttons or links for checkout or other cart actions as needed */}
        </div>
      )}
      <div className=" flex justify-end mt-4">
      <Link
          to={`/products`}
          className="btn m-3 font-medium text-white bg-blue-500 hover:bg-blue-700 rounded-lg py-1 px-2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          continue Shopping....
        </Link>
        <Link
          to={`/cart`}
          onClick={() => placeOrder(user.email) }
          className=" btn m-3  font-medium  text-white bg-success hover:bg-warning  rounded-lg py-1 px-2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          confirm order
        </Link>
      </div>
    </div>
  );
};
export default Cart;
