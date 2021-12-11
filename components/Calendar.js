import React from "react";
import { StyleSheet, Text, View } from "react-native";
import CalendarPicker from "react-native-calendar-picker";
import moment from "moment";

function Calendar({ startDate, setStartDate }) {
  const onDateChange = (date) => {
    setStartDate(date);
  };
  return (
    <View style={styles.container}>
      <CalendarPicker startFromMonday={true} onDateChange={onDateChange} />

      <View styles={styles.textChosen}>
        <Text>
          არჩეული თარიღი:
          {moment(startDate).utc().local().format("DD.MM.YYYY")}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    marginTop: 100,
  },
  textChosen: {
    margin: 10,
  },
});

export default Calendar;
