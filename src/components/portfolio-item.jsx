import React from 'react'

// import './portfolio-item.scss'

const PortfolioItem = (props) => {

    return (
        
        <div>
        <figure className="portfolio__img" 
            onClick={() => props.viewFullProject(props.id)}>
        <img src={props.image} alt={props.title} />
            <figcaption><h2 className='item'>{props.caption}</h2></figcaption>
            {/*<h2><span 
                className="portfolio__project"
                onClick={() => props.viewFullProject(props.id)}
            >View Project</span></h2> */}
        </figure>
        </div>
        )
    }


export default PortfolioItem