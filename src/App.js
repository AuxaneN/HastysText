import React, { Component } from 'react';
import {NewMessageProvider} from './context/NewMessage.context';

import { Header } from './components/layout/Header/Header';
import Setup from './components/layout/Setup/Setup';
import {MessageDisplay} from './components/layout/MessageDisplay/MessageDisplay';


import './App.scss';

class App extends Component{
  constructor(){
    super();
    this.state = {
      messages: ''
    }
  }

  render(){
    return (
    <NewMessageProvider value={this.state.messages}>
      <div className="App">
        <Header />
        <section className="content">
          <MessageDisplay />
          <Setup />
        </section>
      </div>
    </NewMessageProvider>
    );
  }
}

export default App;
