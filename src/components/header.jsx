import React from "react";

import { Events, animateScroll } from "react-scroll";

class Header extends React.Component {
  componentDidMount() {
    window.addEventListener("scroll", this.listenToScroll);
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.listenToScroll);
    Events.scrollEvent.remove("begin");
    Events.scrollEvent.remove("end");
  }

  listenToScroll = () => {
    let winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    let reelLink = document.querySelector("#reelLink");
    let portfolioLink = document.querySelector("#portfolioLink");
    let aboutLink = document.querySelector("#aboutLink");

    if (winScroll < document.querySelector("#reel").scrollHeight) {
      portfolioLink.classList.remove("active");
      aboutLink.classList.remove("active");
      reelLink.classList.add("active");
    }
    if (
      winScroll >= document.querySelector("#reel").scrollHeight &&
      winScroll < document.querySelector("#portfolio").scrollHeight
    ) {
      reelLink.classList.remove("active");
      aboutLink.classList.add("active");
      portfolioLink.classList.remove("active");
    }

    if (
      winScroll >=
      document.querySelector("#about").scrollHeight +
        document.querySelector("#reel").scrollHeight
    ) {
      portfolioLink.classList.add("active");
      reelLink.classList.remove("active");
      aboutLink.classList.remove("active");
    }
  };

  scrollToTop = () => {
    animateScroll.scrollToTop({
      duration: 200,
      delay: 0,
      smooth: "linear"
    });
  };

  scrollTo(offset) {
    animateScroll.scrollTo(offset, {
      duration: 200,
      delay: 0,
      smooth: "linear"
    });
  }

  scrollToEle() {
    animateScroll.scrollTo('myScrollToElement', {
      duration: 200,
      delay: 0,
      containerId:"ContainerElementID",
      smooth: "linear"
    });
  }

  viewReel = () => {
    this.scrollToTop();
  };

  viewPortfolio = () => {
    this.scrollTo(document.querySelector("#reel").scrollHeight);
  };

  viewInfo = () => {
    this.scrollTo(
      document.querySelector("#about").scrollHeight  + document.querySelector("#reel").scrollHeight )
      // + document.querySelector("#header").scrollHeight  -  document.querySelector("#footer").scrollHeight );
      // this.scrollToEle()

  };

  render() {
    return (
      <>
        <header id='header'>
          <nav className="nav" id="navbar">
            <span id="logo" className="nav__logo" onClick={this.scrollToTop}>
              <h1 className="logo">Marcus Romero productions</h1>
            </span>

            <ul className="nav__items">
              <li className="nav__item">
                <h2 className="menu">
                  <a
                    id="reelLink"
                    onClick={this.viewReel}
                    className="dark__link active"
                  >
                    REEL
                  </a>
                </h2>
              </li>
              <li className="nav__item">
                <h2 className="menu">
                  <a
                    id="aboutLink"
                    className="dark__link"
                    onClick={this.viewPortfolio}
                  >
                    about
                  </a>
                </h2>
              </li>
              <li className="nav__item">
                <h2 className="menu">
                  <a
                    id="portfolioLink"
                    className="dark__link"
                    onClick={this.viewInfo}>
                  PORTFOLIO
                  </a>
                </h2>
              </li>
            </ul>
          </nav>
        </header>
      </>
    );
  }
}

export default Header;
