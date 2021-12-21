import React, { useState, useEffect } from "react";

import { chairs } from "../halls/smallHallData";

import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";

const SmallHall = ({ activeBtnS, setActiveBtnS }) => {
  const [activeClass, setActiveClass] = useState([]);
  const [occupied, setOccupied] = useState("");

  //number of rows in cinema
  const rowz = ["1", "2", "3", "4", "5", "6", "7", "8"];

  const activeChair = (id, place, row) => {
    setActiveBtnS(activeBtnS.concat({ place, row }));
    setActiveClass([...activeClass, id]);
  };

  useEffect(() => {
    rowz.map((item, index) => {
      chairs[index].map((chair) => {
        const seats = activeClass.filter(
          (item) => item === chair.place + chair.row
        );
        console.log(seats);
      });
    });
  }, [activeClass]);

  return (
    <SafeAreaView>
      <View style={styles.hallContanier}>
        {rowz.map((row, index) => {
          return (
            <View key={Math.random(2) * 2} style={styles.row}>
              {chairs[index].map((chair) => {
                const seats = activeClass.filter(
                  (item) => item === chair.place + chair.row
                );

                return (
                  <TouchableOpacity
                    onPress={activeChair.bind(
                      null,
                      chair.place + chair.row,
                      chair.place,
                      chair.row
                    )}
                    key={Math.random(3) * 3}
                    style={seats[0] ? styles.activeBtn : styles.chair}
                  >
                    <Text>{chair.place}</Text>
                  </TouchableOpacity>
                );
              })}
            </View>
          );
        })}
      </View>
    </SafeAreaView>
  );
};

export default SmallHall;

//styles

const styles = StyleSheet.create({
  hallContanier: {},
  row: {
    padding: 2,
    flexDirection: "row",
    justifyContent: "center",
  },

  chair: {
    width: 30,
    height: 30,
    margin: 3,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "orange",
  },
  activeBtn: {
    width: 30,
    height: 30,
    margin: 3,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "red",
  },
});
