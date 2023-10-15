import React from 'react'

/*Elements function to initialize the items from Elements.data file where the props approach is used to map each
elements accordingly, the way they are initialized/written here similarly displayed on the screen, ex: the <hr> tag*/ 

export default function Elements(props) {

    
    return (
        <div className='card-div '>
            <div className='cards-each'>
                <img src={props.items.img} alt="img"/>
                <h3>{props.items.type}</h3>
                <p>{props.items.city}</p>
                <hr/>
                <span><p>{props.items.saledeadline}</p>{props.items.cost && <p>{props.items.cost}</p>}</span>
            </div>
        </div>
    )
}