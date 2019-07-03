import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions
} from "react-native";

const { height, width } = Dimensions.get("window");
export default class Trip extends Component {
  state = {
    isEditing: false,
    isCompleted: false
  };
  render() {
    const { isCompleted } = this.state;
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this._toggleComplete}>
          <View
            style={[
              styles.circle,
              isCompleted ? styles.completedCircle : styles.uncompletedCircle
            ]}
          />
        </TouchableOpacity>
        <Text style={styles.text}>Ongoing trip</Text>
      </View>
    );
  }

  _toggleComplete = () => {
    this.setState(prevState => {
      return {
        isCompleted: !prevState.isCompleted
      };
    });
  };
}

const styles = StyleSheet.create({
  container: {
    width: width - 60,
    borderBottomColor: "#bbb",
    borderBottomWidth: StyleSheet.hairlineWidth,
    flexDirection: "row",
    alignItems: "center"
  },
  circle: {
    width: 35,
    height: 35,
    borderRadius: 100,
    borderWidth: 5,
    marginRight: 30
  },
  completedCircle: {
    borderColor: "red"
  },
  uncompletedCircle: {
    borderColor: "green"
  },
  text: {
    fontSize: 20,
    fontWeight: "600",
    marginVertical: 20
  }
});
