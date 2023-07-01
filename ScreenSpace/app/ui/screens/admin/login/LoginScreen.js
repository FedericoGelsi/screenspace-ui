import React from 'react';
import {Button, Icon, Layout, TopNavigationAction} from '@ui-kitten/components';
import ViewTopNavigationContainer from '../../../components/ViewTopNavigationContainer';

export const LoginScreen = ({navigation}) => {
  const navigateDetails = () => {
    navigation.push('Home');
  };

  const CancelLogin = () => {
    navigation.goBack();
  };

  const CancelLoginAction = () => (
    <TopNavigationAction icon={<Icon name="close" />} onPress={CancelLogin} />
  );

  return (
    <ViewTopNavigationContainer
      variant="logo"
      accessoryRight={CancelLoginAction}>
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
