import React from "react";
import Footer from "./Footer";
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
      </div>
      <Footer />
    </div>
  );
};

export default Homepage;

// flex: 0 0 100px;
//     -webkit-box-flex: 0;
//     height: 100px;
//     margin: 0.5rem;
//     border-radius: 50%;
//     box-shadow: rgba(0, 0, 0, 0.1) 0px 2px 5px 0px, rgba(0, 0, 0, 0.1) 0px 2px 10px 0px;
//     background: rgb(255, 255, 255);
//     display: flex;
//     -webkit-box-pack: center;
//     justify-content: center;
//     align-items: center;
