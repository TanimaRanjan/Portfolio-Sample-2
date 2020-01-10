import React from "react";

const Footer = () => {
  return (
    <footer className="footer" id="footer">
      <p>We should talk</p>
        <ul className="footer__items">
          <li className="footer__item">
            <h2 className="menu">
              <a
                href="mailto:&#109;&#097;&#114;&#099;&#117;&#115;&#114;&#111;&#109;&#101;&#114;&#111;&#112;&#114;&#111;&#100;&#117;&#099;&#116;&#105;&#111;&#110;&#115;&#064;&#103;&#109;&#097;&#105;&#108;&#046;&#099;&#111;&#109;"
                target="_blank"
                rel="noopener noreferrer"
                className="light__link"
              >
                mail
              </a>
            </h2>
          </li>
          <li className="footer__item">
            <h2 className="menu">
              <a
                href="https://www.linkedin.com/in/marcus-romero-bb156513/"
                className="light__link"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </h2>
          </li>
        </ul>
    </footer>
  );
};

export default Footer;
