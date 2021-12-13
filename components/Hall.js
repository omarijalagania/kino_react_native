import React from "react";
import { View, Text } from "react-native";

import SmallHall from "./SmallHall";

import moment from "moment";

const Hall = ({ navigation }) => {
  let chosenTime = navigation.getParam("time");
  let chosenDate = navigation.getParam("date");
  return (
    <View>
      <Text>{chosenTime}</Text>
      <Text>{moment(chosenDate).utc().local().format("DD.MM.YYYY")}</Text>
      <SmallHall />
    </View>
  );
};

export default Hall;
