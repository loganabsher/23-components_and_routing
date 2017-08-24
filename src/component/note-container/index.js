'use strict';

import React from 'react';
import uuid from 'uuid/v1';

import NoteForm from '../note-form';

class NoteContainer extends React.Component {
  constructor(props){
    super(props);
    this.createNote = this.createNote.bind(this);
  }

  createNote(note){
    note.id = uuid();
    this.props.app.setState((state) => ({
      allNotes: [...state.allNotes, note]
    }));
  }

  render(){
    return(
      <div className='note-container'>
        <NoteForm createNote={this.createNote} />
      </div>
    )
  }
}

export default NoteContainer;
