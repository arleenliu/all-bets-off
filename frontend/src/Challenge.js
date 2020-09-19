import React, {useState} from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import ButtonList from './components/LongButton';

const Progress = () => {
    return null;
}
const Task = () => {
    return null;
}
const ChallengeNav = (props) => {

    const [page, setPage] = useState("challenge");

    return (
        <ButtonList name="Challenge"/>
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