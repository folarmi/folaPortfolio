import React from "react";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import Header from "./Header";
import Me from "./../images/Me.jpg";

const Homepage = () => {
  return (
    <div>
      <section className="bg-purple">
        <Header />
        <div className="ml-12 mt-2 max-w-xs">
          <p className="text-6xl color-green">Frontend</p>
          <p className="text-6xl color-green">Developer.</p>
          <p className="text-white leading-8 mt-4">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Consequatur commodi quibusdam voluptate eveniet obcaecati illum!
          </p>
        </div>

        <sectin className="flex ml-12 color-green text-xs mt-16 justify-between leading-4 pb-16">
          <article>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam,
            nobis?
          </article>
          <article>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum,
            exercitationem?
          </article>
        </sectin>
      </section>

      <section className="bg-green p-16 relative">
        <div className="w-40 h-40 ml-8 border-2 border-white z-9"></div>
        <div className="absolute top-12 left-12">
          <img
            src={Me}
            alt="myself"
            className="p-2 w-40 h-40 object-cover ml-8"
          />
        </div>
      </section>
      <div className="bg-white ">
        <article className="m-12">
          <h2 className="mt-4 color-blue text-3xl font-bold">
            I build &#38; <br /> design stuff
          </h2>
          <p className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
            laboriosam quis corrupti
          </p>
        </article>

        <button className="h-12 px-6 mb-2 text-sm text-indigo-100 transition-colors ml-12 duration-150 bg-black rounded-lg focus:shadow-outline hover:bg-indigo-800">
          <Link to="/projects">See My Work</Link>
        </button>
      </div>
      <Footer />
    </div>
  );
};

export default Homepage;
