import React from 'react';
import {ApplicationProvider, IconRegistry} from '@ui-kitten/components';
import {EvaIconsPack} from '@ui-kitten/eva-icons';
import * as eva from '@eva-design/eva';
import {store} from './redux/store';
import {Provider} from 'react-redux';
import {AppNavigator} from './navigation/Navigation';
import SplashScreen from 'react-native-splash-screen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from '../app/networking/api/Api';
import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';

GoogleSignin.configure({
    webClientId: "954758489890-k2vos57qjf8nk1hrqpaeee7us9p65l4u.apps.googleusercontent.com",
    offlineAccess: true
});

export const verifyToken = async token => {
  const results = await axios.post('/api/auths/verify-token', {
    token: token,
  });
  return results.data;
};


export default App = () => {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(true);
  const [userId, setUserId] = React.useState();

  React.useEffect(() => {
    checkLoginStatus();
  }, []);

  const checkLoginStatus = async () => {
    try {
      const value = await AsyncStorage.getItem('logged');
      const userId = await AsyncStorage.getItem('userId');
      if (value !== null) {
        const isValid = await verifyToken(value);
        if (isValid) {
          setUserId(parseInt(userId));
        }
        setIsLoggedIn(isValid);
      }
    } catch (e) {
      console.log('Error retrieving login status:', e);
    } finally {
      setIsLoading(false);
      SplashScreen.hide();
    }
  };

  if (isLoading) {
    return null;
  }

  return (
    <>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={eva.light}>
        <Provider store={store}>
          {isLoggedIn === false || isLoggedIn === 'false' ? (
            <AppNavigator initialScreen="InitialLogin" />
          ) : (
            <AppNavigator initialScreen="Home" userId={userId} />
          )}
        </Provider>
      </ApplicationProvider>
    </>
  );
};
