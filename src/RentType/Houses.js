import React from 'react'
import image from '../images/cyanbb.png'
import Contact from '../components/Contact'
import contactsData from '../DataSheets/ContactData'
import { Link } from 'react-router-dom'



function ContactCard() {
    const contactDetails = contactsData.map(contacts => {
      return (
        <Contact
          id={contacts.id}
          {...contacts}
        />
      )
    })
      
    return (
      <div className='card-div'>
        {contactDetails}
      </div>
    );
  }

export default function Houses(){
    return (
        <div className='indexpage'>
            <img className='background-img' src={image} alt='background' />
            <div className='home-box'>
                <div className='house-postings'>
                  <Link to ='/houses/postings' className='btn btn-white btn-animation-1'>Post Your Home</Link>
                </div>
                <h2>HOUSE LISTINGS</h2>
                <ContactCard />
            </div>
        </div>
    )
}