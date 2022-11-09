<div className="overflow-x-hidden">
  <header className=" dark:dark:bg-gray-800 dark:dark:text-gray-100">
    <div className="lg:px-20 px-4 flex justify-between py-5 mx-auto">
      <div className="flex">
        <Link to="/" className="flex items-center">
          <img
            className="w-6/12 lg:w-52 lg:mr-12 shadow-lg shadow-purple-400/5 rounded-3xl"
            src={Banner}
            alt=""
          />
        </Link>
        <ul className="text-xl hidden space-x-3 lg:flex">
          <li className="flex">
            <Link
              to="/"
              className="flex items-center px-4 -mb-1 border-b-2 dark:dark:border-transparent  hover:dark:text-violet-400 active:dark:border-violet-400 hover:dark:border-violet-400"
            >
              <FaHome className="text-4xl" />
            </Link>
          </li>
          <li className="flex">
            <Link
              to="/services"
              className="flex items-center px-4 -mb-1 border-b-2 dark:dark:border-transparent hover:dark:text-violet-400 active:dark:border-violet-400 hover:dark:border-violet-400"
            >
              Services
            </Link>
          </li>
          <li className="flex">
            <Link
              to="/services"
              className="flex items-center px-4 -mb-1 border-b-2 dark:dark:border-transparent  hover:dark:text-violet-400 active:dark:border-violet-400 hover:dark:border-violet-400"
            >
              Documentary
            </Link>
          </li>
          <li className="flex">
            <Link
              to="/"
              className="flex items-center px-4 -mb-1 border-b-2 dark:dark:border-transparent  hover:dark:text-violet-400 active:dark:border-violet-400 hover:dark:border-violet-400"
            >
              Blogs
            </Link>
          </li>
          <li className="flex">
            <Link
              to="/"
              className="flex items-center px-4 -mb-1 border-b-2 dark:dark:border-transparent  hover:dark:text-violet-400 active:dark:border-violet-400 hover:dark:border-violet-400"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
      <div className="items-center mr-16 lg:mr-0">
        {user?.email ? (
          <div className="flex flex-row pt-3">
            <img
              src={user.photoURL}
              className=" mr-5  lg:w-12 lg:h-12 rounded-full ring-2 ring-offset-4 dark:bg-gray-500 ring-violet-400 ring-offset-gray-800"
              alt=""
            />
            <button
              onClick={handleLogOut}
              className="hover:bg-slate-600 px-8 mr-10 font-semibold rounded dark:dark:bg-violet-400 dark:dark:text-gray-900"
            >
              Sign Out
            </button>
          </div>
        ) : (
          <Link to="/login">
            <button className="hover:bg-slate-600 px-8 py-3 mt-3 font-semibold rounded dark:dark:bg-violet-400 dark:dark:text-gray-900">
              Login
            </button>
          </Link>
        )}
      </div>
    </div>
  </header>
  <div className="dark:dark:bg-slate-800 dark:dark:text-gray-100">
    <hr />
    <ul className="text-xl lg:hidden flex flex-wrap justify-between py-5 mx-auto">
      <li className="flex">
        <Link
          to="/"
          className="flex items-center px-4 pb-3 -mb-1 border-b-2 dark:dark:border-transparent  hover:dark:text-violet-400 active:dark:border-violet-400 hover:dark:border-violet-400"
        >
          <FaHome className="text-4xl" />
        </Link>
      </li>
      <li className="flex">
        <Link
          to="/services"
          className="flex items-center px-4 pb-3 -mb-1 border-b-2 dark:dark:border-transparent hover:dark:text-violet-400 active:dark:border-violet-400 hover:dark:border-violet-400"
        >
          Services
        </Link>
      </li>
      <li className="flex">
        <Link
          to="/services"
          className="flex items-center px-4 pb-3 -mb-1 border-b-2 dark:dark:border-transparent  hover:dark:text-violet-400 active:dark:border-violet-400 hover:dark:border-violet-400"
        >
          Documentary
        </Link>
      </li>
      <li className="flex">
        <Link
          to="/"
          className="flex items-center px-4 pb-3 -mb-1 border-b-2 dark:dark:border-transparent  hover:dark:text-violet-400 active:dark:border-violet-400 hover:dark:border-violet-400"
        >
          Blogs
        </Link>
      </li>
      <li className="flex">
        <Link
          to="/"
          className="flex items-center px-4 pb-3 -mb-1 border-b-2 dark:dark:border-transparent  hover:dark:text-violet-400 active:dark:border-violet-400 hover:dark:border-violet-400"
        >
          Contact
        </Link>
      </li>
    </ul>
  </div>
</div>;
