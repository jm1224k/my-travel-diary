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
import Trip from "./trip";

const { height, width } = Dimensions.get("window");

export default class App extends React.Component {
  state = {
    newTrip: ""
  };
  render() {
    const { newTrip } = this.state;
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <Text style={styles.title}>여행 일지</Text>
        <View style={styles.card}>
          <TextInput
            style={styles.input}
            placeholder={"new Trip"}
            value={newTrip}
            onChangeText={this._controlNewTrip}
            placeholderTextColor={"#999"}
            returnKeyType={"done"}
          />
          <ScrollView>
            <Trip />
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
