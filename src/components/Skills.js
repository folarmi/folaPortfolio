import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import css3 from "./../images/css3.png";
import js from "./../images/js.png";
import react from "./../images/react.png";
import redux from "./../images/redux.png";
import npm from "./../images/npm.png";
import webpack from "./../images/webpack.png";
import github from "./../images/github.jpg";
import tailwind from "./../images/tailwind.png";
import git from "./../images/git.png";

const Skills = () => {
  return (
    <div>
      <Header />
      <p className="text-center color-blue text-3xl font-bold mb-4">My Tools</p>
      <div className="tool-box">
        <div className="tools">
          <img
            className="tool-img"
            src="data:image/png;base64,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"
            alt=""
          />
        </div>
        <div className="tools">
          <img src={css3} alt="" className="tool-img" />
        </div>
        <div className="tools">
          <img src={js} alt="" className="tool-img" />
        </div>
        <div className="tools">
          <img src={react} alt="" className="tool-img" />
        </div>
        <div className="tools">
          <img src={redux} alt="" className="tool-img" />
        </div>
      </div>
      <div className="tool-box">
        <div className="tools">
          <img src={npm} alt="" className="tool-img" />
        </div>
        <div className="tools">
          <img src={webpack} alt="" className="tool-img" />
        </div>
        <div className="tools">
          <img src={github} alt="" className="tool-img" />
        </div>
        <div className="tools">
          <img src={tailwind} alt="" className="tool-img" />
        </div>
        <div className="tools">
          <img src={git} alt="" className="tool-img" />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Skills;
