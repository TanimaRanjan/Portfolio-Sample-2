import React from "react";

import "./info-page.scss";

import Footer from "./footer";

const InfoContact = ({
  projectclass,
  toggleProject,
}) => {
  return (
    <>
      <div className={projectclass}>
        <header className="project--header">
          <nav className="nav" id="navbar">
            <span id="logo" className="nav__logo" onClick={toggleProject}>
              <h1 className="logo">Marcus Romero productions</h1>
            </span>
          </nav>
          <span className="cross cross--project" onClick={toggleProject}>
            <span className="cross--icon"></span>
          </span>
        </header>
        <div className="project--wrapper">
          <div className="project--inner">
            <div className="project--reel">
              <div className="project--reel-1">
                <div className="project--reel-2">
                <img
                src="../../images/06_Young-Audiences_2019-Promo.jpg"
                alt="Marcus Romero"
                    ></img>
                </div>
              </div>
            </div>
            <div className="project--detail">
              <div className="project--title">
                <h1 className="title">About</h1>
              </div>
              <div className="project--content">
                <div className="project--content__rte">
                  <p className="project--content__para content">
                  I am an experienced Motion Graphics Artist and Video Editor. I specialize in working with arts and educational organizations and I have a passion for crafting impactful videos and animations that share inspiring stories and important missions.</p>
                </div>
              </div>
            </div>
            <Footer />
          </div>
        </div> 
      </div>
    </>
  );
};

export default InfoContact;
