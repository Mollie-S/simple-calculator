import React from 'react';
import Keypad from './Keypad';
import Display from './Display'


class Calculator extends React.Component {
  state = {
    previousValue: '',
    currentValue: '0',
    operator: ''
  }

  // handleChange = (e) => this.setState({currentValue: e.target.value});
  handleClick = (e) => {
    const {value, id} = e.target;
    const {previousValue, currentValue, operator} = this.state;
    
    if (currentValue === '0' && id !== 'decimal') {
      this.setState({currentValue: ''})
    } else if (currentValue === '0' && id === 'decimal') {
      this.setState({currentValue: '0.'})
    }

    if (id === 'clear') {
      this.setState({previousValue: '', currentValue: '0', operator: ''});
    } else if (/\d/g.test(value) || value === '.' ) {
        this.setState(prevState =>
          ({currentValue: prevState.currentValue.concat(value)}));
    } else if (id === 'add'
            || id === 'subtract'
            || id === 'multiply'
            || id === 'divide') {
        this.setState(prevState => {
          if (currentValue !== '') {
            return {
              currentValue: '',
              previousValue: prevState.currentValue,
              operator: value
            }
          } else {
            return {
              operator: value
            }
          }
        })
    }
    else if (value === '=') {
         this.setState({currentValue: eval(previousValue + operator + currentValue).toString()})
       }
  }

  render () {
    // console.log(this.props);
    return (
      <div className='calculator'>
        <Display value={this.state.currentValue===''? this.state.previousValue : this.state.currentValue} />
        <Keypad onClick={this.handleClick} />
      </div>
    );
  }
}

export default Calculator;
