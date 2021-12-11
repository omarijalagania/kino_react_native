import React from "react";
import { View, Text } from "react-native";

const Hall = ({ navigation }) => {
  let chosenTime = navigation.getParam("time");
  return (
    <View>
      <Text>{chosenTime}</Text>
    </View>
  );
};

export default Hall;
