import React from 'react';
import {Button, Layout} from '@ui-kitten/components';
import ViewTopNavigationContainer from '../../../components/ViewTopNavigationContainer';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const LoginScreen = ({navigation}) => {
  const navigateDetails = () => {
    storeLoggedSession('true');
    navigation.push('Home');
  };

  const storeLoggedSession = async value => {
    try {
      await AsyncStorage.setItem('logged', value);
    } catch (e) {
      // saving error
    }
  };

  return (
    <ViewTopNavigationContainer variant="logo">
      <Layout
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          paddingHorizontal: 16,
        }}>
        <Button onPress={navigateDetails}>Click to Login</Button>
      </Layout>
    </ViewTopNavigationContainer>
  );
};
