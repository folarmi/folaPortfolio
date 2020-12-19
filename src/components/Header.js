import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import Night from "./../images/night.svg";
const Header = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <>
      <nav className="relative sticky top-0 m-0 flex flex-wrap items-center justify-between pl-2 py-3 navbar-expand-lg bg-white shadow-lg mb-3">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link
              to="/"
              className="text-sm font-bold leading-relaxed inline-block mr-4 text-gray-800 py-2 whitespace-no-wrap uppercase text-white"
              href=""
            >
              Home
            </Link>
            <button
              className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <FiMenu className="text-gray-800" />
            </button>
            {/* <img src={Night} alt="night" className="nav-icon-night" /> */}
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col align-center lg:flex-row list-none lg:ml-auto ml-28">
              <li className="nav-item">
                <Link
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-gray-800"
                  to="/about"
                >
                  About Me
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-gray-800"
                  to="/skills"
                >
                  Skills
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold text-gray-800"
                  to="/projects"
                >
                  Projects
                </Link>
                <li className="nav-item">
                  <Link
                    className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-gray-800"
                    to="/contact"
                  >
                    Contact Me
                  </Link>
                </li>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
