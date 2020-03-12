import React from 'react';
// import NewMessage from '../../../context/NewMessage.context';

import Input from '../../elements/Input/Input';
import Textarea from '../../elements/Textarea/Textarea';

import './MessageSetup.scss';

export const MessageSetup = (props) =>(
      <>
      <p>Message details</p>
      <div className="message-setup">
          <Input 
          inputName="day"
          mainInfo="Day" 
          secondaryInfo="(MM/DD/YYYY)"
          click={props.change}
          value={props.day}
          />
          <Input
          inputName="time"
          mainInfo="Time" 
          secondaryInfo="(HH:MM)"
          click={props.change}
          value={props.time}
          />
          <Textarea 
          inputName="message"
          click={props.change}
          value={props.message}
          />
      </div>
    </>
    )