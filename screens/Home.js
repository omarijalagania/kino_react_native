import React from "react";
import { Text, StyleSheet, ScrollView, View } from "react-native";

import { useHttp } from "../hooks/http";

import NowInCinema from "../components/NowInCinema";
import ComingSoon from "../components/ComingSoon";
import Premiere from "../components/Premiere";
import Spinner from "../components/Spinner";
const Home = ({ navigation }) => {
  //Custom Hook
  const [isLoading, fetchedData] = useHttp(
    "https://kinosakartvelo.ge/admin-panel/api/v1/posters",
    []
  );

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      {fetchedData && (
        <ScrollView style={{ flexGrow: 1 }}>
          <View style={{ flexGrow: 1 }}>
            <Text style={styles.movieSectionPremiere}>Premieres</Text>
            <Premiere data={fetchedData} navigation={navigation} />
            <Text style={styles.movieSection}>Now in Cinema</Text>
            <NowInCinema data={fetchedData} navigation={navigation} />
            <Text style={styles.movieSectionSoon}>Coming Soon</Text>
            <ComingSoon data={fetchedData} navigation={navigation} />
          </View>
        </ScrollView>
      )}
    </>
  );
};

//Styles
const styles = StyleSheet.create({
  movieSection: {
    paddingTop: 40,
    marginBottom: -20,
    paddingLeft: 15,
    fontSize: 23,
    fontWeight: "bold",
    textAlign: "left",
  },
  movieSectionSoon: {
    paddingTop: -30,
    marginBottom: 30,
    paddingLeft: 15,
    fontSize: 23,
    fontWeight: "bold",
    textAlign: "left",
  },
  movieSectionPremiere: {
    paddingTop: 40,
    paddingLeft: 15,
    marginBottom: 30,
    fontSize: 23,
    fontWeight: "bold",
    textAlign: "left",
  },
});

export default Home;
