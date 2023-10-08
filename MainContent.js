import React from 'react'
import Elements from './Elements'
import items from './ElementsData'

/*
This is a card funtion where the values are coming from the data file where any number of items can be included.
we then add these elements using the map function. in the map funtion we use the <Elements/> funtions from 
Elememts.js where the funtion is initialized */

function Card() {

  const elementsDetails = items.map(items => {
    return (
      <Elements
        id= {items.id}
        img= {items.img}
        type= {items.type}
        city={items.city}
        saledeadline={items.saledeadline}
        cost={items.cost}
      />
    )
  })

  return (
    <div className='card-div '>
      {elementsDetails}
    </div>
  )
}

export default function MainContent() {
  return (
    <div className='main'>
      <h1>REQUEST-RENT-REUSE-RETURN</h1><hr></hr>
      <Card />
      <span>
        <h1>Register Today!!</h1><hr />
        <p>We have what you need!! Rent Anything, Anywhere!</p>
      </span>
    </div>
  );
}