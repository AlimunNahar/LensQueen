import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import useTitle from "../Hooks/useTitle";

const Home = () => {
  useTitle("Home");
  return (
    <div>
      <Header />
      <h2>Home Page</h2>
      <Footer />
    </div>
  );
};

export default Home;
