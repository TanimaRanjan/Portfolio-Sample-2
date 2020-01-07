import React from 'react'


const PortfolioItem = (props) => {

    return (
        
        <div>
        <figure className="portfolio__img" 
            onClick={() => props.viewFullProject(props.id)}>
        <img src={props.image} alt={props.title} />
            <figcaption><h2 className='item'>{props.caption}</h2></figcaption>
        </figure>
        </div>
        )
    }


export default PortfolioItem