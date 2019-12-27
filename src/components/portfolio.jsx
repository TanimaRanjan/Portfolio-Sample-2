import React from 'react'

import './portfolio.scss'

import PortfolioItem from './portfolio-item'
import Footer from './footer'

const Portfolio = (props) => {

    //console.log(props)
    let items = props.items
    

    return (
        <div id="portfolio" className='portfolio__container'>
            <div className='portfolio__title'><h1 className='title'>PORTFOLIO</h1></div>
            <section className="portfolio">
                {items.map((item) => (
                    <PortfolioItem  key={item.id} viewFullProject={props.viewFullProject} {...item}/>
                ))}
            </section>
            <Footer></Footer>
        </div>
    )
}

export default Portfolio