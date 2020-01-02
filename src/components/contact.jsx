import React from "react";

import ClientItem from "./client-item";
import Footer from "./footer";

import "./contact.scss";

import portfolioData from "../../src/portfolio.json";

const Contact = ({ toggleContact }) => {
  let clients = portfolioData.clients;

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

        <div className="info__wrapper">
          <div className="info__inner">
            <div className="info__portrait">
              <img
                src="../../images/06_Young-Audiences_2019-Promo.jpg"
                alt="Marcus Romero"
              ></img>
            </div>
            <div className="info__detail space-m">
              <div className="info__title">
                <h1 className="title">ABOUT</h1>
              </div>
              <div className="info__content">
                <div className="info__content__rte">
                  <p className="info__content__para content">
                    I am an experienced Motion Graphics Artist and Video Editor.
                    I specialize in working with arts and educational
                    organizations and I have a passion for crafting impactful
                    videos and animations that share inspiring stories and
                    important missions.
                  </p>
                </div>
              </div>
            </div>

            <div className="info__detail space-m">
              <div className="info__title">
                <h1 className="title">CLIENT EXPERIENCE</h1>
              </div>
              <div className="client__exp--content">
                {clients.map(client => (
                  <ClientItem key={client.id} {...client} />
                ))}
              </div>
            </div>

            <div className="info__detail space-l ">
              <div className="info__title">
                <h1 className="title">CONTACT</h1>
              </div>
              <div className="info__content">
                <div className="info__content__rte">
                  <p className="info__content__para content">
                    For all inquiries, please send me an email:
                    marcusromeroproductions [at] gmail.com or call me at: (410)
                    967-8133
                  </p>
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

// <div className="info__main">
// <div className='info__portrait'>
//     <figure className="client__img" >
//       <img src='../../images/06_Young-Audiences_2019-Promo.jpg' alt='Marcus Romero' />
//     </figure>
// </div>
// <div className='info__detail'>
// <div className='info__about'>
//   <div className='info__about-title'>
//     <h1 className='title'>about</h1></div>
//   <div className='info__about-content'>
//     <p className="content">
//       I am an experienced Motion Graphics Artist and Video Editor. I specialize in working with arts and educational organizations
//       and I have a passion for crafting impactful videos and animations that share inspiring stories and important missions.
//     </p>
//   </div>
// </div>
// <div className='info__client'>
//   <div className='info__client-title'>
//     <h1 className='title'>client experience</h1></div>
//   <div className='info__client-content portfolio'>
//     {clients.map((client) => (
//         <ClientItem  key={client.id}  {...client}/>
//     ))}
//   </div>
// </div>
// <div className='info__contact'>
//   <div className='info__contact-title'>
//     <h1 className='title'>contact</h1></div>
//   <div className='info__contact-content'>
//   <p className="content">
//     For all inquiries, please send me an email: marcusromeroproductions [at] gmail.com or call me at: (410) 967-8133
//   </p>
//   </div>
// </div>

// {/*
//   * potrait
//   * about
//   * client experience
//   * contact
//   *
// */}
// </div>
// </div>
// <Footer></Footer>
