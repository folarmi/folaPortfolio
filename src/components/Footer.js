import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineGithub } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import { ImTwitter } from "react-icons/im";

const Footer = () => {
  return (
    <div className="bg-dark-purple mt-16">
      <footer className="ml-12">
        <p className="text-white text-base uppercase pt-24">say hello</p>

        <section className="color-green mt-4 leading-8">
          <p>
            <a href="mailto:fola4@gmail.com?">fola4ril@gmail.com</a>
          </p>
          <p>
            <a href="https://t.me/FolasayoAkinyosoye">
              t.me/FolasayoAkinyosoye
            </a>
          </p>

          <section className="flex justify-around mt-6">
            <a
              href="https://github.com/folarmi"
              target="_blank"
              rel="noreferrer"
            >
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

          <div className="mt-8">
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
          <hr className="mt-16 w-64 bg-green" />
        </section>
        <p className="color-green mt-8 pb-8">
          Made with <span bg-red-500> &#x2764;</span> by Folasayo
        </p>
      </footer>
    </div>
  );
};

export default Footer;
