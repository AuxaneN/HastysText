import React, { Component } from 'react';
import NewMessage from '../../../context/NewMessage.context';
import firebase from '../../../firebase';

import {CharacterIcon} from '../../elements/CharacterIcon/CharacterIcon';
// import characters from '../../../data/characters/characters.json';

import './CharacterPicker.scss';

export class CharacterPicker extends Component{
  constructor(props){
    super(props);
    this.state = {
      characters : []
    }
  }
  static contextType = NewMessage;
  componentDidMount(){
      const db = firebase.firestore();
      const newState = [];
      db.collection("characters").get().then(function(querySnapshot) {
      querySnapshot.forEach(function(doc) {
          newState.push({id:doc.id,name:doc.data().name, imageUrl: doc.data().imageUrl})
          // doc.data() is never undefined for query doc snapshots
      });
    }).then( () => {
      this.setState({characters :[...this.state.characters, ...newState]})
      const {setCharacterList} = this.context;
      setCharacterList(newState);
    })
  }
  render(){
    return(
      <>
      <p>Character selection</p>
      <div className="character-grid">
        {
        this.state.characters.map( character => (
          <CharacterIcon
          onClick={this.props.click}
          class={this.props.class === character.id? 'active' : 'inactive'}
          key={character.id}
          id={character.id}
          {...character}
          />
        ))
        }
      </div>
      </>
    )
  }
}