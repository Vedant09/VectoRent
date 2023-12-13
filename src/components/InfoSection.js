import React from 'react'
import { Link } from 'react-router-dom'
import Contact from '../components/Contact'
import contactsData from '../ContactData'


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

export default function InfoSection() {
  return (
    <div className='infosection'>
      <h1>Meet Our Developers</h1>
      <ContactCard />
      <span>
      <div class="box">
      <Link to="/signup" class="btn btn-white btn-animation-1">Sign Up</Link> <hr />
      </div>
        <h3>Click here to check rewards</h3>
      </span>
    </div>
  );
}
