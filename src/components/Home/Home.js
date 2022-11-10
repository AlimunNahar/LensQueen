import React from "react";
import Footer from "../Footer/Footer";
import SecondFooter from "../Footer/SecondFooter";
import Header from "../Header/Header";
import useTitle from "../Hooks/useTitle";
import DocFooter from "../Footer/DocFooter";
import SecondHeader from "../Header/SecondHeader";
import { Link, useLoaderData } from "react-router-dom";
import { BsArrowRightCircleFill, BsStarFill } from "react-icons/bs";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

const Home = () => {
  useTitle("Home");
  const services = useLoaderData();

  return (
    <div>
      <Header />
      <DocFooter />
      <SecondHeader />
      <div className="py-10 dark:dark:bg-gray-800 px-8">
        <div className="block lg:flex justify-between gap-10">
          {services.map((service) => (
            <div key={service.service_id}>
              <div className=" mb-10 rounded-md shadow-md dark:dark:bg-gray-900 dark:dark:text-gray-100 drop-shadow-2xl">
                <PhotoProvider>
                  <PhotoView src={service.img}>
                    <img
                      src={service.img}
                      alt=""
                      className="w-full h-60 sm:h-96 dark:dark:dark:bg-gray-500"
                    />
                  </PhotoView>
                </PhotoProvider>
                <div className="flex flex-col justify-between p-6 space-y-8 ">
                  <div className="space-y-2">
                    <h2 className="text-3xl font-semibold tracking-wide h-20">
                      {service.title}
                    </h2>
                    <p className="dark:dark:text-gray-100 py-5">
                      {service.description.length > 100
                        ? service.description.slice(0, 100) + "... "
                        : service.description}
                    </p>
                    <div className="flex justify-between align-middle text-amber-500">
                      <p>$ {service.est_price}</p>
                      <p className="flex">
                        <BsStarFill className="text-lg pt-1" /> &nbsp;
                        {service?.ratings !== undefined ? service.ratings : "0"}
                      </p>
                    </div>
                  </div>
                  <Link to={`/services/${service._id}`}>
                    <button className="btn-ghost w-full p-3 font-semibold tracking-wide rounded-md dark:dark:bg-violet-400 dark:dark:text-gray-900">
                      View Details
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className=" text-center">
        <Link to="/services">
          <button className="btn btn-ghost pb-8 p-5 my-7 bg-violet-800">
            See All &nbsp;{" "}
            <span className="text-lg">
              <BsArrowRightCircleFill />
            </span>
          </button>
        </Link>
      </div>
      <hr className="mx-5" />
      <SecondFooter />
      <Footer />
    </div>
  );
};

export default Home;
