import { useHistory } from "react-router-dom";
import React from 'react';
import Button from 'react-bootstrap/Button';
import './BackButton.css';

export default function BackButton() {
    let history = useHistory();
    return (
        <>
          <div class = "back">
            <Button variant="outline-info" onClick={() => history.goBack()}>Back</Button>
          </div>
        </>
    );
};