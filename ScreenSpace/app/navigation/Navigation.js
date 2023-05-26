import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';
import { LoginScreen } from '../ui/screens/admin/login/LoginScreen';
import { HomeScreenAdmin } from '../ui/screens/admin/home/HomeScreen';
import { CinemaForm } from '../ui/screens/admin/cinema/CinemaForm';

const { Navigator, Screen } = createStackNavigator();

const HomeNavigator = () => (
  <Navigator screenOptions={{headerShown: false, cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS}} >
    <Screen name='Login' component={LoginScreen}/>
    <Screen name='Home' component={HomeScreenAdmin}/>
    <Screen name='NewCinema' component={CinemaForm}/>
  </Navigator>
);

export const AppNavigator = () => (
  <NavigationContainer>
    <HomeNavigator/>
  </NavigationContainer>
);