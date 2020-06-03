import React from 'react';
import './Form.css';

class Form extends React.Component{
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event){
        const field = event.target.name
        this.setState({
            [field]:event.target.value
        })
    }

    render(){
        return(
        <form onSubmit={this.props.onSubmit}>
            <div className="form">
                <div className="form_name">
                    <label htmlFor="name">投稿者名</label>
                    <input id="name" name="name"  onChange={this.handleChange} />
                </div>
                <div className="form_text">
                    <label htmlFor="text">本文</label>
                    <textarea id="text" name="text" cols="30" rows="5" onChange={this.handleChange}></textarea>
                </div>
                <div className="form_image">
                    <label htmlFor="image">イメージ</label>
                    <input id="image" name="image"  onChange={this.handleChange} />
                </div>
                <button type="submit">投稿</button>
            </div>
        </form>
        )
    }
}

export default Form