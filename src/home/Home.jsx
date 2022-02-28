import React from "react";
import "./Home.scss";
import { Navbar, Featured } from "../components";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <Featured />
    </div>
  );
};

export default Home;
