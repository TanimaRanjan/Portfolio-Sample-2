import React from "react";

import "./project-page.scss";

import Footer from "./footer";
// import PortfolioItem from './portfolio-item'




const ProjectPage = ({
  id,
  projectclass,
  toggleProject,
  title,
  client,
  skills,
  desc,
  title1,
  src
}) => {
  // console.log('project page  ',props)
  // console.log(id)
  // let items = portfolioData.items
  // let displayItem = portfolioData.items[id]
  // console.log(displayItem)

  return (
    <>
      <div className={projectclass}>
        <header className="project--header">
          <nav className="nav" id="navbar">
            <span id="logo" className="nav__logo" onClick={toggleProject}>
              <h1 className='logo'>Marcus Romero</h1>
            </span>
          </nav>
          <span className="cross cross--project" onClick={toggleProject}>
            <span className="cross--icon"></span>
          </span>
        </header>
        {}
        <div className="project--wrapper">
          <div className="project--inner">
            <div className="project--reel">
              <div className="project--reel-1">
                <div className="project--reel-2">
                  <iframe
                    className="project--content__video"
                    title={title1}
                    src={src}
                    frameBorder="0"
                    hspace="0"
                    vspace="0"
                    scrolling="scroll"
                    allowFullScreen=""
                  ></iframe>
                </div>
              </div>
            </div>
            <div className="project--detail">
              <div className="project--title">
                <h1 className='title'>{title}</h1>
              </div>
              {/* <hr className="project--section-break"></hr>*/} 
              <div className="project--content">
                <div className="project--content__heading">
                  <h3 className='client'>Client: </h3><p className='client_p'>{client}</p>
                </div>
                <div className="project--content__sub">
                  <h3 className='client'>Skills: </h3><p className='client_p'>{skills}</p>
                  </div>
                <div className="project--content__rte">
                  <p className="project--content__para content">{desc}</p>
                </div>
                {/*              
                <section className="portfolio">
                {items.filter(item=> item.id!== displayItem.id).map((item) => (
                   
                    <div key={item.id} >

                    <figure className="portfolio__img">
                    <img src={item.image} alt={item.title} />
                        <figcaption><h3>{item.caption}</h3></figcaption>
                        <h4><span 
                            className="portfolio__project"
                            onClick={() => {
                                return id = item.id
                            }
                            }
                        >View Project</span></h4>
                    </figure>
                    </div>

                ))}
                </section>
                */}  
                
              </div>
            </div>
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectPage;
