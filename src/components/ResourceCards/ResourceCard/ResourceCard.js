import React from 'react';
import classes from './ResourceCard.module.css';

const resourceCard = (props) => {
  const status = props.cantTake ? `No more ${props.type}!` : 'take!';
  return (
    <div className={[classes.ResourceCard, classes[props.type]].join(' ')}>
      <p>
        {props.type}: {props.quantity}
      </p>
      <button
        className={classes.Button}
        onClick={props.clicked}
        disabled={props.cantTake}>
        {status}
      </button>
    </div>
  );
};

export default resourceCard;
