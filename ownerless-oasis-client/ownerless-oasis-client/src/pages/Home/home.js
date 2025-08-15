import Card2 from "../card/Card2";
import Products from "../products/products";
import Anotherbanner from "./AnotherBanner/anotherBanner";
import Banner from "./Banner/banner";
import GetTouch from "./GetTouch/gettouch";

import Service from "./Service/service";

const Home = () => {
    return (
        <div>
           <Banner></Banner> 
        {/* <Products></Products> */}
        <Card2></Card2>
           <Service></Service>
           {/* <Anotherbanner></Anotherbanner> */}
           <GetTouch></GetTouch>
   
        </div>
    )
}
export default Home;