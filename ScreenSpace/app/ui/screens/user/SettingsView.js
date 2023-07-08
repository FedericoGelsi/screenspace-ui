import React from 'react';
import {Text} from '@ui-kitten/components';
import ViewTopNavigationContainer from '../../components/ViewTopNavigationContainer';

const SettingsView = ({navigation}) => {
  return (
    <ViewTopNavigationContainer navigation={navigation}>
      <Text>Settings</Text>
    </ViewTopNavigationContainer>
  );
};

export default SettingsView;
