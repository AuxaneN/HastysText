import React, { Component } from 'react';

import './MessageDisplay.scss'

import { Phone } from '../Phone/Phone';
import {BubbleHolder} from '../../elements/BubbleHolder/BubbleHolder';

export class MessageDisplay extends Component {
  render(){
    return(
      <div className="message-display">
        <BubbleHolder />
        <Phone />
      </div>
    )
  }
}