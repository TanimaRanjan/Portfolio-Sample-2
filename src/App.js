import React from "react";

import "./App.scss";

import Header from "./components/header";
import Reel from "./components/reel";
import Portfolio from "./components/portfolio";
import Contact from "./components/contact";
//import Footer from './components/footer'
import ProjectPage from "./components/project-page";

import portfolioData from "../src/portfolio.json";

class App extends React.Component {
  constructor() {
    super();

    // let id=1;
    this.state = {
      items: portfolioData.items,
      // [
      //   {   "id":0,
      //       "title": "Young Audiences Arts for Learning",
      //       "subtitle":"Young Audiences 2019 Promo",
      //       "client":"Rubin Museum of Art",
      //       "skills":"Creative/Editing/Motion Graphics",
      //       "desc":"Young Audiences Arts for Learning is a national organization with thirty affiliate organizations around the country. I created a 30 second promotional video to help further increase brand awareness on their social channels. I developed the creative, edited, and animated the promo.",
      //       "src":"//player.vimeo.com/video/368086700?title=0&amp;byline=0&amp;portrait=0&amp;autoplay=1&autopause=0",
      //       "image":"./images/YoungAudiences.jpg",
      //       "caption":"Young Audiences"

      //     },
      //   {
      //     "id":1,
      //     "title": "Block Party 2019 Promo",
      //       "client":"Rubin Museum of Art",
      //       "skills":"Producer/Editor/Motion Graphics",
      //       "desc":"One of the biggest events for the Rubin Museum, the annual Block Party is attended by thousands of New Yorkers of all ages. To promote it, I worked with the design team and I produced, edited, and animated two videos for this event.",
      //       "src":"//player.vimeo.com/video/367476457?title=0&amp;byline=0&amp;portrait=0&amp;autoplay=1&autopause=0",
      //       "image":"./images/BlockParty2019Portfolio.jpg",
      //       "caption":"Block Party 2019"
      //     },
      //    {
      //       "id":2,
      //       "title": "Clapping with Stones Exhibition Promo Video",
      //       "client":"Rubin Museum of Art",
      //       "skills":"Producer/Editor/Motion Graphics",
      //       "desc":"<i>Clapping with Stones: Art and Acts of Resistance</i> is an immersive site-specific exhibition that examines social, cultural, and political events through a local and global lens, offering unique perspectives from 10 contemporary artists. Working with the Museum’s Creative Head, I produced, edited and animated a promo video for this exhibition.",
      //       "src":"//player.vimeo.com/video/367466552?title=0&amp;byline=0&amp;portrait=0;autoplay=1&autopause=0",
      //       "image":"./images/ClappingWithStones.jpg",
      //       "caption":"Clapping Stone Exhibition"
      //     },
      //   {
      //       "id":3,
      //       "title": "Brainwave Series Promo",
      //       "client":"Rubin Museum of Art",
      //       "skills":"Editor/Motion Graphics",
      //       "desc":"Brainwave, the Rubin Museum’s longest-running program series, investigates how our minds shape our everyday experiences, incorporating Eastern and Western philosophy, science, art, and other disciplines. I worked with a videographer and the Museum’s Creative Head to edit and produce several videos for the 2018 Brainwave program series.",
      //       "src":"//player.vimeo.com/video/367472214?title=0&byline=0&portrait=0;autoplay=1&autopause=0",
      //       "image":"./images/Brainwave-video-portfolio-image.jpg",
      //       "caption":"Brainwave Promo"
      //     },
      //   {
      //      "id":4,
      //       "title": "Compassionate Action Series Promo",
      //       "client":"Rubin Museum of Art",
      //       "skills":"Creative/Producer/Videographer/Editor/Motion Graphics",
      //       "desc":"For this program series, I created a series of promo videos where I developed the creative, shot the interviews with several well known Meditation Leaders, and I edited the footage and animated any graphical elements.",
      //       "src":"//player.vimeo.com/video/367464438?title=0&byline=0&portrait=0;autoplay=1&autopause=1",
      //       "image":"./images/Compassionate-Action-Portfolio-Image.jpg",
      //       "caption":"Compassionate Action Promo"
      //     },
      //   {
      //       "id":5,
      //       "title": "Power Trip Promo Video",
      //       "client":"Rubin Museum of Art",
      //       "skills":"Editing/Motion Graphics",
      //       "desc":"Using an After Effects template, I reworked the template to create a short promo video for a major fundraising event for the Rubin Museum of Art. ",
      //       "src":"//player.vimeo.com/video/370945063?title=0&byline=0&portrait=0;autoplay=1&autopause=1",
      //       "image":"./images/PowerTripFeature.jpg",
      //       "caption":"Power Trip"
      //     }
      // ]
      contactPage: false,
      contactClass: "contact",
      fullProject: false,
      // videoclass:'portfolio__video--over zoomIn',
      projectclass: "project",
      selectedProject: 0
    };
  }

  viewFullProject = id => {
    //console.log('View full project  -', id)

    this.setState({
      projectclass: "project moveIn",
      fullProject: !this.state.fullProject,
      selectedProject: id
    });
  };

  //   handleFullProject = () => {
  //     // console.log('open full Project')
  //     this.setState({
  //         projectclass:'project moveIn',
  //         fullProject:!this.state.fullProject
  //     })
  // }
  // selectContact = () => {
  //   this.setState({
  //     contactPage:!this.state.contactPage
  //   })
  // }
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
    //let openContact = this.state.contactPage;
    //console.log(openContact)

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
        <Portfolio
          items={this.state.items}
          viewFullProject={this.viewFullProject}
        />
        {/*<Contact /> */}
        {/*<Footer />*/}

        {this.state.fullProject && (
          <ProjectPage
            projectclass={this.state.projectclass}
            toggleProject={this.toggleProject}
            //  title={this.this.state.items[this.state.selectedProject].title}
            //  client={this.this.state.items[this.state.selectedProject].client}
            //  skills={this.this.state.items[this.state.selectedProject].skills}
            //  desc={this.this.state.items[this.state.selectedProject].desc}
            //  title1={this.this.state.items[this.state.selectedProject].title}
            //  src={this.this.state.items[this.state.selectedProject].src}
            {...this.state.items[this.state.selectedProject]}
          />
        )}

        {this.state.contactPage && (
          <div className={this.state.contactClass}>
            <Contact toggleContact={this.handleContact} />
          </div>
        )}
      </div>
    );
  }
}

export default App;

/*
 <div className="App">
    {!this.state.contactPage &&    
    <Header selectContact={this.selectContact}/> }

      {this.state.contactPage && 
      <Contact  
        toggleProject={this.selectContact}
        contactClass={this.state.contactClass}/> }
        {!this.state.contactPage &&   
      <Reel />}
      {!this.state.contactPage &&   
      <Portfolio items={this.state.items}/> }

      <Footer />
    </div>*/
