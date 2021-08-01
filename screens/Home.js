import React, { useEffect, useState } from 'react';
import { Text, StyleSheet, ScrollView, View } from 'react-native';
import axios from 'axios';
import NowInCinema from '../components/NowInCinema';
import ComingSoon from '../components/ComingSoon';
import Premiere from '../components/Premiere';
import Spinner from '../components/Spinner';
const Home = ({ navigation }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  //Api Request All movie data
  const apiCall = async () => {
    try {
      setLoading(true);
      const result = await axios(
        `https://kinosakartvelo.ge/admin-panel/api/v1/posters`
      );
      setData(result.data.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  //call Api Request
  useEffect(() => {
    apiCall();
  }, []);

  return (
    <>
      {loading && <Spinner />}
      {!loading && (
        <ScrollView style={{ flexGrow: 1 }}>
          <View style={{ flexGrow: 1 }}>
            <Text style={styles.movieSectionPremiere}>Premieres</Text>
            <Premiere data={data} navigation={navigation} />
            <Text style={styles.movieSection}>Now in Cinema</Text>
            <NowInCinema data={data} navigation={navigation} />
            <Text style={styles.movieSectionSoon}>Coming Soon</Text>
            <ComingSoon data={data} />
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
    fontWeight: 'bold',
    textAlign: 'left',
  },
  movieSectionSoon: {
    paddingTop: -30,
    marginBottom: 30,
    paddingLeft: 15,
    fontSize: 23,
    fontWeight: 'bold',
    textAlign: 'left',
  },
  movieSectionPremiere: {
    paddingTop: 40,
    paddingLeft: 15,
    marginBottom: 30,
    fontSize: 23,
    fontWeight: 'bold',
    textAlign: 'left',
  },
});

export default Home;
