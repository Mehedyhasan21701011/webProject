import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios"; // Import axios for making HTTP requests
import { toast } from "react-hot-toast";
import { AuthContext } from "../../Context/authProvider";

const SignUp = () => {
  const Navigate = useNavigate();
  const { createUser } = useContext(AuthContext);
  const { register, handleSubmit, formState: { errors } } = useForm();

  const handleSignUp = async (data) => {
    try {
      const response = await axios.post('http://localhost:8081/users', {
        firstName: data.name,
        lastName: '', // Providing an empty string for lastName
        email: data.email,
        password: data.password
      });

      console.log(response.data); // Log response data from the server
      createUser(data.email, data.password); // You may need to adjust this depending on your authentication logic
      toast.success('User created successfully');
      Navigate('/')
    } catch (error) {
      console.error(error);
      alert("Email already exist");
      toast.error('Failed to create user');
    }
  }

  return (
    <div className="h-[800px] flex justify-center items-center">
      <div className="w-96">
        <img className="mask mask-circle ml-16" src="https://i...content-available-to-author-only...b.co/Z8WbMvT/images-14.jpg" alt="signup" />

        <h2 className="text-2xl text-center text-secondary font-bold mt-4">SignUp</h2>
        <form onSubmit={handleSubmit(handleSignUp)}>

          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input type="text" {...register("name", {
              required: "Name is required"
            })} className="input input-bordered w-full" placeholder="Name" />
            {errors.name && <p className="text-red-600" role="alert">{errors.name?.message}</p>}
          </div>

          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input type="email" {...register("email", {
              required: "Email address is required"
            })} className="input input-bordered w-full" placeholder="Email" />
            {errors.email && <p className="text-red-600" role="alert">{errors.email?.message}</p>}
          </div>

          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input type="password" {...register("password", {
              required: true,
              minLength: { value: 6, message: 'Password must be at least 6 characters long' }
            })} className="input input-bordered w-full" placeholder="Password" />
            {errors.password && <p className="text-red-600" role="alert">{errors.password?.message}</p>}
          </div>

          <input type="submit" className="btn w-full mt-5" />
        </form>

        <h1 className="text-xl text-primary font-bold mt-4">Already have an account? Please <Link className="text-secondary" to='/login'>LogIn</Link></h1>

      </div>
    </div>
  );
}

export default SignUp;
