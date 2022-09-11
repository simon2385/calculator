import React, { useState } from 'react';

import classes from './CalculatorInput.module.css';

const CalculatorInput = ({ valueToRender }) => {
  return (
    <div className={classes['input-box']}>
      <input
        className={classes.input}
        type="text"
        value={valueToRender.length === 0 ? '0' : valueToRender}
        readOnly
      />
    </div>
  );
};

export default CalculatorInput;
