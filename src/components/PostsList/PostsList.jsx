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
             <div class="posts_list">{posts_list}</div>
        )
    }
}
 



export default Posts;