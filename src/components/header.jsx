import React from 'react'

import { Link, animateScroll as scroll } from "react-scroll";

import './header.scss'


class Header extends React.Component {

    scrollToTop = () => {
        scroll.scrollToTop();
      };

    // handleContact = () => {
    //    // alert('open contact page')
    //     scroll.scrollToTop();
    //     this.props.selectContact()

    // }
    render() {
    return (
        <header>
            <nav className='nav' id='navbar'>
                <span id='logo' 
                className='nav__logo' 
                onClick={this.scrollToTop}
                >Marcus Romero Productions
                </span>

                <ul className='nav__items'>
                    <li className='nav__item'>
                        <Link activeClass="active"
                        to="reel"
                        spy={true}
                        smooth='easeInOutQuad'
                        offset={-70}
                        duration={700}>REEL</Link>
                    </li>
                    <li className='nav__item'>
                    <Link 
                        to="portfolio"
                        spy={true}
                        smooth='easeInOutQuad'
                        offset={-70}
                        duration={900} >PORTFOLIO</Link>
                    </li>
                    <li className='nav__item'>
                    <Link 
                        to="contact"
                        spy={true}
                        smooth='easeInOutQuad'
                        offset={-70}
                        duration={1300}>CONTACT</Link>
                    </li>
                </ul>  
        </nav>
        </header>
        )
    }
}

export default Header
