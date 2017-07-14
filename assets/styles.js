import {
  Dimensions
} from 'react-native';

const themeColor = "#ff3333";
const { width: windowWidth, height: windowHeight } = Dimensions.get('window');

function wp(percentage) {
    const value = (percentage * windowWidth) / 100;
    return Math.round(value);
}

function hp(percentage) {
  const value = (percentage * windowHeight) / 100;
  return Math.round(value);
}

const navbarHeight = 70;
const votesHeight = 70;


export default {
  windowHeight: windowHeight,
  windowWidth: windowWidth,

  navbar: {
    backgroundColor: 'lightgrey',
    width: windowWidth,
    height: navbarHeight,
    position: 'absolute',
    top: 0,
    // display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'center',
    padding: 10
  },

  menuButton: {
    width: navbarHeight - 10*2,
    height: navbarHeight - 10*2,
    backgroundColor: 'white',
    borderRadius: navbarHeight/2 - 10,
    borderColor: 'darkgrey',
    borderWidth: 2
  },

  logoText: {
    color: 'darkgrey',
    fontStyle: 'italic',
    fontSize: 24
  },

  loginButton: {
    width: 150,
    height: 45,
    backgroundColor: "#3b5998",
    color: 'white'
  },

  carouselContainer: {
    width: windowWidth,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },

  appContainer: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  cardsContainer: {
    top: navbarHeight,
    height: windowHeight - navbarHeight,
    // width: windowWidth,
    // height: hp(60),
    borderWidth: 1,
    // borderColor: 'red',
    // backgroundColor: 'pink'
  },

  card: {
    justifyContent: 'center',
    alignItems: 'center',
    width: windowWidth,
    height: hp(75),
    padding: 10,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: 'darkgrey'
  },

  cardImage: {
    flex: 5,
    width: '95%',
    borderColor: 'darkgrey',
    borderWidth: 2,
    borderRadius: 10
  },

  cardTitle: {
    flex: 1,
    fontSize: 24
  }
};
