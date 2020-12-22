import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineGithub } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import { ImTwitter } from "react-icons/im";

const Footer = () => {
  return (
    <div className="bg-dark-purple mt-16">
      <footer className="ml-12 lg:ml-48">
        <p className="text-white text-base uppercase pt-24">say hello</p>

        <section className="color-green mt-4 leading-8 lg:flex">
          <div className="lg:mr-72">
            <p>
              <a href="mailto:fola4@gmail.com?">fola4ril@gmail.com</a>
            </p>
            <p>
              <a href="https://t.me/FolasayoAkinyosoye">
                t.me/FolasayoAkinyosoye
              </a>
            </p>
          </div>

          <div className="mt-8 lg:mt-0">
            <p>
              <Link to="/">Home</Link>
            </p>
            <p>
              <Link to="/skills">Skills</Link>
            </p>
            <p>
              <Link to="/projects">Projects</Link>
            </p>
          </div>
        </section>
        <hr className="mt-16 w-64 bg-green lg:w-4/5" />

        <section className="color-green lg:flex">
          <div>
            <p className="mt-8 pb-8 lg:mr-96">
              Made with <span bg-red-500> &#x2764;</span> by Folasayo
            </p>
          </div>

          <section className="flex mt-4">
            <a
              href="https://github.com/folarmi"
              target="_blank"
              rel="noreferrer"
              className="mr:8 lg:mr-12"
            >
              <AiOutlineGithub className="nav-icon" />
            </a>
            <a
              href="https://twitter.com/folacodes"
              target="_blank"
              rel="noreferrer"
              className="mr-20 lg:mr-12"
            >
              <ImTwitter className="nav-icon" />
            </a>
            <a
              href="https://www.linkedin.com/in/folasayo-akinyosoye"
              target="_blank"
              rel="noreferrer"
              className="lg:mr-12"
            >
              <FaLinkedin className="nav-icon" />
            </a>
          </section>
        </section>
      </footer>
    </div>
  );
};

export default Footer;
