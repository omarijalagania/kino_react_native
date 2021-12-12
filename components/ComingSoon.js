import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import Carousel from "react-native-snap-carousel";

const ComingSoon = ({ data, navigation }) => {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    //Coming soon Filter
    let filteredSoon = data.filter((item) => item.movieStatus === "soon");
    setEntries(filteredSoon);
  }, []);

  //Carousel Render Method
  const renderItem = ({ item, index }) => {
    return (
      <TouchableOpacity
        key={item.id}
        style={styles.slide}
        onPress={() => navigation.navigate("MovieFullDesc", { item: item })}
      >
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
        <View style={styles.movieStars}></View>
      </TouchableOpacity>
    );
  };

  return (
    <Carousel
      ref={(c) => {
        _carousel = c;
      }}
      data={entries}
      renderItem={renderItem}
      sliderWidth={300}
      itemWidth={300}
      inactiveSlideOpacity={1}
      useScrollView={true}
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

  movieIMDB: {
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default ComingSoon;
