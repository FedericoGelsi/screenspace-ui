import React from 'react';
import {Button, Layout} from '@ui-kitten/components';
import ViewTopNavigationContainer from '../../../components/ViewTopNavigationContainer';

export const LoginScreen = ({navigation}) => {
  const navigateDetails = () => {
    navigation.push('Home');
  };

  return (
    <ViewTopNavigationContainer variant='logo'>
      <Layout style={{flex:1, justifyContent: "center", alignItems:"center", paddingHorizontal:16}}>
        <Button onPress={navigateDetails}>Click to Login</Button>
      </Layout>
    </ViewTopNavigationContainer>
  );
};
