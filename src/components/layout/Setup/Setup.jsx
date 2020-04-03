import React, {Component} from 'react';
import store from 'store';
import firebase from '../../../firebase'

import NewMessage from '../../../context/NewMessage.context';
import './Setup.scss';


import { MessageSetup } from '../MessageSetup/MessageSetup';
import { CharacterPicker } from '../CharacterPicker/CharacterPicker';
import { Button } from '../../elements/Button/Button';

import { MdSend } from 'react-icons/md';
  


class Setup extends Component{
  constructor(){
    super()
    
    this.state = {
      isSelected: 'fDULsWag4Prntw6DLwx3',
      day: '',
      time: '',
      message:''
    }
  }
  
  static contextType = NewMessage;
  //Save to localStorages
  saveMessages = () => {
    store.set('chatlog', this.context.messages);
    console.log('Log saved', store.get('chatlog'));
    alert('Chat saved')
  }
  
  checkForStorage = () => {
    const {messages, setMessages} = this.context;
    if (store.get('chatlog')){
      const x =store.get('chatlog');
      const newState = [...messages, ...x ];
      console.log(newState);
      setMessages(newState);
    } 
  }

  componentDidMount() {
      this.checkForStorage();
  } 

  handleCharClick = (e) => {
    const id = e.target.parentNode.getAttribute('id');
    this.state.isSelected === id ?
    this.setState({isSelected : this.state.isSelected })
    : this.setState({isSelected : id});
  }
  
  handleChange = (e) =>{
    const target = e.target;
    const name = target.name;
    this.setState({[name] : target.value});
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const db = firebase.firestore();
    // const { addNewMessages } = this.context;
    const messageRef = db.collection('conversations/6fUCfmN4dPlih8mBprFQ/message');
    const chat = { author: this.state.isSelected, day: this.state.day, time: this.state.time, content:this.state.message};
    messageRef.add(chat);
    // addNewMessages(chat);
    this.setState({ message : ''});
  }

  clearChat = () => {
    const { clearMessages} = this.context;
    store.remove('chatlog');
    clearMessages();
  }
  
  render(){
    return(
      <>
      <form className="setup" onSubmit={this.handleSubmit}>
        <p className="muted-text">
          Message setup
        </p>
        <div className="msg-setup">
          <CharacterPicker 
            click={this.handleCharClick}
            class={this.state.isSelected}
          />
          <MessageSetup 
          change={this.handleChange}
          {...this.state}
          />
          <button className="submitBtn" type="submit" >
            <div className="mdsend">
              <MdSend />
            </div>
          </button>
        </div>
        <div className="button-wrapper">
          <Button
          class="primary"
          type="button"
          text="Save"
          click={this.saveMessages}/>
          <Button 
          class="danger"
          type="button"
          text="Clear chat"
          click={this.clearChat}/>
        </div>
      </form>
      </>
    )
  }
}

export default Setup