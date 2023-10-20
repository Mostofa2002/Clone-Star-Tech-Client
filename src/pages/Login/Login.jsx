import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from "./../../AuthProvider/AuthProvider";

const Login = () => {
  const { signIn, googleLogin } = useContext(AuthContext);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  console.log(location);

  const handleGoogle = () => {
    googleLogin()
      .then((result) => {
        toast.success("🦄you have successfully Login)", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        console.log(result.user);

        // after navigate
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const HandleLogin = (e) => {
    e.preventDefault();
    setError("");

    const form = new FormData(e.currentTarget);
    console.log(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    console.log(email, password);

    signIn(email, password)
      .then((result) => {
        console.log(result.user);
        toast.success("🦄you have successfully Login)", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });

        // after navigate
        navigate(location?.state ? location?.state : "/");
      })
      .catch((err) => {
        console.log(err);
        setError("Password is incorrect!!");
      });
  };
  return (
    <div className="hero min-h-screen mb-10 dark:text-white  ">
      <div className="hero-content flex-col ">
        <div className="text-center ">
          <h1 className="text-5xl font-bold">Login Here!</h1>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={HandleLogin} className="card-body">
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
              {error && <p className="text-red-500 font-bold"> {error}</p>}
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-blue-400 text-white">Login</button>

              <div className="py-3  flex justify-end">
                <button
                  onClick={handleGoogle}
                  className="btn btn-outline w-full  py-3"
                >
                  <i className="fa-brands fa-google"></i>Google
                </button>
              </div>
            </div>
            <div className="flex gap-5 items-center text-black ">
              <p>New to here?</p>
              <Link className="text-lg font-bold" to="/Register">
                Please Register
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
