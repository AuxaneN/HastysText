import React, {Component} from 'react';
import uniqid from 'uniqid';
import store from 'store';

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
      isSelected: 0,
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
    const id = parseInt(e.target.parentNode.getAttribute('id'));
    this.state.isSelected === id ?
    this.setState({isSelected : this.state.isSelected })
    : this.setState({isSelected : id})
  }
  
  handleChange = (e) =>{
    const target = e.target;
    const name = target.name;
    this.setState({[name] : target.value});
  }

  handleSubmit = (e) => {
    const { addNewMessages} = this.context;
    const chat = {id: uniqid(), author: this.state.isSelected, day: this.state.day, time: this.state.time, content:this.state.message};
    addNewMessages(chat);
    e.preventDefault();
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
          <div className="submitBtn">
            <div className="mdsend">
              <MdSend />
            </div>
            <input type="submit" value=''/>
          </div>
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