import React, {useState} from 'react';
import logo from '../logo.svg';
import '../App.css';
import Feed from '../Feed';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Profile from '../Profile';
import 'bootstrap/dist/css/bootstrap.min.css';
import Group from '../Group';
import Button from 'react-bootstrap/Button';
import Details from '../Details';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch
} from "react-router-dom";
import Progress from './Progress';

export default function ChallengeNav(){
    let match = useRouteMatch();
    return (
        <>
        <Navbar>
          <Nav.Item>
              <Nav.Link as={Link} to={`${match.url}/progress`}> Progress </Nav.Link>
           </Nav.Item>
           <Nav.Item>
              <Nav.Link as={Link} to={`${match.url}/details`}> Details </Nav.Link>
            </Nav.Item>
        </Navbar>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
        <Route path={`${match.url}/progress`}>
            {console.log("Progress")}
            <Progress />
          </Route>

        <Route path={`${match.url}/details`}>
              <Details/>
        </Route>
        </Switch>
        </>);
}
