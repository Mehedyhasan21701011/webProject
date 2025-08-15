import { useEffect, useRef, useState } from "react";
import SingleProduct from "./singleProduct";





const Products = () => {
     const [isAsc,setIsAsc] = useState();
     const[products,setProducts] = useState([]);
   const searchRef = useRef();
    const [search,setSearch] = useState('');

    useEffect( () => {
        //fetch(`http://localhost:5000/c)
        //  fetch(`http://localhost:5000/services?order=${isAsc? 'Ascending' : 'Descending '}`)
        // fetch('http://localhost:5000/cars')
        
         fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[isAsc,search]);
    const handleSearch = () => {
        setSearch(searchRef.current.value);
        console.log(searchRef.current.value);
    }
  
    return (
        <div style={{
            backgroundColor:'#f0f8ff'
        }}>
       <div className="my-10 p-10">
      <h1 style={{
        color:'navy'
      }} className="font-link font-bold text-4xl text-center">Our Products</h1>
   <img style={{
    height:50,
    width:50,
    borderRadius:50
   }} src="https://i.ibb.co/gFBqgTh/quote-icon-design-free-vector.jpg" alt=""  className="mx-auto  mt-6"/>
   

  
  

      
       </div>
       <div className="grid  gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-4/5 mx-auto my-10">
      {/* <h3>service : {services.length}</h3> */}

      {
        products.map( product => <SingleProduct
        
        product = {product}
        ></SingleProduct>)

      }
       </div>
       </div>
       
    )
}
export default Products;