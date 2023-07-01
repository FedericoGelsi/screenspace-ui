import React from 'react';
import ViewTopNavigationContainer from '../../components/ViewTopNavigationContainer';
import { Text } from '@ui-kitten/components';

const UserHome = ({navigation}) => {
  return (
    <ViewTopNavigationContainer navigation={navigation}>
      <Text>USER HOME</Text>
    </ViewTopNavigationContainer>
  );
};

export default UserHome;
