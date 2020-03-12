import React, { Component } from 'react';

const NewMessage = React.createContext();

class NewMessageProvider extends Component{
  //Context state
  state={
    messages:[]
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
    const {messages} = this.state;
    const {setMessages} = this;
    const {addNewMessages} = this;
    const {clearMessages} = this;
    return (
      <NewMessage.Provider
      value = {{
        messages,
        setMessages,
        addNewMessages,
        clearMessages
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