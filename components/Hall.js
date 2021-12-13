import React, { useState } from "react";
import { View, Text } from "react-native";

import SmallHall from "./SmallHall";

import moment from "moment";

const Hall = ({ navigation }) => {
  const [activeBtnS, setActiveBtnS] = useState([]);

  let chosenTime = navigation.getParam("time");
  let chosenDate = navigation.getParam("date");
  return (
    <View>
      <Text>{chosenTime}</Text>
      <Text>{moment(chosenDate).utc().local().format("DD.MM.YYYY")}</Text>
      <Text>
        {activeBtnS.map((place) => {
          return <Text>{`place ${place.place}, row ${place.row}, `}</Text>;
        })}
      </Text>
      <SmallHall activeBtnS={activeBtnS} setActiveBtnS={setActiveBtnS} />
    </View>
  );
};

export default Hall;
