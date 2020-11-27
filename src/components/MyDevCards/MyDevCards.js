import React from 'react';
import classes from './MyDevCards.module.css';

const myDevCards = (props) => {
  console.log(props.used);
  return (
    <div className={classes.Container}>
      <div className={[classes.MyDevCards, classes[props.card]].join(' ')}>
        {props.card}
        <button
          className={classes.Button}
          onClick={() => props.clicked(props.index)}
          disabled={props.used}>
          {props.used ? 'USED!' : 'USE!'}
        </button>
      </div>
    </div>
  );
};

export default myDevCards;
