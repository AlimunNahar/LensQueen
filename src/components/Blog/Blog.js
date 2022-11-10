import React from "react";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import useTitle from "../Hooks/useTitle";

const Blog = () => {
  useTitle("Blogs");
  return (
    <div>
      <div>
        <Header />
      </div>
      <div className="my-10">
        <article className="max-w-4xl px-6 py-24 mx-auto space-y-12 dark:dark:bg-gray-800 dark:dark:text-gray-50">
          <div className="w-full mx-auto space-y-4 text-center">
            <h1 className="text-4xl font-bold leading-tight md:text-5xl">
              Want to capture your wedding moments forever?
            </h1>
            <p className="text-sm dark:dark:text-gray-400">
              by &nbsp;
              <Link
                to="/"
                target="_blank"
                className="underline dark:dark:text-violet-400"
              >
                <span>Leroy Jenkins</span>
              </Link>
              <span> on </span>
              <time datetime="2021-02-12 15:34:18-0200">Nov 10th 2022</time>
            </p>
          </div>
          <div className="dark:dark:text-gray-100 text-center">
            <p>Defining your wedding moments with a fairytale...</p>
          </div>
          <div className="pt-12 border-t dark:dark:border-gray-700">
            <div className="flex flex-col space-y-4 md:space-y-0 md:space-x-6 md:flex-row">
              <img
                src="https://img.freepik.com/premium-vector/cute-orange-robot-cat-avatar_79416-86.jpg?w=2000"
                alt=""
                className="self-center flex-shrink-0 w-24 h-24 border rounded-full md:justify-self-start dark:dark:bg-gray-500 dark:dark:border-gray-700"
              />
              <div className="flex flex-col">
                <h4 className="text-lg font-semibold">Leroy Jenkins</h4>
                <p className="dark:dark:text-gray-400">
                  Sed non nibh iaculis, posuere diam vitae, consectetur neque.
                  Integer velit ligula, semper sed nisl in, cursus commodo elit.
                  Pellentesque sit amet mi luctus ligula euismod lobortis
                  ultricies et nibh.
                </p>
              </div>
            </div>
            <div className="flex justify-center pt-4 space-x-4 align-center">
              <Link
                to="/"
                aria-label="GitHub"
                className="p-2 rounded-md dark:dark:text-gray-100 hover:dark:dark:text-violet-400"
              >
                <svg
                  viewBox="0 0 496 512"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4 fill-current"
                >
                  <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path>
                </svg>
              </Link>
              <Link
                to="/"
                aria-label="Dribble"
                className="p-2 rounded-md dark:dark:text-gray-100 hover:dark:dark:text-violet-400"
              >
                <svg
                  viewBox="0 0 512 512"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4 fill-current"
                >
                  <path d="M256 8C119.252 8 8 119.252 8 256s111.252 248 248 248 248-111.252 248-248S392.748 8 256 8zm163.97 114.366c29.503 36.046 47.369 81.957 47.835 131.955-6.984-1.477-77.018-15.682-147.502-6.818-5.752-14.041-11.181-26.393-18.617-41.614 78.321-31.977 113.818-77.482 118.284-83.523zM396.421 97.87c-3.81 5.427-35.697 48.286-111.021 76.519-34.712-63.776-73.185-116.168-79.04-124.008 67.176-16.193 137.966 1.27 190.061 47.489zm-230.48-33.25c5.585 7.659 43.438 60.116 78.537 122.509-99.087 26.313-186.36 25.934-195.834 25.809C62.38 147.205 106.678 92.573 165.941 64.62zM44.17 256.323c0-2.166.043-4.322.108-6.473 9.268.19 111.92 1.513 217.706-30.146 6.064 11.868 11.857 23.915 17.174 35.949-76.599 21.575-146.194 83.527-180.531 142.306C64.794 360.405 44.17 310.73 44.17 256.323zm81.807 167.113c22.127-45.233 82.178-103.622 167.579-132.756 29.74 77.283 42.039 142.053 45.189 160.638-68.112 29.013-150.015 21.053-212.768-27.882zm248.38 8.489c-2.171-12.886-13.446-74.897-41.152-151.033 66.38-10.626 124.7 6.768 131.947 9.055-9.442 58.941-43.273 109.844-90.795 141.978z"></path>
                </svg>
              </Link>
              <Link
                to="/"
                aria-label="Twitter"
                className="p-2 rounded-md dark:dark:text-gray-100 hover:dark:dark:text-violet-400"
              >
                <svg
                  viewBox="0 0 512 512"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4 fill-current"
                >
                  <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path>
                </svg>
              </Link>
              <Link
                to="/"
                aria-label="Email"
                className="p-2 rounded-md dark:dark:text-gray-100 hover:dark:dark:text-violet-400"
              >
                <svg
                  viewBox="0 0 512 512"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4 fill-current"
                >
                  <path d="M464 64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm0 48v40.805c-22.422 18.259-58.168 46.651-134.587 106.49-16.841 13.247-50.201 45.072-73.413 44.701-23.208.375-56.579-31.459-73.413-44.701C106.18 199.465 70.425 171.067 48 152.805V112h416zM48 400V214.398c22.914 18.251 55.409 43.862 104.938 82.646 21.857 17.205 60.134 55.186 103.062 54.955 42.717.231 80.509-37.199 103.053-54.947 49.528-38.783 82.032-64.401 104.947-82.653V400H48z"></path>
                </svg>
              </Link>
            </div>
          </div>
        </article>
      </div>
      <div className="mb-10 px-6 py-5 mx-auto space-y-12 dark:dark:bg-gray-800 dark:dark:text-gray-50">
        <div
          tabIndex={0}
          className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box mt-10 w-5/6 mx-auto"
        >
          <div className="collapse-title text-3xl font-medium">
            What is the difference between SQL and NoSQL?
          </div>

          <div className="collapse-content">
            <div className="divider"></div>
            <p className="indent-12 px-8 leading-relaxed text-justify py-5">
              When choosing a modern database, one of the biggest decisions is
              picking a relational (SQL) or non-relational (NoSQL) data
              structure. While both are viable options, there are key
              differences between the two that users must keep in mind when
              making a decision.
              <br />
              Here, we break down the most important distinctions and discuss
              the best SQL and NoSQL database systems available.
              <br />
              <br />
              The five critical differences between SQL vs NoSQL are:
              <br />
              1. SQL databases are relational, NoSQL databases are
              non-relational.
              <br />
              2. SQL databases use structured query language and have a
              predefined schema. NoSQL databases have dynamic schemas for
              unstructured data.
              <br />
              3. SQL databases are vertically scalable, while NoSQL databases
              are horizontally scalable.
              <br />
              4. SQL databases are table-based, while NoSQL databases are
              document, key-value, graph, or wide-column stores.
              <br />
              5. SQL databases are better for multi-row transactions, while
              NoSQL is better for unstructured data like documents or JSON.
            </p>
          </div>
        </div>

        <div
          tabIndex={0}
          className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box mt-10 w-5/6 mx-auto"
        >
          <div className="collapse-title text-3xl font-medium">
            What is JWT and How does it work?
          </div>

          <div className="collapse-content">
            <div className="divider"></div>
            <p className="indent-12 px-8 leading-relaxed text-justify py-5">
              JSON Web Token (JWT) is an open standard (RFC 7519) for securely
              transmitting information between parties as JSON object.
              <br />
              It is compact, readable and digitally signed using a private key/
              or a public key pair by the Identity Provider(IdP). So the
              integrity and authenticity of the token can be verified by other
              parties involved.
              <br />
              The purpose of using JWT is not to hide data but to ensure the
              authenticity of the data. JWT is signed and encoded, not
              encrypted.
              <br />
              JWT is a token based stateless authentication mechanism. Since it
              is a client-side based stateless session, server doesn't have to
              completely rely on a datastore(database) to save session
              information.
              <br />
              <br />
              <br />
              How it works?
              <br />
              Basically the identity provider(IdP) generates a JWT certifying
              user identity and Resource server decodes and verifies the
              authenticity of the token using secret salt / public key.
              <img
                src="https://res.cloudinary.com/practicaldev/image/fetch/s--paCGhFRY--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://thepracticaldev.s3.amazonaws.com/i/tppls6i2nbdqevr2nybr.png"
                alt=""
                className="rounded-xl py-5"
              />
            </p>
          </div>
        </div>

        <div
          tabIndex={0}
          className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box mt-10 w-5/6 mx-auto"
        >
          <div className="collapse-title text-3xl font-medium">
            What is the Difference between javaScript and Nodejs?
          </div>

          <div className="collapse-content">
            <div className="divider"></div>
            <p className="indent-12 px-8 leading-relaxed text-justify py-5">
              JavaScript is a client-side scripting language that is
              lightweight, cross-platform, and interpreted. Both Java and HTML
              include it. Node.js, on the other hand, is a V8-based server-side
              programming language.
              <br />
              As a result, it is used to create network-centric applications.
              It's a networked system made for data-intensive real-time
              applications. If we compare node js vs. python, it is clear that
              node js will always be the preferred option.
              <br />
              JavaScript is a simple programming language that can be used with
              any browser that has the JavaScript Engine installed. Node.js, on
              the other hand, is an interpreter or execution environment for the
              JavaScript programming language. It requires libraries that can be
              conveniently accessed from JavaScript programming to be more
              helpful.
              <br />
              Any engine may run JavaScript. As a result, writing JavaScript is
              incredibly easy, and any working environment is similar to a
              complete browser. Node.js, on the other hand, only enables the V8
              engine. Written JavaScript code, on the other hand, can run in any
              context, regardless of whether the V8 engine is supported.
              <br />
              A specific non-blocking operation is required to access any
              operating system. There are a few essential objects in JavaScript,
              but they are entirely OS-specific.
              <br />
              Node.js, on the other hand, can now operate non-blocking software
              tasks out of any JavaScript programming. It contains no
              OS-specific constants. Node.js establishes a strong relationship
              with the system files, allowing companies to read and write to the
              hard drive.
              <br />
              The critical benefits of JavaScript include a wide choice of
              interfaces and interactions and just the proper amount of server
              contact and direct visitor input.
              <br />
              Node.js, on the other hand, offers node package management with
              over 500 modules and the capacity to handle many requests at the
              same time. It also offers the unique ability to enable
              microservice architecture and the Internet of Things. Even when
              comparing node js vs. react js, node js always wins.
            </p>
          </div>
        </div>

        <div
          tabIndex={0}
          className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box mt-10 w-5/6 mx-auto"
        >
          <div className="collapse-title text-3xl font-medium">
            How does NodeJs handle multiple requests at the same time?
          </div>

          <div className="collapse-content">
            <div className="divider"></div>
            <p className="indent-12 px-8 leading-relaxed text-justify py-5">
              We know NodeJS application is single-threaded. Say, if processing
              involves request A that takes 10 seconds, it does not mean that a
              request which comes after this request needs to wait 10 seconds to
              start processing because NodeJS event loops are only
              single-threaded. The entire NodeJS architecture is not
              single-threaded.
              <br />
              NodeJS receives multiple client requests and places them into
              EventQueue. NodeJS is built with the concept of event-driven
              architecture. NodeJS has its own EventLoop which is an infinite
              loop that receives requests and processes them. EventLoop is the
              listener for the EventQueue.
              <br />
              If NodeJS can process the request without I/O blocking then the
              event loop would itself process the request and sends the response
              back to the client by itself. But, it is possible to process
              multiple requests parallelly using the NodeJS cluster module or
              worker_threads module.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Blog;
