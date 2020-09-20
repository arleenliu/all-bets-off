import React from 'react';
import Post from './Post';
import ex1 from './images/lemon.jpg';
import ex2 from './images/sink.jpg';
import ex3 from './images/run.jpg';
import ex4 from './images/bed.jpg';
import ex5 from './images/guitar.jpg';
import ex6 from './images/computer.jpg';
import ex7 from './images/medi.jpg';
import ex8 from './images/clothe.jpg';
import ex9 from './images/mom.jpg';
import ex10 from './images/schedule.jpg';
import ex11 from './images/protest.jpg';
import ex12 from './images/language.jpg';
import ex13 from './images/garden.jpg';
import logo from './images/prof.jpg';
import logo2 from './images/prof2.jpg';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import BackButton from './components/BackButton'
import './Feed.css';
import axios from 'axios';

const Feed = (props) => {
  //posts = get(props.id); // FINISH ME posts = [post]
  //let posts = axios.get('/api/task');
   let posts = [
     {profilePic: logo, userName: "zestylemon", time: Date.now(), challengeName: "30-day Lemon Recipe Challenge", caption: "One more day left! \n I've made 29 lemon recipes so far.", img: ex1, liked: true, comments: ["Great job!", "More determination that I could ever have"]},
     {profilePic: logo2, userName: "ballislyfe", time: Date.now() - 1000, challengeName: "Did chores responsibly for 2 weeks", caption: "Seems a little stupid, I know, but my roommates and I \n all hate washing dishes. Glad we were able to be responsible for 2 weeks.", img: ex2, liked: true, comments: ["Honestly, kinda inspiring"]},
     {profilePic: logo, userName: "jmeng", time: Date.now() - 2000, challengeName: "Running 5 miles without stopping", caption: "I started out at 1 mile and pushed myself everyday. \n Today, I ran 5 miles in a row for the first time!", img: ex3, liked: true, comments: ["Keep it up!", "Literally how??"]},
     {profilePic: logo2, userName: "erwang", time: Date.now() - 5000, challengeName: "Fixed my sleep schedule for a week!", caption: "I've always had a problem sleeping before 2 am, \n so I managed to sleep before 10 pm for a whole week!", img: ex4, liked: true, comments: ["Wow I don't even know how you do it"]},
     {profilePic: logo2, userName: "frontmatt", time: Date.now() - 6000, challengeName: "Learning guitar", caption: "Always wanted to learn music when I was younger. \n Finally got around to it.", img: ex5, liked: true, comments: ["This is a really neat goal!", "I wanna hear you play now!"]},
     {profilePic: logo2, userName: "csguy", time: Date.now() - 70000, challengeName: "Abstained from gaming on weekends for 2 months", caption: "I can't help it, I'm addicted to League and my \n grades are going down. Glad I can do homework on weekends now at least.", img: ex6, liked: true, comments: ["I relate to this so much haha"]},
     {profilePic: logo, userName: "purple", time: Date.now() - 8000000, challengeName: "Practicing meditation daily", caption: "I'm always so stressed so I thought I'd try meditation. \n Highly recommend! I feel so relaxed.", img: ex7, liked: true, comments: ["Wow, now I gotta try for sure!"]},
     {profilePic: logo, userName: "gucci", time: Date.now(), challengeName: "Haven't bought any clothing for 4 months", caption: "Hello! Recovering shopaholic here. I procrasinate by \n online shopping, but I'm proud to say I've gotten better!", img: ex8, liked: true, comments: ["LMAO I have this problem too", "My poor wallet T_T"]},
     {profilePic: logo, userName: "potate", time: Date.now(), challengeName: "Calling my mom more", caption: "I'm 30 now and I regret not appreciating my mom more. \n So, I've been calling her at least once a day since then!", img: ex9, liked: true, comments: ["Never too late to make up for lost time!"]},
     {profilePic: logo, userName: "illumelaude", time: Date.now(), challengeName: "Time management", caption: "Had this problem for as long as I remember and I always feel so \n overwhelmed. Planning my day has made it a lot better.!", img: ex10, liked: true, comments: ["Good for you! Way to seize the day!"]},
     {profilePic: logo, userName: "rollypoppy", time: Date.now(), challengeName: "Being more politically active", caption: "I'm gonna be honest, our country is literally shit right now. \n Always been a lurker but I've gone to 2 protests now!", img: ex11, liked: true, comments: ["It's great to see younger people being more active!", "Totally agree. We have to do somethign about it."]},
     {profilePic: logo2, userName: "iwantaswitch", time: Date.now(), challengeName: "Learning a foreign language", caption: "I'm Taiwanese but I don't feel that way having grown up in the US. \n I've spent a year learning about my language and heritage so far and it's so interesting!!", img: ex12, liked: true, comments: ["Loved Taiwan when I visted!"]},
     {profilePic: logo2, userName: "bsl", time: Date.now(), challengeName: "Gardening", caption: "Home project of backyard renovation. \n Removed weeds already and planted 2 trees.", img: ex13, liked: true, comments: ["It looks beautiful, can't wait to see end result!"]},
   ];

  posts = posts.slice(0, 15); // Get the first 10 posts.
  console.log(posts);
  return (
    <>
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
    </>
  );
}

export default Feed;