import React from 'react';
import Post from './Post';
import ex1 from './images/ex1.jpg';
import logo from './images/prof.jpg';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import './Feed.css';
const Feed = (props) => {
  //posts = get(props.id); // FINISH ME posts = [post]
  let posts = [
    {profilePic: logo, userName: "ReactUser", time: Date.now(), challengeName: "Challenge", caption: "Hello! \n I've done it!", img: ex1, liked: true, comments: ["Great job!", "Inspiring"]},
    {profilePic: logo, userName: "ReactUser", time: Date.now(), challengeName: "Challenge", caption: "Hello! \n I've done it!", img: ex1, liked: true, comments: ["Awesome", "Keep it up!"]},
    {profilePic: logo, userName: "ReactUser", time: Date.now(), challengeName: "Challenge", caption: "Hello! \n I've done it!", img: ex1, liked: true, comments: ["comment1", "comment2"]},
    {profilePic: logo, userName: "ReactUser", time: Date.now(), challengeName: "Challenge", caption: "Hello! \n I've done it!", img: ex1, liked: true, comments: ["comment1", "comment2"]},
    {profilePic: logo, userName: "ReactUser", time: Date.now(), challengeName: "No Image", caption: "Hello! \n I've done it!", img: ex1, liked: true, comments: ["comment1", "comment2"]},
    {profilePic: logo, userName: "ReactUser", time: Date.now(), challengeName: "Challenge", caption: "Hello! \n I've done it!", img: ex1, liked: true, comments: ["comment1", "comment2"]},
    {profilePic: logo, userName: "User 3", time: Date.now(), challengeName: "Challenge", caption: "Hello! \n I've done it!", img: ex1, liked: true, comments: ["comment1", "comment2"]},
    {profilePic: logo, userName: "ReactUser", time: Date.now(), challengeName: "Challenge", caption: "Hello! \n I've done it!", img: ex1, liked: true, comments: ["comment1", "comment2"]},
    {profilePic: logo, userName: "ReactUser", time: Date.now(), challengeName: "Just a Variety", caption: "Hello! \n I've done it!", img: ex1, liked: true, comments: ["comment1", "comment2"]},
    {profilePic: logo, userName: "ReactUser", time: Date.now(), challengeName: "Challenge", caption: "Hello! \n I've done it!", img: ex1, liked: true, comments: ["comment1", "comment2"]},
    {profilePic: logo, userName: "ReactUser", time: Date.now(), challengeName: "Challenge", caption: "Hello! \n I've done it!", img: ex1, liked: true, comments: ["comment1", "comment2"]},
    {profilePic: logo, userName: "ReactUser", time: Date.now(), challengeName: "Challenge", caption: "Hello! \n I've done it!", img: ex1, liked: true, comments: ["comment1", "comment2"]},
    {profilePic: logo, userName: "ReactUser", time: Date.now(), challengeName: "Challenge", caption: "Hello! \n I've done it!", img: ex1, liked: true, comments: ["comment1", "comment2"]},
    {profilePic: logo, userName: "ReactUser", time: Date.now(), challengeName: "Much Later Challenge", caption: "Hello! \n I've done it!", img: ex1, liked: true, comments: ["comment1", "comment2"]},
  ];
  posts = posts.slice(0, 10); // Get the first 10 posts.
  return (
    <Container>
      {posts.map(post => {
        return (
          <div class = "feed_row">
          <Row>
            <Post profilePic={post.profilePic} userName={post.userName} time={post.time} challengeName={post.challengeName} caption={post.caption} img={post.img} liked={post.liked} comments={post.comments} />
          </Row>
          </div>
        );
      })}
    </Container>
  );
}

export default Feed;