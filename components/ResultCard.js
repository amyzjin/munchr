import React from 'react';
import {View, Text, Image, ListView, AsyncStorage} from 'react-native';
import styles from '../assets/styles'
import ResultPhotos from './ResultPhotos';
export default class ResultCard extends React.Component{

  constructor(){
    super()
    this.state=({
      restaurant:[],
      id: 0,
      pictures:[]
    })
  }

  componentDidMount() {
    AsyncStorage.getItem('mongoinfo')
    .then((result) => {
      var id = JSON.parse(result);
      this.setState({id:id});

      fetch('https://horizons-munchr.herokuapp.com/api/results/' + id,  {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          swipes: JSON.parse(JSON.stringify(this.props.cards)),
          lat: 37.77,
          long: -122.43,
        })
      }).then((response) => response.json())
      .then((responseJSON) => {
        this.setState({restaurant:[responseJSON.restaurant]})
        fetch('https://horizons-munchr.herokuapp.com/api/pictures/' + responseJSON.restaurant.id,  {
          method: 'GET'
        }).then((response) => response.json())
        .then((responseJSON) => {
          this.setState({pictures: responseJSON.pictures})
        });
      });


    })
  }

    render(){
      const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
      console.log(this.state.pictures);
      return (
        // <View style={{flex:1,backgroundColor:'white'}}>
        <ListView style={{backgroundColor:'white'}}
          dataSource={ds.cloneWithRows(this.state.restaurant)}
          renderRow={restaurant=>(

            <View style={styles.restaurantContainer}>
              <View style={styles.restaurantTextContainer}>
                <Text style={{flex:7,fontSize:20}}>
                  {restaurant.name}
                </Text>
                <Text style={{flex:1}}>
                  {restaurant.rating}/5
                </Text>
              </View>

              <View style={styles.restaurantText2}>
                <Text style={{flex:7}}>
                  {restaurant.location.address1}
                </Text>
                <Text style={{flex:1}}>
                  {restaurant.price}
                </Text>
              </View>

              <View style={styles.imageListContainer}>
                <ResultPhotos img={this.state.pictures}/>
              </View>
              <View style={styles.restaurantCuisine}>
                <Text style={{marginTop:10,marginBottom:10}}>
                  {restaurant.categories[0].title}
                </Text>
              </View>
            </View>
          )}
        />
      // </View>

        )
      }
    }
