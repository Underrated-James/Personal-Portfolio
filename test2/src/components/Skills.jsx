import React from 'react';
import { Container, ListGroup } from 'react-bootstrap';

function Skills() {
  return (
    <Container className="mt-5">
      <h2 style={{ color: '#1f4068' }}>My Skills</h2>
      <ListGroup>
        <ListGroup.Item>HTML</ListGroup.Item>
        <ListGroup.Item>CSS</ListGroup.Item>
        <ListGroup.Item>JavaScript</ListGroup.Item>
        <ListGroup.Item>Python</ListGroup.Item>
        <ListGroup.Item>Java</ListGroup.Item>
        <ListGroup.Item>C#</ListGroup.Item>
        <ListGroup.Item>React</ListGroup.Item>
        <ListGroup.Item>PHP</ListGroup.Item>
        <ListGroup.Item>Laravel</ListGroup.Item>
        <ListGroup.Item>MongoDB</ListGroup.Item>
      </ListGroup>
    </Container>
  );
}

export default Skills;
