import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Grids from "../components/Grids";
import NavBar from "../components/Nav";

const Home = () => {
  return (
    <div>
      <header className="navHeader">
        <NavBar />
      </header>
      <main>
        <Grids />
      </main>
    </div>
  );
};

export default Home;
