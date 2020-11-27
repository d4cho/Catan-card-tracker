import React from 'react';
import classes from './MyHand.module.css';

const myHand = (props) => {
  const cards = props.cards.map((card, index) => {
    let id = null;

    switch (card) {
      case 'ore':
        id = 0;
        break;
      case 'wheat':
        id = 1;
        break;
      case 'sheep':
        id = 2;
        break;
      case 'wood':
        id = 3;
        break;
      case 'brick':
        id = 4;
        break;
      default:
        id = null;
    }

    return (
      <div
        className={[classes.MyHand, classes[card]].join(' ')}
        key={card + index}>
        <p>{card}</p>
        <button
          className={classes.Button}
          onClick={() => props.return(card, id, index)}>
          return
        </button>
      </div>
    );
  });

  return <div className={classes.Container}>{cards}</div>;
};

export default myHand;
