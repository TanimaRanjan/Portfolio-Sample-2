import React from "react";

import ClientItem from './client-item'

import "./contact.scss";

import portfolioData from '../../src/portfolio.json';
import Footer from "./footer";

const Contact = ({ toggleContact }) => {

  let clients = portfolioData.clients

  return (
    <>
      <div id="contact" className="contact">
        <header>
          <nav className="nav" id="navbar">
            <span id="logo" className="nav__logo" onClick={toggleContact}>
              <h1>Marcus Romero</h1>
            </span>
          </nav>
          <span className="cross cross--project " onClick={toggleContact}>
          <span className="cross--icon"></span>
        </span>
        </header>


        <div className="info--main">
            <div className='info--portrait'>
              <div className='info--porttait-image'></div>
            </div>
            <div className='info--about'>
              <div className='info--about-title'>
                <h1 className='title'>about</h1></div>
              <div className='info--about-content'>
                <p className="content">
                  I am an experienced Motion Graphics Artist and Video Editor. I specialize in working with arts and educational organizations
                  and I have a passion for crafting impactful videos and animations that share inspiring stories and important missions.
                </p>
              </div>
            </div>
            <div className='info--client'>
              <div className='info--client-title'>
                <h1 className='title'>client experience</h1></div>
              <div className='info--client-content portfolio'>
                {clients.map((client) => (
                    <ClientItem  key={client.id}  {...client}/>
                ))} 
              </div>
            </div>
            <div className='info--contact'>
              <div className='info--contact-title'>
                <h1 className='title'>contact</h1></div>
              <div className='info--contact-content'>
              <p className="content">
                For all inquiries, please send me an email: marcusromeroproductions [at] gmail.com or call me at: (410) 967-8133
              </p>
              </div>
            </div>

            {/*
              * potrait
              * about
              * client experience
              * contact
              * 
            */}
        </div>
        <Footer></Footer>
      </div>
    </>
  );
};

export default Contact;


//      <div className="contact--left">
// <p>
//   I am an experienced Motion Graphics Artist and Video Editor. I
//   specialize in working with arts and educational organizations and
//   I have a passion for crafting impactful videos  and animations that
//   share inspiring stories and important missions.
// </p>
// </div>
// <div className="contact--right">
// {/* <p className='title'> ABOUT</p> */}
// <p>
//   I am an experienced Motion Graphics Artist and Video Editor. I
//   specialize in working with arts and educational organizations and
//   I have a passion for crafting impactful videos and animations that
//   share inspiring stories and important missions.
// </p>

// {/* <p className='title'>CONTACT</p>*/}
// <p>
//   For all inquiries, please send me an email:
//   marcusromeroproductions [at] gmail.com or call me at: (410)
//   967-8133
// </p>

// </div>* */}