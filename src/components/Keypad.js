import React from 'react';
import Button from './Button';

const calcButtons = [
  {
    id: 'clear', value: 'C', btnSymbol: 'C',
    style: {gridColumnStart: '1',
    gridColumnEnd: '3'}
  },
  {id: 'plus-minus', value: '', btnSymbol: '±'},
  {
    id: 'divide', value: '/', btnSymbol: '÷',
    style: {backgroundColor: '#696773'}
  },
  {id: 'seven', value: '7', btnSymbol: '7'},
  {id: 'eight', value: '8', btnSymbol: '8'},
  {id: 'nine', value: '9', btnSymbol: '9'},
  {
    id: 'multiply', value: '*', btnSymbol: '×',
    style: {backgroundColor: '#696773'}
  },
  {id: 'four', value: '4', btnSymbol: '4'},
  {id: 'five', value: '5', btnSymbol: '5'},
  {id: 'six', value: '6', btnSymbol: '6'},
  {
    id: 'subtract', value: '-', btnSymbol: '-',
    style: {backgroundColor: '#696773'}
  },
  {id: 'one', value: '1', btnSymbol: '1'},
  {id: 'two', value: '2', btnSymbol: '2'},
  {id: 'three', value: '3', btnSymbol: '3'},
  {
    id: 'add', value: '+', btnSymbol: '+',
    style: {backgroundColor: '#696773'}
  },
  {id: 'zero', value: '0', btnSymbol: '0'},
  {id: 'decimal', value: '.',  btnSymbol: '.'},
  {
    id: 'equals', value: '=', btnSymbol: '=',
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
