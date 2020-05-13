import React from 'react';


function Button(props) {
  return (
      <button
        value={props.button.value}
        style={props.button.style}
        id={props.button.id}
        className='keypadButton'
        onClick={props.onClick}>{props.button.btnSymbol}</button>
  );
}



export default Button;
