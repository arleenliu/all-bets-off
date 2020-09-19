import React, {useState} from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const Progress = () => {
    return null;
}
const Task = () => {
    return null;
}
const ChallengeNav = (props) => {

    const [page, setPage] = useState("challenge");

    return (
    <>
        <div className="ChallengeNav">
            {page == "challenge" &&
            <Navbar>
                <Nav.Item>
                    <Nav.Link href="/progress">Progress</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/details">Details</Nav.Link>
                </Nav.Item>
            </Navbar>
            }
            {page == "progress" && <Progress/>}
            {page == "details" && <Task/>}
        </div>
    </>
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