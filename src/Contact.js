import React from 'react'
import phone from './images/phone.png'
import mail from './images/Mail.png'

export default function Contact(props){
  // console.log(props.contacts.status)
  let badgeName
  if(props.status === 0){
    badgeName = "CEO"
  }else if(props.status === 1){
    badgeName = "Developer"
  }else if(props.status === 2){
    badgeName = "Tester"
  }


  // let count = 0
  const [count,setCount] = React.useState(0)
  function ClicOver(){
    setCount(count+1);
    // console.log(`count click on ${props.name} is ${count+1}`);
    // return count;
  }
  return( props.id &&
    <div onClick={ClicOver} className="contact-card">
      {badgeName && <div className='card-badge'>{badgeName}</div>}
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
            <p>{`clicked --> ${count} times`}</p>
    </div>
  )
}