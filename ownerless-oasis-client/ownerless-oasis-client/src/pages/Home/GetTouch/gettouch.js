
import bg from "../../../assests/image/slider_bg.png";
import './gettouch.css'
const GetTouch = () => {
    return (
        <section className='flex mb-16 clip mt-20'>
            <div  style={ { background : `url( ${bg})`,
        width:750
        }} className="flex text-white p-20 mt-16 ">
                <div className='mr-32'>
                    <h1 className='font-bold text-3xl mb-6 font-link offer'>Get In Touch</h1>
                    <h1 className='text-xl font-bold heading mb-8'>[+1]515-602-6843</h1>
                    <h1 className='font-bold text-xl para-link mb-4'>Location</h1>
                    <h1 style={{
                        width:200
                    }} className='para-link mb-6'>3865 Nutters Barn Lane Clarion, IA 50525</h1>
                    <h1 className='font-bold text-xl mb-4'>Email</h1>
                    <h1 className='para-link'>kevineevans@rhyta.com</h1>
                </div>
                <div className='mt-32'>
                    <h1 className='text-2xl font-bold heading mb-8'>Opening Hour</h1>
                    <div className='para-link'>
                    <h1>Mon: 10am - 5pm</h1>
                    <h1>Tue: 10am - 5pm</h1>
                    <h1>Wed Closed</h1>
                    <h1>Thu: 10am - 5pm</h1>
                    <h1>Fri: 10am - 5pm</h1>
                    <h1>Sat: 10am - 5pm</h1>
                    <h1>Sun Closed</h1>
                    </div>
                </div>
                   
            </div>
            <div  style={{
                backgroundColor:'#ea4335',
                width:760
            }} className='text-white'>
                <h1 className='font-link font-bold text-3xl ml-48 mt-24'>Send A Message</h1>
                <div>
                <input style={{
                    backgroundColor:'#8f1d26'
                }} type="text" placeholder="Full Name" className="input ml-48 w-full max-w-xs mt-8 mb-4" />
                <br />
                <input style={{
                    backgroundColor:'#8f1d26'
                }} type="text" placeholder="Email Address" className="input ml-48
                 w-full max-w-xs" /> <br />

                <textarea style={{
                    backgroundColor:'#8f1d26',
                    width:320
                }} className="textarea ml-48 mt-4" placeholder="Message"></textarea> <br />
                <button className='btn ml-64 bg-white mt-4 font-link'>Send Message</button>
                </div>
          
            </div>
        </section>
    )
}
export default GetTouch;