import React from 'react';
import ResourceCard from './ResourceCard/ResourceCard';
import classes from './ResourceCards.module.css';

const resourceCards = (props) => {
  const resCards = props.cards.map((resCard, index) => (
    <ResourceCard
      key={resCard.type + index}
      type={resCard.type}
      quantity={resCard.quantity}
      clicked={() => props.taken(resCard.type, index)}
      cantTake={resCard.availability}
    />
  ));

  return <div className={classes.ResourceCards}>{resCards}</div>;
};

export default resourceCards;
