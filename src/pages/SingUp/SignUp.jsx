import React, { useContext } from "react";
import img from "../../assets/images/login/login.svg";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";

const SignUp = () => {
  const { createUser } = useContext(AuthContext);
  const handleSignUp = (event) => {
    event.preventDefault();
    const from = event.target;
    const name = from.name.value;
    const email = from.email.value;
    const password = from.password.value;
    console.log(name, email, password);

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        console.log(error);
      });
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
          <form onSubmit={handleSignUp} className="card-body">
            <h1 className="text-4xl text-center font-bold">Sign Up</h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="name"
                className="input input-bordered"
                name="name"
                required
              />
            </div>
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
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Sign Up</button>
            </div>
            <div className="space-y-4">
              <h4 className="text-xl text-center">Or Sign Up with</h4>
              <div className=" flex items-center justify-center space-x-2">
                <h4
                  style={{ color: "#3C79E6" }}
                  className="text-4xl cursor-pointer"
                >
                  <FaGoogle></FaGoogle>
                </h4>
                <h4
                  style={{ color: "#31AA52" }}
                  className="text-4xl cursor-pointer"
                >
                  <FaGithub></FaGithub>
                </h4>
              </div>
              <div className="text-center">
                <h2>
                  Already have an account?{" "}
                  <Link to="/login" className="text-red-400">
                    Login
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

export default SignUp;
