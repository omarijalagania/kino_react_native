import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Home from '../screens/Home';
import MovieFullDesc from '../components/MovieFullDesc';
const screens = {
  Home: {
    screen: Home,
  },
  MovieFullDesc: {
    screen: MovieFullDesc,
  },
};

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);
