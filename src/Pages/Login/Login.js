import React, { useEffect } from "react";
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { useForm } from "react-hook-form";
import Loading from "../Shared/Loading";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useToken from "../../hooks/useToken";

const Login = () => {
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  const [
    signInWithEmailAndPassword,user,loading,error,] = useSignInWithEmailAndPassword(auth);
    const [token] =useToken(user || gUser)
  const {register,formState: { errors },handleSubmit,} = useForm();
    let signInError;
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";

    useEffect(()=>{
        if (token) {
            navigate(from, { replace: true });
          }
    },[token, from, navigate])

  if(loading || gLoading){
    return <Loading/>
  }
  if(gError || error){
    signInError= <p className='text-red-500'><small>{error?.message || 
        gError?.message }</small></p>
  }
  const onSubmit = (data) => {
    signInWithEmailAndPassword(data.email, data.password);
  };
  return (
    <div className="flex h-screen justify-center items-center">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title justify-center text-3xl">Login</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
              {/* // Email: */}
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                {...register("email", {
                  required: {
                    value: true,
                    message: "Email is Required",
                  },
                  pattern: {
                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                    message: "Provide a Valid Email",
                  },
                })}
                type="email"
                placeholder="Enter Your Email"
                className="input input-bordered w-full max-w-xs"
              />
              <label className="label">
                {errors.email?.type === "required" && 
                    <span className="label-text-alt text-red-500">{errors.email.message}</span>
                }
                {errors.email?.type === "pattern" && 
                    <span className="label-text-alt text-red-500">{errors.email.message}</span>
                }
              </label>
            </div>
            {/* Password */}
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                {...register("password", {
                  required: {
                    value: true,
                    message: "Password is Required",
                  },
                  minLength: {
                    value: 6,
                    message: "Must be 6 characters or longer",
                  },
                })}
                type="password"
                placeholder="Password"
                className="input input-bordered w-full max-w-xs"
              />
              <label className="label">
                {errors.password?.type === "required" && 
                    <span className="label-text-alt text-red-500">
                        {errors.password.message}</span>
                }
                {errors.password?.type === "pattern" && 
                    <span className="label-text-alt text-red-500">
                        {errors.password.message}</span>
                }
              </label>
            </div>
            <p><small>Forgot Password ?</small></p>
             {signInError}
                {/* login btn */}
            <input className="btn w-full" value='LOGIN' type="submit" />
          </form>
          <p><small>New to Doctors Portal? <Link className="text-secondary" 
          to='/singup'>Create a Account</Link></small></p>
          <div className="divider">OR</div>
          {/* Google Btn */}
          <button
            onClick={() => signInWithGoogle()}
            className="btn btn-outline w-full"
          >
            CONTINUE WITH GOOGLE
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
