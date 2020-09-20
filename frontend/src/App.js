import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Feed from './Feed';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Profile from './Profile';
import 'bootstrap/dist/css/bootstrap.min.css';
import Group from './Group';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import bet from './images/bet.jpg'
import CustomNavbar from './CustomNavbar';


export default function App() {
  const [user, setUser] = useState(null);
  return (
    <>
    <div style = {{background: '#D6ECF3', minHeight : '100vh'}}>
    {user ? <CustomNavbar /> : 
      <>
        <div class = "logoimg">
          <Image src={bet} fluid />
        </div>
        <div class = "center">
          <Button onClick={() => {setUser("not null")}}>Login with Facebook</Button>
        </div>
      </>
    }
    <link
      rel="stylesheet"
      href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
      integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
      crossorigin="anonymous"
    />
    </div>
  </>
  );
}
