import axios from "axios";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";

const AllProducts = () => {
  // const {data: users = [],refetch} = useQuery({
  //     queryKey:['users'],
  //    queryFn: async() => {
  //     const res = await fetch('allProducts.json');
  //     const data = await res.json();
  //     return data;
  //    }
  // })
  const [allProducts, setAllProduct] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8081/allProducts")
      .then((res) => res.json())
      .then((data) => setAllProduct(data));
  });
  
  const handleDelete = (id) => {
    axios.delete(`http://localhost:8081/delete/${id}`)
      .then(() => {
        // Update state to remove the deleted product
        setAllProduct(allProducts.filter(product => product.ProductID !== id));
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <div
      style={{
        padding: 10,
        backgroundColor: "white",
        
      }}
      className="w-full"
    >
      <h3 className="text-3xl font-bold text-black mb-8">All Products</h3>

      <div className="overflow-x-auto">
        <table className="table w-full text-black">
          <thead className="text-black">
            <tr>
              <th></th>
              <th>ProductID</th>
              <th>ProductName</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {allProducts.map((user, i) => (
              <tr>
                <th>{i + 1}</th>
                <td>{user.ProductID}</td>
                <td>{user.ProductName}</td>
                <td>{user.Quantity}</td>
                <td>{user.Price}</td>
                {/* <td> { user?.role !=='admin' && <button onClick={() => 'handleMakeAdmin'(user._id)} className="btn btn-xs btn-primary">Make Admin</button>}</td> */}
                <Link  to={`/edit/${user.ProductID}`} className=' btn btn-xs mt-3 btn-warning text-white'>Update</Link>
                 <td><button onClick={()=> handleDelete(user.ProductID)} className="btn btn-xs btn-error">Delete</button></td>
                
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllProducts;
