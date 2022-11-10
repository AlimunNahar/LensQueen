import React from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Context/AuthProvider";
import Banner from "../assets/banner1.png";
import { FaHome } from "react-icons/fa";
import { BsFillPersonFill } from "react-icons/bs";
import toast from "react-hot-toast";

const Header = () => {
  const { user, logOut } = React.useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {
        toast.error("Logged Out!");
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="navbar dark:bg-violet-900/70 px-8">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          {user?.uid ? (
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/services">Services</Link>
              </li>
              <li>
                <Link to="/gallery">Documentary</Link>
              </li>
              <li>
                <a href="/my-reviews">My Reviews</a>
              </li>
              <li>
                <a href="/add-service">Add Service</a>
              </li>
              <li>
                <Link to="/blog">Blog</Link>
              </li>
            </ul>
          ) : (
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/services">Services</Link>
              </li>
              <li>
                <Link to="/gallery">Documentary</Link>
              </li>
              <li>
                <Link to="/blog">Blog</Link>
              </li>
              <li>
                <Link to="/">Contact</Link>
              </li>
            </ul>
          )}
        </div>
        <Link to="/" className="md:w-5/12 lg:w-6/12">
          <img src={Banner} alt="logo" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        {user?.uid ? (
          <ul className="menu menu-horizontal p-0 text-lg ">
            <li className="text-2xl hover:text-black font-semibold">
              <Link to="/">
                <FaHome />
              </Link>
            </li>
            <li className="hover:underline underline-offset-8 hover:text-black font-semibold">
              <Link to="/services">Services</Link>
            </li>
            <li className="hover:underline underline-offset-8 hover:text-black font-semibold">
              <Link to="/gallery">Documentary</Link>
            </li>

            <li className="hover:underline underline-offset-8 hover:text-black font-semibold">
              <a href="/my-reviews">My Reviews</a>
            </li>
            <li className="hover:underline underline-offset-8 hover:text-black font-semibold">
              <a href="/add-service">Add Service</a>
            </li>
            <li className="hover:underline underline-offset-8 hover:text-black font-semibold">
              <Link to="/blog">Blog</Link>
            </li>
          </ul>
        ) : (
          <ul className="menu menu-horizontal p-0 text-lg ">
            <li className="text-2xl hover:text-black font-semibold">
              <Link to="/">
                <FaHome />
              </Link>
            </li>
            <li className="hover:underline underline-offset-8 hover:text-black font-semibold">
              <Link to="/services">Services</Link>
            </li>
            <li className="hover:underline underline-offset-8 hover:text-black font-semibold">
              <Link to="/gallery">Documentary</Link>
            </li>
            <li className="hover:underline underline-offset-8 hover:text-black font-semibold">
              <Link to="/blog">Blog</Link>
            </li>
            <li className="hover:underline underline-offset-8 hover:text-black font-semibold">
              <Link to="/">Contact</Link>
            </li>
          </ul>
        )}
      </div>
      <div className="navbar-end">
        {user?.email ? (
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img
                  src={user?.photoURL ? user?.photoURL : <BsFillPersonFill />}
                  alt="profileImage"
                />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link to="/" className="justify-between">
                  {user.displayName}
                  <span className="badge">New</span>
                </Link>
              </li>
              <li>
                <Link to="/">Settings</Link>
              </li>
              <li>
                <button onClick={handleLogOut}>Logout</button>
              </li>
            </ul>
          </div>
        ) : (
          <Link to="/login" className="btn">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
