import React from 'react';
import Post from '../Post/Post'

class Posts extends React.Component{
    render(){
        const posts = this.props.posts;
        const posts_list = posts.map((post,index) => 
            <Post 
                key={index}
                {...post}
            />
        )
        return(
             <ul>{posts_list}</ul>
        )
    }
}
 



export default Posts;