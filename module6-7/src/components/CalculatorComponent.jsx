import React, { useState } from 'react';

function Calculator() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState('');

  const handleNum1Change = (e) => {
    setNum1(e.target.value);
  };

  const handleNum2Change = (e) => {
    setNum2(e.target.value);
  };

  const calculate = (operator) => {
    setResult('');

    if (num1 === '' || num2 === '') {
      setResult('Enter numbers first!');
      return;
    }

    const num1Value = parseFloat(num1);
    const num2Value = parseFloat(num2);
    let resultValue;

    switch (operator) {
      case '+':
        resultValue = num1Value + num2Value;
        break;
      case '-':
        resultValue = num1Value - num2Value;
        break;
      case '*':
        resultValue = num1Value * num2Value;
        break;
      case '/':
        resultValue = num1Value / num2Value;
        break;
      default:
        resultValue = 'Invalid operator';
        break;
    }

    setResult(resultValue);
  };

  const clearFields = () => {
    setNum1('');
    setNum2('');
    setResult('');
  };

  return (
    <>
      <h2>LISA'S REACT CALC</h2>
      <form>
        <label>
          #1:
          <input
            type="number"
            id="num-1"
            value={num1}
            onChange={handleNum1Change}
            placeholder="1st number here!"
          />
        </label>
        <br></br>
        <label>
          #2:
          <input
            type="number"
            id="num-2"
            value={num2}
            onChange={handleNum2Change}
            placeholder="2nd number here!!"
          />
        </label>
        <div>
          <button type="button" onClick={() => calculate('+')}>
            +
          </button>
          <button type="button" onClick={() => calculate('-')}>
            -
          </button>
          <button type="button" onClick={() => calculate('*')}>
            x
          </button>
          <button type="button" onClick={() => calculate('/')}>
            /
          </button>
          <br></br>
          <button type="button" onClick={clearFields}>
            c
          </button>
        </div>
        <input type="text" id="result" value={result} readOnly placeholder="Result" />
      </form>
    </>
  );
}

export default Calculator;
