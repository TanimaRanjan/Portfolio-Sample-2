import React from "react";

import "./App.scss";

import Header from "./components/header";
import Reel from "./components/reel";
import Portfolio from "./components/portfolio";
import Contact from "./components/contact";
import Footer from './components/footer'
import ProjectPage from "./components/project-page";
import About from './components/about';
import portfolioData from "../src/portfolio.json";
// import InfoContact from "./components/info-page";

class App extends React.Component {
  constructor() {
    super();

    // let id=1;
    this.state = {
      items: portfolioData.items,
      contactPage: false,
      contactClass: "contact",
      fullProject: false,
      // videoclass:'portfolio__video--over zoomIn',
      projectclass: "project",
      selectedProject: 0
    };
  }

  viewFullProject = id => {
    // console.log('View full project  -', id)

    this.setState({
      projectclass: "project moveIn",
      fullProject: !this.state.fullProject,
      selectedProject: id
    });
  };

  toggleProject = () => {
    this.setState({
      projectclass: "project moveOut"
    });

    setTimeout(() => {
      this.setState({
        fullProject: !this.state.fullProject
      });
    }, 500);
  };

  handleContact = () => {


    let contactLink = document.querySelector("#contactLink");

    if (!this.state.contactPage) {
      contactLink.classList.add("active");
    } else {
      contactLink.classList.remove("active");
    }

    this.setState({
      contactClass: !this.state.contactPage
        ? "contact zoomIn"
        : "contact zoomOut"
    });
    setTimeout(() => {
      this.setState({
        contactPage: !this.state.contactPage
      });
    }, 500);
  };

  toggleContact = () => {
    //scroll.scrollToTop();
    this.setState({
      contactClass: !this.state.contactPage
        ? "contact moveDown"
        : "contact moveUp"
    });

    setTimeout(() => {
      this.setState({
        contactPage: !this.state.contactPage
      });
    }, 500);
  };

  render() {
    return (
      /*********
       * Header
       * Reel
       * Portfolio
       *
       * Footer
       */
      <div className="App">
        <div className="top"></div>
        <Header handleContact={this.handleContact} />
        <Reel />
        <About ></About>
        <Portfolio name
          items={this.state.items}
          viewFullProject={this.viewFullProject}
        />
        {/*<Contact /> */}
        {/*<Footer />*/}      

        {this.state.fullProject && (
          <ProjectPage
            projectclass={this.state.projectclass}
            toggleProject={this.toggleProject}
            {...this.state.items.filter(item => item.id==this.state.selectedProject)[0]}
          />
        )}

       
        {this.state.contactPage && (
          <div className={this.state.contactClass}>
            <Contact toggleContact={this.handleContact} />
          </div>
        )}
          {/**
        {this.state.contactPage && (
          <div className={this.state.contactClass}>
            <InfoContact toggleContact={this.handleContact} />
          </div>
        )}*/}
        <Footer></Footer>
      
      </div>
    );
  }
}

export default App;
