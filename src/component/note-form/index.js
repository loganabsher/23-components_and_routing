'use strict';

import React from 'react';

class NoteCreateForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      editing: false,
      completed: false,
      content: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e){
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.createNote(this.state);
  }

  render(){
    return(
      <form onSubmit={this.handleSubmit}>
        <textarea name='content' rows='10' cols='30' value={this.state.content} onChange={this.handleChange}></textarea>
        <button type='submit'>Submit</button>
      </form>
    )
  }
}

export default NoteCreateForm;
