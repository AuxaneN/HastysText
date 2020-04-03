import React, { Component } from 'react';

const NewMessage = React.createContext();

class NewMessageProvider extends Component{
  //Context state
  state={
    messages:[],
    characterList: []
  }

  setCharacterList = list =>{
    this.setState(() => ({characterList : [...this.state.characterList, ...list]}))
    console.log(this.state.characterList)
  }
  //Methods to update state
  setMessages = message =>{
    this.setState(() => ({messages : [...this.state.messages, ...message]}))
  }
  
  addNewMessages = message =>{
    this.setState(prevState => ({messages : [...this.state.messages, message]}))
  }
  // Delete individual messages

  // Modify a message

  // Clear all messages
  clearMessages = () => {
    this.setState(() =>( { messages : []}))
  }


  render(){
    const {children} = this.props;
    const {characterList} = this.state;
    const {messages} = this.state;
    const {setMessages} = this;
    const {addNewMessages} = this;
    const {clearMessages} = this;
    const {setCharacterList} = this;
    return (
      <NewMessage.Provider
      value = {{
        characterList,
        messages,
        setMessages,
        addNewMessages,
        clearMessages,
        setCharacterList
      }}
      >
        {children}
      </NewMessage.Provider>
    )
  }


}

export {NewMessageProvider};
export const NewMessageConsumer = NewMessage.Consumer;

export default NewMessage;