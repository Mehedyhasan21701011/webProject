import { faCartShopping, faHouse } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useLoaderData } from "react-router-dom";
// import { AuthContext } from "../authprovider/authprovider";
import './details.css';

const Details = () => {
    const {name,_id,price,img,details,review,stock} = useLoaderData();
  
    
    return (
        <section style={{
            backgroundColor:'#f0f8ff'
        }} className="mt-16 mb-16 p-20 details">
            <div className="flex">
                <div>
        <img style={{
            height:350
        }} src={img} alt="" />
                </div>
                <div style={{
                    width:750,
                    display:'inline'
                }}>
                    <h1 style={{
                        color:'seagreen'
                    }} className="font-bold font-link text-2xl mb-4">{name}</h1>
                    <p className="para-link ">{details}</p>
                    <h1 className="para-link font-bold">Price : <span className="text-error">$</span>{price}</h1>
                   <h1>Review:{review} </h1>
                   <h1>Stock: {stock}</h1>
                   <Link to = {`/buyNow/${_id}`}>
                   <button style={{
                    backgroundColor:'#e22937'
                }} className="btn p-4 text-white mt-4">
                    <FontAwesomeIcon icon={faCartShopping} />
                    Buy Now</button></Link>
                <Link to='/'>
                    <button style={{
                        backgroundColor:'seagreen'
                    }} className="btn text-white p-4 ml-2">
                        
                        <FontAwesomeIcon icon={faHouse} />
                        Back Home</button>
                </Link>
                </div>
              
            </div>
        </section>
      
    )
}
export default Details;