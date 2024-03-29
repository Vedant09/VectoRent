import House from '../images/House.png'
import Veh from '../images/Veh.png'
import Others from '../images/Eq.png'
import Courts from '../images/Courts.png'

// eslint-disable-next-line import/no-anonymous-default-export
export default [    
    {
        id : 1,
        img : House,
        type : "Houses",
        city : "Fairfax, VA",
        saledeadline : "Sale Starts in 10 days!",
        cost:"$10 off"
    },
    {
        id : 2,
        img : Veh,
        type : "Vehicles",
        city : "Fairfax, VA",
        saledeadline : "Sale Starts in 8 days!",
        cost: "$10 off Additional line of data"
    },
    {
        id : 3,
        img : Courts,
        type : "Courts",
        city : "Fairfax, VA",
        saledeadline : "Winter Sale starts in 15 days"
    },
    {
        id : 4,
        img : Others,
        type : "Others",
        city : "Fairfax, VA",
        saledeadline : "Sale Starts  in 20 days!",
        cost:"$10 off"
    },{}
]