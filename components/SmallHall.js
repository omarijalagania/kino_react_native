import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";

const SmallHall = () => {
  const [activeBtnS, setActiveBtnS] = useState([]);

  const chairs = [
    [
      { place: "1A", row: "8" },
      { place: "1B", row: "8" },
      { place: "2A", row: "8" },
      { place: "2B", row: "8" },
      { place: "3A", row: "8" },
      { place: "3B", row: "8" },
      { place: "3C", row: "8" },
      { place: "4A", row: "8" },
      { place: "4B", row: "8" },
      { place: "5A", row: "8" },
      { place: "5B", row: "8" },
    ],

    [
      { place: "1", row: "7" },
      { place: "2", row: "7" },
      { place: "3", row: "7" },
      { place: "4", row: "7" },
      { place: "5", row: "7" },
      { place: "6", row: "7" },
      { place: "7", row: "7" },
      { place: "8", row: "7" },
    ],
    [
      { place: "1", row: "6" },
      { place: "2", row: "6" },
      { place: "3", row: "6" },
      { place: "4", row: "6" },
      { place: "5", row: "6" },
      { place: "6", row: "6" },
      { place: "7", row: "6" },
      { place: "8", row: "6" },
    ],
    [
      { place: "1", row: "5" },
      { place: "2", row: "5" },
      { place: "3", row: "5" },
      { place: "4", row: "5" },
      { place: "5", row: "5" },
      { place: "6", row: "5" },
      { place: "7", row: "5" },
      { place: "8", row: "5" },
    ],
    [
      { place: "1", row: "4" },
      { place: "2", row: "4" },
      { place: "3", row: "4" },
      { place: "4", row: "4" },
      { place: "5", row: "4" },
      { place: "6", row: "4" },
      { place: "7", row: "4" },
      { place: "8", row: "4" },
    ],
    [
      { place: "1", row: "3" },
      { place: "2", row: "3" },
      { place: "3", row: "3" },
      { place: "4", row: "3" },
      { place: "5", row: "3" },
      { place: "6", row: "3" },
      { place: "7", row: "3" },
      { place: "8", row: "3" },
    ],
    [
      { place: "1", row: "2" },
      { place: "2", row: "2" },
      { place: "3", row: "2" },
      { place: "4", row: "2" },
      { place: "5", row: "2" },
      { place: "6", row: "2" },
      { place: "7", row: "2" },
      { place: "8", row: "2" },
    ],
    [
      { place: "1", row: "1" },
      { place: "2", row: "1" },
      { place: "3", row: "1" },
      { place: "4", row: "1" },
      { place: "5", row: "1" },
      { place: "6", row: "1" },
      { place: "7", row: "1" },
      { place: "8", row: "1" },
    ],
  ];

  const rowz = ["1", "2", "3", "4", "5", "6", "7", "8"];

  const activeChair = (place, row) => {
    setActiveBtnS({ place, row });
    // if (activeBtnS === data) {
    //   setActiveBtnS("");
    // }
    console.log(activeBtnS);
  };

  return (
    <SafeAreaView>
      <View style={styles.hallContanier}>
        {rowz.map((row, index) => {
          return (
            <View style={styles.row}>
              {chairs[index].map((chair) => {
                return (
                  <TouchableOpacity
                    onPress={activeChair.bind(null, chair.place, chair.row)}
                    key={Math.random(3) * 3}
                    style={styles.chair}
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
    backgroundColor: "blue",
  },
});
