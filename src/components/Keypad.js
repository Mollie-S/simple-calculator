import React from 'react';
import Button from './Button';

const calcButtons = [
  {
    id: 'clear', value: 'C',
    style: {gridColumnStart: '1',
    gridColumnEnd: '3'}
  },
  {id: 'plus-minus', value: '±'},
  {
    id: 'divide', value: '÷',
    style: {backgroundColor: '#696773'}
  },
  {id: 'seven', value: '7'},
  {id: 'eight', value: '8'},
  {id: 'nine', value: '9'},
  {
    id: 'multiply', value: '×',
    style: {backgroundColor: '#696773'}
  },
  {id: 'four', value: '4'},
  {id: 'five', value: '5'},
  {id: 'six', value: '6'},
  {
    id: 'subtract', value: '-',
    style: {backgroundColor: '#696773'}
  },
  {id: 'one', value: '1'},
  {id: 'two', value: '2'},
  {id: 'three', value: '3'},
  {
    id: 'add', value: '+',
    style: {backgroundColor: '#696773'}
  },
  {id: 'zero', value: '0'},
  {id: 'decimal', value: '.'},
  {
    id: 'equals', value: '=',
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
