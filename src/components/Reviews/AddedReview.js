import React, { useContext, useEffect, useState } from "react";
import { AiFillEdit } from "react-icons/ai";
import { RiDeleteBin5Line } from "react-icons/ri";
import { AuthContext } from "../Context/AuthProvider";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import useTitle from "../Hooks/useTitle";

const AddedReview = () => {
  const { user } = useContext(AuthContext);
  useTitle("MyReviews");
  const [allReviews, setAllReviews] = useState([]);

  useEffect(() => {
    fetch("https://assignment-11-server-six.vercel.app/reviews")
      .then((res) => res.json())
      .then((data) => {
        setAllReviews(data);
        // console.log(data);
      });
  }, []);

  const userReviews = allReviews.filter((f) => f.email === user.email);
  // console.log(userReviews);
  const handleDelete = (id) => {
    const proceed = window.confirm(
      "Are you sure you want to delete this comment?"
    );
    if (proceed) {
      fetch(`https://assignment-11-server-six.vercel.app/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert("Deleted Successfully!");
            const remaining = allReviews.filter((rev) => rev._id !== id);
            setAllReviews(remaining);
          }
        });
    }
  };

  const handleStatusUpdate = (id) => {
    fetch(`https://assignment-11-server-six.vercel.app/reviews${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ status: "Approved" }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          const remaining = allReviews.filter((rev) => rev._id !== id);
          const approving = allReviews.find((rev) => rev._id === id);

          approving.status = "Approved";

          const NewReviews = [approving, ...remaining];
          setAllReviews(NewReviews);
        }
      });
  };

  return (
    <div>
      <Header />

      <div className="overflow-x-auto w-10/12 mx-auto">
        <table className="table w-full my-6">
          <thead>
            <tr>
              <th>
                <label>
                  <input type="button" className="checkbox" />
                </label>
              </th>
              <th>Name</th>
              <th>Details</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {userReviews.map((review, idx) => (
              <tr key={idx}>
                <th>
                  <button
                    onClick={() => handleStatusUpdate(allReviews._id)}
                    className="btn btn-ghost text-xl"
                  >
                    <AiFillEdit />
                  </button>
                </th>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={review.img}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{review.serviceName}</div>
                    </div>
                  </div>
                </td>
                <td>{review.message}</td>

                <th>
                  <button
                    onClick={() => handleDelete(allReviews._id)}
                    className="btn btn-ghost btn-lg"
                  >
                    <RiDeleteBin5Line />
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <hr className="mx-5" />
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
      <hr className="mx-5" />
      <Footer />
    </div>
  );
};

export default AddedReview;
