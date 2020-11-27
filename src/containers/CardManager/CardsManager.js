import React, { Component } from 'react';
import ResourceCards from '../../components/ResourceCards/ResourceCards';
import Aux from '../../hoc/Auxiliary/Auxiliary';
import classes from './CardsManager.module.css';
import MyHand from '../../components/MyHand/MyHand';
import MyDevCards from '../../components/MyDevCards/MyDevCards';
import DevCards from '../../components/DevCards/DevCards';

class CardsManager extends Component {
  state = {
    resCards: [
      { type: 'ore', quantity: 19, availability: false },
      { type: 'wheat', quantity: 19, availability: false },
      { type: 'sheep', quantity: 19, availability: false },
      { type: 'wood', quantity: 19, availability: false },
      { type: 'brick', quantity: 19, availability: false }
    ],
    myCards: [],
    shuffledDevCards: [],
    unshuffledDevCards: [
      { type: 'knight', quantity: 14 },
      { type: 'victorypoint', quantity: 5 },
      { type: 'yearofplenty', quantity: 2 },
      { type: 'roadbuilding', quantity: 2 },
      { type: 'monpoly', quantity: 2 }
    ],
    quantity: 25,
    canShuffle: false,
    canTake: true,
    myDevCards: [],
    devCardUsed: false
  };

  takeResCardHandler = (type, index) => {
    if (this.state.resCards[index].quantity <= 1) {
      const updatedResCards = this.state.resCards;
      updatedResCards[index].availability = true;
      this.setState({
        resCards: updatedResCards
      });
    }
    const updatedCount = this.state.resCards[index].quantity - 1;
    const updatedResCards = this.state.resCards;
    updatedResCards[index].quantity = updatedCount;

    const cardsInHand = this.state.myCards;
    cardsInHand.push(type);

    this.setState({
      resCards: updatedResCards,
      myCards: cardsInHand
    });
  };

  returnResCardHandler = (type, id, index) => {
    console.log(type, id, index);

    const updatedResCards = this.state.resCards;
    updatedResCards[id].quantity = this.state.resCards[id].quantity + 1;

    const updatedMyCards = this.state.myCards;
    updatedMyCards.splice(index, 1);

    this.setState({
      resCards: updatedResCards,
      myCards: updatedMyCards
    });
  };

  shuffleDevCardsHandler = () => {
    const devDeck = [];
    this.state.unshuffledDevCards.forEach((devCard) => {
      for (let i = 0; i < devCard.quantity; i++) {
        devDeck.push(devCard.type);
      }
    });
    console.log(devDeck);

    let beforeShuffle = devDeck;
    let afterShuffle = null;
    for (let i = beforeShuffle.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));

      [beforeShuffle[i], beforeShuffle[j]] = [
        beforeShuffle[j],
        beforeShuffle[i]
      ];
      afterShuffle = beforeShuffle;
    }
    alert('dev cards have been shuffled');
    console.log(afterShuffle);
    this.setState({
      shuffledDevCards: afterShuffle,
      canShuffle: true,
      canTake: false
    });
  };

  takeDevCardHandler = () => {
    const newMyDevCards = this.state.myDevCards;
    newMyDevCards.push({
      devCard: this.state.shuffledDevCards[0],
      devCardUsed: false
    });

    const newDevCards = this.state.shuffledDevCards;
    newDevCards.shift();

    const newQuantity = this.state.quantity - 1;

    let canTake = this.state.quantity < 2 ? !this.state.canTake : null;

    this.setState({
      myDevCards: newMyDevCards,
      shuffledDevCards: newDevCards,
      quantity: newQuantity,
      canTake: canTake
    });
  };

  usedDevCardHandler = (index) => {
    console.log('dev card used');
    let currentDevCards = [...this.state.myDevCards];
    currentDevCards[index].devCardUsed = true;
    this.setState({
      myDevCards: currentDevCards
    });
  };

  render() {
    console.log(this.state.myDevCards);
    return (
      <Aux>
        <div className={classes.CardsManager}>
          Resource Cards
          <ResourceCards
            cards={this.state.resCards}
            taken={this.takeResCardHandler}
          />
        </div>
        <DevCards
          shuffleClicked={this.shuffleDevCardsHandler}
          canShuffle={this.state.canShuffle}
          takeClicked={this.takeDevCardHandler}
          canTake={this.state.canTake}
          quantity={this.state.quantity}
        />
        <header className={classes.CardsManager}>Cards in My Hand</header>
        <div>
          <MyHand
            cards={this.state.myCards}
            return={this.returnResCardHandler}
          />
        </div>
        <header className={classes.CardsManager}>My Dev Cards</header>
        <div
          style={{
            display: 'flex',
            justifyContent: 'flex-start'
          }}>
          {this.state.myDevCards.map((devCard, i) => (
            <MyDevCards
              key={i}
              card={devCard.devCard}
              clicked={this.usedDevCardHandler}
              used={devCard.devCardUsed}
              index={i}
            />
          ))}
        </div>
      </Aux>
    );
  }
}

export default CardsManager;
