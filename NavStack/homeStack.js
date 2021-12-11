import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Home from "../screens/Home";
import MovieFullDesc from "../components/MovieFullDesc";
import Hall from "../components/Hall";
const screens = {
  Home: {
    screen: Home,
  },
  Hall: {
    screen: Hall,
  },
  MovieFullDesc: {
    screen: MovieFullDesc,
  },
};

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);
