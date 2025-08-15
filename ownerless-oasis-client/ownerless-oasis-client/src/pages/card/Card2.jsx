import ProductCard from "./ProductCard";
import { products } from "../../products";
import { useEffect, useState } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";

const Card2 = () => {
  const [value , setValue] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('http://localhost:8081/products')
    .then(res => {
        setValue(res.data); // Update state with fetched data
        setLoading(false); // Set loading to false after data is fetched
    })
    .catch(err => {
        console.log(err);
        setLoading(false); // Set loading to false in case of error
    });
}, []);

    return (
      <>
     
      <div className="my-10 ">
        <h2 className="font-link font-bold text-4xl  bg-slate-200 rounded-md text-center">Our Products</h2>
        <div className="grid  gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-4/5 mx-auto my-10">
          {value.map((product) => (
            <ProductCard key={product.ProductID} product={product} />
          ))}
        </div>
      </div>
      </>
    );
  };
  
  export default Card2;