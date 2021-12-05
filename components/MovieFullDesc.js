import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  ScrollView,
  Button,
  SafeAreaView,
  FlatList,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Spinner from "../components/Spinner";
import Calendar from "./Calendar";
import axios from "axios";

import moment from "moment";

const { width: screenWidth } = Dimensions.get("window");
const MovieFullDesc = ({ navigation }) => {
  const [sessionData, setSessionData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [startDate, setStartDate] = useState();
  const [activeBtn, setActiveBtn] = useState("");
  const [chosenTime, setChosenTime] = useState("");
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

  const activeBtnHandler = (index, time) => {
    setActiveBtn(index);
    setChosenTime(time);
  };

  useEffect(() => {
    apiCallPosters();
  }, []);

  let item = navigation.getParam("item");

  return (
    <>
      {loading && <Spinner />}
      {!loading && (
        <SafeAreaView>
          <ScrollView>
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
                {item.Genre.map((genre) => genre + ", ")}
              </Text>
            </View>
            <View>
              <View style={styles.imdbCont}>
                <Text style={styles.genre}>
                  {item.GEO.title.slice(0, 15)}...
                </Text>
                <Text style={styles.imdb}>
                  <Ionicons name="play" size={32} color="orange" /> {item.IMDB}{" "}
                  IMDB
                </Text>
              </View>
              <Text style={styles.description}>{item.GEO.description}</Text>
            </View>

            <Calendar startDate={startDate} setStartDate={setStartDate} />

            <View>
              <View
                style={{
                  display: "flex",

                  flexDirection: "row",
                  justifyContent: "space-between",
                  marginVertical: 20,
                }}
              >
                {sessionData.map((session, index) => {
                  if (
                    session.Date ===
                    moment(startDate).utc().format("DD.MM.YYYY")
                  ) {
                    return (
                      <SafeAreaView
                        style={styles.btnContainer}
                        key={session.Sessions_ID}
                      >
                        <Button
                          onPress={activeBtnHandler.bind(
                            null,
                            index,
                            session.Time
                          )}
                          color={activeBtn === index ? "red" : null}
                          title={session.Time}
                        />
                      </SafeAreaView>
                    );
                  }
                })}
              </View>
              <Text>არჩეული დრო: {chosenTime}</Text>
            </View>
          </ScrollView>
        </SafeAreaView>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  Image: {
    marginTop: -70,
    width: 400,
    height: 350,

    borderRadius: 5,
    resizeMode: "contain",
  },
  genreCont: {
    paddingLeft: 10,
  },
  genre: {
    fontSize: 21,
    fontWeight: "bold",
    paddingLeft: 10,
  },
  imdbCont: {
    marginTop: 10,
    width: screenWidth,
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },

  imdb: {
    fontSize: 21,
    alignItems: "center",
    justifyContent: "center",
    paddingRight: 10,
  },
  description: {
    textAlign: "center",
    paddingHorizontal: 20,
    marginTop: 15,
    fontSize: 15,
  },
  btnContainer: {
    padding: 5,
  },
  btnActive: {
    backgroundColor: "red",
  },
});

MovieFullDesc.navigationOptions = ({ navigation }) => {
  let item = navigation.getParam("item");
  return {
    headerTitle: item.GEO.title,
  };
};

export default MovieFullDesc;
