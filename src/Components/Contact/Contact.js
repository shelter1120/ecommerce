import React, { useRef } from "react";
import "../Contact/Contact.css"

const Contact = (props) => {
  const nameRef = useRef();
  const emailRef = useRef();
  const phoneNumberRef = useRef();

  function handleSubmit(event) {
    event.preventDefault();
    const contactData = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      phoneNumber: phoneNumberRef.current.value,
    };
    //   console.log(contactData)
    props.onAddContact(contactData);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="contact">
          <label>Name</label>
          <input
            type="text"
            name="name"
            placeholder="enter name"
            ref={nameRef}
            className='contact-name'
          ></input>
          <label>Email Id</label>
          <input type="email" ref={emailRef} placeholder="enter email" className='contact-name'
 ></input>
          <label>Phone Number</label>
          <input type="number"className='contact-name' ref={phoneNumberRef}></input>
        </div>
        <button type="submit" className="contact-name">Submit</button>
      </form>
    </div>
  );
};

export default Contact;
