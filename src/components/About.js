import React from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import { AiOutlineGithub } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import { ImTwitter } from "react-icons/im";
import Me from "./../images/Me.jpg";

const About = () => {
  return (
    <div>
      <Header />
      <section className="border-b-1">
        <img
          src={Me}
          alt="myself"
          className="rounded-full w-40 h-40 object-cover ml-24 "
        />
      </section>
      <p className="text-center text-2xl font-semibold mt-2 pb-2">Folasayo</p>
      <hr className=" border-b-2 w-32 ml-32" />
      <section className="flex justify-around mt-6">
        <a href="https://github.com/folarmi" target="_blank" rel="noreferrer">
          <AiOutlineGithub className="nav-icon" />
        </a>
        <a
          href="https://twitter.com/folacodes"
          target="_blank"
          rel="noreferrer"
        >
          <ImTwitter className="nav-icon" />
        </a>
        <a
          href="https://www.linkedin.com/in/folasayo-akinyosoye"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin className="nav-icon" />
        </a>
      </section>

      <button className="h-12 px-6 m-2 text-sm text-indigo-100 transition-colors ml-28 mt-6 duration-150 bg-black rounded-lg focus:shadow-outline hover:bg-indigo-800">
        <Link to="/projects">See My Projects</Link>
      </button>

      <article className="m-8">
        <h2 mt-4>A little bit about me</h2>
        <p className="">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
          laboriosam quis corrupti doloremque soluta illo id, dolor quisquam
          beatae quidem, quaerat minima iusto officia quas maiores praesentium
          facere dolorem voluptatibus!
        </p>
      </article>
      <Footer />
    </div>
  );
};

export default About;
