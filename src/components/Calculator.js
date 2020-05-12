import React from 'react';
import Keypad from './Keypad';
import Display from './Display'


class Calculator extends React.Component {
  state = {
    value: '32'
  }

  handleChange = (e) => this.setState({value: e.target.value});
  handleClick = (e) => {
    this.setState({value: e.target.id});
  }


  render () {
    console.log(this.props);
    return (
      <div className='calculator'>
        <Display value={this.state.value} onChange={this.handleChange}/>
        <Keypad onClick={this.handleClick}/>
      </div>
    );
  }
}

export default Calculator;
