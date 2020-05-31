import React from 'react';

class Posts extends React.Component{
    render(){
        const posts = props.posts;
        const posts_list = posts.map((post,index) => 
            <Post 
                key={index}
                {...post}
            />
        )
        return(
             <ul>{posts}</ul>
        )
    }
}
 



export default Posts;