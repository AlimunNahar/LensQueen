import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../Home/Home";
import Login from "../Login/Login";
import Registration from "../Registration/Registration";
import Error from "../Error/Error";
import Blog from "../Blog/Blog";
import Services from "../Services/Services";
import Documentary from "../Documentary/Documentary";
import ServiceDetails from "../Services/ServiceDetails";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("https://assignment-11-server-six.vercel.app"),
      },
      {
        path: "/services",
        element: <Services />,
        loader: () =>
          fetch("https://assignment-11-server-six.vercel.app/services"),
      },
      {
        path: "/services/:id",
        element: <ServiceDetails />,
        loader: ({ params }) =>
          fetch(
            `https://assignment-11-server-six.vercel.app/services/${params.id}`
          ),
      },
      {
        path: "/gallery",
        element: <Documentary />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Registration />,
      },
    ],
    errorElement: <Error />,
  },
]);
