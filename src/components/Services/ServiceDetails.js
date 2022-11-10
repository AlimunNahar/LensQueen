import React, { useContext, useEffect, useState } from "react";
import { AiOutlineLike } from "react-icons/ai";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../Context/AuthProvider";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import useTitle from "../Hooks/useTitle";
import MyReviews from "../Reviews/MyReviews";
import NewReviews from "../Reviews/NewReviews";

const ServiceDetails = () => {
  useTitle("Details");
  const [myReviews, setMyReviews] = useState([]);
  const { user } = useContext(AuthContext);
  const details = useLoaderData();
  console.log(details);

  useEffect(() => {
    fetch("https://assignment-11-server-six.vercel.app/reviews")
      .then((res) => res.json())
      .then((data) => {
        setMyReviews(data);
        // console.log(data);
      });
  }, []);

  return (
    <div>
      <Header />
      <div className="py-5 bg-black overflow-x-hidden">
        <div
          className="hero"
          style={{
            backgroundImage: `url("https://bestanimations.com/media/fireworks/1541362671ba-colorful-row-of-firework-shells-pretty-animated-gif-pic.gif")`,
          }}
        >
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
              <h1 className="mb-5 text-5xl font-bold">{details.title}</h1>
              <p className="mb-5 text-red-400 font-bold">
                $ {details.est_price} <br />
                Rating: {details.ratings}
              </p>
            </div>
          </div>
        </div>
        <div className="mx-5 lg:mx-20 my-12 text-justify">
          {details.description}
        </div>
      </div>
      <hr className="mx-5" />
      <div className="bg-black pb-8">
        <h2 className="py-8 text-3xl font-bold text-center">All Reviews</h2>
        <div className="bg-violet-500/50 mx-auto">
          {user?.email || details.reviews ? (
            <div className="text-center">
              <NewReviews myReviews={myReviews} />
            </div>
          ) : (
            <div className="text-center">
              <h2 className="pt-5 text-3xl font-bold">Add Your Own Comment!</h2>
              <Link to="/login">
                <button className="btn btn-ghost border-black border-2 p-5 pb-8 my-8">
                  Login Now
                </button>
              </Link>
            </div>
          )}
        </div>
        {details?.reviews?.map((review, idx) => (
          <div key={idx}>
            <div className="container flex flex-col w-10/12 mb-2 p-6 mx-auto divide-y rounded-md divide-gray-700 dark:dark:bg-gray-900 dark:dark:text-gray-100">
              <div className="flex justify-between p-4">
                <div className="flex space-x-4">
                  <div>
                    <img
                      src={review.user_img}
                      alt=""
                      className="object-cover w-12 h-12 rounded-full dark:dark:bg-gray-500"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold">{review.user_name}</h4>
                    <span className="text-xs dark:dark:text-gray-400">{}</span>
                  </div>
                </div>
                <div className="flex items-center space-x-2 dark:dark:text-yellow-500 text-xl">
                  <AiOutlineLike />
                  <span className="text-xl font-bold">{review.likes}</span>
                </div>
              </div>
              <div className="p-4 space-y-2 text-sm dark:dark:text-gray-400">
                <p>{review.comment}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-violet-500/50 mx-auto">
        {user?.email ? (
          <div className="text-center">
            <MyReviews details={details} />
          </div>
        ) : (
          <div className="text-center">
            <h2 className="pt-5 text-3xl font-bold">Add Your Own Comment!</h2>
            <Link to="/login">
              <button className="btn btn-ghost border-black border-2 p-5 pb-8 my-8">
                Login Now
              </button>
            </Link>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default ServiceDetails;
