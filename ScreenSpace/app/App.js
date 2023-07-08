import React from 'react';
import {ApplicationProvider, IconRegistry} from '@ui-kitten/components';
import {EvaIconsPack} from '@ui-kitten/eva-icons';
import * as eva from '@eva-design/eva';
import {store} from './redux/store';
import {Provider} from 'react-redux';
import {AppNavigator} from './navigation/Navigation';
import SplashScreen from 'react-native-splash-screen';
import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';

GoogleSignin.configure({
    webClientId: "954758489890-k2vos57qjf8nk1hrqpaeee7us9p65l4u.apps.googleusercontent.com",
    offlineAccess: true
});

export default App = () => {
  React.useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={eva.light}>
        <Provider store={store}>
          <AppNavigator />
        </Provider>
      </ApplicationProvider>
    </>
  );
};
