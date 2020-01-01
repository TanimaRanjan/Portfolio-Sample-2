import React from 'react'

import './client-item.scss'

const ClientItem = (props) => {

    return (
        
        <div>
        <figure className="client__img" >
            <img src={props.image} alt={props.title} />
        </figure>
        </div>
        )
    }


export default ClientItem