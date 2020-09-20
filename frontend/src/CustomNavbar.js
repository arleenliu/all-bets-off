import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Feed from './Feed';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Profile from './Profile';
import 'bootstrap/dist/css/bootstrap.min.css';
import Group from './Group';
import Button from 'react-bootstrap/Button';
import BackButton from './components/BackButton';
import './CustomNavbar.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function CustomNavbar(props) {
  return (
    <>
      <div class="center_nav">
        <Navbar>
          <Nav.Item>
            <Nav.Link as={Link} to="/feed" style={{ marginRight: 100 }}>Feed</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={Link} to="/groups" style={{ marginRight: 100 }}>Groups</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={Link} to="/profile" style={{ marginRight: 0 }}>Profile</Nav.Link>
          </Nav.Item>
        </Navbar>
      </div>
      <BackButton />

      {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
      <div class = "switch">
      <Switch>
        <Route path="/feed">
          <Feed user={props.user}/>
        </Route>
        <Route path="/groups">
          <Group user={props.user} challenges={[1, 2, 3]} />
        </Route>
        <Route path="/profile">
          <Profile user={props.user} src={logo} name="Julie Meng" bio="Sophomore at MIT." badges={[{ img: logo }]} />
        </Route>
      </Switch>
      </div>
    </>);
}
