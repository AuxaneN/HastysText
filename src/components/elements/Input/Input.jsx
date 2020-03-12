import React from 'react';

import './Input.scss';

export const Input = (props) => (

      <div className="input-wrapper">
        <label>{props.mainInfo}<em className="muted-text">{props.secondaryInfo}</em></label>
        <input
        name={props.inputName}
        className="input"
        type="text"
        onChange={props.click}
        value={props.value}
        />
      </div>
    )

export default Input;