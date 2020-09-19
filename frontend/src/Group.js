import React from 'react';
import Challenge from './Challenge';

const Group = (props) => {

    return (
        <>
            I'm a group! Please don't mind the extra challenge nav bars. Replace Challenge with Challeng Long Buttons
            {props.challenges.map(challenge => (<Challenge/>))}
        </>
    );
}


export default Group;