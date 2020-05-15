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

    let performCalculations = () => {
      this.setState(prevState => {
        let {previousValue, currentValue, operator} = prevState;

        if (currentValue !== '' && operator !== '' && previousValue === '') {
          previousValue = currentValue;
        }

        if (currentValue !== '' && operator !== '' && previousValue !== '') {
          let num1 = parseFloat(previousValue);
          let num2 = parseFloat(currentValue);
          let result = mathOperations[prevState.operator](num1,num2);

          return {
            currentValue: '',
            previousValue: result.toString()
          }
        }
      });
    }

    let enterOperator = () => {
      performCalculations();

      this.setState(prevState => {
        const {previousValue, currentValue, operator} = prevState;

        if (currentValue !== '' && operator === '' && previousValue === '') {
          return {
            currentValue: '',
            previousValue: currentValue,
            operator: id
          }
        } else {
          return {
            operator: id
          }
        }
      });
    }

    let enterNumbers = () => {
      this.setState(prevState => {
        const {currentValue} = prevState;

        if (currentValue === '' || currentValue === '0') {
          if (id  === 'decimal') {
            return {
              currentValue: '0' + value
            }
          } else {
            return {
              currentValue: value
            }
          }
        } else {
          if (id  === 'decimal') {
            if (!currentValue.includes(value)) {
              return {
                currentValue: currentValue + value
              }
            }
          } else {
            return {
              currentValue: currentValue + value
            }
          }
        }
      });
    }

    let clear = () => {
      this.setState(prevState => {
        return {
          previousValue: '',
          currentValue: '0',
          operator: ''
        }
      });
    }

    let convertSign = () => {
      this.setState(prevState => {
        const {previousValue, currentValue} = prevState;

        if (currentValue !== '') {
          return {
            currentValue: (-parseFloat(currentValue)).toString()
          }
        } else if (previousValue !== ''){
          return {
            previousValue: (-parseFloat(previousValue)).toString()
          }
        }
      });
    }

    if (id === 'plus-minus') {
      convertSign();
    } else if (id === 'clear') {
      clear();
    } else if (id === 'equals') {
      performCalculations();
    } else if (id in mathOperations) {
      enterOperator();
    } else if (/\d/g.test(value) || id  === 'decimal') {
      enterNumbers();
    } else {
      console.log('Error! Unknown key.')
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
