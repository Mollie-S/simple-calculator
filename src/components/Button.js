import React from 'react';


function Button(props) {
  return (
      <button
        id={props.button.id}
        className='keypadButton'
        onClick={props.onClick}>{props.button.name}</button>
  );
}



export default Button;
