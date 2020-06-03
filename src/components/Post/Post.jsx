import React from 'react';

class Posts extends React.Component{
    render(){
        return (
            <li className="post">
                <p>投稿者：{this.props.name}</p>
                <p>テキスト：{this.props.text}</p>
                <p>
                    <img src={this.props.image}/>
                </p>
            </li>
        )
    }
}
 



export default Posts;