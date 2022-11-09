import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Context/AuthProvider";
import Banner from "../assets/banner1.png";
import "./Header.css";
import { FaHome } from "react-icons/fa";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.error(error));
  };

  return (
    <div className="px-2 sm:px-4 py-2.5 lg:px-10 dark:bg-gray-900 bg-gray-800">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <Link to="/" className="flex items-center">
          <img src={Banner} className="mr-3 h-6 sm:h-9" alt="Logo" />
        </Link>
        <div className="flex items-center md:order-2">
          <button
            type="button"
            className="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
            id="user-menu-button"
            aria-expanded="false"
            data-dropdown-toggle="user-dropdown"
            data-dropdown-placement="bottom"
          >
            <span className="sr-only">Open user menu</span>
            <img
              className="w-8 h-8 rounded-full"
              src={user?.photoURL}
              alt="userPhoto"
            />
          </button>

          {/*  Dropdown menu */}
          <div
            className="styleApply hidden z-50 my-4 text-base list-none bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
            id="user-dropdown"
            data-popper-reference-hidden=""
            data-popper-escaped=""
            data-popper-placement="bottom"
          >
            <ul className="py-1" aria-labelledby="user-menu-button">
              <li>
                <Link
                  to="/"
                  className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                >
                  Sign out
                </Link>
              </li>
            </ul>
          </div>
          <button
            data-collapse-toggle="mobile-menu-2"
            type="button"
            className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="mobile-menu-2"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
        <div
          className="hidden justify-between items-center w-full md:flex md:w-auto md:order-1"
          id="mobile-menu-2"
        >
          <ul className="flex flex-col p-4 mt-4 dark:bg-gray-900 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0  md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <Link
                to="/"
                className="block py-2 pr-4 pl-3 text-white md:p-0 dark:text-white dark:bg-gray-900 hover:underline underline-offset-8 hover:text-purple-800 font-3xl"
                aria-current="page"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Pricing
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>

    // <div className="overflow-x-hidden">
    //   <header className=" dark:dark:bg-gray-800 dark:dark:text-gray-100">
    //     <div className="lg:px-20 px-4 flex justify-between py-5 mx-auto">
    //       <div className="flex">
    //         <Link to="/" className="flex items-center">
    //           <img
    //             className="w-10/12 lg:w-52 lg:mr-12 shadow-lg shadow-purple-400/5 rounded-3xl"
    //             src={Banner}
    //             alt=""
    //           />
    //         </Link>
    //         <ul className="text-xl hidden space-x-3 lg:flex">
    //           <li className="flex">
    //             <Link
    //               to="/"
    //               className="flex items-center px-4 -mb-1 border-b-2 dark:dark:border-transparent  hover:dark:text-violet-400 active:dark:border-violet-400 hover:dark:border-violet-400"
    //             >
    //               <FaHome className="text-4xl" />
    //             </Link>
    //           </li>
    //           <li className="flex">
    //             <Link
    //               to="/services"
    //               className="flex items-center px-4 -mb-1 border-b-2 dark:dark:border-transparent hover:dark:text-violet-400 active:dark:border-violet-400 hover:dark:border-violet-400"
    //             >
    //               Services
    //             </Link>
    //           </li>
    //           <li className="flex">
    //             <Link
    //               to="/services"
    //               className="flex items-center px-4 -mb-1 border-b-2 dark:dark:border-transparent  hover:dark:text-violet-400 active:dark:border-violet-400 hover:dark:border-violet-400"
    //             >
    //               Documentary
    //             </Link>
    //           </li>
    //           <li className="flex">
    //             <Link
    //               to="/"
    //               className="flex items-center px-4 -mb-1 border-b-2 dark:dark:border-transparent  hover:dark:text-violet-400 active:dark:border-violet-400 hover:dark:border-violet-400"
    //             >
    //               Blogs
    //             </Link>
    //           </li>
    //           <li className="flex">
    //             <Link
    //               to="/"
    //               className="flex items-center px-4 -mb-1 border-b-2 dark:dark:border-transparent  hover:dark:text-violet-400 active:dark:border-violet-400 hover:dark:border-violet-400"
    //             >
    //               Contact
    //             </Link>
    //           </li>
    //         </ul>
    //       </div>
    //       <div className="items-center ">
    //         {user?.email ? (
    //           <div className="flex flex-row pt-3">
    //             <img
    //               src={user.photoURL}
    //               className="mr-5 w-8 h-8 md:w-8 md:h-8 lg:w-12 lg:h-12 rounded-full ring-2 ring-offset-4 dark:bg-gray-500 ring-violet-400 ring-offset-gray-800"
    //               alt=""
    //             />
    //             <button
    //               onClick={handleLogOut}
    //               className="hover:bg-slate-600 px-8 mr-10 font-semibold rounded dark:dark:bg-violet-400 dark:dark:text-gray-900"
    //             >
    //               Sign Out
    //             </button>
    //           </div>
    //         ) : (
    //           <Link to="/login">
    //             <button className="hover:bg-slate-600 px-8 py-3 font-semibold rounded dark:dark:bg-violet-400 dark:dark:text-gray-900">
    //               Sign In
    //             </button>
    //           </Link>
    //         )}
    //       </div>
    //     </div>
    //   </header>
    //   <div>
    //     <ul className="text-xl lg:hidden flex flex-wrap justify-between py-5 mx-auto">
    //       <li className="flex">
    //         <Link
    //           to="/"
    //           className="flex items-center px-4 -mb-1 border-b-2 dark:dark:border-transparent  hover:dark:text-violet-400 active:dark:border-violet-400 hover:dark:border-violet-400"
    //         >
    //           <FaHome className="text-4xl" />
    //         </Link>
    //       </li>
    //       <li className="flex">
    //         <Link
    //           to="/services"
    //           className="flex items-center px-4 -mb-1 border-b-2 dark:dark:border-transparent hover:dark:text-violet-400 active:dark:border-violet-400 hover:dark:border-violet-400"
    //         >
    //           Services
    //         </Link>
    //       </li>
    //       <li className="flex">
    //         <Link
    //           to="/services"
    //           className="flex items-center px-4 -mb-1 border-b-2 dark:dark:border-transparent  hover:dark:text-violet-400 active:dark:border-violet-400 hover:dark:border-violet-400"
    //         >
    //           Documentary
    //         </Link>
    //       </li>
    //       <li className="flex">
    //         <Link
    //           to="/"
    //           className="flex items-center px-4 -mb-1 border-b-2 dark:dark:border-transparent  hover:dark:text-violet-400 active:dark:border-violet-400 hover:dark:border-violet-400"
    //         >
    //           Blogs
    //         </Link>
    //       </li>
    //       <li className="flex">
    //         <Link
    //           to="/"
    //           className="flex items-center px-4 -mb-1 border-b-2 dark:dark:border-transparent  hover:dark:text-violet-400 active:dark:border-violet-400 hover:dark:border-violet-400"
    //         >
    //           Contact
    //         </Link>
    //       </li>
    //     </ul>
    //   </div>
    // </div>
  );
};

export default Header;
