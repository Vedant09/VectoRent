import React from 'react'
import Contact from './Contact'
import contacts from './ContactData'


function ContactCard() {
  const contactDetails = contacts.map(contacts => {
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

function SignIn(){
  alert("Sign In")
}

export default function InfoSection() {
  return (
    <div className='infosection'>
      <h1>Meet Our Developers</h1>
      <ContactCard />
      <span>
        <button onClick={SignIn} className='class-button'>Sign In</button>
        <p>It's Free!!!</p>
        <h3>Click here to check rewards</h3>
      </span>
    </div>
  );
}
