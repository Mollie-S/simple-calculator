import React from 'react';
import Keypad from './Keypad';
import Display from './Display'


class Calculator extends React.Component {
  state = {
    previousValue: '',
    currentValue: '0',
    operand: ''
  }

  handleChange = (e) => this.setState({currentValue: e.target.value});
  handleClick = (e) => {
    const {id, value} = e.target
    const {previousValue, currentValue} = this.state

    if (currentValue === '0' && value !== '.') {
      this.setState({currentValue: ''})
    }

      if (id === 'clear') {
        this.setState({currentValue: '0'});
      } else {
          this.setState(prevNumber =>
             ({currentValue: prevNumber.currentValue.concat(value)}));
        }
  }


  render () {
    // console.log(this.props);
    return (
      <div className='calculator'>
        <Display value={this.state.currentValue} onChange={this.handleChange}/>
        <Keypad onClick={this.handleClick}/>
      </div>
    );
  }
}

export default Calculator;
