import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';

const Contact = () => {
  return (
    <section id="contact" style={{ padding: '100px 0' }}>
      <Container>
        <h2 className="text-center mb-5">Contact Me</h2>
        <Form className="mx-auto" style={{ maxWidth: '600px' }}>
          <Form.Group className="mb-3">
            <Form.Control type="text" placeholder="Your Name" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Control type="email" placeholder="Your Email" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Control as="textarea" rows={3} placeholder="Your Message" />
          </Form.Group>
          <Button variant="primary" className='multi-border-btn' type="submit">Send Message</Button>
        </Form>
      </Container>
    </section>
  );
};

export default Contact;
