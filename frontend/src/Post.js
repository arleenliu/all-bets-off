import React, { useState } from 'react';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
import Col from 'react-bootstrap/esm/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import GradeIcon from '@material-ui/icons/Grade';
import {Grid} from '@material-ui/core';
import './Post.css';

const Comment = (props) => {
  return (
    <>
      {props.comment}
    </>
  );
}

const Header = (props) => {
  const options1 = {weekday: 'short', year:'numeric', month: 'short', day: 'numeric'};
  const dateformat = new Intl.DateTimeFormat('en-US', options1);

  return (
    <Row>
      <Col>
        <Image className="avatarPic" src={props.img} onClick={props.onClick} responsive/>
      </Col>
      <Col class="header">
        <Row>
          {props.name}
        </Row>
        <Row>
          {dateformat.format(props.time)}
        </Row>
      </Col>
    </Row>
  );
}

const Content = (props) => {
  return (
    <>
      <Row className="name">
        {props.challengeName}
      </Row>
      <Row className="name">
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
  const [likes, setLikeCount] = useState(Math.floor(Math.random() * 10));
  return (
    <>
      <Row>
        <Col>
          <GradeIcon button variant={"primary"} onClick={() => setLikeCount(likes + 1)}/>
        {likes}
        </Col>
        <Col>
        <Button variant="Link" onClick={() => setWriteComment(true)}>Comment</Button>
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
                <Button variant="link" type="submit">Post</Button>
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
      <div class = "comments">
      <CommentsBlock 
        liked={props.liked}
        comments={props.comments}/>
      </div>
    </Container>
  );
}

export default Post;