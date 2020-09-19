import React from 'react';
import Post from './Post';

const Feed = (props) => {
    //posts = get(props.id); // FINISH ME posts = [post]
    const posts = ['blah', 'vlah', 'bloop']
    return (
        <>
            {posts.map(post => {
                return (
                    <Post post={post}/>
                );
            })}
        </>
    );
}

export default Feed;