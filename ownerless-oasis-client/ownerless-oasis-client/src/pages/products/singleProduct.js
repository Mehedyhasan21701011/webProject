import { Link } from "react-router-dom";

const SingleProduct = ({product}) => {
    const {img,price,name,_id} = product;
    return (
        <div className="card w-96 bg-base shadow-xl p-5 ">
  <figure><img className="h-48" src={img} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title text-yellow-600 ">{name}</h2>
    <p className="font-bold">Price : ${price}</p>
    <p></p>
    <div className="card-actions justify-end">
     <Link to = {`/details/${_id}`}>
     <button style={{
      backgroundColor:'#e22937'
     }} className="btn text-white"> 
      See Details

    </button>
     </Link>
     <Link to = {`/buynow/${_id}`}>
     <button style={{
      backgroundColor:'#e22937'
     }} className="btn text-white"> 
      Buy Now

    </button>
     </Link>
    </div>
  </div>
</div>
    )
}
export default SingleProduct;