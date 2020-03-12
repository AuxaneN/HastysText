import React from 'react';

import {CharacterIcon} from '../../elements/CharacterIcon/CharacterIcon';
import characters from '../../../data/characters/characters.json';

import './CharacterPicker.scss';


export const CharacterPicker = (props) => (
      <>
      <p>Character selection</p>
      <div className="character-grid">
        { 
        characters.map( character => (
          <CharacterIcon
          onClick={props.click}
          class={props.class === character.id? 'active' : 'inactive'}
          key={character.id}
          id={character.id}
          {...character}
          />
        ))
        }
      </div>
      </>
    )