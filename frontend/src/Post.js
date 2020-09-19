import React, { useState } from 'react';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
import Col from 'react-bootstrap/esm/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

const Comment = (props) => {
  return (
    <>
      {props.comment}
    </>
  );
}

const Header = (props) => {
  return (
    <Row>
      <Col>
        <Image className="avatarPic" src={props.img} onClick={props.onClick} responsive/>
      </Col>
      <Col>
        <Row>
          {props.name}
        </Row>
        <Row>
          {props.time}
        </Row>
      </Col>
    </Row>
  );
}

const Content = (props) => {
  return (
    <>
      <Row>
        {props.challengeName}
      </Row>
      <Row>
        {props.caption}
      </Row>
      {props.img != null &&
        (<Row>
          <Image className="postImg" src={props.img} />
        </Row>)}
    </>
  );
}

const CommentsBlock = (props) => {
  const [writeComment, setWriteComment] = useState(false);
  return (
    <>
      <Row>
        <Col>
          <Button varient={props.liked ? "primary" : "outline-primary"} onClick={props.toggleLike}>Like</Button>
        </Col>
        <Col>
          <Button varient="outline-primary" onClick={() => setWriteComment(true)}>Comment</Button>
        </Col>
      </Row>
      {writeComment ?
      <Row>
        <Col>
          <Form>
            <Form.Row>
              <Col>
                <Form.Control type="text" placeholder="comment" />
              </Col>
              <Col>
                <Button type="submit">Post</Button>
              </Col>
            </Form.Row>
          </Form>
        </Col>
      </Row> : null}
      {props.comments && props.comments.map(comment => (
      <Row>
        <Comment comment={comment}></Comment>
      </Row>))}
    </>
  );
}

const Post = (props) => {

  return (
    <Container className="post">
      <Header 
        img={props.profilePic} 
        onClick={() => {alert("Go to profile")}}
        name={props.userName}
        time={props.time}/>
      <Content 
        challengeName={props.challengeName} 
        caption={props.caption} 
        img={props.img}/>
      <CommentsBlock 
        liked={props.liked}
        comments={props.comments}/>
    </Container>
  );
}

export default Post;