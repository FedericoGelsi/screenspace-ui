import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';
import {LoginScreen} from '../ui/screens/admin/login/LoginScreen';
import {HomeScreenAdmin} from '../ui/screens/admin/home/HomeScreen';
import {CinemaForm} from '../ui/screens/admin/cinema/CinemaForm';
import {CinemaDetails} from '../ui/screens/admin/cinema/CinemaDetails';
import {CinemaHalls} from '../ui/screens/admin/halls/CinemaHalls';
import CinemaShowsHome from '../ui/screens/admin/shows/CinemaShowHome';
import NewShowView from '../ui/screens/admin/shows/NewShowView';
import {AdminProfile} from '../ui/screens/admin/profile/AdminProfile';

const {Navigator, Screen} = createStackNavigator();

const HomeNavigator = () => (
  <Navigator
    screenOptions={{
      headerShown: false,
      cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
    }}>
    <Screen name="Login" component={LoginScreen} />
    <Screen name="Home" component={HomeScreenAdmin} />
    <Screen name="NewCinema" component={CinemaForm} />
    <Screen name="CinemaDetails" component={CinemaDetails} />
    <Screen name="CinemaHalls" component={CinemaHalls} />
    <Screen name="CinemaShows" component={CinemaShowsHome} />
    <Screen name="NewShow" component={NewShowView} />
    <Screen name="AdminProfile" component={AdminProfile} />
  </Navigator>
);

export const AppNavigator = () => (
  <NavigationContainer>
    <HomeNavigator />
  </NavigationContainer>
);
