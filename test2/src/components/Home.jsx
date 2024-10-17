import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Home() {
  return (
    <Container className="text-center my-5">
      <Row>
        <Col>
          <h1>Welcome to My Profile</h1>
          <p> I am an aspiring software engineer, currently navigating my journey as a third-year Computer Science student. 
          My passion for technology drives me to innovate and create solutions that make a difference</p>
          <p>
                        This is the homepage. Explore more about me by navigating to the other pages!
                    </p>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
