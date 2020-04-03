import React from 'react';

import {CharacterIcon} from '../CharacterIcon/CharacterIcon';

import './ChatBubble.scss';

export const ChatBubble = (props) => (
  <div className={`chat-wrapper ${props.author === 'fDULsWag4Prntw6DLwx3' ? 'sender' : 'recipient'}`}>
    <CharacterIcon 
    imageUrl={props.url}
    name={props.author}/>
    <div className='chat-bubble'>
      <p>{props.content}</p>
      <div className="chat-tail">
        <svg width="63" height="21" viewBox="0 0 63 21" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 21H18H62.5V0H18C16 11.5 12.5 16.5 0 21Z" fill="#EEEEEE"/>
        </svg>
      </div>
    </div>
  </div>
)