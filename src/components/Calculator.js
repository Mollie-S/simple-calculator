import React from 'react';
import Button from './Button'

function Calculator() {
  return (
    <div className='calculator'>
      <Button />
      <Button />
      <Button />
      <Button />
      <Button id='seven' value={'7'}/>
      <Button id='eight' value={'8'}/>
      <Button id='nine' value={'9'}/>
      <Button />
      <Button id='four' value={'4'}/>
      <Button id='five' value={'5'}/>
      <Button id='six' value={'6'}/>
      <Button />
      <Button id='one' value={'1'}/>
      <Button id='two' value={'2'}/>
      <Button id='three' value={'3'}/>
      <Button />
      <Button id='zero' value={'0'}/>
      <Button />
      <Button />
      <Button id='equals' value={'='}/>

      </div>
      );
    }


export default Calculator;
