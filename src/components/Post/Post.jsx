import React from 'react';
import './Post.css';

class Post extends React.Component{
    render(){
        return (
            <div className="post">
                <div className="image">
                    <img src={this.props.image}/>
                </div>
                <h3>{this.props.name}</h3>
                <p>{this.props.text}</p>
            </div>
        )
    }
}

export default Post;