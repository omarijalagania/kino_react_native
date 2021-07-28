import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
const MovieFullDesc = ({ navigation }) => {
  let navigationOptions = { title: 'item.GEO.title' };
  let item = navigation.getParam('item');
  return (
    <Text style={styles.comingSoon}>MovieFullDesc...{item.GEO.title}</Text>
  );
};

const styles = StyleSheet.create({
  comingSoon: {
    flex: 1,
  },
});

export default MovieFullDesc;
