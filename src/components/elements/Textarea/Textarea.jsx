import React from 'react';

import './Textarea.scss';

export const Textarea =(props)=>(
      <>
        <textarea
        name={props.inputName}
        className="textarea"
        type="text"
        onChange={props.click}
        value={props.value}
        />
      </>
    )


export default Textarea;