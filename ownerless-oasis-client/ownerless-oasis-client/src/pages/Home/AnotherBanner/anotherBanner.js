import './anotherBanner.css';
import food1 from "../../../assests/image/food1.png";
import food2 from "../../../assests/image/food2.png";
import food3 from "../../../assests/image/food3.png";
import food4 from "../../../assests/image/banner1.png";

const Anotherbanner = () => {
    return (
        <section className='mt-20'>
            
            <div className='grid grid-cols-4 mt-8'>
                <div style={{
                     background : `url( ${food1})`,
                     height:500

                }} className='p-20 photo'> 
                {/* <div style={{
                    backgroundColor:'#e22937',
                    color:'white',
                    width:100,height:50,
                    
                }} className='mx-auto 
                p-3 font-bold font-link'>
                    {/* <h1>20% Off</h1> */}
                {/* </div>
                    <h1 className='text-2xl font-bold font-link text-white mt-32 offer'>Awsome Class Model</h1>
                    <h1 className='text-xl text-white mt-4'><span className='text-error font-bold '>$776</span>/Mo</h1>
                  
                        <div className='flex text-white'>
                        
                        <h1 className='para-link'>50 GL Free</h1>
                        
                       
                    </div> */} 
                </div>
                <div style={{
                     background : `url( ${food2})`,
                     height:500

                }} className='p-20 photo'> 
                 {/* <div style={{
                    backgroundColor:'#e22937',
                    color:'white',
                    width:100,height:50,
                    
                }} className='mx-auto p-3 font-bold font-link'>
                    <h1>20% Off</h1>
                </div>
               
                     <h1 className='text-2xl font-bold font-link text-white mt-32 offer'>Awsome Class Model</h1>
                     <h1 className='text-warning font-bold font-link '>Limited</h1>
                    <h1 className='text-xl text-white mt-4'><span className='text-error font-bold '>$776</span>/Mo</h1>
                  
                        <div className='flex text-white'>
                       
                        <h1 className='para-link'>50 GL Free</h1>
                        
                       
                    </div> */}
                </div>
                <div style={{
                     background : `url( ${food3})`

                }} className='p-20 photo'> 
                    {/* <h1 className='text-2xl font-bold font-link text-white mt-32 offer'>Awsome Class Model</h1>
                    <h1 className='text-xl text-white mt-4'><span className='text-error font-bold '>$776</span>/Mo</h1>
                  
                        <div className='flex text-white'>
                        
                        <h1 className='para-link'>50 GL Free</h1>
                        
                       
                    </div> */}
                </div>
                <div style={{
                     background : `url( ${food4})`

                }} className='p-20 photo'> 
                 {/* <div style={{
                    backgroundColor:'#e22937',
                    color:'white',
                    width:100,height:50,
                    
                }} className='mx-auto p-3 font-bold font-link'>
                    <h1>15% Off</h1>
                    </div>
                    <h1 className='text-2xl font-bold font-link text-white mt-32 offer'>Awsome Class Model</h1>
                    <h1 className='text-xl text-white mt-4'><span className='text-error font-bold '>$776</span>/Mo</h1>
                  
                        <div className='flex text-white'>
                        
                        <h1 className='para-link'>50 GL Free</h1>
                        
                       
                    </div> */}
                </div>
            </div>
            
           

        
              
        </section>
    )
}
export default Anotherbanner;