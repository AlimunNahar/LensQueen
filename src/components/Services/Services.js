import React from "react";
import { BsStarFill } from "react-icons/bs";
import { Link, useLoaderData } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import useTitle from "../Hooks/useTitle";

const Services = () => {
  useTitle("Services");
  const services = useLoaderData();
  return (
    <div>
      <Header />
      <div className="grid grid-cols-1 lg:grid-cols-2 justify-between">
        {services.map((service) => (
          <div key={service._id}>
            <div className="p-5 mx-auto sm:p-10 md:p-16 dark:dark:dark:bg-gray-800 dark:dark:dark:text-gray-100">
              <div className="flex flex-col max-w-3xl mx-auto overflow-hidden rounded">
                <img
                  src={service.img}
                  alt=""
                  className="w-full h-60 sm:h-96 dark:dark:dark:bg-gray-500"
                />
                <div className="p-6 pb-12 m-4 mx-auto -mt-16 space-y-6 lg:max-w-2xl sm:px-10 sm:mx-12 lg:rounded-md dark:dark:dark:bg-gray-900">
                  <div className="space-y-2">
                    <h2 className="inline-block text-2xl font-semibold sm:text-3xl">
                      {service.title}
                    </h2>
                  </div>
                  <div className="dark:dark:dark:text-gray-100">
                    <p className="dark:dark:text-gray-100 py-5 ">
                      {service.description.length > 100
                        ? service.description.slice(0, 100) + "... "
                        : service.description}
                    </p>
                    <div className="flex justify-between align-middle text-amber-500">
                      <p>$ {service.est_price}</p>
                      <p className="flex">
                        <BsStarFill className="text-lg pt-1" /> &nbsp;
                        {" " + service.ratings}
                      </p>
                    </div>
                  </div>
                  <Link to={`/services/${service._id}`}>
                    <button className="btn-ghost w-full p-3 font-semibold tracking-wide rounded-md dark:dark:bg-violet-400 dark:dark:text-gray-900 mt-8">
                      View Details
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <hr className="px-5" />
      <section className="py-6 dark:dark:bg-gray-800 dark:dark:text-gray-100">
        <div className="container flex flex-col items-center justify-center p-4 mx-auto space-y-8 sm:p-10">
          <h1 className="text-4xl font-bold leading-none text-center sm:text-5xl">
            Meet My Team
          </h1>
          <p className="max-w-2xl text-center dark:dark:text-gray-400">
            Memorable events don’t just happen. They happen to be our business.
          </p>
          <div className="flex flex-row flex-wrap-reverse justify-center">
            <div className="flex flex-col justify-center m-8 text-center">
              <img
                alt=""
                className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full dark:dark:bg-gray-500"
                src="https://source.unsplash.com/100x100/?portrait?0"
              />
              <p className="text-xl font-semibold leading-tight">
                Leroy Jenkins
              </p>
              <p className="dark:dark:text-gray-400">Visual Designer</p>
            </div>
            <div className="flex flex-col justify-center m-8 text-center">
              <img
                alt=""
                className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full dark:dark:bg-gray-500"
                src="https://source.unsplash.com/100x100/?portrait?1"
              />
              <p className="text-xl font-semibold leading-tight">
                Leroy Jenkins
              </p>
              <p className="dark:dark:text-gray-400">GFX Designer</p>
            </div>
            <div className="flex flex-col justify-center m-8 text-center">
              <img
                alt=""
                className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full dark:dark:bg-gray-500"
                src="https://source.unsplash.com/100x100/?portrait?2"
              />
              <p className="text-xl font-semibold leading-tight">
                Leroy Jenkins
              </p>
              <p className="dark:dark:text-gray-400">Second Photographer</p>
            </div>
            <div className="flex flex-col justify-center m-8 text-center">
              <img
                alt=""
                className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full dark:dark:bg-gray-500"
                src="https://source.unsplash.com/100x100/?portrait?3"
              />
              <p className="text-xl font-semibold leading-tight">
                Leroy Jenkins
              </p>
              <p className="dark:dark:text-gray-400">Lead Photographer</p>
            </div>
            <div className="flex flex-col justify-center m-8 text-center">
              <img
                alt=""
                className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full dark:dark:bg-gray-500"
                src="https://source.unsplash.com/100x100/?portrait?4"
              />
              <p className="text-xl font-semibold leading-tight">
                Leroy Jenkins
              </p>
              <p className="dark:dark:text-gray-400">Associate Shooter</p>
            </div>
            <div className="flex flex-col justify-center m-8 text-center">
              <img
                alt=""
                className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full dark:dark:bg-gray-500"
                src="https://source.unsplash.com/100x100/?portrait?5"
              />
              <p className="text-xl font-semibold leading-tight">
                Leroy Jenkins
              </p>
              <p className="dark:dark:text-gray-400">Visual Designer</p>
            </div>
          </div>
        </div>
      </section>
      <hr className="px-5" />
      <Footer />
    </div>
  );
};

export default Services;
