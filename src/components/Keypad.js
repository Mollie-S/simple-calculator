import React from 'react';
import Button from './Button';

const calcButtons = [
  {
    id: 'clear', name: 'C',
    style: {gridColumnStart: '1',
    gridColumnEnd: '3'}
  },
  {id: 'plus-minus', name: '±'},
  {
    id: 'divide', name: '÷',
    style: {backgroundColor: '#696773'}
  },
  {id: 'seven', name: '7'},
  {id: 'eight', name: '8'},
  {id: 'nine', name: '9'},
  {
    id: 'multiply', name: '×',
    style: {backgroundColor: '#696773'}
  },
  {id: 'four', name: '4'},
  {id: 'five', name: '5'},
  {id: 'six', name: '6'},
  {
    id: 'subtract', name: '-',
    style: {backgroundColor: '#696773'}
  },
  {id: 'one', name: '1'},
  {id: 'two', name: '2'},
  {id: 'three', name: '3'},
  {
    id: 'add', name: '+',
    style: {backgroundColor: '#696773'}
  },
  {id: 'zero', name: '0'},
  {id: 'decimal', name: '.'},
  {
    id: 'equals', name: '=',
    style: {gridColumnStart: '3',
    gridColumnEnd: '5',
    backgroundColor: '#696773'}
  }
]

function Keypad(props) {

  const buttons = calcButtons.map(button =>
     (<Button
       key={button.id}
       style={button.style}
       button={button}
       onClick={props.onClick} />
   ));

  return (
    <div className='keypad'>
     {buttons}
    </div>
  )
}

export default Keypad;
