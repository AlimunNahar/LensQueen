import React, { useContext, useEffect } from "react";
import { AiOutlineLike } from "react-icons/ai";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../Context/AuthProvider";

const NewReviews = ({ myReviews }) => {
  const { user } = useContext(AuthContext);
  const title = useLoaderData();

  const sortedReviews = myReviews.sort((a, b) => (a.time < b.time ? 1 : -1));

  const { photoURL, displayName } = user;
  const { message } = sortedReviews;
  // console.log(sortedReviews);

  return (
    <div className="bg-black">
      {sortedReviews.map((review, idx) => (
        <div key={idx}>
          <div className="container flex flex-col w-10/12 mb-2 p-6 mx-auto divide-y rounded-md divide-gray-700 dark:dark:bg-gray-900 dark:dark:text-gray-100">
            <div className="flex justify-between p-4">
              <div className="flex space-x-4">
                <div>
                  <img
                    src={photoURL}
                    alt=""
                    className="object-cover w-12 h-12 rounded-full dark:dark:bg-gray-500"
                  />
                </div>
                <div>
                  <h4 className="font-bold">{displayName}</h4>
                  <span className="text-xs dark:dark:text-gray-400">{}</span>
                </div>
              </div>
              <div className="flex items-center space-x-2 dark:dark:text-yellow-500 text-xl">
                <AiOutlineLike />
                <span className="text-xl font-bold">
                  {review?.likes ? review.likes : 0}{" "}
                </span>
              </div>
            </div>
            <div className="p-4 space-y-2 text-sm dark:dark:text-gray-400">
              <p>{review.message}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NewReviews;
