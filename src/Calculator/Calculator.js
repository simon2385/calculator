import React, { useState } from 'react';
import { evaluate } from 'mathjs';

import CalculatorInput from './CalculatorInput/CalculatorInput';
import CalculatorKeys from './CalculatorKeys/CalculatorKeys';
import CalculatorCard from '../UI/CalculatorCard';

const Calculator = () => {
  const [valueToRender, setValueToRender] = useState([]);
  let evaluatedValue;

  const onValueToRender = value => {
    setValueToRender(prevValue => {
      return [...prevValue, value].join('');
    });
  };

  const onRemoveAllValues = () => setValueToRender([]);
  const onRemoveLastValue = () => setValueToRender(valueToRender.slice(0, -1));

  const submitHandler = e => {
    evaluatedValue = evaluate(valueToRender.replaceAll('X', '*'));

    setValueToRender(evaluatedValue.toString());
  };
  

  return (
    <CalculatorCard>
      <CalculatorInput valueToRender={valueToRender} />
      <CalculatorKeys
        onValueToRender={onValueToRender}
        onRemoveAllValues={onRemoveAllValues}
        onRemoveLastValue={onRemoveLastValue}
        onSubmit={submitHandler}
      />
    </CalculatorCard>
  );
};

export default Calculator;
