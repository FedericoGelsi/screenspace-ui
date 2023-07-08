import React from 'react';
import ViewTopNavigationContainer from '../../components/ViewTopNavigationContainer';
import ShareContent from '../../components/ShareContent';
import UserGeolocation from '../../components/UserGeolocation';
import {Button} from 'react-native';
import { Layout, Text } from '@ui-kitten/components';
import AppFooter from '../../components/user/AppFooter';

const UserHome = ({navigation}) => {
  const navigateDetails = () => {
    navigation.push('MovieDetails');
  };

  return (
    <ViewTopNavigationContainer navigation={navigation} footer={<AppFooter />}>
      <Layout>
        <ShareContent />
        <UserGeolocation />
        <Button title="Details" onPress={navigateDetails} />
      </Layout>
    </ViewTopNavigationContainer>
  );
};

export default UserHome;
