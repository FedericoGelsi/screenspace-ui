import React from 'react';
import {ApplicationProvider, IconRegistry} from '@ui-kitten/components';
import {EvaIconsPack} from '@ui-kitten/eva-icons';
import * as eva from '@eva-design/eva';
import {store} from './redux/store';
import {Provider} from 'react-redux';
import {AppNavigator} from './navigation/Navigation';
import SplashScreen from 'react-native-splash-screen';

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
