import React from 'react'
import { Link } from 'react-router-dom'
import Contact from '../components/Contact'
import contactsData from '../DataSheets/ContactData'


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
            <Link to="/newsletter" class="btn btn-white btn-animation-1">Sign Up For News Letter</Link> <hr />
          </div>
        <Link to="/rewards" className='link'>Click Here For Offers</Link>
      </span>
    </div>
  );
}
