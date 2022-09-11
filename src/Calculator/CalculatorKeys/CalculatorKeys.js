import React from 'react';

import classes from './CalculatorKeys.module.css';

const CalculatorKeys = ({
  onValueToRender,
  onRemoveAllValues,
  onRemoveLastValue,
  onSubmit,
}) => {
  const keysNumbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
  const zeroAndPoint = ['0', '.'];
  const keysActions = ['CE', 'C', ' / ', ' X ', ' - ', ' + '];
  const keysActionEqual = ['='];

  const keysToRenderFunc = btns => {
    let keyClasses;
    let buttonType;
    return btns.map(btn => {
      if (btn === '0' || btn === '.' || btn === '=') {
        keyClasses = classes['key-doublewidth'];
      } else {
        keyClasses = classes['key-number'];
      }

      buttonType = btn === '=' ? 'submit' : 'button';

      const hitedKeyHandler = e => {
        e.preventDefault();

        if (btn !== 'CE' || btn !== 'C' || btn !== '=') onValueToRender(btn);
        if (btn === 'C') onRemoveAllValues();
        if (btn === 'CE') onRemoveLastValue();
        if (btn === '=') onSubmit();
      };

      return (
        <div key={Math.random()} className={classes['key-container']}>
          <button
            onClick={hitedKeyHandler}
            className={keyClasses}
            type={buttonType}
          >
            {btn}
          </button>
        </div>
      );
    });
  };

  const keysToRenderNumbers = keysToRenderFunc(keysNumbers);
  const keysToRenderZeroAndPoint = keysToRenderFunc(zeroAndPoint);
  const keysToRenderActions = keysToRenderFunc(keysActions);
  const keysToRenderEqual = keysToRenderFunc(keysActionEqual);

  return (
    <div className={classes['keys-container']}>
      <div className={classes['keys-container--numbers']}>
        <div className={classes['keys-container--numbers-one-to-nine']}>
          {keysToRenderNumbers}
        </div>
        <div className={classes['keys-container--zero-and-point']}>
          {keysToRenderZeroAndPoint}
        </div>
      </div>

      <div className={classes['keys-container--actions']}>
        <div className={classes['keys--actions']}>{keysToRenderActions}</div>
        <div className={classes['keys--actions-equal']}>
          {keysToRenderEqual}
        </div>
      </div>
    </div>
  );
};

export default CalculatorKeys;
