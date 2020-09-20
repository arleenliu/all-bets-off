import React, {useState, useEffects} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import bet from './images/beticon.png'
import CustomNavbar from './CustomNavbar';
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:8080/api';
export default function App() {
  const [user, setUser] = useState(null);

  let fetchUser = async (id) => {
    let data = await axios.get(`/user/${id}`);
    setUser(data.data); 
  }

  return (
    <>
    <div style = {{background: '#D6ECF3', minHeight : '100vh'}}>
    {user ? <CustomNavbar user={user}/> : 
      <>
        <div class = "logoimg">
          <Image src={bet} fluid />
        </div>
        <div class = "center">
          <Button variant="outline-primary" onClick={() => {fetchUser("5f66cfd0706e1c8cd03914c9")}}>Login with Facebook</Button>
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
