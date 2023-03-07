import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

const ContactScreen = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const [message, setMessage] = useState();

  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <h2
        style={{ fontWeight: "bolder", fontSize: "30px", textAlign: "center" }}
      >
        Contact Us
      </h2>
      <h2 style={{ fontStyle: "italic", textAlign: "center" }}>
        We'd Love to Hear From You!
      </h2>
      <Form style={{ maxWidth: "600px" }} className='text-entry' onSubmit={submitHandler}>
        <Form.Group className="mb-3" controlId="formName">
          <Form.Label>Name</Form.Label>
          <Form.Control 
          type="name" 
          value={name}
          placeholder="Enter Your Name"
          onChange={(e) => setName(e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email Address</Form.Label>
          <Form.Control 
          type="email" 
          placeholder="Enter email" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formPhone">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control 
          type="number" 
          placeholder="Enter Phone Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formMessage">
          <Form.Label>Message</Form.Label>
          <Form.Control 
          style={{minHeight:'250px'}}
          as="textarea" 
          type="message" 
          placeholder="Message" 
          value={message}
          onChange={(e) => setMessage(e.target.value)}/>
        </Form.Group>
        <Button type='submit' variant='primary'>
          Send Message
        </Button>
      </Form>
    </div>
  );
};

export default ContactScreen;
