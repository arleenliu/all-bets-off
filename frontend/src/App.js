import React, {useState} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import CustomNavbar from './CustomNavbar';


export default function App() {
  const [user, setUser] = useState(null);
  return (
    <>
    {user ? <CustomNavbar /> : <>
      Login Page
          <Button onClick={() => {setUser("not null")}}>Login with Facebook</Button>
      </>
    }
    <link
      rel="stylesheet"
      href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
      integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
      crossorigin="anonymous"
    />
  </>
  );
}
