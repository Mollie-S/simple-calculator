import React from 'react';
import Keypad from './Keypad';
import Display from './Display'

const mathOperations =
{
  'add': (num1, num2) => num1 + num2,
  'subtract': (num1, num2) => num1 - num2,
  'multiply': (num1, num2) => num1 * num2,
  'divide': (num1, num2) => num1 / num2
}

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
      this.setState({currentValue: '0'})
    }

    if (id === 'clear') {
      this.setState({previousValue: '', currentValue: '0', operator: ''});
    } else if (/\d/g.test(value) || id  === 'decimal' ) {
        this.setState(prevState =>
          ({currentValue: prevState.currentValue.concat(value)}));
    } else if (id in mathOperations) {
        this.setState(prevState => {
          if (currentValue !== '') {
            return {
              currentValue: '',
              previousValue: prevState.currentValue,
              operator: id
            }
          } else {
            return {
              operator: id
            }
          }
        })
    }
    else if (id === 'equals') {
       if (previousValue !== '' && operator !== '' && currentValue !== '') {
         this.setState(prevState => {
          let num1 = parseFloat(prevState.previousValue);
          let num2 = parseFloat(prevState.currentValue);
          let result = mathOperations[prevState.operator](num1,num2);

           return {currentValue: result.toString(),
                   previousValue: prevState.currentValue}
         })
       } else if (previousValue === '' && operator === '') {
         this.setState({currentValue: currentValue})
       } else if (previousValue !== '' && operator !== '' && currentValue === '') {
         this.setState(prevState =>
            ({currentValue: prevState.previousValue,
              previousValue: prevState.previousValue}))

       }

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
