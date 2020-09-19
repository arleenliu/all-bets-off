import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const ChallengeNav = (props) => {
    return (
        <Navbar>
            <Nav.Item>
                <Nav.Link href="#progress">Progress</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="#details">Details</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="#tasks">Completed Tasks</Nav.Link>
            </Nav.Item>
        </Navbar>
    );
}

const Challenge = (props) => {
    return (
        <>
            <ChallengeNav/>
        </>
    );
}

export default Challenge;