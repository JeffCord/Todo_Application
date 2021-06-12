import React from 'react';

// the parameter 'props' can be called anything else, but 'props' is the conventional name
// props is an object that has properties with each one being the name of the props that you pass in
function ContactCard(props) {
    console.log(props);
    return (
        <div className='contact-card'>
            <img src={props.imgUrl} alt=''/>
            <h3>{props.name}</h3>
            <p>Phone: {props.phone}</p>
            <p>Email: {props.email}</p>
        </div>
    )
}

export default ContactCard;

