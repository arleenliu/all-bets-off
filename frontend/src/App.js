import React from 'react';
import logo from './logo.svg';
import './App.css';
import Challenge from './Challenge';
import Feed from './Feed';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Profile from './Profile';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <div className="App">
        <Navbar>
            <Nav.Item>
                <Nav.Link href="#feed">Feed</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="#groups">Groups</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="#profile">Profiles</Nav.Link>
            </Nav.Item>
        </Navbar>
        <Feed/>
        <Challenge/>
        <Profile/>
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
