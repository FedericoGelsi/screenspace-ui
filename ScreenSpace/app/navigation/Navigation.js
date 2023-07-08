import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';
import { LoginScreen } from '../ui/screens/admin/login/LoginScreen';
import { HomeScreenAdmin } from '../ui/screens/admin/home/HomeScreen';
import { CinemaForm } from '../ui/screens/admin/cinema/CinemaForm';
import { CinemaDetails } from '../ui/screens/admin/cinema/CinemaDetails';
import { CinemaHalls } from '../ui/screens/admin/halls/CinemaHalls';
import CinemaShowsHome from '../ui/screens/admin/shows/CinemaShowHome';
import NewShowView from '../ui/screens/admin/shows/NewShowView';
import InitialLoginScreen from '../ui/screens/InitialLoginScreen';
import UserHome from '../ui/screens/user/UserHome';
import UserLogin from '../ui/screens/user/UserLogin';

const { Navigator, Screen } = createStackNavigator();

const HomeNavigator = () => (
  <Navigator screenOptions={{headerShown: false, cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS}} >
    <Screen name='InitialLogin' component={InitialLoginScreen}/>
    <Screen name='AdminLogin' component={LoginScreen}/>
    <Screen name='UserLogin' component={UserLogin}/>
    <Screen name='Home' component={HomeScreenAdmin}/>
    <Screen name='NewCinema' component={CinemaForm}/>
    <Screen name='CinemaDetails' component={CinemaDetails}/>
    <Screen name='CinemaHalls' component={CinemaHalls}/>
    <Screen name='CinemaShows' component={CinemaShowsHome}/>
    <Screen name='NewShow' component={NewShowView}/>
    <Screen name="UserHome" component={UserHome}/>
  </Navigator>
);

export const AppNavigator = () => (
  <NavigationContainer>
    <HomeNavigator/>
  </NavigationContainer>
);