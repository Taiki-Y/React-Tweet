import React from 'react';
import Form from './components/Form/Form';
import PostsList from './components/PostsList/PostsList'

class App extends React.Component {
  constructor(){
    super()
    const posts = [
      {
        name: "テスト",
        text: "テキスト",
        image:"https://www.pakutaso.com/shared/img/thumb/yuzu20122067_TP_V4.jpg"
      }
    ]

    this.state ={
    posts: posts
    }
  
    this.addPost = this.addPost.bind(this);
  }

  addPost(event){
    event.preventDefault();

    const posts = [...this.state.posts];
    
    posts.push({
      name:event.target.name.value,
      text:event.target.text.value,
      image:event.target.image.value,
    });

    this.setState({
      posts:posts
    })
  }

  render(){
    return (
      <div className="App">
        <Form onSubmit={this.addPost}/>
        <PostsList posts={this.state.posts} />
      </div>
    );
  }
}

export default App;
