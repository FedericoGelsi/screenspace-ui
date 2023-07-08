import React from 'react';
import ViewTopNavigationContainer from '../../components/ViewTopNavigationContainer';
import I18n from '../../../assets/strings/I18n';
import TEXT_KEY from '../../../assets/strings/TextKey';

const BookingsView = ({navigation}) => {
  return (
    <ViewTopNavigationContainer
      navigation={navigation}
      accessoryLeft={<></>}
      headerTitle={I18n.t(TEXT_KEY.userBookings.sectionName)}>

    </ViewTopNavigationContainer>
  );
};

export default BookingsView;
