import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import StarRating from 'react-native-star-rating';

const NowInCinema = ({ data, navigation }) => {
  const [starCount, setStarCount] = useState(0);

  // Star Rating Function
  const onStarRatingPress = (rating) => {
    setStarCount(rating);
  };

  //Carousel Render Method
  const renderItem = ({ item, index }) => {
    return (
      <TouchableOpacity
        key={item.id}
        style={styles.slide}
        onPress={() => navigation.navigate('MovieFullDesc', { item: item })}>
        <Image
          style={styles.backgroundImage}
          source={{
            uri: `https://kinosakartvelo.ge/admin-panel/images/posters/${item.imgLandscape}`,
          }}
        />
        <View style={styles.movieRating}>
          <Text style={styles.movieTitle}>
            {item.GEO.title.slice(0, 15)}...
          </Text>
          <Text style={styles.movieIMDB}> IMDB: {item.IMDB}</Text>
        </View>
        <View style={styles.movieStars}>
          <StarRating
            disabled={false}
            maxStars={5}
            rating={starCount}
            fullStarColor={'orange'}
            starSize={20}
            selectedStar={(rating) => onStarRatingPress(rating)}
          />
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <Carousel
      ref={(c) => {
        _carousel = c;
      }}
      data={data}
      renderItem={renderItem}
      sliderWidth={870}
      itemWidth={300}
      inactiveSlideOpacity={1}
      loop={true}
    />
  );
};

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    paddingTop: 20,
    paddingLeft: 15,
  },
  backgroundImage: {
    width: 300,
    height: 200,
    borderRadius: 10,
  },

  movieTitle: {
    marginTop: 7,
    fontSize: 18,
  },
  movieRating: {
    width: 300,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  movieIMDB: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  movieStars: {
    width: 150,
    fontSize: 15,
    marginTop: 15,
    marginHorizontal: 10,
  },
});

export default NowInCinema;
