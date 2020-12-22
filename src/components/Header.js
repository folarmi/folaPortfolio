import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BiMenuAltRight } from "react-icons/bi";
// import Night from "./../images/night.svg";
// rgb(72,49,212)
const Header = (props) => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <>
      <nav className="relative m-0 flex flex-wrap items-center justify-between pl-2 py-3 navbar-expand-lg mb-3">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between mt-8 lg:ml-16">
          <div className="w-full relative flex justify-between lg:w-auto lg:static  lg:block lg:justify-start">
            <Link
              to="/"
              className="text-sm text-3xl font-bold leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap uppercase color-green"
              href=""
            >
              Fola
            </Link>
            <button
              className="nav-icon cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <BiMenuAltRight className="color-green" />
            </button>
            {/* <img src={Night} alt="night" className="nav-icon-night" /> */}
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            bg-white
            id="example-navbar-danger"
          >
            <ul className="flex flex-col align-center lg:flex-row list-none lg:ml-auto">
              <li className="nav-item">
                <Link
                  className="px-3 py-2 flex items-center text-lg capitalize color-blue"
                  to="/skills"
                >
                  Skills
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="px-3 py-2 flex items-center text-lg capitalize color-blue"
                  to="/projects"
                >
                  Projects
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="px-3 py-2 flex items-center text-lg capitalize color-blue"
                  to="/contact"
                >
                  Contact Me
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
