import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const ComingSoon = ({ data }) => {
  return <Text style={styles.comingSoon}>Coming Soon....</Text>;
};

const styles = StyleSheet.create({
  comingSoon: {
    flex: 1,
  },
});

export default ComingSoon;
