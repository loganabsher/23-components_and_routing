'use strict';

import './style/main.scss';
import NoteContainer from './component/note-container';

import React from 'react';
import ReactDom from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {allNotes: []}
    this.getApp = this.getApp.bind(this);
  }

  getApp(){
    return{
      state: this.state,
      setState: this.setState.bind(this)
    }
  }

  componentDidUpdate(){
    console.log('__STATE__', this.state);
  }

  render(){
    return(
      <div>
        <BrowserRouter>
          <main>
            <Route exact path='/' component={() => <NoteContainer app={this.getApp()}/>} />
            <ul>
              {this.state.allNotes.map((note, i) => {
                return(
                  <li key={i}>
                    <p>{note.content}</p>
                  </li>
                )
              })}
            </ul>
          </main>
        </BrowserRouter>
      </div>
    )
  }
}

ReactDom.render(<App />, document.getElementById('root'));
