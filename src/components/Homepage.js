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
              Building top-notch web applications with modern technologies.
            </article>
            <article>
              When i am not coding, i love to read, play word games and watch
              movies.
            </article>
          </section>
        </section>

        <section className="bg-green p-16 relative lg:pt-24 lg:-pl-32">
          <div className="w-40 h-40 lg:w-80 lg:h-80 ml-8 border-2 border-white z-9"></div>
          <div className="absolute top-12 left-12 lg:top-16 lg:-left-12">
            <img
              src={Me}
              alt="myself"
              className="p-2 w-40 h-40 lg:w-80 lg:h-80 object-cover ml-8"
            />
          </div>
        </section>
      </div>

      <section className="lg:flex ">
        <div className="bg-white ">
          <article className="m-12 lg:ml-32">
            <h2 className="mt-4 color-blue text-3xl font-bold">
              I build &#38; <br /> design stuff
            </h2>
            <p className="lg:max-w-xs leading-8">
              Some of the projects i have worked on can be seen here.
            </p>
          </article>
          <button
            name="work"
            className="h-12 px-6 mb-2 text-sm text-indigo-100 transition-colors ml-12 lg:ml-32 outline-none duration-150 bg-black rounded-lg focus:shadow-outline hover:bg-indigo-800"
          >
            <Link to="/projects">See Projects</Link>
          </button>
        </div>

        <hr className="bg-purple" />

        <div className="bg-white ">
          <article className="m-12 lg:ml-32">
            <h2 className="mt-4 color-blue text-3xl font-bold">
              Looking for a <br /> hire or team-mate?
            </h2>
            <p className="lg:max-w-xs leading-8">
              I am open to Frontend roles, collaboration and gigs.
            </p>
          </article>
          <button
            name="work"
            className="h-12 px-6 mb-2 text-sm text-indigo-100 transition-colors ml-12 lg:ml-32 outline-none duration-150 bg-black rounded-lg focus:shadow-outline hover:bg-indigo-800"
          >
            <a
              target="_blank"
              rel="noreferrer"
              href="https://drive.google.com/file/d/1FgUTq2DbNwOh4zNs8xqkPqHF5uSKO47J/view?usp=sharing"
            >
              View Resume
            </a>
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Homepage;
