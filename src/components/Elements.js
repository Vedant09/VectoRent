import React from 'react'
import { Link } from 'react-router-dom'
import c from '../images/needacar.png'
import rts from '../images/needacourt.png'
import it from '../images/needanitem.png'
import rent from '../images/renthouse.png'


/*Elements function to initialize the items from Elements.data file where the props approach is used to map each
elements accordingly, the way they are initialized/written here similarly displayed on the screen, ex: the <hr> tag*/ 

export default function Elements(props) {

    const [prost, setProst] = React.useState({
        isFav:false
    })


    let type = `${props.items.type}`
    function toggleImge(){
        setProst(function(d){
            return{
                isFav:!d.isFav
            }
        })
    }
    
    let icon;           //Icon variable will hold the value of default at first, it checks the type then change
    switch (type) {
        case "Vehicles":
          icon = prost.isFav ? `${c}` : `${props.items.img}`;
          break;
        case "Courts":
          icon = prost.isFav ? `${rts}` : `${props.items.img}`;
          break;
        case "Others":
          icon = prost.isFav ? `${it}` : `${props.items.img}`;
          break;
        case "Houses":
          icon = prost.isFav ? `${rent}` : `${props.items.img}`;
          break;
        default:
          icon = `${props.items.img}`;
      }
    
    // let icon = type === "Vehicles" && prost.isFav?`${c}` : `${props.items.img}` 
    return ( props.id &&
      <Link to={`/${type}`}>
          <div className='cards-div'>
              <div onClick={toggleImge} className='cards-each'>
                <img src={icon} alt="img"/>
                <h3>{props.items.type}</h3>
                <p>{props.items.city}</p>
                <hr/>
                <span>
                    <p>{props.items.saledeadline}</p>
                </span>
            </div>
        </div>
      </Link>
    )
} 