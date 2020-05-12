import React from 'react';


function Button(props) {
  return (
      <button
        style={props.button.style}
        id={props.button.id}
        className='keypadButton'
        onClick={props.onClick}>{props.button.name}</button>
  );
}



export default Button;
