import React, { Component } from 'react';
import NewMessage from '../../../context/NewMessage.context';
import firebase from '../../../firebase';


import './BubbleHolder.scss';

import { ChatBubble } from '../../elements/ChatBubble/ChatBubble';

// import characters from '../../../data/characters/characters.json';

export class BubbleHolder extends Component {
  constructor(props){
    super(props);
    this.state = {
      messages: ''
    }
  }
  static contextType = NewMessage;
  
  componentDidMount(){
    //  const characterList = this.context;
    const db = firebase.firestore();
    const messageList = {};
    // const imgList = new Map();
    
    db.collection("/conversations/6fUCfmN4dPlih8mBprFQ/message")
    .get()
    .then( docSnapshot => {
      docSnapshot.forEach((doc) => {
        messageList[doc.id] = doc.data();
        db.collection("characters")
        .doc(doc.data().author)
        .get()
        .then((character) => {
          messageList[doc.id].imageUrl = character.data().imageUrl;
          this.setState({messages : messageList});
        })
        // doc.data() is never undefined for query doc snapshots
       });
    })
  };

  render(){
    const msg = this.state.messages;
    return (
      <div className="bubble-holder">
        {Object.keys(msg).map( text =>{ 
          return (
          <ChatBubble 
          key={text} 
          url={msg[text].imageUrl}
          {...msg[text]} />
        )}
        )}
      </div>
    )
  }
}