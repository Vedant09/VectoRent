import React from 'react'
import Contact from './Contact'
import contacts from './ContactData'


function ContactCard() {
  const contactDetails = contacts.map(contacts => {
    return (
      <Contact
        id={contacts.id}
        img={contacts.img}
        name={contacts.name}
        phone={contacts.phone}
        email={contacts.email}
        status={contacts.status}
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
        <button onClick className='class-button'>Sign Up </button>
        <p>It's Free!!!</p>
        <h3>Click here to check rewards</h3>
      </span>
    </div>
  );
}
