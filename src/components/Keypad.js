import React from 'react';
import Button from './Button';

const calcButtons = [
  {id: 'clear', name: 'C'},
  {id: 'divide', name: '÷'},
  {id: 'seven', name: '7'},
  {id: 'eight', name: '8'},
  {id: 'nine', name: '9'},
  {id: 'multiply', name: '×'},
  {id: 'four', name: '4'},
  {id: 'five', name: '5'},
  {id: 'six', name: '6'},
  {id: 'subtract', name: '-'},
  {id: 'one', name: '1'},
  {id: 'two', name: '2'},
  {id: 'three', name: '3'},
  {id: 'add', name: '+'},
  {id: 'zero', name: '0'},
  {id: 'decimal', name: '.'},
  {id: 'equals', name: '='}
]

function Keypad(props) {

  const buttons = calcButtons.map(button =>
     (<Button key={button.id} button={button} onClick={props.onClick} />
   ));

  return (
    <div className='keypad'>
     {buttons}
    </div>
  )
}

export default Keypad;
