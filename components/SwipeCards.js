import React from 'react';
import { Text, View, Image } from 'react-native';
import SwipeCards from 'react-native-swipe-cards';

import styles from '../assets/styles';

const Card = ({ text, image }) => (
  <View style={styles.card}>
    <Image
      style={styles.cardImage}
      source={{uri: image}}
      shadowOpacity={1}
     />
    <View style={{ flex: 1 }}></View>
  </View>
);

const NoMoreCards = () => (
  <View>
    <Text style={{
      fontSize: 32
    }}>Loading more cards...</Text>
  </View>
);

export default class SwipeCardsMunchr extends React.Component {
  constructor() {
    super();
    this.state = {
      cards: [
        {
          id: '34UY98439RU4',
          text: 'Pad Thai',
          image: 'http://static.asiawebdirect.com/m/bangkok/portals/bangkok-com/homepage/magazine/best-pad-thai/pagePropertiesImage/padthai-1.jpg'
        },
        {
          id: '9Y434U982T4',
          text: 'Dumplings',
          image: 'http://i.ndtvimg.com/i/2015-01/dumplings_625x350_81421835686.jpg'
        },
        {
          id: '9HU349H8340',
          text: 'Pizza',
          image: 'https://static.pexels.com/photos/2232/vegetables-italian-pizza-restaurant.jpg'
        },
      ]
    };
  }

  handleYup(card) {

  }

  handleNope(card) {
  }

  render() {
    return (
      <View style={styles.cardsContainer}>
        <SwipeCards
          cards={this.state.cards}
          renderCard={cardData => <Card {...cardData} />}
          renderNoMoreCards={() => this.props.navigator.navigate("Results")}
          yupText="YUM"
          nopeText="EW"
          handleYup={card => this.handleYup(card)}
          handleNope={card => this.handleNope(card)}
        />
      </View>
    );
  }
}
