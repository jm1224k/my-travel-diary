import React from "react";
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TextInput,
  Dimensions,
  Platform,
  ScrollView
} from "react-native";
import { AppLoading } from "expo";
import Trip from "./trip";
import { uuidv1 } from "uuid/v1";

const { height, width } = Dimensions.get("window");

export default class App extends React.Component {
  state = {
    newTrip: "",
    loadedTrip: false,
    trips: {}
  };
  componentDidMount = () => {
    this._loadTrip();
  };
  render() {
    const { newTrip, loadedTrip, trips } = this.state;
    if (!loadedTrip) {
      return <AppLoading />;
    }
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <Text style={styles.title}>여행 일지</Text>
        <View style={styles.card}>
          <TextInput
            style={styles.input}
            placeholder={"Add a new trip!"}
            value={newTrip}
            onChangeText={this._controlNewTrip}
            placeholderTextColor={"#999"}
            returnKeyType={"done"}
            onSubmitEditing={this._addTrip}
          />
          <ScrollView contentContainerStyle={styles.trip}>
            {Object.values(trips).map(trip => (
              <Trip key={trip.id} {...trip} deleteTrip={this._deleteTrip} />
            ))}
          </ScrollView>
        </View>
      </View>
    );
  }
  _controlNewTrip = text => {
    this.setState({
      newTrip: text
    });
  };
  _loadTrip = () => {
    this.setState({
      loadedTrip: true
    });
  };
  _addTrip = () => {
    const { newTrip } = this.state;
    if (newTrip !== "") {
      this.setState(prevState => {
        const uuidv1 = require("uuid/v1");
        const ID = uuidv1();
        const newTripObject = {
          [ID]: {
            id: ID,
            isCompleted: false,
            text: newTrip,
            createdAt: Date.now()
          }
        };
        const newState = {
          ...prevState,
          newTrip: "",
          trips: {
            ...prevState.trips,
            ...newTripObject
          }
        };
        return { ...newState };
      });
    }
  };
  _deleteTrip = id => {
    this.setState(prevState => {
      const trips = prevState.trips;
      delete trips[id];
      const newState = {
        ...prevState,
        ...trips
      };
      return { ...newState };
    });
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white"
  },
  title: {
    fontSize: 30,
    marginTop: 50,
    marginLeft: 50,
    marginBottom: 30,
    fontWeight: "400"
  },
  input: {
    color: "#535353",
    alignContent: "center",
    padding: 20,
    borderBottomColor: "#bbb",
    borderBottomWidth: 1,
    fontWeight: "300",
    fontSize: 25
  },
  trip: {
    alignItems: "center"
  },
  card: {
    backgroundColor: "#ececec",
    fontSize: 20,
    width: width - 40,
    marginLeft: 20,
    flex: 1,
    borderRadius: 5,
    ...Platform.select({
      ios: {
        shadowColor: "rgb(50, 50, 50)",
        shadowOpacity: 0.5,
        shadowRadius: 5,
        shadowOffset: {
          height: -1,
          width: 0
        }
      },
      android: {
        elevation: 3
      }
    })
  }
});
