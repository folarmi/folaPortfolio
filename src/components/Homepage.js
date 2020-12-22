import React from "react";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import Header from "./Header";
import Me from "./../images/Me.jpg";

const Homepage = () => {
  return (
    <div>
      <div className="lg:flex">
        <section className="bg-purple">
          <Header color={"yellow"} />
          <div className="ml-12 lg:ml-32 mt-2 max-w-xs">
            <p className="text-6xl color-green">Frontend</p>
            <p className="text-6xl color-green">Developer.</p>
            <p className="text-white leading-8 mt-4">
              I love to build user friendly frontend products,using best
              practices.
            </p>
          </div>

          <section className="flex ml-12 lg:ml-32 color-green text-xs mt-16 justify-between leading-4 pb-16">
            <article className="lg:mr-4">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam,
              nobis?
            </article>
            <article>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatum, exercitationem?
            </article>
          </section>
        </section>

        <section className="bg-green p-16 relative lg:pt-24 lg:-pl-32">
          <div className="w-40 h-40 lg:w-80 lg:h-80 ml-8 border-2 border-white z-9"></div>
          <div className="absolute top-12 left-12 lg:top-16 lg:-left-32">
            <img
              src={Me}
              alt="myself"
              className="p-2 w-40 h-40 lg:w-80 lg:h-80 object-cover ml-8"
            />
          </div>
        </section>
      </div>

      <div className="bg-white ">
        <article className="m-12 lg:ml-32">
          <h2 className="mt-4 color-blue text-3xl font-bold">
            I build &#38; <br /> design stuff
          </h2>
          <p className="lg:max-w-xs">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
            laboriosam quis corrupti
          </p>
        </article>
      </div>

      <button className="h-12 px-6 mb-2 text-sm text-indigo-100 transition-colors ml-12 lg:ml-32 outline-none duration-150 bg-black rounded-lg focus:shadow-outline hover:bg-indigo-800">
        <Link to="/projects">See My Work</Link>
      </button>

      <Footer />
    </div>
  );
};

export default Homepage;
