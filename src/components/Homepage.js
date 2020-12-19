import React from "react";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import Header from "./Header";

const Homepage = () => {
  return (
    <div>
      <Header />
      <div className="text-center mt-12">
        <p className="text-6xl">Hi, I am</p>
        <p className="text-6xl">Folasayo</p>
        {/* <p className="text-6xl">Akinyosoye</p> */}
        <p className="text-3xl mt-8"> A Frontend Developer</p>
        <button className="h-12 px-6 m-2 text-sm text-indigo-100 transition-colors ml-4 mt-6 duration-150 bg-black rounded-lg focus:shadow-outline hover:bg-indigo-800">
          <Link to="/about">About Me</Link>
        </button>
      </div>
      <Footer />
    </div>
  );
};

export default Homepage;
