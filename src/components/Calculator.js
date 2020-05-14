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
function convertPositiveToNegative(num2) {
   return  num2 = num2 * -1;
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
    let num1 = parseFloat(previousValue);
    let num2 = parseFloat(currentValue);

    if (currentValue === '0' && id !== 'decimal' && !(id in mathOperations)) {
      this.setState({currentValue: ''})
    } else if (currentValue === '0' && id in mathOperations) {
      this.setState({currentValue: currentValue})
    }

    if (id === 'clear') {
      this.setState({previousValue: '', currentValue: '0', operator: ''});
    } else if (id === 'plus-minus') {
        this.setState(prevState => {
          if (currentValue !== ''){
            return {
              currentValue: convertPositiveToNegative(num2).toString()
            }
          } else {
            return {
              previousValue: convertPositiveToNegative(num1).toString()
            }
          }

        })

    }else if (/\d/g.test(value) || id  === 'decimal') {
        this.setState(prevState => {
          if (currentValue !== '' && operator !== '' && previousValue === '') {
            return {
              currentValue: value,
              previousValue: '',
              operator: ''
            }
          } else if (id  === 'decimal' && currentValue.includes(value)) {
            return {currentValue: prevState.currentValue}
          } else {
            return {currentValue: prevState.currentValue.concat(value)}
          }
        });
    } else if (id in mathOperations) {
        this.setState(prevState => {
          if (currentValue !== '' && !currentValue.endsWith('.')) {
            return {
              currentValue: '',
              previousValue: prevState.currentValue,
              operator: id
            }
          } else if (currentValue.endsWith('.')) {
              return {
                currentValue: '',
                previousValue: prevState.currentValue.slice(0, -1),
              }
          } else {
            return {
              operator: id
            }
          }
        })
    } else if (id === 'equals') {
       if (currentValue !== '' && operator !== '' && previousValue !== '') {
         this.setState(prevState => {
            let result = mathOperations[prevState.operator](num1,num2);

            return {
              currentValue: result.toString(),
              previousValue: ''
            }
          })
        } else if (previousValue === '' && operator === '') {
           this.setState({currentValue: currentValue})
        } else if (currentValue === '' && operator !== '' && previousValue !== '') {
          this.setState(prevState =>
            ({currentValue: prevState.previousValue,
              previousValue: ''
            }))
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
