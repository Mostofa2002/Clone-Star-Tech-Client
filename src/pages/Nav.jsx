import { Link, NavLink } from "react-router-dom";
import { TfiMenu } from "react-icons/tfi";
import Logo from "./Logo";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { useContext, useEffect, useState } from "react";
const Nav = () => {
  const { user, LogOut } = useContext(AuthContext);

  const handleLogOut = () => {
    LogOut();
  };

  // darkMode
  const [theme, setTheme] = useState(null);
  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  return (
    <div className="lg:mx-14">
      <div className=" dark:bg-gray-800 navbar bg-transparent ">
        <div className="navbar-start">
          {/* phone */}
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost xl:hidden">
              <TfiMenu className="text-xl font-bold dark:text-white "></TfiMenu>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] bg-opacity-20 dark:text-white bg-white backdrop-blur-3xl border-none filter drop-shadow-md rounded-2xl p-2 w-64"
            >
              <NavLink to="/">
                <li className="text-xl font-semibold ">
                  <a>Home</a>
                </li>{" "}
              </NavLink>
              <NavLink to="/productAdd">
                <li className="text-xl font-semibold">
                  <a>Add Product</a>
                </li>
              </NavLink>
              <NavLink to="/myCart">
                <li className="text-xl font-semibold">
                  <a>My Cart</a>
                </li>
              </NavLink>
              <NavLink to="/login">
                <li className="text-xl font-semibold">
                  <a>Login</a>
                </li>
              </NavLink>
            </ul>
          </div>
          <h1>
            <Logo />
          </h1>
          {/* large devices */}
        </div>
        <div className="navbar-center hidden xl:flex">
          <ul className="menu dark:text-white menu-horizontal px-1">
            <NavLink to="/">
              <li className="text-xl font-semibold ">
                <a>Home</a>
              </li>{" "}
            </NavLink>
            <NavLink to="/productAdd">
              <li className="text-xl font-semibold">
                <a>Add Product</a>
              </li>
            </NavLink>
            <NavLink to="/myCart">
              <li className="text-xl font-semibold">
                <a>My Cart</a>
              </li>
            </NavLink>
            <NavLink to="/login">
              <li className="text-xl font-semibold">
                <a>Login</a>
              </li>
            </NavLink>
          </ul>
        </div>
        <div className="navbar-end">
          <div className="dropdown dropdown-end md:mr-10 xl:mr-0 lg:mr-0 mr-5  ">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              {user ? (
                <div className="w-10 rounded-full ">
                  <img src={user.photoURL} alt="" />
                </div>
              ) : (
                <div className="w-10 rounded-full border-none">
                  <img src="https://i.ibb.co/HDJMNSK/user.png" alt="" />
                </div>
              )}
            </label>
            <ul
              tabIndex={0}
              className="menu  menu-sm dropdown-content mt-3 z-[1]"
            >
              <div className="absolute right-0 z-20 w-56 py-2 mt-2 overflow-hidden origin-top-right bg-opacity-20 bg-white backdrop-blur-3xl border-none filter drop-shadow-md rounded-2xl p-2">
                <a href="#" className="flex items-center p-3 -mt-2">
                  {user ? (
                    <div className="mx-1">
                      <h1 className="text-sm font-semibold text-black">
                        {user.displayName}
                      </h1>
                      <p className="text-sm text-black/70">{user.email}</p>
                    </div>
                  ) : (
                    ""
                  )}
                </a>

                <hr className="border-gray-200 " />

                <Link to="/register">
                  <button className="block px-4 py-3 text-[15px] text-black  hover:bg-blue-300/70 rounded-xl mt-1">
                    Create Account
                  </button>
                </Link>
                {user ? (
                  <button
                    onClick={handleLogOut}
                    className="block px-4 py-3 text-[15px] text-black  hover:bg-blue-300/70 rounded-xl mt-1"
                  >
                    Sign Out
                  </button>
                ) : (
                  ""
                )}
              </div>
            </ul>
          </div>
          <div className="lg:ml-2">
            <label className="swap swap-rotate">
              {/* this hidden checkbox controls the state */}
              <input onClick={handleThemeSwitch} type="checkbox" />

              {/* sun icon */}
              <svg
                className="swap-on fill-current w-10 h-10  text-white "
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
              </svg>

              {/* moon icon */}
              <svg
                className="swap-off fill-current w-10 h-10 text-black "
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
              </svg>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
