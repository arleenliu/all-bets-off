import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

const Profile = (props) => {
  return (
    <Container>
      <Row>
        <Col>
          <Image src={props.src} rounded />
        </Col>
        <Col>
          {props.name}
        </Col>
      </Row>
      <Row>
        <Col>
          {props.bio}
        </Col>
      </Row>
      <Row>
        {props.badges.map(badge => {
          return (
            <Col>
              <Image src={badge.img} rounded />
            </Col>
          )
        })}
      </Row>
      {/* IDK how to do the 3 circles. */}
    </Container>
  );
}

export default Profile;