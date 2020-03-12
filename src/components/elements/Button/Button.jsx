import React from 'react';

import './Button.scss';

export const Button = (props) => (
  <input
    className={`button ${props.class}`}
    type={props.type}
    value={props.text}
    onClick={props.click}/>
)