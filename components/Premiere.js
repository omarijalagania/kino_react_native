import React, { useRef, useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
  Platform,
} from 'react-native';
import Carousel, { ParallaxImage } from 'react-native-snap-carousel';
const { width: screenWidth } = Dimensions.get('window');

const Premiere = ({ data }) => {
  const [entries, setEntries] = useState([]);
  const carouselRef = useRef(null);

  const goForward = () => {
    carouselRef.current.snapToNext();
  };
  useEffect(() => {
    setEntries(data);
  }, []);

  const renderItem = ({ item, index }, parallaxProps) => {
    return (
      <View style={styles.item}>
        <ParallaxImage
          source={{
            uri: `https://kinosakartvelo.ge/admin-panel/images/posters/${item.imgLandscape}`,
          }}
          containerStyle={styles.imageContainer}
          style={styles.image}
          parallaxFactor={0.4}
          {...parallaxProps}
        />
        <Text style={styles.title} numberOfLines={2}>
          {item.GEO.title}
        </Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Carousel
        ref={carouselRef}
        sliderWidth={screenWidth}
        sliderHeight={screenWidth}
        itemWidth={screenWidth - 60}
        data={entries}
        autoplay={true}
        loop={true}
        fadeDuration={800}
        renderItem={renderItem}
        hasParallaxImages={true}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  comingSoon: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
  item: {
    width: screenWidth - 60,
    height: screenWidth - 100,
  },
  imageContainer: {
    flex: 1,
    marginBottom: Platform.select({ ios: 0, android: 1 }), // Prevent a random Android rendering issue
    backgroundColor: 'white',
    borderRadius: 8,
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: 'cover',
  },
  title: {
    marginTop: 10,
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Premiere;
