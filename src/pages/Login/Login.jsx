import React, { useContext } from "react";
import img from "../../assets/images/login/login.svg";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";

const Login = () => {
  const { signIn, googleSignIn } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";
  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
      .then((result) => {
        const user = result.user;

        console.log(user);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // sign for google
  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row">
        <div className=" mr-20 w-1/2">
          <img src={img} alt="" className="" />
        </div>
        <div
          style={{ border: "1px solid var(--Dark-05, #D0D0D0)" }}
          className="card shrink-0 w-full max-w-md shadow-2xl  bg-base-100"
        >
          <form onSubmit={handleLogin} className="card-body">
            <h1 className="text-4xl text-center font-bold">Login</h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
                name="email"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered"
                name="password"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Sign In</button>
            </div>
            <div className="space-y-4">
              {/* <h4 className="text-xl text-center">Or Sign In with</h4> */}
              <div className="divider">OR</div>
              <div className=" flex items-center justify-center space-x-2">
                <Link
                  onClick={handleGoogleSignIn}
                  style={{ color: "#3C79E6" }}
                  className="text-4xl cursor-pointer"
                >
                  <FaGoogle></FaGoogle>
                </Link>
                <h4
                  style={{ color: "#31AA52" }}
                  className="text-4xl cursor-pointer"
                >
                  <FaGithub></FaGithub>
                </h4>
              </div>
              <div className="text-center">
                <h2>
                  Have an account?{" "}
                  <Link to="/register" className="text-red-400">
                    Sign Up
                  </Link>
                </h2>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
