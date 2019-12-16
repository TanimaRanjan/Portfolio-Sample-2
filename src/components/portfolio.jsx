import React from 'react'

import './portfolio.scss'

import PortfolioItem from './portfolio-item'

const Portfolio = (props) => {

    let items = props.items

    return (
        <div id="portfolio" className='portfolio__container'>
            {/*<p className='title'>PORTFOLIO</p>*/}
            <section className="portfolio">
                {items.map((item) => (
                    <PortfolioItem  key={item.id} {...item}/>
                ))}
            </section>
        </div>
    )
}

export default Portfolio