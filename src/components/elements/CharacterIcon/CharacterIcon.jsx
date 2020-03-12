import React, {Component} from 'react';
import './CharacterIcon.scss';

export class CharacterIcon extends Component{
  render(){
    return(
      <div 
      id={this.props.id}
      key={this.props.id}
      className={`character-icon ${this.props.class}`}
      onClick={this.props.onClick}
      >
      <img src={this.props.imageUrl} alt={this.props.name}/>
      </div>
    )
  }
}