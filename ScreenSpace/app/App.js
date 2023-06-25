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

export const verifyToken = async token => {
  const results = await axios.post('/api/auths/verify-token', {
    token: token,
  });
  return results.data;
};

export default App = () => {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    checkLoginStatus();
  }, []);

  const checkLoginStatus = async () => {
    try {
      const value = await AsyncStorage.getItem('logged');
      if (value !== null) {
        const isValid = await verifyToken(value);
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
      {console.log('Rendering:', isLoggedIn)}
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={eva.light}>
        <Provider store={store}>
          {isLoggedIn === false || isLoggedIn === 'false' ? (
            <AppNavigator initialScreen="Login" />
          ) : (
            <AppNavigator initialScreen="Home" />
          )}
        </Provider>
      </ApplicationProvider>
    </>
  );
};
