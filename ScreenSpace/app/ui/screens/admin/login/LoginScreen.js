import React from 'react';
import {SafeAreaView} from 'react-native';
import {Button, Divider, Layout} from '@ui-kitten/components';
import {TopNavigationScreenSpace} from '../../../components/TopNavigation';

export const LoginScreen = ({navigation}) => {
  const navigateDetails = () => {
    navigation.push('Home');
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <TopNavigationScreenSpace />
      <Divider />
      <Layout style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Button onPress={navigateDetails}>Click to Login</Button>
      </Layout>
    </SafeAreaView>
  );
};
