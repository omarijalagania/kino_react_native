import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import Spinner from '../components/Spinner';
import axios from 'axios';

const MovieFullDesc = ({ navigation }) => {
  const [sessionData, setSessionData] = useState([]);
  const [loading, setLoading] = useState(false);

  //Api Request for sessions
  const apiCallPosters = async () => {
    try {
      setLoading(true);
      const result = await axios(
        `https://kinosakartvelo.ge/admin-panel/api/v1/sessions`
      );
      setSessionData(result.data.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    apiCallPosters();
  }, []);

  let item = navigation.getParam('item');

  //get right movie
  let getMovieID = sessionData.filter((item) => item.Movie_ID === item.movieID);
  return (
    <>
      {loading && <Spinner />}
      {!loading && (
        <>
          <View style={styles.container}>
            <Image
              style={styles.Image}
              source={{
                uri: `https://kinosakartvelo.ge/admin-panel/images/posters/${item.imgLandscape}`,
              }}
            />
          </View>
          <View>
            <Text style={styles.genreCont}>
              <Text style={styles.genre}>Genre : </Text>
              {item.Genre.map((genre) => genre + ', ')}
            </Text>
          </View>
        </>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  Image: {
    marginTop: -70,
    width: 400,
    height: 400,
    borderRadius: 5,
    resizeMode: 'contain',
  },
  genreCont: {
    marginTop: -80,
    paddingLeft: 10,
  },
  genre: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default MovieFullDesc;
