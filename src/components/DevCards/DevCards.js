import React from 'react';
import classes from './DevCards.module.css';

const devCards = (props) => {
  return (
    <div className={classes.DevCards}>
      <button
        className={classes.Button}
        onClick={props.shuffleClicked}
        disabled={props.canShuffle}>
        shuffle
      </button>
      DevCards: {props.quantity}
      <button
        className={classes.Button}
        onClick={props.takeClicked}
        disabled={props.canTake}>
        take!
      </button>
    </div>
  );
};

export default devCards;
