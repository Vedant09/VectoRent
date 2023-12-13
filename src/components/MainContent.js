import React from 'react'
import Elements from './Elements'
import items from '../ElementsData'
import { Link } from 'react-router-dom'


/*
This is a card funtion where the values are coming from the data file where any number of items can be included.
we then add these elements using the map function. in the map funtion we use the <Elements/> funtions from 
Elememts.js where the funtion is initialized */

function Card() {

  const elementsDetails = items.map(items => {
    return (
      <Elements
        id= {items.id}
        items={items}
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
  const styles={
      color:"black",
      fontStyle : "italic"
  }
  return (
    <div className='maincontent'>
      <h1 style={styles}>REQUEST-RENT-REUSE-RETURN</h1>
      <Card /> 
      <span>
      <Link to='/signup' class="btn btn-white btn-animation-1" >Register Today</Link><hr />
        <p>We have what you need!! Rent Anything, Anywhere!</p>
      </span>
    </div>
  );
}