import React from 'react';
import Form from './components/Form/Form';
import PostsList from './components/PostsList/PostsList'

class App extends React.Component {
  constructor(){
    super()
    const posts = []

    this.state ={
    posts: posts
    }
  
    this.addPost = this.addPost.bind(this);
  }

  addPost(event){
    event.preventDefault();

     const post_name = event.target.name.value;
     const post_text = event.target.text.value;
     const post_image = event.target.image.value;

    if(!post_name || !post_text || !post_image){
      alert('投稿者名、テキスト、画像URLの入力は必須です。');
      return;
    }

    const posts = [...this.state.posts];
    
    posts.push({
      name: post_name,
      text: post_text,
      image: post_image,
    });

    this.setState({
      posts:posts
    })
    
    event.target.name.value = '';
    event.target.text.value = '';
    event.target.image.value = '';

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
