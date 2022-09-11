import React from 'react';

import classes from './CalculatorCard.module.css';

const CalculatorCard = ({ children }) => {
  return <div className={classes['calculator__card']}>{children}</div>;
};

export default CalculatorCard;
