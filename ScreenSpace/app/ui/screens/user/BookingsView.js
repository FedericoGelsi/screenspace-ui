import React from 'react';
import {Text} from '@ui-kitten/components';
import ViewTopNavigationContainer from '../../components/ViewTopNavigationContainer';

const BookingsView = ({navigation}) => {
  return (
    <ViewTopNavigationContainer navigation={navigation}>
      <Text>Your Bookings</Text>
    </ViewTopNavigationContainer>
  );
};

export default BookingsView;
