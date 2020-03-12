import React, { Component } from 'react';
import NewMessage from '../../../context/NewMessage.context';

import './BubbleHolder.scss';

import { ChatBubble } from '../../elements/ChatBubble/ChatBubble';

import characters from '../../../data/characters/characters.json';

export class BubbleHolder extends Component {
  static contextType = NewMessage;

  
  
  render(){
    const msg = this.context.messages;
    return(
      <div className="bubble-holder">
        {msg.map( text => (
          <ChatBubble 
          key={text.id} 
          url={characters[text.author].imageUrl}
          {...text} />
        ))}
      </div>
    )
  }
}