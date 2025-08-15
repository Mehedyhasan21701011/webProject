import { useContext } from "react";
import { AuthContext } from "../../Context/authProvider";

const SocialLogIn = () => {
    const {googleSignIn} = useContext(AuthContext);
    const handleGoogleLogin = () => {
        googleSignIn()
        .then( result =>{
            const user =  result.user;
            console.log(user);
            const currentUser ={
                email : user.email

            }
        })


    }
    return (
        <div>
   {/* <p style={{
    color:'darkcyan'
   }} className="text-center">Social LogIn</p> */}
   <p>
    <button onClick={handleGoogleLogin}
     className="btn w-4/5 btn-ghost mb-4 ml-8  
     para-link font-bold
     text-center">Google</button>
   </p>
        </div>
    )
   
    }
export default SocialLogIn;