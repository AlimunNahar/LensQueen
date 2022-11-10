import React from "react";
import { Link } from "react-router-dom";

const docFooter = () => {
  return (
    <div>
      <div className="dark:dark:bg-gray-800 dark:dark:text-gray-50">
        <div className="flex flex-col justify-center col-span-12 align-middle bg-no-repeat bg-cover dark:dark:bg-gray-700 lg:col-span-6 lg:h-auto bg-[url('https://www.icegif.com/wp-content/uploads/2022/11/icegif-257.gif')]">
          <div className="flex flex-col items-center p-8 py-12 text-center">
            <h1 className="py-4 text-5xl font-bold">
              Make your wedding a wonderful story
            </h1>
            <p className="pb-6">
              Bangladesh is a beautiful country and a professional photographer
              is sure to have ideas about the best wedding photography
              locations. Sundarbans Mangrove Forest and the Somapura Mahavihara
              world heritage site are just two of many examples. Chat with
              wedding professionals and make the right choice for you and your
              wedding.
            </p>
            <Link to="/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-7 h-7"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default docFooter;
