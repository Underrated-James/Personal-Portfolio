import React from 'react';
import { Container } from 'react-bootstrap';

function SubmissionSuccess({ name, message }) {
  return (
    <Container className="text-center my-5">
      <h1>Thank you, {name}!</h1>
      <p>Your message has been sent successfully.</p>
      <p>Message: {message}</p>
    </Container>
  );
}

export default SubmissionSuccess;
