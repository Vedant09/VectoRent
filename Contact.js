import React from 'react'
import phone from './images/phone.png'
import mail from './images/Mail.png'

export default function Contact(props){
  console.log(props.status)

  return(
    <div className="contact-card">
      {props.status === 0 && <div className='card-badge'>Developer</div>}
      {props.status === 3 && <div className='card-badge'>Manager</div>}
      {props.status === 2 && <div className='card-badge'>Tester</div>}
      {props.status === 1 && <div className='card-badge'>CEO</div>}
            <img src={props.img} alt=""/>
            <h3>{props.name}</h3>
            <div className="info-group">
                <img src={phone} alt=''/>
                <p>{props.phone}</p>
            </div>
            <div className="info-group">
                <img src={mail} alt=''/>
                <p>{props.email}</p>
            </div>
        </div>
  )
}