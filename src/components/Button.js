import React from 'react';


function Button(props) {
  return (
      <button style={btnStyle}>{props.value}</button>
  );
}
const btnStyle = {
  textAlign: 'center',
  border: '1px solid #fff',
  borderRadius: '5px',
  color: '#fff',
  fontSize: '1.5em',
  backgroundColor: '#C8C8C7'

}


export default Button;
