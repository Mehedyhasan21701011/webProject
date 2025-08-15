import './service.css'

const Service = () => {
    return (
        <div className="grid grid-cols-4  mx-auto mt-8">
        <div className="card w-4/5 bg-base-100 shadow-xl ml-10 mini">
  <div className="card-body">
    <img style={{
        height:50,
        width:50
    }} src="https://i.ibb.co/tD4Xr3s/chef.png">
    </img>
    <h2 className="card-title">Card title!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    
  </div>
</div> 
<div className="card w-4/5 bg-base-100 ml-6 shadow-xl mini">
  <div className="card-body">
    <img style={{
        height:50,
        width:50
    }} src="https://i.ibb.co/jRwyp97/spoon.jpg">
    </img >
    <h2 className="card-title">Card title!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    
  </div>
</div>
<div className="card w-4/5 bg-base-100  ml-6 shadow-xl mini">
  <div className="card-body">
  <img style={{
        height:50,
        width:50
    }} src="https://i.ibb.co/z2xXjsK/cart.png">
    </img >
    <h2 className="card-title">Card title!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
   
  </div>
</div>
<div className="card w-4/5 bg-base-100 shadow-xl mini">
  <div className="card-body">
  <img style={{
        height:50,
        width:50
    }} src="https://i.ibb.co/NWnNpRr/service.png">
    </img >
    <h2 className="card-title">Card title!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    
  </div>
</div>
   
        </div>
    )
}
export default Service;