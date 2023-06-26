import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';
import {HomeScreenAdmin} from '../ui/screens/admin/home/HomeScreen';
import {CinemaForm} from '../ui/screens/admin/cinema/CinemaForm';
import {CinemaDetails} from '../ui/screens/admin/cinema/CinemaDetails';
import {CinemaHalls} from '../ui/screens/admin/halls/CinemaHalls';
import CinemaShowsHome from '../ui/screens/admin/shows/CinemaShowHome';
import {AdminProfile} from '../ui/screens/admin/profile/AdminProfile';
import {SignIn} from '../ui/screens/admin/login/SignIn';
import Registration from '../ui/screens/admin/login/Registration';
import ForgotPassword from '../ui/screens/admin/login/ForgotPassword';
import ResetPassword from '../ui/screens/admin/login/ResetPassword';
import ShowView from '../ui/screens/admin/shows/ShowView';
import {useDispatch} from 'react-redux';
import {completeUserId} from '../redux/slices/loginSlice';

const {Navigator, Screen} = createStackNavigator();

const HomeNavigator = ({initialScreen, userId}) => (
  <Navigator
    initialRouteName={initialScreen}
    screenOptions={{
      headerShown: false,
      cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
    }}>
    <Screen name="Login" component={SignIn} />
    <Screen name="Home" component={HomeScreenAdmin} />
    <Screen name="NewCinema" component={CinemaForm} />
    <Screen name="CinemaDetails" component={CinemaDetails} />
    <Screen name="CinemaHalls" component={CinemaHalls} />
    <Screen name="CinemaShows" component={CinemaShowsHome} />
    <Screen name="NewShow" component={ShowView} />
    <Screen name="AdminProfile" component={AdminProfile} />
    <Screen name="Registration" component={Registration} />
    <Screen name="ForgotPassword" component={ForgotPassword} />
    <Screen name="ResetPassword" component={ResetPassword} />
  </Navigator>
);

export const AppNavigator = ({initialScreen, userId}) => {
  const dispatch = useDispatch();
  if (userId) dispatch(completeUserId(userId));
  return (
    <NavigationContainer>
      <HomeNavigator initialScreen={initialScreen} userId={userId} />
    </NavigationContainer>
  );
};
