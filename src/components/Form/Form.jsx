import React from 'react';
import './Form.css';

class Form extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            name: '',
            text: '',
            image: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    handleChange(event){
        const field = event.target.name
        this.setState({
            [field]:event.target.value
        })
    }

    onSubmit(event){
        event.preventDefault();
        console.log(this.state);
    }

    render(){
        return(
        <form onSubmit={this.onSubmit}>
            <div className="form">
                <div className="form_name">
                    <label htmlFor="name">投稿者名</label>
                    <input id="name" name="name" value={this.state.name} onChange={this.handleChange} />
                </div>
                <div className="form_text">
                    <label htmlFor="text">本文</label>
                    <textarea id="text" name="text" value={this.state.text} cols="30" rows="5" onChange={this.handleChange}></textarea>
                </div>
                <div className="form_image">
                    <label htmlFor="image">イメージ</label>
                    <input id="image" name="image" value={this.state.image} onChange={this.handleChange} />
                </div>
                <button type="submit">投稿</button>
            </div>
        </form>
        )
    }
}

export default Form