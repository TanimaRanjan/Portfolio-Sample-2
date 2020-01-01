import React from 'react'

import {Events, animateScroll } from "react-scroll";

import './header.scss'

class Header extends React.Component {

    componentDidMount() {
        window.addEventListener('scroll', this.listenToScroll)
    }


    componentWillUnmount() {
        window.removeEventListener('scroll', this.listenToScroll)
        Events.scrollEvent.remove('begin');
        Events.scrollEvent.remove('end');
      }


    listenToScroll = () => {
        let  winScroll =
          document.body.scrollTop || document.documentElement.scrollTop

          let reelLink = document.querySelector('#reelLink')
          let portfolioLink = document.querySelector('#portfolioLink')

          if(winScroll >= (document.querySelector('#reel').scrollHeight) ) {
                reelLink.classList.remove('active');
                portfolioLink.classList.add('active');
          }

          if(winScroll <  (document.querySelector('#reel').scrollHeight)) {
           portfolioLink.classList.remove('active');
           reelLink.classList.add('active');
        }


      }

    scrollToTop = () => {
       // animateScroll.scrollToTop();
        //scroll.scrollTo(0)
        console.log('calling scrool top')
        animateScroll.scrollToTop({
         duration: 100,
         delay: 0,
         smooth: 'linear',

       })
      };


      scrollTo(offset) {
          console.log('calling scrool to')
          animateScroll.scrollTo(offset, {
          duration: 100,
          delay: 0,
          smooth: 'linear',

        })
      }

    viewReel = () => {

       // let winScroll =
       //   document.body.scrollTop || document.documentElement.scrollTop

          
       // console.log('view reel before '+winScroll)
       // let scrollHeight = document.querySelector('#reel').scrollHeight
       // console.log('scrollHeight   ', scrollHeight)
       // console.log(document.querySelector('#navbar').scrollHeight)
       // scroll.scrollTo(675)
      // if(winScroll !== document.querySelector('#navbar').scrollHeight) {
       //    this.scrollTo('9.6rem')
        //    animateScroll.scrollToTop()
      // } else {
        this.scrollToTop()
       //     console.log(' why are u moving  now ')
      // }
      // console.log('view reel after '+winScroll)
     //  console.log('======================================================')
    
        //   let reelLink = document.querySelector('#reelLink')
        //   let portfolioLink = document.querySelector('#portfolioLink')

        //   if(winScroll > (document.querySelector('#reel').scrollHeight) + 1) {
        //         reelLink.classList.remove('active');
        //         portfolioLink.classList.add('active');
        //   }
 
      
      //animateScroll.scrollToBottom(document.querySelector('#navbar').scrollHeight);

    }

    viewPortfolio = () => {
        

        let winScroll =
        document.body.scrollTop || document.documentElement.scrollTop

        //alert(winScroll)
        console.log('view portfolio before '+winScroll)
        let scrollHeight = document.querySelector('#reel').scrollHeight + document.querySelector('#navbar').scrollHeight
        console.log('scrollHeight   ', scrollHeight)
        console.log(document.querySelector('#reel').scrollHeight)
        console.log(document.querySelector('#reel').clientHeight)
       // scroll.scrollTo(675)
       //animateScroll.scrollTo(document.querySelector('#reel').scrollHeight)
       
      // if(winScroll !== document.querySelector('#reel').scrollHeight + document.querySelector('#navbar').scrollHeight) {

        //animateScroll.scrollTo('9.6rem')
            this.scrollTo(document.querySelector('#reel').scrollHeight)
       // this.scrollTo(document.querySelector('#reel').scrollHeight)
     //    animateScroll.scrollToTop()
   // } else {
   // // animateScroll.scrollToTop()
       // this.scrollTo(document.querySelector('#reel').scrollHeight)
     //  this.scrollTo(675)
         console.log(' why are u moving  now ')
   // }

   winScroll =
    document.body.scrollTop || document.documentElement.scrollTop
    }

    render() {
    return (
        <>
        <header>
            <nav className='nav' id='navbar'>
                <span id='logo' 
                className='nav__logo' 
                onClick={this.scrollToTop}
                ><h1 className='logo'>Marcus Romero</h1>
                </span>

                <ul className='nav__items'>
                    <li className='nav__item' >
                        <h2 className='menu'><a  id='reelLink' 
                        onClick={this.viewReel}
                        className='dark__link active'>REEL</a></h2>
                    </li>
                    <li className='nav__item' >
                        <h2 className='menu'><a 
                        id='portfolioLink' 
                        className='dark__link'
                        onClick={this.viewPortfolio}
                        >PORTFOLIO</a></h2>
                    </li>
                    <li className='nav__item' >
                        <h2 className='menu'> <span className='dark__link' id='contactLink'  
                            onClick={this.props.handleContact}>CONTACT</span></h2>
                    </li>
                </ul>  
        </nav>
        </header>

        </>
    )
    }
}

export default Header
