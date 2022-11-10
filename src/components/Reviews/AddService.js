import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import useTitle from "../Hooks/useTitle";

const AddService = () => {
  useTitle("AddService");
  const handleAddService = (event) => {
    event.preventDefault();

    const form = event.target;
    const title = form.title.value;
    const img = form.photoURL.value;
    const description = form.description.value;
    const est_price = form.est_price.value;
    const ratings = form.rating.value;

    const newService = {
      title,
      description,
      img,
      est_price,
      ratings,
    };

    fetch("https://assignment-11-server-six.vercel.app/services", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newService),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          alert("New Service Added Successfully!");
          form.reset();
        }
      })
      .catch((e) => console.error(e));
  };

  return (
    <div>
      <Header />
      <div>
        <section className="p-6 dark:dark:bg-gray-800 dark:dark:text-gray-50">
          <form
            onSubmit={handleAddService}
            className="container flex flex-col mx-auto space-y-12 ng-untouched ng-pristine ng-valid"
          >
            <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:dark:bg-gray-900">
              <div className="space-y-2 col-span-full lg:col-span-1">
                <p className="font-medium">Add a new service!</p>
              </div>
              <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                <div className="col-span-full sm:col-span-3">
                  <label className="text-sm">Title *</label>
                  <input
                    type="text"
                    name="title"
                    placeholder="title"
                    required
                    className="w-full p-3 rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:dark:border-gray-700 text-white"
                  />
                </div>
                <div className="col-span-full sm:col-span-3">
                  <label className="text-sm">PhotoURL *</label>
                  <input
                    type="text"
                    name="photoURL"
                    placeholder="photo url"
                    required
                    className="w-full p-3 rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:dark:border-gray-700 "
                  />
                </div>

                <div className="col-span-full">
                  <label className="text-sm">Description *</label>
                  <input
                    type="text"
                    name="description"
                    placeholder="description"
                    required
                    className="w-full p-3 rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:dark:border-gray-700 "
                  />
                </div>
                <div className="col-span-full sm:col-span-3">
                  <label className="text-sm">Price *</label>
                  <input
                    type="text"
                    name="est_price"
                    placeholder="estimated cost"
                    required
                    className="w-full p-3 rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:dark:border-gray-700 "
                  />
                </div>
                <div className="col-span-full sm:col-span-3">
                  <label className="text-sm">Rating *</label>
                  <input
                    type="text"
                    name="rating"
                    placeholder="rating"
                    required
                    className="w-full p-3 rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:dark:border-gray-700"
                  />
                </div>
              </div>
              <button className=" btn btn-ghost bg-violet-700/50">
                Add Service
              </button>
            </fieldset>
          </form>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default AddService;
