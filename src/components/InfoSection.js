import React from 'react'
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

function SignIn(){
  alert("Sign In")
}

export default function InfoSection() {
  return (
    <div className='infosection'>
      <h1>Meet Our Developers</h1>
      <ContactCard />
      <span>
      <div class="box">
      <a href="#" class="btn btn-white btn-animation-1" onClick={SignIn}>Sign Up</a> <hr />
      </div>
        <h3>Click here to check rewards</h3>
      </span>
    </div>
  );
}
