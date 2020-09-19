import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Feed from './Feed';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Profile from './Profile';
import 'bootstrap/dist/css/bootstrap.min.css';
import Group from './Group';
import Button from 'react-bootstrap/Button'

function App() {
  
  const [nav, setNav] = useState("feed");
  const [user, setUser] = useState(null);
  return (
    <>
      <div className="App">
        {user != null ? <>
          <Navbar>
            <Nav.Item>
              <Nav.Link href="/feed" onClick={() => setNav("feed")}>Feed</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/groups" onClick={() => setNav("groups")}>Groups</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/profile" onClick={() => {setNav("profile")}}>Profile</Nav.Link>
            </Nav.Item>
          </Navbar>
          {nav == "feed" && <Feed/>}
          {nav == "groups" && <Group challenges={[1, 2, 3]}/>} 
          {/* Replace with groups. */}
          {nav == "profile" && <Profile src={logo} name="React" bio="I am a react app" badges={[{img:logo}]}/>}
        </> : <>
          Login Page
          <Button onClick={() => {setUser("not null")}}>Login with Facebook</Button>
        </>}
        
      </div>
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
        integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
        crossorigin="anonymous"
      />
    </>
  );
}

export default App;
