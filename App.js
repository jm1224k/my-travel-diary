import React from "react";
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TextInput,
  Dimensions,
  Platform
} from "react-native";

const { height, width } = Dimensions.get("window");

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <Text style={styles.title}>여행 일지</Text>
      <View style={styles.card}>
        <TextInput style={styles.input}>여행 일정을 추가해 주세요</TextInput>
      </View>
    </View>
  );
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
    paddingTop: 80,
    fontWeight: "300",
    fontSize: 20
  },
  card: {
    backgroundColor: "#ececec",
    alignItems: "center",
    fontSize: 20,
    width: width - 40,
    height: 180,
    marginLeft: 20,
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
