import React from 'react';
import ViewTopNavigationContainer from '../../components/ViewTopNavigationContainer';
import {Text} from '@ui-kitten/components';
import ShareContent from '../../components/ShareContent';
import UserGeolocation from '../../components/UserGeolocation';
import {Button} from 'react-native';

const UserHome = ({navigation}) => {
  const navigateDetails = () => {
    navigation.push('MovieDetails');
  };

  return (
    <ViewTopNavigationContainer navigation={navigation}>
      <Text>USER HOME</Text>
      <ShareContent />
      <UserGeolocation />
      <Button title="Details" onPress={navigateDetails} />
    </ViewTopNavigationContainer>
  );
};

export default UserHome;
